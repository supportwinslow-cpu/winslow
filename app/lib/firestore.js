import {
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    getDocs,
} from "firebase/firestore";

import { db } from "./firebase";


// =========================
// GET USER ROLE
// =========================

export const getUserRole = async (uid) => {
    try {
        if (!uid) return null;

        const userRef = doc(db, "users", uid);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return userSnap.data().role || "customer";
        }

        return null;
    } catch (error) {
        console.log("GET USER ROLE ERROR:", error);
        return null;
    }
};


// =========================
// SAVE USER
// =========================

export const saveUserToDB = async (user) => {
    try {
        if (!user) return;

        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                uid: user.uid,

                name: user.displayName || "",

                email: user.email || "",

                phone: user.phoneNumber || "",

                image: user.photoURL || "",

                role: "customer",

                createdAt: serverTimestamp(),
            });

            console.log("User Saved");
        }
    } catch (error) {
        console.log("SAVE USER ERROR:", error);
    }
};


// =========================
// SAVE ORDER
// =========================

export const saveOrderToDB = async ({
    user,
    cartItems,
    checkoutDetails,
    total,
    paymentInfo = null,
    paymentMethod = "Razorpay",
    paymentStatus = "Paid",
}) => {
    try {
        if (!user) {
            throw new Error("User not found");
        }

        const ordersRef = collection(db, "orders");

        const orderData = {
            // USER
            userId: user.uid,

            customerName: checkoutDetails?.name || "",
            customerEmail: checkoutDetails?.email || "",
            phone: checkoutDetails?.phone || "",

            // SHIPPING
            address: checkoutDetails?.address || "",
            city: checkoutDetails?.city || "",
            state: checkoutDetails?.state || "",
            pincode: checkoutDetails?.pincode || "",

            // PRODUCTS
            items: cartItems || [],

            total: total || 0,

            totalItems: cartItems?.reduce(
                (sum, item) => sum + Number(item.quantity || 1),
                0
            ) || 0,

            // ORDER STATUS
            orderStatus: "Pending",

            // PAYMENT
            paymentMethod,
            paymentStatus,

            paymentInfo: paymentInfo
                ? {
                    razorpayOrderId: paymentInfo.razorpayOrderId || "",
                    razorpayPaymentId: paymentInfo.razorpayPaymentId || "",
                    razorpaySignature: paymentInfo.razorpaySignature || "",
                }
                : null,

            createdAt: serverTimestamp(),
        };

        const docRef = await addDoc(ordersRef, orderData);

        return docRef.id;
    } catch (error) {
        console.log("SAVE ORDER ERROR:", error);
        return null;
    }
};


// =========================
// GET USER ORDERS
// =========================

export const getUserOrders = async (userId) => {
    try {
        if (!userId) return [];

        const ordersRef = collection(db, "orders");

        const q = query(
            ordersRef,
            where("userId", "==", userId)
        );

        const querySnapshot = await getDocs(q);

        const orders = [];

        querySnapshot.forEach((doc) => {
            orders.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return orders;
    } catch (error) {
        console.log("GET USER ORDERS ERROR:", error);
        return [];
    }
};
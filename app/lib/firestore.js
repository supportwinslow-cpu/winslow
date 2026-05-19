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

export const getUserRole =
    async (uid) => {

        try {

            const userRef = doc(
                db,
                "users",
                uid
            );

            const userSnap =
                await getDoc(userRef);

            if (userSnap.exists()) {

                return userSnap.data().role;
            }

            return null;

        } catch (error) {

            console.log(error);

            return null;
        }
    };

// =========================
// SAVE USER
// =========================

export const saveUserToDB = async (user) => {

    try {

        if (!user) return;

        const userRef = doc(
            db,
            "users",
            user.uid
        );

        const userSnap =
            await getDoc(userRef);

        if (!userSnap.exists()) {

            await setDoc(userRef, {

                uid: user.uid,

                name:
                    user.displayName || "",

                email:
                    user.email || "",

                phone:
                    user.phoneNumber || "",

                image:
                    user.photoURL || "",

                role: "customer",

                createdAt:
                    serverTimestamp(),
            });

            console.log(
                "User Saved"
            );
        }

    } catch (error) {

        console.log(error);

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
    paymentInfo,
}) => {
    try {
        const ordersRef = collection(db, "orders");

        const orderData = {
            // USER
            userId: user.uid,

            customerName: checkoutDetails.name,
            customerEmail: checkoutDetails.email,
            phone: checkoutDetails.phone,

            // SHIPPING
            address: checkoutDetails.address,
            city: checkoutDetails.city,
            state: checkoutDetails.state,
            pincode: checkoutDetails.pincode,

            // PRODUCTS
            items: cartItems,

            total,

            totalItems: cartItems.length,

            // ORDER STATUS
            orderStatus: "Pending",

            // PAYMENT
            paymentMethod: "Razorpay",

            paymentStatus: "Paid",

            paymentInfo: {
                razorpayOrderId:
                    paymentInfo.razorpayOrderId,

                razorpayPaymentId:
                    paymentInfo.razorpayPaymentId,

                razorpaySignature:
                    paymentInfo.razorpaySignature,
            },

            createdAt: serverTimestamp(),
        };

        const docRef = await addDoc(
            ordersRef,
            orderData
        );

        return docRef.id;

    } catch (error) {

        console.log(
            "SAVE ORDER ERROR:",
            error
        );

        return null;
    }
};


// =========================
// GET USER ORDERS
// =========================

export const getUserOrders =
    async (userId) => {

        try {

            const ordersRef =
                collection(
                    db,
                    "orders"
                );

            const q = query(
                ordersRef,
                where(
                    "userId",
                    "==",
                    userId
                )
            );

            const querySnapshot =
                await getDocs(q);

            const orders = [];

            querySnapshot.forEach(
                (doc) => {

                    orders.push({
                        id: doc.id,
                        ...doc.data(),
                    });

                }
            );

            return orders;

        } catch (error) {

            console.log(error);

            return [];
        }
    };
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import { saveOrderToDB } from "@/app/lib/firestore";

import ProtectedRoute from "@/components/ProtectedRoute";

import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Loader2,
  CreditCard,
  Banknote,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { user } = useAuth();

  const {
    cartItems,
    discount,
    couponCode,
    checkoutDetails,
    setCheckoutDetails,
    clearCart,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const finalTotal = subtotal - discount;

  const billingFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      autoComplete: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      autoComplete: "tel",
    },
    {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "Enter your city",
      autoComplete: "address-level2",
    },
    {
      name: "state",
      label: "State",
      type: "text",
      placeholder: "Enter your state",
      autoComplete: "address-level1",
    },
    {
      name: "pincode",
      label: "Pincode",
      type: "text",
      placeholder: "Enter your pincode",
      autoComplete: "postal-code",
    },
  ];

  const handleChange = (e) => {
    setCheckoutDetails({
      ...checkoutDetails,
      [e.target.name]: e.target.value,
    });
  };

  const getFieldValue = (fieldName) => {
    if (checkoutDetails[fieldName]) {
      return checkoutDetails[fieldName];
    }

    if (fieldName === "name") {
      return user?.displayName || "";
    }

    if (fieldName === "email") {
      return user?.email || "";
    }

    return "";
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrder = async () => {
    const finalCheckoutDetails = {
      ...checkoutDetails,
      name: checkoutDetails.name || user?.displayName || "",
      email: checkoutDetails.email || user?.email || "",
    };

    if (
      !finalCheckoutDetails.name ||
      !finalCheckoutDetails.email ||
      !finalCheckoutDetails.phone ||
      !finalCheckoutDetails.address ||
      !finalCheckoutDetails.city ||
      !finalCheckoutDetails.state ||
      !finalCheckoutDetails.pincode
    ) {
      return alert("Please fill all checkout details");
    }

    try {
      setLoading(true);

      if (paymentMethod === "cod") {
        const orderId = await saveOrderToDB({
          user,
          cartItems,
          checkoutDetails: finalCheckoutDetails,
          total: finalTotal,
          paymentInfo: null,
          paymentMethod: "COD",
          paymentStatus: "Pending",
        });

        if (!orderId) {
          alert("Order save failed");
          return;
        }

        clearCart();
        router.push(`/order-success?orderId=${orderId}`);
        return;
      }

      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        alert("Razorpay SDK failed to load");
        return;
      }

      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: finalTotal,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Razorpay order create failed");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Winslow",
        description: "Order Payment",
        order_id: data.order.id,

        prefill: {
          name: finalCheckoutDetails.name,
          email: finalCheckoutDetails.email,
          contact: finalCheckoutDetails.phone,
        },

        theme: {
          color: "#2F2FE4",
        },

        handler: async function (response) {
          const verifyRes = await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (!verifyData.success) {
            alert("Payment verification failed");
            return;
          }

          const orderId = await saveOrderToDB({
            user,
            cartItems,
            checkoutDetails: finalCheckoutDetails,
            total: finalTotal,
            paymentInfo: {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            },
            paymentMethod: "Razorpay",
            paymentStatus: "Paid",
          });

          if (!orderId) {
            alert("Order save failed");
            return;
          }

          clearCart();
          router.push(`/order-success?orderId=${orderId}`);
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
          <div className="bg-white p-10 rounded-3xl shadow-lg text-center max-w-md w-full">
            <h1 className="text-3xl font-bold mb-4 text-black">
              Your Cart is Empty
            </h1>

            <p className="text-black mb-6">Add products before checkout</p>

            <button
              onClick={() => router.push("/shop")}
              className="bg-[#2F2FE4] text-white px-6 py-3 rounded-full"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="bg-neutral-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Secure Checkout
            </h1>

            <p className="text-neutral-500 mt-2">
              Complete your order safely
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-neutral-100 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-black mb-6">
                  Account Information
                </h2>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#2F2FE4] text-white flex items-center justify-center text-xl font-bold">
                    {user?.displayName?.charAt(0) || "U"}
                  </div>

                  <div>
                    <h3 className="font-semibold text-black text-lg">
                      {user?.displayName || "User"}
                    </h3>

                    <p className="text-black text-sm">{user?.email}</p>
                  </div>
                </div>
              </div>

              {/* Billing Details */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6 text-black">
                  Billing Details
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {billingFields.map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-semibold text-black"
                      >
                        {field.label}{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={getFieldValue(field.name)}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        autoComplete={field.autoComplete}
                        inputMode={
                          field.name === "phone" || field.name === "pincode"
                            ? "numeric"
                            : undefined
                        }
                        className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 outline-none transition focus:border-[#2F2FE4] focus:ring-2 focus:ring-[#2F2FE4]/15"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-black"
                  >
                    Full Address <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    value={checkoutDetails.address || ""}
                    onChange={handleChange}
                    placeholder="House no, street, area, landmark"
                    rows="4"
                    autoComplete="street-address"
                    className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 outline-none transition focus:border-[#2F2FE4] focus:ring-2 focus:ring-[#2F2FE4]/15"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-neutral-100 flex flex-col items-center text-center">
                  <ShieldCheck size={30} className="text-[#2F2FE4]" />
                  <h3 className="font-semibold mt-3 text-black">
                    Secure Payment
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    Razorpay protected checkout
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-neutral-100 flex flex-col items-center text-center">
                  <Truck size={30} className="text-[#2F2FE4]" />
                  <h3 className="font-semibold mt-3 text-black">
                    Fast Delivery
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    Quick shipping available
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-neutral-100 flex flex-col items-center text-center">
                  <BadgeCheck size={30} className="text-[#2F2FE4]" />
                  <h3 className="font-semibold mt-3 text-black">
                    Genuine Products
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    Premium quality accessories
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-100 rounded-2xl p-6 h-fit sticky top-28">
              <h2 className="text-xl font-bold mb-6 text-black">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 text-black">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start gap-4"
                  >
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-black">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <span
                      className={`font-semibold ${item.price === 0 ? "text-green-600" : "text-black"
                        }`}
                    >
                      {item.price === 0
                        ? "FREE"
                        : `₹${item.price * item.quantity}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-5 text-sm">
                <div className="flex justify-between">
                  <span className="text-black">Subtotal</span>
                  <span className="text-black">₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount {couponCode && `(${couponCode})`}</span>
                  <span>- ₹{discount}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-black">Shipping</span>
                  <span className="text-black">Free</span>
                </div>

                <div className="flex justify-between border-t pt-4 text-lg font-bold">
                  <span className="text-black">Total</span>
                  <span className="text-black">₹{finalTotal}</span>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-[#2F2FE4]/15 bg-[#F7F8FF] p-4">
                <p className="mb-3 text-sm font-black uppercase text-black">
                  Select Payment Method
                </p>

                <div className="grid gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("razorpay")}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${paymentMethod === "razorpay"
                        ? "border-[#2F2FE4] bg-[#2F2FE4] text-white"
                        : "border-gray-200 bg-white text-black"
                      }`}
                  >
                    <CreditCard size={18} className="inline mr-2" />
                    Pay Online
                    <span className="block text-xs font-semibold opacity-80">
                      Razorpay Secure Payment
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${paymentMethod === "cod"
                        ? "border-[#2F2FE4] bg-[#2F2FE4] text-white"
                        : "border-gray-200 bg-white text-black"
                      }`}
                  >
                    <Banknote size={18} className="inline mr-2" />
                    Cash on Delivery
                    <span className="block text-xs font-semibold opacity-80">
                      Pay when product arrives
                    </span>
                  </button>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full mt-6 bg-[#2F2FE4] text-white py-4 rounded-full hover:bg-[#2424c9] transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Processing...
                  </>
                ) : paymentMethod === "cod" ? (
                  "Place COD Order"
                ) : (
                  "Pay Securely Now"
                )}
              </button>

              <p className="text-xs text-neutral-500 text-center mt-4">
                Secure checkout • Free delivery available
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
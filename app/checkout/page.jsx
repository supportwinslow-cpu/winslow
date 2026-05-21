"use client";

import { useCallback, useEffect, useState } from "react";
import { fbqEvent } from "@/app/lib/metaPixel";
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
  Sparkles,
  User,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  ShoppingBag,
  ArrowRight,
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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const finalTotal = subtotal - discount;

  const getMetaCartData = useCallback(() => {
    return {
      content_ids: cartItems.map((item) => item.id || item.slug || item.name),
      content_type: "product",
      contents: cartItems.map((item) => ({
        id: item.id || item.slug || item.name,
        quantity: Number(item.quantity || 1),
        item_price: Number(item.price),
      })),
      num_items: cartItems.reduce(
        (total, item) => total + Number(item.quantity || 1),
        0
      ),
      value: Number(finalTotal),
      currency: "INR",
    };
  }, [cartItems, finalTotal]);

  useEffect(() => {
    if (!cartItems || cartItems.length === 0 || finalTotal <= 0) return;
    if (typeof window === "undefined") return;

    const checkoutKey = `initiate_checkout_${cartItems
      .map((item) => item.id || item.slug || item.name)
      .join("_")}_${finalTotal}`;

    if (sessionStorage.getItem(checkoutKey)) return;

    fbqEvent("InitiateCheckout", getMetaCartData());

    sessionStorage.setItem(checkoutKey, "true");
  }, [cartItems, finalTotal, getMetaCartData]);

  const handleChange = (e) => {
    setCheckoutDetails({
      ...checkoutDetails,
      [e.target.name]: e.target.value,
    });
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
      alert("Please fill all checkout details");
      return;
    }

    fbqEvent("AddPaymentInfo", {
      ...getMetaCartData(),
      payment_method: "Razorpay",
    });

    try {
      setLoading(true);

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
        description: "Prepaid Order Payment",
        order_id: data.order.id,

        prefill: {
          name: finalCheckoutDetails.name,
          email: finalCheckoutDetails.email,
          contact: finalCheckoutDetails.phone,
        },

        notes: {
          address: finalCheckoutDetails.address,
        },

        theme: {
          color: "#2F2FE4",
        },

        handler: async function (response) {
          try {
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
            });

            if (!orderId) {
              alert("Order save failed");
              return;
            }

            const purchaseKey = `purchase_${orderId}`;

            if (typeof window !== "undefined" && !localStorage.getItem(purchaseKey)) {
              fbqEvent("Purchase", {
                ...getMetaCartData(),
                order_id: orderId,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
              });

              localStorage.setItem(purchaseKey, "true");
            }

            clearCart();
            router.push(`/order-success?orderId=${orderId}`);
          } catch (error) {
            console.log(error);
            alert("Payment verification error");
          }
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
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_48%,#ffffff_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.14)]">
            <div className="rounded-4xl bg-[#F7F8FF] p-10">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#2F2FE4] text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)]">
                <ShoppingBag size={34} />
              </div>

              <h1 className="text-3xl font-black uppercase text-[#111827]">
                Your Cart is Empty
              </h1>

              <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-7 text-gray-500">
                Add products before checkout and complete your prepaid order
                safely.
              </p>

              <button
                onClick={() => router.push("/shop")}
                className="group mt-7 inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9]"
              >
                Continue Shopping
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </main>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_48%,#ffffff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

        {/* Blue Glows */}
        <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
        <div className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
                <Sparkles size={15} />
              </span>

              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#2F2FE4]">
                Secure Checkout
              </span>
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tight text-[#111827] sm:text-5xl">
              Secure
              <span className="ml-2 text-[#2F2FE4]">Checkout</span>
            </h1>

            <p className="mt-2 text-sm font-medium text-gray-500">
              Complete your prepaid order safely with Razorpay protected
              checkout.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
            {/* LEFT */}
            <div className="space-y-6">
              {/* Account Info */}
              <section className="overflow-hidden rounded-[2.3rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_24px_75px_rgba(47,47,228,0.12)]">
                <div className="relative rounded-[1.9rem] bg-white p-6">
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#2F2FE4]/10 blur-3xl" />

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2F2FE4] text-2xl font-black uppercase text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)]">
                      {user?.displayName?.charAt(0) ||
                        user?.email?.charAt(0) ||
                        "U"}
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                        Account Information
                      </p>

                      <h2 className="text-2xl font-black uppercase tracking-tight text-[#111827]">
                        {user?.displayName || "User"}
                      </h2>

                      <p className="mt-1 break-all text-sm font-medium text-gray-500">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Billing Details */}
              <section className="overflow-hidden rounded-[2.3rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_24px_75px_rgba(47,47,228,0.12)]">
                <div className="rounded-[1.9rem] bg-white p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_16px_38px_rgba(47,47,228,0.25)]">
                      <MapPin size={22} />
                    </span>

                    <div>
                      <h2 className="text-2xl font-black uppercase tracking-tight text-[#111827]">
                        Billing Details
                      </h2>
                      <p className="text-xs font-semibold text-gray-500">
                        Fill delivery and contact details
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      { name: "name", placeholder: "Full Name", icon: User },
                      { name: "email", placeholder: "Email Address", icon: Mail },
                      { name: "phone", placeholder: "Phone Number", icon: Phone },
                      { name: "city", placeholder: "City", icon: MapPin },
                      { name: "state", placeholder: "State", icon: MapPin },
                      { name: "pincode", placeholder: "Pincode", icon: MapPin },
                    ].map((field) => {
                      const Icon = field.icon;

                      return (
                        <div key={field.name} className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2F2FE4]">
                            <Icon size={17} />
                          </span>

                          <input
                            name={field.name}
                            value={
                              checkoutDetails[field.name] ||
                              (field.name === "name"
                                ? user?.displayName || ""
                                : field.name === "email"
                                  ? user?.email || ""
                                  : "")
                            }
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full rounded-2xl border border-[#2F2FE4]/15 bg-[#F7F8FF] px-11 py-3.5 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-gray-400 focus:border-[#2F2FE4]/60 focus:bg-white focus:ring-4 focus:ring-[#2F2FE4]/10"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="relative mt-4">
                    <span className="absolute left-4 top-4 text-[#2F2FE4]">
                      <MapPin size={17} />
                    </span>

                    <textarea
                      name="address"
                      value={checkoutDetails.address || ""}
                      onChange={handleChange}
                      placeholder="Full Address"
                      rows="4"
                      className="w-full resize-none rounded-2xl border border-[#2F2FE4]/15 bg-[#F7F8FF] px-11 py-3.5 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-gray-400 focus:border-[#2F2FE4]/60 focus:bg-white focus:ring-4 focus:ring-[#2F2FE4]/10"
                    />
                  </div>
                </div>
              </section>

              {/* Trust Cards */}
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Secure Payment",
                    desc: "Razorpay protected checkout",
                  },
                  {
                    icon: Truck,
                    title: "Fast Delivery",
                    desc: "Quick shipping available",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Genuine Products",
                    desc: "Premium quality accessories",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-4xl border border-[#2F2FE4]/10 bg-white p-5 text-center shadow-[0_18px_55px_rgba(47,47,228,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4]/35"
                    >
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F2FE4]/8 text-[#2F2FE4] transition group-hover:bg-[#2F2FE4] group-hover:text-white">
                        <Icon size={26} />
                      </div>

                      <h3 className="font-black uppercase tracking-tight text-[#111827]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-medium leading-5 text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <aside className="h-fit overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.14)] lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-4xl bg-white p-6">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F2FE4]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)]">
                      <CreditCard size={25} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-black uppercase text-[#111827]">
                        Order Summary
                      </h2>
                      <p className="text-xs font-semibold text-gray-500">
                        Final review before payment
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mb-5 max-h-70 space-y-3 overflow-y-auto pr-1">
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-4"
                      >
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-tight text-[#111827]">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-xs font-semibold text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <span className="shrink-0 text-sm font-black text-[#2F2FE4]">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="space-y-3 rounded-3xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-5">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-[#111827]">₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">
                        Discount {couponCode && `(${couponCode})`}
                      </span>
                      <span className="text-green-600">- ₹{discount}</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="my-5 flex items-center justify-between rounded-3xl bg-[#2F2FE4] px-5 py-5 text-white shadow-[0_18px_45px_rgba(47,47,228,0.25)]">
                    <span className="text-sm font-black uppercase tracking-wide">
                      Total
                    </span>

                    <span className="text-3xl font-black">₹{finalTotal}</span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className="group flex w-full items-center justify-center rounded-full bg-[#2F2FE4] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9] hover:shadow-[0_24px_60px_rgba(47,47,228,0.38)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Pay & Place Order
                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs font-semibold leading-5 text-gray-500">
                    Secure prepaid checkout powered by Razorpay
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
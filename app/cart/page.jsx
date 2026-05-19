"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import {
  ShoppingCart,
  Trash2,
  Minus,
  Plus,
  Sparkles,
  Tag,
  Truck,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    discount,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponInput, setCouponInput] = useState("SAVE15");
  const [couponMessage, setCouponMessage] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const originalSubtotal = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
    0
  );

  const productDiscount = originalSubtotal - subtotal;
  const finalTotal = subtotal - discount;

  useEffect(() => {
    if (cartItems.length === 0 || subtotal <= 0) {
      removeCoupon();
      setCouponInput("SAVE15");
      setCouponMessage("");
      setCouponApplied(false);
      return;
    }

    const result = applyCoupon("SAVE15", subtotal);
    setCouponInput("SAVE15");
    setCouponMessage(result.message || "SAVE15 coupon applied automatically.");
    setCouponApplied(result.success);
  }, [cartItems.length, subtotal]);

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponInput || "SAVE15", subtotal);
    setCouponInput(couponInput || "SAVE15");
    setCouponMessage(result.message);
    setCouponApplied(result.success);
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponInput("SAVE15");
    setCouponMessage("");
    setCouponApplied(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Blue Glows */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.12)]">
            <div className="relative overflow-hidden rounded-4xl bg-[#F7F8FF] p-10 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#2F2FE4] text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)]">
                <ShoppingCart size={34} />
              </div>

              <h2 className="text-3xl font-black uppercase text-[#111827]">
                Your cart is empty
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-7 text-gray-500">
                Looks like you haven’t added anything yet. Explore premium car
                accessories and upgrade your ride.
              </p>

              <Link
                href="/shop"
                className="group mt-7 inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9]"
              >
                Continue Shopping
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Cart Items */}
            <section className="space-y-5">
              <div className="rounded-4xl border border-[#2F2FE4]/10 bg-white p-5 shadow-[0_18px_55px_rgba(47,47,228,0.08)]">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                      Cart Items
                    </p>
                    <h2 className="mt-1 text-2xl font-black uppercase text-[#111827]">
                      {cartItems.length} Product{cartItems.length > 1 ? "s" : ""}
                    </h2>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2F2FE4]">
                    <Truck size={15} />
                    Free Shipping
                  </div>
                </div>
              </div>

              {cartItems.map((item, index) => {
                const itemImage =
                  item.image || item.images?.[0] || "/products/placeholder.png";

                const itemOriginalPrice = item.originalPrice || item.price;
                const itemSalePrice = item.price;
                const itemDiscountPercentage =
                  item.discountPercentage ||
                  (itemOriginalPrice > itemSalePrice
                    ? Math.round(
                      ((itemOriginalPrice - itemSalePrice) / itemOriginalPrice) * 100
                    )
                    : 0);

                return (
                  <div
                    key={`${item.slug}-${item.brand}-${index}`}
                    className="group relative overflow-hidden rounded-[2.2rem] border border-[#2F2FE4]/10 bg-white p-3 shadow-[0_22px_70px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2F2FE4]/35 hover:shadow-[0_30px_90px_rgba(47,47,228,0.16)]"
                  >
                    {/* Hover Shine */}
                    <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                    {itemDiscountPercentage > 0 && (
                      <div className="absolute right-6 top-6 z-30 rounded-full bg-[#2F2FE4] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(47,47,228,0.25)]">
                        {itemDiscountPercentage}% OFF
                      </div>
                    )}

                    <div className="relative grid gap-5 rounded-[1.8rem] bg-white p-4 sm:grid-cols-[150px_1fr]">
                      {/* Image */}
                      <div className="relative h-45 overflow-hidden rounded-3xl bg-[#EEF0FF] sm:h-37.5">
                        <Image
                          src={itemImage}
                          alt={item.name}
                          fill
                          sizes="150px"
                          className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col justify-between gap-5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="mb-2 inline-flex rounded-full bg-[#2F2FE4]/8 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4]">
                              {item.brand || "Winslow"}
                            </div>

                            <h2 className="text-xl font-black uppercase tracking-tight text-[#111827] transition group-hover:text-[#2F2FE4]">
                              {item.name}
                            </h2>

                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              {itemOriginalPrice > itemSalePrice && (
                                <span className="text-sm font-black text-gray-400 line-through">
                                  ₹{itemOriginalPrice}
                                </span>
                              )}

                              <span className="text-xl font-black text-[#2F2FE4]">
                                ₹{itemSalePrice}
                              </span>

                              {itemDiscountPercentage > 0 && (
                                <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-green-600">
                                  Save {itemDiscountPercentage}%
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                              Subtotal
                            </p>

                            <p className="mt-1 text-2xl font-black text-[#2F2FE4]">
                              ₹{itemSalePrice * item.quantity}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2F2FE4]/10 pt-4">
                          {/* Quantity */}
                          <div className="flex items-center rounded-full border border-[#2F2FE4]/15 bg-white p-1 shadow-[0_12px_35px_rgba(47,47,228,0.08)]">
                            <button
                              onClick={() =>
                                decreaseQuantity(item.slug, item.brand)
                              }
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4] transition hover:bg-[#2F2FE4] hover:text-white"
                            >
                              <Minus size={17} />
                            </button>

                            <span className="w-12 text-center text-sm font-black text-[#111827]">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.slug, item.brand)
                              }
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4] transition hover:bg-[#2F2FE4] hover:text-white"
                            >
                              <Plus size={17} />
                            </button>
                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.slug, item.brand)
                            }
                            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-red-500 transition hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 size={15} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Order Summary */}
            <aside className="h-fit overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.14)] lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-4xl bg-white p-6">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F2FE4]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)]">
                      <BadgeCheck size={25} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-black uppercase text-[#111827]">
                        Order Summary
                      </h2>
                      <p className="text-xs font-semibold text-gray-500">
                        Final review before checkout
                      </p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-3 rounded-3xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-5">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">MRP Total</span>
                      <span className="text-gray-400 line-through">₹{originalSubtotal}</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">Product Discount</span>
                      <span className="text-green-600">- ₹{productDiscount}</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-[#111827]">₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">SAVE15 Coupon</span>
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

                  {/* Coupon */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Tag size={16} className="text-[#2F2FE4]" />
                      <p className="text-sm font-black uppercase tracking-wide text-[#111827]">
                        Apply Coupon
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) =>
                          setCouponInput(e.target.value.toUpperCase())
                        }
                        placeholder="SAVE15"
                        className="min-w-0 flex-1 rounded-full border border-[#2F2FE4]/15 bg-white px-4 py-3 text-sm font-bold text-[#111827] outline-none transition focus:border-[#2F2FE4]/60 focus:ring-4 focus:ring-[#2F2FE4]/10 placeholder:text-gray-400"
                      />

                      <button
                        onClick={handleApplyCoupon}
                        className="rounded-full bg-[#2F2FE4] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#2424c9]"
                      >
                        {couponApplied ? "Applied" : "Apply"}
                      </button>
                    </div>

                    {couponApplied && (
                      <button
                        onClick={handleRemoveCoupon}
                        className="mt-3 text-xs font-black uppercase tracking-wide text-red-500 hover:text-red-700"
                      >
                        Remove Coupon
                      </button>
                    )}

                    {couponMessage && (
                      <p
                        className={`mt-3 text-xs font-bold ${couponApplied ? "text-green-600" : "text-red-500"
                          }`}
                      >
                        {couponMessage}
                      </p>
                    )}
                  </div>

                  {/* Offer Box */}
                  <div className="mt-5 rounded-3xl border border-[#2F2FE4]/15 bg-[#2F2FE4]/8 p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                        <Sparkles size={18} />
                      </span>

                      <div>
                        <p className="text-sm font-black uppercase text-[#2F2FE4]">
                          Today Offer
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                          Code{" "}
                          <span className="font-black text-[#111827]">
                            SAVE15
                          </span>{" "}
                          is applied automatically for extra 15% OFF.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Checkout */}
                  <Link
                    href="/checkout"
                    className="group mt-6 flex w-full items-center justify-center rounded-full bg-[#2F2FE4] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9] hover:shadow-[0_24px_60px_rgba(47,47,228,0.38)]"
                  >
                    Proceed to Checkout
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
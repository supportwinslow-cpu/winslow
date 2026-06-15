"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { fbqEvent } from "../lib/metaPixel";

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
  Gift,
  Flame,
  Lock,
} from "lucide-react";

const DOOR_EDGE_GUARD_PRICE = 299;
const DOOR_EDGE_GUARD_ORIGINAL_PRICE = 599;

const isDoorEdgeGuardItem = (item) => {
  const text = `${item?.id || ""} ${item?.sku || ""} ${item?.slug || ""} ${item?.name || ""
    }`.toLowerCase();

  return (
    text.includes("door-edge-guard") ||
    text.includes("f3dg") ||
    text.includes("f3-premium")
  );
};

const normalizeCartItem = (item) => {
  const isFreeGift = item?.isFreeGift || Number(item?.price) === 0;

  if (isFreeGift) {
    return {
      ...item,
      price: 0,
      originalPrice: Number(item?.originalPrice) || 0,
    };
  }

  if (isDoorEdgeGuardItem(item)) {
    return {
      ...item,
      price: DOOR_EDGE_GUARD_PRICE,
      originalPrice: DOOR_EDGE_GUARD_ORIGINAL_PRICE,
      discountPercentage: Math.round(
        ((DOOR_EDGE_GUARD_ORIGINAL_PRICE - DOOR_EDGE_GUARD_PRICE) /
          DOOR_EDGE_GUARD_ORIGINAL_PRICE) *
        100
      ),
    };
  }

  return {
    ...item,
    price: Number(item?.price) || 0,
    originalPrice: Number(item?.originalPrice) || Number(item?.price) || 0,
  };
};

export default function CartPage() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    discount,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponMessage, setCouponMessage] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const normalizedCartItems = cartItems.map(normalizeCartItem);

  const paidCartItems = normalizedCartItems.filter((item) => item.price > 0);

  const subtotal = paidCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const originalSubtotal = paidCartItems.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
    0
  );

  const productDiscount = Math.max(originalSubtotal - subtotal, 0);
  const finalTotal = Math.max(subtotal - discount, 0);

  const totalPaidItems = paidCartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const doorVisorQty = paidCartItems
    .filter((item) => item.slug?.includes("door-visor"))
    .reduce((total, item) => total + item.quantity, 0);

  const hasDoorVisor = paidCartItems.some((item) =>
    item.slug?.includes("door-visor")
  );

  const hasParcelTray = paidCartItems.some((item) =>
    item.slug?.includes("parcel-tray")
  );

  const eligibleForDoorGuard = doorVisorQty >= 2;
  const eligibleForComboGift = hasDoorVisor && hasParcelTray;

  const hasFreeDoorGuard = cartItems.some(
    (item) => item.slug === "free-door-guard"
  );

  const hasFreeSteeringKnob = cartItems.some(
    (item) => item.slug === "free-steering-knob"
  );

  const freeDoorGuardProduct = {
    id: "free-door-guard",
    name: "FREE Door Guard",
    slug: "free-door-guard",
    brand: "Winslow",
    price: 0,
    originalPrice: 599,
    image: "/products/door-guard.png",
    isFreeGift: true,
  };

  const freeSteeringKnobProduct = {
    id: "free-steering-knob",
    name: "FREE Steering Knob",
    slug: "free-steering-knob",
    brand: "Winslow",
    price: 0,
    originalPrice: 499,
    image: "/products/steering-knob.png",
    isFreeGift: true,
  };

  useEffect(() => {
    if (cartItems.length === 0 || subtotal <= 0) {
      removeCoupon();
      setCouponMessage("");
      setCouponApplied(false);
      return;
    }

    const result = applyCoupon("SAVE20", subtotal);
    setCouponMessage(result.message || "SAVE20 coupon applied automatically.");
    setCouponApplied(result.success);
  }, [cartItems.length, subtotal]);

  // AUTO FREE GIFT LOGIC
  useEffect(() => {
    if (eligibleForDoorGuard && !hasFreeDoorGuard) {
      addToCart(freeDoorGuardProduct, 1, "Winslow");
    }

    if (!eligibleForDoorGuard && !eligibleForComboGift && hasFreeDoorGuard) {
      removeFromCart("free-door-guard", "Winslow");
    }
  }, [eligibleForDoorGuard, eligibleForComboGift, hasFreeDoorGuard]);

  useEffect(() => {
    if (eligibleForComboGift && !hasFreeSteeringKnob) {
      addToCart(freeSteeringKnobProduct, 1, "Winslow");
    }

    if (!eligibleForComboGift && hasFreeSteeringKnob) {
      removeFromCart("free-steering-knob", "Winslow");
    }
  }, [eligibleForComboGift, hasFreeSteeringKnob]);

  const handleProceedToCheckout = () => {
    if (!normalizedCartItems || normalizedCartItems.length === 0) return;

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "checkoutCartItems",
        JSON.stringify(normalizedCartItems)
      );

      localStorage.setItem(
        "checkoutSummary",
        JSON.stringify({
          subtotal,
          originalSubtotal,
          productDiscount,
          couponDiscount: discount,
          finalTotal,
        })
      );
    }

    fbqEvent("InitiateCheckout", {
      content_ids: normalizedCartItems.map((item) => item.id || item.slug),
      content_type: "product",
      contents: normalizedCartItems.map((item) => ({
        id: item.id || item.slug,
        quantity: Number(item.quantity || 1),
        item_price: Number(item.price),
      })),
      value: Number(finalTotal),
      currency: "INR",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-28 text-[#111827] lg:pb-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
        {cartItems.length === 0 ? (
          <div className="mx-auto max-w-xl overflow-hidden rounded-[1.7rem] border border-[#2F2FE4]/15 bg-white p-2 shadow-[0_20px_70px_rgba(47,47,228,0.12)] sm:rounded-3xl sm:p-3">
            <div className="rounded-3xl bg-[#F7F8FF] p-7 text-center sm:rounded-3xl sm:p-8">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white">
                <ShoppingCart size={30} />
              </div>

              <h2 className="text-2xl font-black uppercase">
                Your Cart is Empty
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-gray-500">
                Add premium car accessories and unlock free gifts.
              </p>

              <Link
                href="/shop"
                className="mt-6 inline-flex items-center rounded-full bg-[#2F2FE4] px-7 py-3 text-sm font-black uppercase text-white"
              >
                Continue Shopping
                <ArrowRight size={17} className="ml-2" />
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Top Offer Banner */}
            <div className="mb-4 overflow-hidden rounded-3xl bg-linear-to-r from-[#2F2FE4] via-[#4F46E5] to-[#2F2FE4] p-4 text-white shadow-[0_20px_65px_rgba(47,47,228,0.28)] sm:mb-5 sm:rounded-3xl">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <Gift size={22} />
                </div>

                <div className="flex-1">
                  <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-black uppercase">
                    <Flame size={12} />
                    Offer Active
                  </div>

                  <h1 className="text-xl font-black uppercase leading-tight sm:text-3xl">
                    Extra 20% OFF + Free Gifts
                  </h1>

                  <p className="mt-1 text-xs font-semibold leading-5 text-white/85 sm:text-base">
                    Buy 2 Door Visors or Door Visor + Parcel Tray to unlock free gifts.
                  </p>
                </div>

                <div className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-[#2F2FE4] sm:block">
                  SAVE20
                </div>
              </div>
            </div>

            {/* Offer Cards */}
            <div className="mb-4 grid gap-3 md:grid-cols-2 sm:mb-5">
              <div className="rounded-[1.4rem] border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_16px_45px_rgba(47,47,228,0.10)] sm:rounded-3xl">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white sm:h-11 sm:w-11">
                    🎁
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] font-black uppercase text-[#2F2FE4] sm:text-xs">
                      Buy 2 Get 1 Free
                    </p>

                    <h3 className="mt-1 text-base font-black uppercase sm:text-lg">
                      Buy 2 Door Visors
                    </h3>

                    <p className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                      Get FREE Door Guard worth ₹599. Billing will be ₹0.
                    </p>

                    {eligibleForDoorGuard ? (
                      <div className="mt-3 rounded-full bg-green-50 px-4 py-2 text-[11px] font-black uppercase text-green-600 sm:mt-4 sm:px-5 sm:py-2.5 sm:text-xs">
                        {hasFreeDoorGuard
                          ? "Free Door Guard Added"
                          : "Adding Free Gift..."}
                      </div>
                    ) : (
                      <Link
                        href="/shop/door-visor"
                        className="mt-3 inline-flex rounded-full bg-red-50 px-4 py-2 text-[11px] font-black uppercase text-red-600 sm:mt-4 sm:px-5 sm:py-2.5 sm:text-xs"
                      >
                        Add {Math.max(2 - doorVisorQty, 0)} More Door Visor
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_16px_45px_rgba(47,47,228,0.10)] sm:rounded-3xl">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white sm:h-11 sm:w-11">
                    🔥
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] font-black uppercase text-[#2F2FE4] sm:text-xs">
                      Combo Gift Offer
                    </p>

                    <h3 className="mt-1 text-base font-black uppercase sm:text-lg">
                      Door Visor + Parcel Tray
                    </h3>

                    <p className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                      Get FREE Steering Knob / Door Guard. Gift price will be ₹0.
                    </p>

                    {eligibleForComboGift ? (
                      <div className="mt-3 rounded-full bg-green-50 px-4 py-2 text-[11px] font-black uppercase text-green-600 sm:mt-4 sm:px-5 sm:py-2.5 sm:text-xs">
                        {hasFreeSteeringKnob
                          ? "Free Steering Knob Added"
                          : "Adding Free Gift..."}
                      </div>
                    ) : (
                      <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                        {!hasDoorVisor && (
                          <Link
                            href="/shop/door-visor"
                            className="rounded-full bg-gray-100 px-4 py-2 text-[11px] font-black uppercase text-[#2F2FE4] sm:py-2.5 sm:text-xs"
                          >
                            Add Door Visor
                          </Link>
                        )}

                        {!hasParcelTray && (
                          <Link
                            href="/shop/parcel-tray"
                            className="rounded-full bg-gray-100 px-4 py-2 text-[11px] font-black uppercase text-[#2F2FE4] sm:py-2.5 sm:text-xs"
                          >
                            Add Parcel Tray
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Strip */}
            <div className="mb-4 grid grid-cols-2 gap-2 sm:mb-5 sm:grid-cols-4 sm:gap-3">
              {[
                { icon: Truck, title: "Free Delivery", text: "Across India" },
                { icon: Lock, title: "Prepaid Only", text: "Secure Payment" },
                { icon: ShieldCheck, title: "Razorpay", text: "Protected" },
                { icon: BadgeCheck, title: "Premium", text: "Quality Checked" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#2F2FE4]/10 bg-white p-3 shadow-[0_12px_35px_rgba(47,47,228,0.10)]"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4]/10 text-[#2F2FE4] sm:h-10 sm:w-10">
                        <Icon size={17} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-[11px] font-black uppercase sm:text-xs">
                          {item.title}
                        </h3>
                        <p className="truncate text-[10px] font-semibold text-gray-500 sm:text-[11px]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_380px] lg:gap-6">
              {/* Cart Items */}
              <section className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between rounded-[1.4rem] border border-[#2F2FE4]/10 bg-white p-4 shadow-[0_14px_40px_rgba(47,47,228,0.08)] sm:rounded-3xl">
                  <div>
                    <p className="text-[11px] font-black uppercase text-[#2F2FE4] sm:text-xs">
                      Your Cart
                    </p>

                    <h2 className="text-lg font-black uppercase sm:text-xl">
                      {totalPaidItems} Item{totalPaidItems > 1 ? "s" : ""}
                    </h2>
                  </div>

                  <div className="rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-black uppercase text-green-600">
                    Free Shipping
                  </div>
                </div>

                {normalizedCartItems.map((item, index) => {
                  const itemImage =
                    item.image ||
                    item.images?.[0] ||
                    "/products/placeholder.png";

                  const isFreeGift = item.isFreeGift || item.price === 0;

                  const itemOriginalPrice = item.originalPrice || item.price;
                  const itemSalePrice = item.price;

                  const itemDiscountPercentage =
                    itemOriginalPrice > itemSalePrice
                      ? Math.round(
                        ((itemOriginalPrice - itemSalePrice) /
                          itemOriginalPrice) *
                        100
                      )
                      : 0;

                  const itemSaved =
                    (itemOriginalPrice - itemSalePrice) * item.quantity;

                  return (
                    <div
                      key={`${item.slug}-${item.brand}-${index}`}
                      className="overflow-hidden rounded-[1.4rem] border border-[#2F2FE4]/10 bg-white p-2.5 shadow-[0_16px_45px_rgba(47,47,228,0.10)] sm:rounded-3xl sm:p-3"
                    >
                      <div className="grid grid-cols-[92px_1fr] gap-3 sm:grid-cols-[150px_1fr] sm:gap-5">
                        <div className="relative h-27.5 overflow-hidden rounded-2xl bg-[#EEF0FF] sm:h-37.5">
                          <Image
                            src={itemImage}
                            alt={item.name}
                            fill
                            sizes="150px"
                            className="object-contain p-2.5 sm:p-3"
                          />

                          {isFreeGift ? (
                            <div className="absolute left-1.5 top-1.5 rounded-full bg-green-600 px-2 py-1 text-[8px] font-black text-white sm:left-2 sm:top-2 sm:text-[9px]">
                              FREE
                            </div>
                          ) : (
                            itemDiscountPercentage > 0 && (
                              <div className="absolute left-1.5 top-1.5 rounded-full bg-white px-2 py-1 text-[8px] font-black text-[#2F2FE4] sm:left-2 sm:top-2 sm:text-[9px]">
                                {itemDiscountPercentage}% OFF
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex min-w-0 flex-col justify-between">
                          <div>
                            <div
                              className={`mb-1 inline-flex rounded-full px-2 py-0.5 text-[8px] font-black uppercase sm:px-2.5 sm:py-1 sm:text-[9px] ${isFreeGift
                                  ? "bg-green-50 text-green-600"
                                  : "bg-[#2F2FE4]/8 text-[#2F2FE4]"
                                }`}
                            >
                              {isFreeGift
                                ? "Free Gift"
                                : item.brand || "Winslow"}
                            </div>

                            <h2 className="line-clamp-2 text-xs font-black uppercase leading-tight sm:text-xl">
                              {item.name}
                            </h2>

                            <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                              {isFreeGift ? (
                                <>
                                  <span className="text-xs font-black text-gray-400 line-through">
                                    ₹{itemOriginalPrice}
                                  </span>

                                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-black uppercase text-green-600 sm:px-3 sm:text-xs">
                                    FREE
                                  </span>
                                </>
                              ) : (
                                <>
                                  {itemOriginalPrice > itemSalePrice && (
                                    <span className="text-xs font-black text-gray-400 line-through sm:text-sm">
                                      ₹{itemOriginalPrice}
                                    </span>
                                  )}

                                  <span className="text-lg font-black leading-none text-[#2F2FE4] sm:text-xl">
                                    ₹{itemSalePrice}
                                  </span>
                                </>
                              )}
                            </div>

                            {itemSaved > 0 && (
                              <p className="mt-1 text-[10px] font-bold text-green-600">
                                You saved ₹{itemSaved}
                              </p>
                            )}
                          </div>

                          {isFreeGift ? (
                            <div className="mt-3 flex items-center justify-between">
                              <span className="rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-black uppercase text-green-600">
                                Gift Added
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  removeFromCart(item.slug, item.brand)
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ) : (
                            <div className="mt-3 flex items-center justify-between gap-2">
                              <div className="flex items-center rounded-full border border-[#2F2FE4]/15 bg-white p-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    decreaseQuantity(item.slug, item.brand)
                                  }
                                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4]"
                                >
                                  <Minus size={15} />
                                </button>

                                <span className="w-8 text-center text-xs font-black">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    increaseQuantity(item.slug, item.brand)
                                  }
                                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4]"
                                >
                                  <Plus size={15} />
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  removeFromCart(item.slug, item.brand)
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#F7F8FF] px-3 py-2">
                        <span className="text-xs font-black text-gray-500">
                          Item Total
                        </span>

                        <span
                          className={`text-lg font-black ${isFreeGift ? "text-green-600" : "text-[#2F2FE4]"
                            }`}
                        >
                          {isFreeGift
                            ? "FREE"
                            : `₹${itemSalePrice * item.quantity}`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </section>

              {/* Order Summary */}
              <aside className="h-fit overflow-hidden rounded-3xl border border-[#2F2FE4]/15 bg-white p-2.5 shadow-[0_20px_70px_rgba(47,47,228,0.14)] sm:rounded-3xl sm:p-3 lg:sticky lg:top-28">
                <div className="rounded-[1.4rem] bg-white p-4 sm:rounded-3xl sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white">
                      <BadgeCheck size={23} />
                    </div>

                    <div>
                      <h2 className="text-xl font-black uppercase">
                        Order Summary
                      </h2>

                      <p className="text-xs font-semibold text-gray-500">
                        Secure prepaid checkout
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-[1.4rem] border border-[#2F2FE4]/10 bg-[#F7F8FF] p-4 sm:rounded-3xl">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">MRP Total</span>
                      <span className="text-gray-400 line-through">
                        ₹{originalSubtotal}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">Product Discount</span>
                      <span className="text-green-600">
                        - ₹{productDiscount}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">SAVE20 Coupon</span>
                      <span className="text-green-600">- ₹{discount}</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-500">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                  </div>

                  <div className="my-5 flex items-center justify-between rounded-[1.4rem] bg-[#2F2FE4] px-5 py-5 text-white sm:rounded-3xl">
                    <span className="text-sm font-black uppercase">Total</span>
                    <span className="text-3xl font-black">₹{finalTotal}</span>
                  </div>

                  <div className="rounded-[1.4rem] border border-green-200 bg-green-50 p-4 sm:rounded-3xl">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                        <Tag size={18} />
                      </span>

                      <div>
                        <p className="text-sm font-black uppercase text-green-700">
                          Coupon Applied
                        </p>

                        <p className="mt-1 text-xs font-semibold text-green-700">
                          SAVE20 gives you extra discount on this order.
                        </p>
                      </div>
                    </div>
                  </div>

                  {couponMessage && (
                    <p
                      className={`mt-3 text-xs font-bold ${couponApplied ? "text-green-600" : "text-red-500"
                        }`}
                    >
                      {couponMessage}
                    </p>
                  )}

                  <div className="mt-5 rounded-[1.4rem] border border-[#2F2FE4]/15 bg-[#2F2FE4]/8 p-4 sm:rounded-3xl">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                        <Sparkles size={18} />
                      </span>

                      <div>
                        <p className="text-sm font-black uppercase text-[#2F2FE4]">
                          Complete Order Now
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                          Few stocks left. Cart items are not reserved until
                          payment is completed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={handleProceedToCheckout}
                    className="mt-6 hidden w-full items-center justify-center rounded-full bg-[#2F2FE4] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition hover:bg-[#2424c9] lg:flex"
                  >
                    Pay Securely Now
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </aside>
            </div>

            {/* Mobile Sticky Checkout */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#2F2FE4]/10 bg-white/95 p-3 shadow-[0_-12px_35px_rgba(47,47,228,0.15)] backdrop-blur-xl lg:hidden">
              <div className="mx-auto flex max-w-7xl items-center gap-3">
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase text-gray-400">
                    Total Amount
                  </p>

                  <div className="flex items-end gap-2">
                    <p className="text-2xl font-black leading-none text-[#2F2FE4]">
                      ₹{finalTotal}
                    </p>

                    {productDiscount > 0 && (
                      <p className="pb-0.5 text-[10px] font-black text-green-600">
                        Saved ₹{productDiscount + discount}
                      </p>
                    )}
                  </div>
                </div>

                <Link
                  href="/checkout"
                  onClick={handleProceedToCheckout}
                  className="flex h-12 items-center justify-center rounded-full bg-[#2F2FE4] px-6 text-xs font-black uppercase text-white shadow-[0_12px_30px_rgba(47,47,228,0.25)]"
                >
                  Pay Now
                  <ArrowRight size={15} className="ml-1.5" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
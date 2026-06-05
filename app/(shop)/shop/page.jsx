"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  SlidersHorizontal,
  ArrowRight,
  IndianRupee,
  Truck,
  ShieldCheck,
  Star,
  Gift,
  Zap,
  Flame,
} from "lucide-react";

import { fbqEvent, fbqCustom } from "@/app/lib/metaPixel";

const categories = [
  {
    name: "Door Visor",
    slug: "door-visor",
    image: "/products/door-visor.png",
    originalPrice: 2500,
    price: 1625,
    discountPercentage: 35,
    tag: "Exterior",
  },
  {
    name: "Door Edge Guard",
    slug: "door-edge-guard",
    image: "/products/door-guard.png",
    originalPrice: 599,
    price: 389,
    discountPercentage: 35,
    tag: "Protection",
  },
  {
    name: "Parcel Tray",
    slug: "parcel-tray",
    image: "/products/parcel-tray.png",
    originalPrice: 3800,
    price: 2470,
    discountPercentage: 35,
    tag: "Interior",
  },
  {
    name: "Steering Knob",
    slug: "steering-knob",
    image: "/products/steering-knob.png",
    originalPrice: 499,
    price: 324,
    discountPercentage: 35,
    tag: "Driving",
  },
];

export default function ShopPage() {
  const [maxPrice, setMaxPrice] = useState(3000);

  const filtered = categories.filter((item) => item.price <= maxPrice);

  useEffect(() => {
    fbqEvent("ViewContent", {
      content_name: "Shop Page",
      content_category: "Car Accessories",
      content_type: "product_group",
      content_ids: categories.map((item) => item.slug),
      contents: categories.map((item) => ({
        id: item.slug,
        quantity: 1,
        item_price: Number(item.price),
      })),
      currency: "INR",
    });
  }, []);

  const handleExploreClick = useCallback((item) => {
    fbqCustom("ExploreProductCategory", {
      content_name: item.name,
      content_category: item.tag,
      content_ids: [item.slug],
      value: Number(item.price),
      currency: "INR",
    });
  }, []);

  const handlePriceChange = useCallback((e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);

    fbqCustom("PriceFilterUsed", {
      filter_name: "Max Price",
      filter_value: value,
      currency: "INR",
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-3 py-5 sm:px-6 lg:px-8">
        {/* OFFER BANNER */}
        <div className="mb-5 overflow-hidden rounded-3xl bg-linear-to-r from-[#2F2FE4] via-[#4F46E5] to-[#2F2FE4] p-4 text-white shadow-[0_20px_65px_rgba(47,47,228,0.28)] sm:p-6">
          <div className="flex items-start gap-3 md:items-center md:justify-between">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Gift size={23} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-black uppercase">
                <Zap size={12} />
                Today Offer
              </div>

              <h1 className="text-xl font-black uppercase leading-tight sm:text-3xl">
                Buy More, Save More
              </h1>

              <p className="mt-1 text-xs font-semibold text-white/85 sm:text-base">
                Door Visor + Parcel Tray = Free Steering Knob / Door Guard
              </p>
            </div>

            <div className="hidden rounded-full bg-white px-6 py-3 text-sm font-black uppercase text-[#2F2FE4] md:block">
              SAVE20
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/10 p-2 md:hidden">
            <span className="text-xs font-bold text-white/85">
              Extra 20% OFF
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#2F2FE4]">
              SAVE20
            </span>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: Truck, title: "Free Delivery", text: "Across India" },
            { icon: ShieldCheck, title: "Secure Pay", text: "Razorpay" },
            { icon: Star, title: "4.8 Rating", text: "5000+ Customers" },
            { icon: Flame, title: "High Demand", text: "Few Stock Left" },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#2F2FE4]/10 bg-white/95 p-3 shadow-[0_12px_35px_rgba(47,47,228,0.10)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4]/10 text-[#2F2FE4]">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE FILTER */}
        <div className="mb-6 rounded-3xl border border-[#2F2FE4]/10 bg-white p-4 shadow-[0_15px_45px_rgba(47,47,228,0.10)] lg:hidden">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                <SlidersHorizontal size={18} />
              </div>

              <div>
                <h3 className="text-sm font-black uppercase">Filter</h3>
                <p className="text-[11px] font-semibold text-gray-500">
                  Max price
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 rounded-full bg-[#2F2FE4]/8 px-3 py-1 text-xs font-black text-[#2F2FE4]">
              <IndianRupee size={12} />
              {maxPrice}
            </div>
          </div>

          <input
            type="range"
            min="100"
            max="3000"
            value={maxPrice}
            onChange={handlePriceChange}
            className="w-full cursor-pointer accent-[#2F2FE4]"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* DESKTOP FILTER */}
          <aside className="hidden h-fit rounded-4xl border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_24px_75px_rgba(47,47,228,0.12)] lg:sticky lg:top-28 lg:block">
            <div className="rounded-3xl bg-[#F7F8FF] p-5">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                  <SlidersHorizontal size={21} />
                </div>

                <div>
                  <h2 className="text-lg font-black uppercase">Filters</h2>
                  <p className="text-xs font-semibold text-gray-500">
                    Find product
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-[#2F2FE4]/10 bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-black uppercase text-[#2F2FE4]">
                    Max Price
                  </p>

                  <div className="flex items-center gap-1 rounded-full bg-[#2F2FE4]/8 px-3 py-1 text-sm font-black text-[#2F2FE4]">
                    <IndianRupee size={14} />
                    {maxPrice}
                  </div>
                </div>

                <input
                  type="range"
                  min="100"
                  max="3000"
                  value={maxPrice}
                  onChange={handlePriceChange}
                  className="w-full cursor-pointer accent-[#2F2FE4]"
                />
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <section>
            <div className="mb-5 flex items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black uppercase leading-tight sm:text-4xl">
                  Shop Accessories
                </h2>
                <p className="mt-1 text-xs font-semibold text-gray-500 sm:text-sm">
                  Premium car products for your ride.
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-[#2F2FE4]/15 bg-white px-3 py-1.5 text-[11px] font-black text-[#2F2FE4] sm:px-5 sm:py-2 sm:text-sm">
                {filtered.length} Items
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3">
              {filtered.map((item) => (
                <Link
                  key={item.slug}
                  href={`/shop/${item.slug}`}
                  className="group"
                  onClick={() => handleExploreClick(item)}
                >
                  <div className="overflow-hidden rounded-[1.7rem] border border-[#2F2FE4]/10 bg-white shadow-[0_16px_45px_rgba(47,47,228,0.12)] transition-all duration-500 active:scale-[0.98] lg:hover:-translate-y-2">
                    {/* IMAGE */}
                    <div className="relative h-47.5 bg-[#EEF0FF] sm:h-80">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-contain p-4 transition duration-700 group-hover:scale-110 sm:p-8"
                      />

                      <div className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[9px] font-black text-[#2F2FE4] shadow-sm">
                        {item.discountPercentage}% OFF
                      </div>

                      <div className="absolute right-3 top-3 rounded-full bg-red-50 px-2.5 py-1 text-[9px] font-black text-red-600 shadow-sm">
                        Few Left
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-3 text-center sm:p-5">
                      <p className="mb-1 text-[9px] font-black uppercase tracking-wide text-[#2F2FE4]">
                        {item.tag}
                      </p>

                      <h3 className="line-clamp-2 text-sm font-black uppercase leading-tight text-[#111827] sm:text-xl">
                        {item.name}
                      </h3>

                      <div className="mt-2 flex items-center justify-center gap-1 text-[10px] font-black text-yellow-500">
                        ⭐⭐⭐⭐⭐
                        <span className="text-gray-500">4.8</span>
                      </div>

                      <div className="mt-3 flex items-center justify-center gap-2">
                        <span className="text-xs font-black text-gray-400 line-through sm:text-sm">
                          ₹{item.originalPrice}
                        </span>

                        <span className="text-xl font-black text-[#2F2FE4] sm:text-2xl">
                          ₹{item.price}
                        </span>
                      </div>

                      <div className="mt-3 rounded-2xl bg-[#2F2FE4]/8 px-2 py-2 text-[10px] font-black text-[#2F2FE4]">
                        Extra 20% OFF with SAVE20
                      </div>

                      <div className="mt-4 flex items-center justify-center rounded-full bg-[#2F2FE4] px-4 py-2.5 text-[10px] font-black uppercase text-white transition group-hover:bg-[#2424c9]">
                        View Product
                        <ArrowRight size={13} className="ml-1.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="rounded-3xl border border-[#2F2FE4]/10 bg-white p-8 text-center shadow-[0_20px_60px_rgba(47,47,228,0.10)]">
                <p className="text-xl font-black uppercase">
                  No products found
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Please increase the price range.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
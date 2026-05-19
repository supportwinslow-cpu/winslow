"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  IndianRupee,
} from "lucide-react";

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

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py10 lg:px-8 lg:py-10">

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Filter Sidebar */}
          <aside className="h-fit rounded-[2.2rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_24px_75px_rgba(47,47,228,0.12)] lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#F7F8FF] p-6">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#2F2FE4]/12 blur-3xl" />

              <div className="relative mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_16px_35px_rgba(47,47,228,0.25)]">
                  <SlidersHorizontal size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#111827]">
                    Filters
                  </h2>
                  <p className="text-xs font-semibold text-gray-500">
                    Find your perfect product
                  </p>
                </div>
              </div>

              {/* Price Filter */}
              <div className="relative rounded-3xl border border-[#2F2FE4]/10 bg-white p-5 shadow-[0_14px_35px_rgba(47,47,228,0.08)]">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
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
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#2F2FE4]"
                />

                <div className="mt-2 flex justify-between text-xs font-bold text-gray-400">
                  <span>₹100</span>
                  <span>₹3000</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <section>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item, index) => (
                <Link key={item.slug} href={`/shop/${item.slug}`} className="group">
                  <div className="relative h-full overflow-hidden rounded-[2.3rem] border border-[#2F2FE4]/10 bg-white p-3 shadow-[0_24px_75px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-3 hover:border-[#2F2FE4]/45 hover:shadow-[0_35px_100px_rgba(47,47,228,0.22)]">
                    {/* Hover Shine */}
                    <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                    {/* Top Badges */}
                    <div className="absolute left-6 top-6 z-30 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_10px_25px_rgba(47,47,228,0.12)] backdrop-blur-xl">
                      0{index + 1}
                    </div>

                    <div className="absolute right-6 top-6 z-30 rounded-full bg-[#2F2FE4] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(47,47,228,0.25)]">
                      {item.discountPercentage}% OFF
                    </div>

                    {/* Image */}
                    <div className="relative h-72 overflow-hidden rounded-[1.8rem] bg-[#EEF0FF]">
                      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-inner transition duration-500 group-hover:scale-110" />

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="relative z-10 object-contain p-8 transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />

                      <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-[#2F2FE4]/18" />

                      <div className="absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 translate-y-12 rounded-full bg-[#2F2FE4]/0 blur-[70px] transition duration-500 group-hover:bg-[#2F2FE4]/24" />
                    </div>

                    {/* Content */}
                    <div className="relative z-30 -mt-10 px-3 pb-3">
                      <div className="rounded-[1.8rem] border border-gray-200 bg-white/95 p-5 text-center shadow-[0_18px_45px_rgba(47,47,228,0.12)] backdrop-blur-xl transition duration-500 group-hover:border-[#2F2FE4]/40">
                        <h2 className="text-xl font-black uppercase tracking-tight text-[#111827] transition duration-300 group-hover:text-[#2F2FE4]">
                          {item.name}
                        </h2>

                        <div className="mt-2 inline-flex rounded-full bg-[#2F2FE4]/8 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4]">
                          {item.tag}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                          <span className="text-sm font-black text-gray-400 line-through">
                            ₹{item.originalPrice}
                          </span>

                          <span className="text-3xl font-black text-[#2F2FE4]">
                            ₹{item.price}
                          </span>

                          <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-green-600">
                            Save {item.discountPercentage}%
                          </span>
                        </div>

                        <p className="mt-2 text-xs font-black uppercase tracking-wide text-gray-400">
                          Start From
                        </p>

                        <div className="mt-5 inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-6 py-3 text-xs font-black uppercase tracking-wide text-white shadow-[0_16px_35px_rgba(47,47,228,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2424c9]">
                          Explore Now
                          <ArrowRight
                            size={15}
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#2F2FE4] transition-all duration-500 group-hover:w-28" />
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="rounded-4xl border border-[#2F2FE4]/10 bg-white p-10 text-center shadow-[0_24px_75px_rgba(47,47,228,0.10)]">
                <p className="text-2xl font-black uppercase text-[#111827]">
                  No products found
                </p>
                <p className="mt-3 text-sm font-medium text-gray-500">
                  Please increase the price range to see more products.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
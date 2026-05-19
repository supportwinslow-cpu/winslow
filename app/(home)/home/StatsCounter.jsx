"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Package, ShoppingBag, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 5000,
    suffix: "+",
    label: "Happy Customers",
    desc: "Trusted by car owners",
  },
  {
    icon: Package,
    number: 1200,
    suffix: "+",
    label: "Orders Delivered",
    desc: "Safely shipped across India",
  },
  {
    icon: ShoppingBag,
    number: 50,
    suffix: "+",
    label: "Premium Products",
    desc: "Quality accessories range",
  },
  {
    icon: Star,
    number: 4.9,
    suffix: "★",
    label: "Customer Rating",
    desc: "Loved by verified buyers",
    decimals: 1,
  },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-15 sm:py-16 lg:py-18"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Blue Glow Effects */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2F2FE4] shadow-[0_0_16px_rgba(47,47,228,0.55)]" />

            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Our Performance
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl">
            Numbers That Build
            <span className="relative ml-3 inline-block text-[#2F2FE4]">
              Trust
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-[2.2rem] border bg-white p-3 transition-all duration-500 hover:-translate-y-3 ${
                  isFeatured
                    ? "border-[#2F2FE4]/35 shadow-[0_28px_90px_rgba(47,47,228,0.18)]"
                    : "border-[#2F2FE4]/10 shadow-[0_22px_70px_rgba(47,47,228,0.10)] hover:border-[#2F2FE4]/40 hover:shadow-[0_30px_90px_rgba(47,47,228,0.20)]"
                }`}
              >
                {/* Hover Shine */}
                <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                {/* Floating Glow */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#2F2FE4]/0 blur-3xl transition duration-500 group-hover:bg-[#2F2FE4]/18" />

                <div
                  className={`relative h-full overflow-hidden rounded-[1.8rem] p-7 text-center ${
                    isFeatured
                      ? "bg-[#2F2FE4] text-white"
                      : "bg-white text-[#111827]"
                  }`}
                >
                  {/* Background Pattern */}
                  <div
                    className={`absolute inset-0 ${
                      isFeatured
                        ? "opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fff_0,transparent_24%),radial-gradient(circle_at_80%_70%,#000_0,transparent_20%)]"
                        : "opacity-[0.45] bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.10),transparent_55%)]"
                    }`}
                  />

                  {/* Number Badge */}
                  <div
                    className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-black ${
                      isFeatured
                        ? "bg-white/15 text-white"
                        : "bg-[#2F2FE4]/8 text-[#2F2FE4]"
                    }`}
                  >
                    0{index + 1}
                  </div>

                  {/* Featured Tag */}
                  {isFeatured && (
                    <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4]">
                      Trusted
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`relative mx-auto mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      isFeatured
                        ? "border border-white/25 bg-white text-[#2F2FE4] shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                        : "border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 text-[#2F2FE4] shadow-[0_15px_35px_rgba(47,47,228,0.10)] group-hover:bg-[#2F2FE4] group-hover:text-white"
                    }`}
                  >
                    <Icon size={28} strokeWidth={2.4} />
                  </div>

                  {/* Number */}
                  <h3
                    className={`relative text-4xl font-black tracking-tight sm:text-5xl ${
                      isFeatured ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {inView ? (
                      <CountUp
                        end={item.number}
                        duration={2.2}
                        suffix={item.suffix}
                        decimals={item.decimals || 0}
                        decimal="."
                      />
                    ) : (
                      "0"
                    )}
                  </h3>

                  {/* Label */}
                  <p
                    className={`relative mt-3 text-sm font-black uppercase tracking-wide ${
                      isFeatured ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {item.label}
                  </p>

                  {/* Description */}
                  <p
                    className={`relative mx-auto mt-2 max-w-47.5 text-xs font-medium leading-5 ${
                      isFeatured ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className={`relative mx-auto mt-6 h-1 w-14 rounded-full transition-all duration-300 group-hover:w-24 ${
                      isFeatured ? "bg-white" : "bg-[#2F2FE4]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-4xl border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_18px_50px_rgba(47,47,228,0.10)]">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Premium Fit
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Fast Delivery
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Verified Quality
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Customer Trusted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
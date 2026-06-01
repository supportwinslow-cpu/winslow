import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  {
    name: "Door Visor",
    image: "/products/door-visor.png",
    link: "/shop/door-visor",
    tagline: "Rain protection with premium style",
  },
  {
    name: "Parcel Tray",
    image: "/products/parcel-tray.png",
    link: "/shop/parcel-tray",
    tagline: "Perfect fit for extra utility",
  },
  {
    name: "Door Guard",
    image: "/products/door-guard.png",
    link: "/shop/door-edge-guard",
    tagline: "Protect your car edges",
  },
  {
    name: "Steering Knob",
    image: "/products/steering-knob.png",
    link: "/shop/steering-knob",
    tagline: "Smooth driving comfort",
  },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_48%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.11),transparent_42%)]" />

      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.32] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Blue Glows */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/10 blur-[150px]" />
      <div className="absolute -left-32 bottom-16 h-80 w-80 rounded-full bg-[#2F2FE4]/7 blur-[130px]" />
      <div className="absolute -right-32 top-36 h-80 w-80 rounded-full bg-[#2F2FE4]/7 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
              <Sparkles size={15} />
            </span>

            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#2F2FE4]">
              Premium Collection
            </span>
          </div>

          <h2 className="font-heading text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
            Shop by
            <span className="relative ml-3 inline-block text-[#2F2FE4]">
              Category
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-gray-500 sm:text-base">
            Explore premium car accessories designed for better protection,
            comfort, utility, and style.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.link} className="group">
              <article className="relative h-full overflow-hidden rounded-4xl border border-[#2F2FE4]/10 bg-white p-2.5 shadow-[0_20px_60px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[#2F2FE4]/40 hover:shadow-[0_30px_90px_rgba(47,47,228,0.18)]">
                {/* Shine */}
                <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                {/* Card Glow */}
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#2F2FE4]/0 blur-3xl transition duration-500 group-hover:bg-[#2F2FE4]/14" />

                {/* Image Area */}
                <div className="relative overflow-hidden rounded-[1.6rem] bg-[#EEF0FF]">
                  {/* Badges */}
                  <div className="absolute left-4 top-4 z-30 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-3 py-1.5 text-[11px] font-black text-[#2F2FE4] shadow-[0_10px_25px_rgba(47,47,228,0.12)] backdrop-blur-xl">
                    0{index + 1}
                  </div>

                  <div className="absolute right-4 top-4 z-30 rounded-full bg-[#2F2FE4] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(47,47,228,0.25)]">
                    Premium
                  </div>

                  {/* Image Background */}
                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-inner transition duration-500 group-hover:scale-110" />
                  <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-[#2F2FE4]/10 blur-2xl" />
                  <div className="absolute left-8 top-20 h-16 w-16 rounded-full border border-[#2F2FE4]/15" />

                  <div className="relative h-67.5 sm:h-75 lg:h-80">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="relative z-10 object-contain p-6 transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/35 via-transparent to-[#2F2FE4]/14" />
                </div>

                {/* Content */}
                <div className="relative z-30 -mt-8 px-2 pb-2">
                  <div className="rounded-[1.6rem] border border-[#2F2FE4]/10 bg-white/95 p-5 text-center shadow-[0_18px_45px_rgba(47,47,228,0.12)] backdrop-blur-xl transition duration-500 group-hover:border-[#2F2FE4]/35">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#111827] transition duration-300 group-hover:text-[#2F2FE4]">
                      {category.name}
                    </h3>

                    <p className="mx-auto mt-2 min-h-10 max-w-55 text-xs font-semibold leading-5 text-gray-500">
                      {category.tagline}
                    </p>

                    <div className="mt-5 inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white shadow-[0_16px_35px_rgba(47,47,228,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2424c9]">
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
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_50%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Soft Blue Glow */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2F2FE4] shadow-[0_0_16px_rgba(47,47,228,0.55)]" />
            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Exclusive Deals
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
            Grab Today’s
            <span className="ml-3 text-[#2F2FE4]">Offers</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-[2.4rem] border border-[#2F2FE4]/12 bg-white p-3 shadow-[0_24px_75px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-3 hover:border-[#2F2FE4]/45 hover:shadow-[0_35px_100px_rgba(47,47,228,0.22)]">
            {/* Hover Shine */}
            <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

            {/* Glow */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F2FE4]/10 blur-[90px] transition duration-500 group-hover:bg-[#2F2FE4]/18" />

            <div className="relative overflow-hidden rounded-4xl bg-[#F5F6FF] p-8 sm:p-10">
              {/* Decorative Shapes */}
              <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-white/70 shadow-inner" />
              <div className="absolute -bottom-14 -right-14 h-44 w-44 rounded-full bg-[#2F2FE4]/12 blur-2xl" />
              <div className="absolute left-8 top-10 h-14 w-14 rounded-full border border-[#2F2FE4]/15" />

              {/* Badge */}
              <div className="relative z-10 mb-7 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-4 py-2 shadow-[0_12px_28px_rgba(47,47,228,0.10)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-xl">
                  🚚
                </span>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                  Limited Offer
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#111827] sm:text-5xl">
                  Free
                  <span className="block text-[#2F2FE4]">Shipping</span>
                </h3>

                <p className="mt-5 max-w-md text-sm font-medium leading-7 text-gray-500 sm:text-base">
                  Get free shipping on all orders above ₹999 across India with
                  safe packaging.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Safe Packaging", "Fast Dispatch", "India Delivery"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#2F2FE4]/15 bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-[#2F2FE4]"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>

                <Link
                  href="/shop"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-[0_16px_35px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9] hover:shadow-[0_20px_45px_rgba(47,47,228,0.38)]"
                >
                  Shop Now
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div className="pointer-events-none absolute -bottom-7 right-6 text-8xl font-black uppercase tracking-tight text-[#2F2FE4]/8 sm:text-9xl">
                Ship
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-[2.4rem] border border-[#2F2FE4]/30 bg-[#2F2FE4] p-3 shadow-[0_28px_90px_rgba(47,47,228,0.25)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_110px_rgba(47,47,228,0.38)]">
            {/* Hover Shine */}
            <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

            <div className="relative overflow-hidden rounded-4xl bg-[#2F2FE4] p-8 text-white sm:p-10">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fff_0,transparent_22%),radial-gradient(circle_at_80%_70%,#000_0,transparent_18%)]" />
              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-black/20 blur-3xl" />

              {/* Floating Discount Badge */}
              <div className="absolute right-6 top-6 z-10 flex h-24 w-24 rotate-6 items-center justify-center rounded-full border border-white/25 bg-white text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                <div>
                  <p className="text-3xl font-black leading-none text-[#2F2FE4]">
                    20%
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-wide text-[#2F2FE4]">
                    OFF
                  </p>
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#2F2FE4]">
                    🔥
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-white">
                    Best Seller Deal
                  </span>
                </div>

                <h3 className="max-w-md text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                  Best Sellers
                  <span className="block text-white/80">On Discount</span>
                </h3>

                <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/75 sm:text-base">
                  Limited time discount on premium car accessories. Upgrade your
                  car today.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Door Visor", "Parcel Tray", "Door Guard"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href="/shop"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_18px_45px_rgba(255,255,255,0.22)] transition-all duration-300 hover:scale-105 hover:shadow-[0_22px_55px_rgba(255,255,255,0.3)]"
                >
                  Grab Offer
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div className="pointer-events-none absolute -bottom-7 right-6 text-8xl font-black uppercase tracking-tight text-white/15 sm:text-9xl">
                Sale
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

export default function VideoPromo() {
  const videos = [
    {
      src: "/video/promo1.mp4",
      title: "Door Visor Fitment",
      tag: "Premium Protection",
    },
    {
      src: "/video/promo2.mp4",
      title: "Car Upgrade Reel",
      tag: "Best Seller",
      featured: true,
    },
    {
      src: "/video/promo3.mp4",
      title: "Accessories In Action",
      tag: "Perfect Fit",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#111827] sm:px-6 sm:py-24 lg:py-28">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Soft Blue Glows */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2F2FE4] shadow-[0_0_16px_rgba(47,47,228,0.55)]" />

            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Product Videos
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl">
            See Accessories
            <span className="relative mx-auto mt-1 block w-fit text-[#2F2FE4]">
              In Action
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={video.src}
              className={`group relative overflow-hidden rounded-[2.4rem] border bg-white p-3 transition-all duration-500 hover:-translate-y-3 ${video.featured
                  ? "border-[#2F2FE4]/35 shadow-[0_30px_95px_rgba(47,47,228,0.22)] lg:-translate-y-6"
                  : "border-[#2F2FE4]/10 shadow-[0_24px_75px_rgba(47,47,228,0.10)] hover:border-[#2F2FE4]/45 hover:shadow-[0_35px_100px_rgba(47,47,228,0.22)]"
                }`}
            >
              {/* Hover Shine */}
              <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

              {/* Floating Glow */}
              <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#2F2FE4]/0 blur-3xl transition duration-500 group-hover:bg-[#2F2FE4]/18" />

              {/* Top Badges */}
              <div className="absolute left-6 top-6 z-30 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_10px_25px_rgba(47,47,228,0.12)] backdrop-blur-xl">
                Video 0{index + 1}
              </div>

              {video.featured && (
                <div className="absolute right-6 top-6 z-30 rounded-full bg-[#2F2FE4] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(47,47,228,0.25)]">
                  Featured
                </div>
              )}

              {/* Video Frame */}
              <div className="relative overflow-hidden rounded-4xl bg-[#EEF0FF]">
                <video
                  className="aspect-9/16 w-full object-cover transition duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#111827]/85 via-transparent to-[#2F2FE4]/10" />

                {/* Play Button */}
                <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:bg-[#2F2FE4]">
                  <Play size={24} fill="currentColor" />
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-left">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-white/75">
                    {video.tag}
                  </p>

                  <h3 className="mt-2 text-2xl font-black uppercase leading-tight text-white">
                    {video.title}
                  </h3>

                  <div className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                    Watch Reel
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#2F2FE4] transition-all duration-500 group-hover:w-28" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/shop"
            className="group inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-9 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9] hover:shadow-[0_24px_60px_rgba(47,47,228,0.38)]"
          >
            Shop Accessories
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
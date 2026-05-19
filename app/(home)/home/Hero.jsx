"use client";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-6 md:py-0">

      {/* ===== Background Blur Video ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover scale-125 blur-3xl brightness-40"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 flex items-center justify-center px-3 md:min-h-screen md:px-6">

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-md">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            className="
              block
              w-full
              h-auto
              object-contain
            "
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </section>
  );
}
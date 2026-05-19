"use client";

export default function AnnouncementBar() {
  const items = [
    {
      icon: "🚚",
      text: "Free Shipping Across India",
      highlight: false,
    },
    {
      icon: "🔥",
      text: "Use Code SAVE15 for 15% OFF",
      highlight: true,
    },
    {
      icon: "⭐",
      text: "Premium Quality Accessories",
      highlight: false,
    },
    {
      icon: "💯",
      text: "Trusted by 5,000+ Customers",
      highlight: false,
    },
  ];

  return (
    <div className="relative overflow-hidden border-b border-[#2F2FE4]/30 bg-zinc-750 text-white shadow-sm">
      {/* Top Blue Glow Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#2F2FE4]/70 to-transparent" />

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-black via-black/90 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-black via-black/90 to-transparent" />

      {/* Moving Content */}
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, loopIndex) => (
          <div
            key={loopIndex}
            className="flex items-center gap-10 px-5 py-2.5 text-sm font-bold tracking-wide sm:gap-14 sm:px-8 sm:text-base"
          >
            {items.map((item, index) => (
              <div
                key={`${loopIndex}-${index}`}
                className="flex items-center gap-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#2F2FE4]/35 bg-[#2F2FE4]/15 text-sm shadow-[0_0_20px_rgba(47,47,228,0.25)]">
                  {item.icon}
                </span>

                <span
                  className={
                    item.highlight
                      ? "font-black font-4xl uppercase tracking-wide text-[#e71616]"
                      : "text-white/85"
                  }
                >
                  {item.text}
                </span>

                <span className="ml-3 h-1.5 w-1.5 font-4xl rounded-full bg-[#2F2FE4] shadow-[0_0_12px_rgba(47,47,228,0.8)]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
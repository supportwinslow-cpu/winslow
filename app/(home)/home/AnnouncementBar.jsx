"use client";

export default function AnnouncementBar() {
  const items = [
    { icon: "🚚", text: "Free Shipping Across India", highlight: false },
    { icon: "🔥", text: "Use Code SAVE20 for 20% OFF", highlight: true },
    { icon: "⭐", text: "Premium Quality Accessories", highlight: false },
    { icon: "💯", text: "Trusted by 5,000+ Customers", highlight: false },
  ];

  return (
    <div className="relative w-full overflow-hidden border-b border-[#2F2FE4]/30 bg-black text-white shadow-sm">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-linear-to-r from-black to-transparent sm:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-linear-to-l from-black to-transparent sm:w-24" />

      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide sm:gap-3 sm:px-6 sm:text-base"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2F2FE4]/35 bg-[#2F2FE4]/15 text-xs sm:h-7 sm:w-7 sm:text-sm">
              {item.icon}
            </span>

            <span
              className={
                item.highlight
                  ? "font-black uppercase tracking-wide text-red-500 text-2xl"
                  : "text-white/90"
              }
            >
              {item.text}
            </span>

            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#2F2FE4]" />
          </div>
        ))}
      </div>
    </div>
  );
}
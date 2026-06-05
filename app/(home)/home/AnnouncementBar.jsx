"use client";

export default function AnnouncementBar() {
  const items = [
    {
      icon: "🚚",
      text: "FREE SHIPPING ACROSS INDIA",
      highlight: false,
    },
    {
      icon: "🔥",
      text: "SAVE20 - GET 20% OFF TODAY",
      highlight: true,
    },
    {
      icon: "⚡",
      text: "ONLY FEW STOCKS LEFT",
      highlight: true,
    },
    {
      icon: "👀",
      text: "5,674 PEOPLE VIEWED PRODUCTS TODAY",
      highlight: false,
    },
    {
      icon: "📦",
      text: "3,481 ORDERS SUCCESSFULLY DELIVERED",
      highlight: false,
    },
    {
      icon: "🎁",
      text: "BUY 2 DOOR VISORS & GET FREE DOOR GUARD",
      highlight: true,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden border-b border-[#FFD700]/30 bg-[#111111] text-white shadow-sm">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-linear-to-r from-[#111111] to-transparent sm:w-24" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-linear-to-l from-[#111111] to-transparent sm:w-24" />

      {/* Moving Content */}
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide sm:gap-3 sm:px-6 sm:text-base"
          >
            <span className="text-sm sm:text-base">
              {item.icon}
            </span>

            <span
              className={
                item.highlight
                  ? "font-black uppercase tracking-wide text-[#eed029] text-sm sm:text-xl"
                  : "text-white/90"
              }
            >
              {item.text}
            </span>

            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#FFD700]" />
          </div>
        ))}
      </div>
    </div>
  );
}
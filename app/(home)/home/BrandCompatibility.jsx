"use client";

import Image from "next/image";

const brands = [
  { name: "Hyundai", logo: "/brand/hyundai.png" },
  { name: "Maruti", logo: "/brand/maruti.png" },
  { name: "Tata", logo: "/brand/tata.png" },
  { name: "Kia", logo: "/brand/kia.png" },
  { name: "Mahindra", logo: "/brand/mahindra.png" },
  { name: "Toyota", logo: "/brand/toyota.png" },
  { name: "Ashok", logo: "/brand/ashok.png" },
  { name: "Chevrolet", logo: "/brand/chevrolet.png" },
  { name: "Ford", logo: "/brand/ford.png" },
  { name: "MG", logo: "/brand/mg.png" },
  { name: "Nissan", logo: "/brand/nissan.png" },
  { name: "Renault", logo: "/brand/renault.png" },
  { name: "Skoda", logo: "/brand/skoda.png" },
  { name: "Honda", logo: "/brand/honda.png" },
];

export default function BrandCompatibility() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,47,228,0.13),transparent_48%)]" />

      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Glow Blobs */}
      <div className="absolute left-1/2 top-10 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-5">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2F2FE4] shadow-[0_0_16px_rgba(47,47,228,0.55)]" />

            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Brand Compatibility
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl">
            Trusted Across
            <span className="relative mx-auto mt-1 block w-fit text-[#2F2FE4]">
              Leading Brands
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h2>
        </div>

        {/* Orbit Stage */}
        <div className="relative mx-auto flex h-135 max-w-180 items-center justify-center sm:h-165">
          {/* Glass Stage Card */}
          <div className="absolute inset-x-0 top-1/2 h-107.5 -translate-y-1/2 rounded-[3rem] border border-[#2F2FE4]/10 bg-white/60 shadow-[0_30px_100px_rgba(47,47,228,0.12)] backdrop-blur-xl sm:h-130" />

          {/* Orbit Rings */}
          <div className="absolute h-91.25 w-91.5 rounded-full border border-[#2F2FE4]/25 bg-[#2F2FE4]/5 shadow-[0_0_90px_rgba(47,47,228,0.12)] sm:h-127.5 sm:w-127.5" />
          <div className="absolute h-72.5 w-72.5 rounded-full border border-dashed border-[#2F2FE4]/20 sm:h-98.75 sm:w-98.75" />
          <div className="absolute h-52.5 w-52.5 rounded-full border border-gray-200 bg-white/35 sm:h-71.25 sm:w-71.25" />

          {/* Center Glow */}
          <div className="absolute h-57.5 w-57.5 rounded-full bg-[#2F2FE4]/14 blur-[90px] sm:h-80 sm:w-[320px]" />

          {/* Center Card */}
          <div className="relative z-20 flex h-43.75 w-43.75 flex-col items-center justify-center overflow-hidden rounded-full border border-[#2F2FE4]/20 bg-white/95 text-center shadow-[0_25px_75px_rgba(47,47,228,0.18)] backdrop-blur-xl transition duration-500 hover:scale-105 sm:h-55 sm:w-55">
            <div className="absolute inset-0 bg-linear-to-br from-white via-white to-[#EEF0FF]" />
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2F2FE4]/12 blur-2xl" />

            <p className="relative text-4xl font-black text-[#2F2FE4] sm:text-6xl">
              14+
            </p>

            <p className="relative mt-2 text-xs font-black uppercase tracking-[0.22em] text-[#111827]">
              Car Brands
            </p>

            <p className="relative mt-2 max-w-33.75 text-[11px] font-medium leading-5 text-gray-500">
              Compatible with premium accessories
            </p>

            <div className="relative mt-3 rounded-full bg-[#2F2FE4] px-4 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
              Perfect Fit
            </div>
          </div>

          {/* Rotating Logo Ring */}
          <div className="orbit-ring absolute h-90 w-90 sm:h-125 sm:w-125">
            {brands.map((brand, index) => {
              const angle = (360 / brands.length) * index;

              return (
                <div
                  key={brand.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateX(180px) rotate(-${angle}deg)`,
                  }}
                >
                    <div className="orbit-logo group/logo -ml-9.75 -mt-9.75 flex h-19.5 w-19.5 items-center justify-center rounded-[1.4rem] border border-gray-200 bg-white p-3 shadow-[0_18px_40px_rgba(47,47,228,0.10)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2F2FE4]/45 hover:shadow-[0_22px_60px_rgba(47,47,228,0.22)] sm:-ml-11.75 sm:-mt-11.75 sm:h-23.5 sm:w-23.5">
                    <div className="absolute inset-0 rounded-[1.4rem] bg-linear-to-br from-white via-white to-[#EEF0FF] opacity-0 transition duration-300 group-hover/logo:opacity-100" />

                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={92}
                      height={52}
                      className="relative z-10 max-h-10 w-auto object-contain opacity-90 transition duration-300 group-hover/logo:scale-110 group-hover/logo:opacity-100"
                    />

                    <span className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#111827] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white opacity-0 shadow-lg transition duration-300 group-hover/logo:-bottom-8.5 group-hover/logo:opacity-100">
                      {brand.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mx-auto mt-2 max-w-4xl overflow-hidden rounded-4xl border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_18px_50px_rgba(47,47,228,0.10)]">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Hyundai
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Tata
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Maruti
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              Kia
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
              More
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .orbit-ring {
          animation: orbitRotate 34s linear infinite;
        }

        .orbit-ring:hover {
          animation-play-state: paused;
        }

        .orbit-logo {
          animation: logoCounterRotate 34s linear infinite;
        }

        .orbit-ring:hover .orbit-logo {
          animation-play-state: paused;
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes logoCounterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @media (min-width: 640px) {
          .orbit-ring > div {
            transform-origin: 0 0;
          }

          .orbit-ring > div:nth-child(1) {
            transform: rotate(0deg) translateX(250px) rotate(0deg) !important;
          }
          .orbit-ring > div:nth-child(2) {
            transform: rotate(25.7deg) translateX(250px) rotate(-25.7deg) !important;
          }
          .orbit-ring > div:nth-child(3) {
            transform: rotate(51.4deg) translateX(250px) rotate(-51.4deg) !important;
          }
          .orbit-ring > div:nth-child(4) {
            transform: rotate(77.1deg) translateX(250px) rotate(-77.1deg) !important;
          }
          .orbit-ring > div:nth-child(5) {
            transform: rotate(102.8deg) translateX(250px) rotate(-102.8deg) !important;
          }
          .orbit-ring > div:nth-child(6) {
            transform: rotate(128.5deg) translateX(250px) rotate(-128.5deg) !important;
          }
          .orbit-ring > div:nth-child(7) {
            transform: rotate(154.2deg) translateX(250px) rotate(-154.2deg) !important;
          }
          .orbit-ring > div:nth-child(8) {
            transform: rotate(179.9deg) translateX(250px) rotate(-179.9deg) !important;
          }
          .orbit-ring > div:nth-child(9) {
            transform: rotate(205.6deg) translateX(250px) rotate(-205.6deg) !important;
          }
          .orbit-ring > div:nth-child(10) {
            transform: rotate(231.3deg) translateX(250px) rotate(-231.3deg) !important;
          }
          .orbit-ring > div:nth-child(11) {
            transform: rotate(257deg) translateX(250px) rotate(-257deg) !important;
          }
          .orbit-ring > div:nth-child(12) {
            transform: rotate(282.7deg) translateX(250px) rotate(-282.7deg) !important;
          }
          .orbit-ring > div:nth-child(13) {
            transform: rotate(308.4deg) translateX(250px) rotate(-308.4deg) !important;
          }
          .orbit-ring > div:nth-child(14) {
            transform: rotate(334.1deg) translateX(250px) rotate(-334.1deg) !important;
          }
        }

        @media (max-width: 639px) {
          .orbit-ring > div:nth-child(1) {
            transform: rotate(0deg) translateX(180px) rotate(0deg) !important;
          }
          .orbit-ring > div:nth-child(2) {
            transform: rotate(25.7deg) translateX(180px) rotate(-25.7deg) !important;
          }
          .orbit-ring > div:nth-child(3) {
            transform: rotate(51.4deg) translateX(180px) rotate(-51.4deg) !important;
          }
          .orbit-ring > div:nth-child(4) {
            transform: rotate(77.1deg) translateX(180px) rotate(-77.1deg) !important;
          }
          .orbit-ring > div:nth-child(5) {
            transform: rotate(102.8deg) translateX(180px) rotate(-102.8deg) !important;
          }
          .orbit-ring > div:nth-child(6) {
            transform: rotate(128.5deg) translateX(180px) rotate(-128.5deg) !important;
          }
          .orbit-ring > div:nth-child(7) {
            transform: rotate(154.2deg) translateX(180px) rotate(-154.2deg) !important;
          }
          .orbit-ring > div:nth-child(8) {
            transform: rotate(179.9deg) translateX(180px) rotate(-179.9deg) !important;
          }
          .orbit-ring > div:nth-child(9) {
            transform: rotate(205.6deg) translateX(180px) rotate(-205.6deg) !important;
          }
          .orbit-ring > div:nth-child(10) {
            transform: rotate(231.3deg) translateX(180px) rotate(-231.3deg) !important;
          }
          .orbit-ring > div:nth-child(11) {
            transform: rotate(257deg) translateX(180px) rotate(-257deg) !important;
          }
          .orbit-ring > div:nth-child(12) {
            transform: rotate(282.7deg) translateX(180px) rotate(-282.7deg) !important;
          }
          .orbit-ring > div:nth-child(13) {
            transform: rotate(308.4deg) translateX(180px) rotate(-308.4deg) !important;
          }
          .orbit-ring > div:nth-child(14) {
            transform: rotate(334.1deg) translateX(180px) rotate(-334.1deg) !important;
          }
        }
      `}</style>
    </section>
  );
}
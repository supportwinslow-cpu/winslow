"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote, ShieldCheck } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Excellent quality and perfect fitting accessories.",
  },
  {
    name: "Amit Verma",
    text: "Delivery was fast and product quality is premium.",
  },
  {
    name: "Vikas Jain",
    text: "Best prices in market for premium accessories.",
  },
  {
    name: "Ankit Singh",
    text: "Very durable products, highly recommended!",
  },
  {
    name: "Suresh Meena",
    text: "Great customer support and quick response.",
  },
  {
    name: "Rohit Yadav",
    text: "Perfect fit for my car, very satisfied.",
  },
  {
    name: "Neha Gupta",
    text: "Amazing experience, will buy again!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Blue Glows */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
              <ShieldCheck size={15} />
            </span>

            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Customer Reviews
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl">
            What Customers
            <span className="relative mx-auto mt-1 block w-fit text-[#2F2FE4]">
              Say About Us
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div className="testimonial-slider mx-auto max-w-6xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {reviews.map((item, index) => {
              const isFeatured = index === 1;

              return (
                <SwiperSlide key={item.name} className="h-auto">
                  <div
                    className={`group relative h-full overflow-hidden rounded-[2.3rem] border bg-white p-3 transition-all duration-500 hover:-translate-y-3 ${isFeatured
                        ? "border-[#2F2FE4]/35 shadow-[0_30px_95px_rgba(47,47,228,0.20)]"
                        : "border-[#2F2FE4]/10 shadow-[0_24px_75px_rgba(47,47,228,0.10)] hover:border-[#2F2FE4]/45 hover:shadow-[0_35px_100px_rgba(47,47,228,0.22)]"
                      }`}
                  >
                    {/* Hover Shine */}
                    <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                    {/* Glow */}
                    <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#2F2FE4]/0 blur-3xl transition duration-500 group-hover:bg-[#2F2FE4]/18" />

                    <div
                      className={`relative h-full overflow-hidden rounded-[1.9rem] p-7 ${isFeatured
                          ? "bg-[#2F2FE4] text-white"
                          : "bg-white text-[#111827]"
                        }`}
                    >
                      {/* Pattern */}
                      <div
                        className={`absolute inset-0 ${isFeatured
                            ? "opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fff_0,transparent_24%),radial-gradient(circle_at_80%_70%,#000_0,transparent_20%)]"
                            : "opacity-[0.45] bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.10),transparent_55%)]"
                          }`}
                      />

                      {/* Rating + Verified */}
                      <div className="relative z-10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={16}
                              className={
                                isFeatured
                                  ? "fill-white text-white"
                                  : "fill-[#2F2FE4] text-[#2F2FE4]"
                              }
                            />
                          ))}
                        </div>

                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${isFeatured
                              ? "bg-white text-[#2F2FE4]"
                              : "border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 text-[#2F2FE4]"
                            }`}
                        >
                          Verified
                        </span>
                      </div>

                      {/* Review Text */}
                      <p
                        className={`relative z-10 mt-8 min-h-28 text-base font-medium leading-8 ${isFeatured ? "text-white/85" : "text-gray-600"
                          }`}
                      >
                        “{item.text}”
                      </p>

                      {/* User */}
                      <div
                        className={`relative z-10 mt-8 flex items-center gap-4 border-t pt-6 ${isFeatured ? "border-white/20" : "border-gray-200"
                          }`}
                      >
                        <div
                          className={`flex h-13 w-13 items-center justify-center rounded-full text-sm font-black uppercase shadow-[0_15px_35px_rgba(47,47,228,0.18)] ${isFeatured
                              ? "bg-white text-[#2F2FE4]"
                              : "bg-[#2F2FE4] text-white"
                            }`}
                        >
                          {item.name.charAt(0)}
                        </div>

                        <div>
                          <p
                            className={`text-sm font-black uppercase tracking-wide ${isFeatured ? "text-white" : "text-[#111827]"
                              }`}
                          >
                            {item.name}
                          </p>

                          <p
                            className={`mt-1 text-xs font-semibold ${isFeatured ? "text-white/60" : "text-gray-400"
                              }`}
                          >
                            Verified Customer
                          </p>
                        </div>
                      </div>

                      {/* Bottom Accent */}
                      <div
                        className={`relative mt-6 h-1 w-14 rounded-full transition-all duration-300 group-hover:w-24 ${isFeatured ? "bg-white" : "bg-[#2F2FE4]"
                          }`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mx-auto mt-2 max-w-4xl overflow-hidden rounded-4xl border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_18px_50px_rgba(47,47,228,0.10)]">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            {["4.9★ Rating", "5000+ Happy Customers", "Verified Buyers", "Trusted Quality"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
                    {item}
                  </span>

                  {index !== 3 && (
                    <span className="hidden h-1.5 w-1.5 rounded-full bg-gray-300 sm:block" />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Custom pagination style */}
      <style jsx global>{`
        .testimonial-slider .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonial-slider .swiper-pagination-bullet {
          width: 30px;
          height: 5px;
          border-radius: 999px;
          background: rgba(47, 47, 228, 0.18);
          opacity: 1;
          transition: all 0.35s ease;
        }

        .testimonial-slider .swiper-pagination-bullet-active {
          width: 56px;
          background: #2f2fe4;
          box-shadow: 0 0 18px rgba(47, 47, 228, 0.45);
        }
      `}</style>
    </section>
  );
}
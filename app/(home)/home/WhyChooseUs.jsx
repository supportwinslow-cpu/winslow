import { Truck, ShieldCheck, Tags, ArrowRight, Sparkles } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "High-grade car accessories with perfect fitting, strong durability, and premium finish.",
    badge: "Top Quality",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Safe packaging and quick delivery across India, so your upgrade reaches faster.",
    badge: "Quick Ship",
  },
  {
    icon: Tags,
    title: "Best Prices",
    desc: "Affordable pricing with reliable quality, made for daily use and long-lasting value.",
    badge: "Best Value",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-15 sm:py-16 lg:py-18">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Blue Glow Effects */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
              <Sparkles size={15} />
            </span>

            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Why Choose Winslow
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl">
            Upgrade Your Car
            <span className="relative mx-auto mt-1 block w-fit text-[#2F2FE4]">
              With Confidence
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[2.3rem] border bg-white p-3 transition-all duration-500 hover:-translate-y-3 ${isFeatured
                    ? "border-[#2F2FE4]/35 shadow-[0_30px_95px_rgba(47,47,228,0.20)]"
                    : "border-[#2F2FE4]/10 shadow-[0_24px_75px_rgba(47,47,228,0.10)] hover:border-[#2F2FE4]/45 hover:shadow-[0_35px_100px_rgba(47,47,228,0.22)]"
                  }`}
              >
                {/* Hover Shine */}
                <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                {/* Glow */}
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#2F2FE4]/0 blur-3xl transition duration-500 group-hover:bg-[#2F2FE4]/18" />

                <div
                  className={`relative h-full overflow-hidden rounded-[1.9rem] p-8 ${isFeatured
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

                  {/* Number */}
                  <div
                    className={`absolute right-6 top-5 text-7xl font-black leading-none transition duration-500 ${isFeatured
                        ? "text-white/10"
                        : "text-[#2F2FE4]/8 group-hover:text-[#2F2FE4]/14"
                      }`}
                  >
                    0{index + 1}
                  </div>

                  {/* Badge */}
                  <div
                    className={`relative mb-7 inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide ${isFeatured
                        ? "bg-white text-[#2F2FE4]"
                        : "bg-[#2F2FE4]/8 text-[#2F2FE4]"
                      }`}
                  >
                    {item.badge}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative mb-7 flex h-17 w-17 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${isFeatured
                        ? "border border-white/25 bg-white text-[#2F2FE4] shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                        : "border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 text-[#2F2FE4] shadow-[0_15px_35px_rgba(47,47,228,0.10)] group-hover:bg-[#2F2FE4] group-hover:text-white"
                      }`}
                  >
                    <Icon size={30} strokeWidth={2.4} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`relative text-2xl font-black uppercase tracking-tight ${isFeatured ? "text-white" : "text-[#111827]"
                      }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`relative mt-4 text-sm leading-7 ${isFeatured ? "text-white/75" : "text-gray-500"
                      }`}
                  >
                    {item.desc}
                  </p>

                  {/* Bottom CTA */}
                  <div
                    className={`relative mt-8 flex items-center justify-between border-t pt-5 ${isFeatured ? "border-white/20" : "border-gray-200"
                      }`}
                  >
                    <span
                      className={`text-xs font-black uppercase tracking-[0.22em] ${isFeatured
                          ? "text-white/70"
                          : "text-gray-400 group-hover:text-[#2F2FE4]"
                        }`}
                    >
                      Learn More
                    </span>

                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${isFeatured
                          ? "bg-white text-[#2F2FE4]"
                          : "border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 text-[#2F2FE4] group-hover:bg-[#2F2FE4] group-hover:text-white"
                        }`}
                    >
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strip */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-4xl border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_18px_50px_rgba(47,47,228,0.10)]">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            {["Premium Fit", "Fast Delivery", "Best Price", "Trusted Quality"].map(
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
    </section>
  );
}
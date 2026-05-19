import {
  Truck,
  PackageCheck,
  Clock,
  BadgeIndianRupee,
  MapPinned,
  AlertTriangle,
  MapPin,
  Mail,
  Sparkles,
} from "lucide-react";

const policySections = [
  {
    icon: PackageCheck,
    title: "Order Processing",
    content:
      "All orders are processed within 1–2 business days. Orders placed on weekends or holidays will be processed on the next working day.",
  },
  {
    icon: Clock,
    title: "Delivery Time",
    content:
      "Delivery typically takes 3–7 business days depending on your location. Remote areas may take longer.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Shipping Charges",
    content:
      "We offer free shipping on most orders. In some cases, a small shipping fee may apply and will be displayed at checkout.",
  },
  {
    icon: MapPinned,
    title: "Order Tracking",
    content:
      "Once your order is shipped, you will receive a tracking link via SMS or email to monitor your delivery status in real-time.",
  },
  {
    icon: AlertTriangle,
    title: "Delivery Issues",
    content:
      "If your order is delayed, lost, or damaged during transit, please contact our support team immediately. We will assist you in resolving the issue as quickly as possible.",
  },
  {
    icon: MapPin,
    title: "Incorrect Address",
    content:
      "Please ensure your shipping address is correct at checkout. We are not responsible for delays or failed deliveries due to incorrect or incomplete address details.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    content:
      "For any shipping-related queries, feel free to contact us at supportwinslow@gmail.com.",
  },
];

export default function ShippingPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 top-60 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-14">
        {/* Hero */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
              <Sparkles size={15} />
            </span>

            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Winslow Shipping
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-6xl md:text-7xl">
            Shipping
            <span className="relative mx-auto mt-1 block w-fit text-[#2F2FE4]">
              Policy
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-gray-500 sm:text-lg">
            Thank you for shopping with Winslow. We aim to deliver your orders
            safely and quickly across India with reliable packaging and tracking.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left Summary Card */}
          <aside className="h-fit overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.12)] lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-4xl bg-[#2F2FE4] p-8 text-white">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-black/20 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#2F2FE4] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <Truck size={30} />
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tight">
                  Fast & Safe
                  <span className="block text-white/80">Delivery</span>
                </h2>

                <p className="mt-4 text-sm font-medium leading-7 text-white/75">
                  We process orders quickly and ship them with safe packaging to
                  ensure your car accessories reach you in good condition.
                </p>

                <div className="mt-7 space-y-3">
                  {["1–2 Days Processing", "3–7 Days Delivery", "Tracking Updates"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-white" />
                        <span className="text-xs font-black uppercase tracking-wide text-white">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Cards */}
          <div className="space-y-5">
            {policySections.map((section, index) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.title}
                  className="group relative overflow-hidden rounded-4xl border border-[#2F2FE4]/10 bg-white p-3 shadow-[0_20px_60px_rgba(47,47,228,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2F2FE4]/35 hover:shadow-[0_28px_80px_rgba(47,47,228,0.16)]"
                >
                  {/* Shine */}
                  <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                  <div className="relative rounded-[1.6rem] bg-white p-6 sm:p-7">
                    <div className="absolute right-6 top-6 text-6xl font-black leading-none text-[#2F2FE4]/8">
                      0{index + 1}
                    </div>

                    <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 text-[#2F2FE4] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#2F2FE4] group-hover:text-white">
                      <Icon size={24} strokeWidth={2.4} />
                    </div>

                    <h2 className="relative text-2xl font-black uppercase tracking-tight text-[#111827] transition duration-300 group-hover:text-[#2F2FE4]">
                      {section.title}
                    </h2>

                    <p className="relative mt-4 text-sm font-medium leading-7 text-gray-500 sm:text-base">
                      {section.content}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
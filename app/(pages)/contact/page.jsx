"use client";

import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 87962 50447",
      href: "tel:+918796250447",
    },
    {
      icon: Mail,
      title: "Email",
      value: "supportwinslow@gmail.com",
      href: "mailto:supportwinslow@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "E-4 Sector 3 Bawana, Delhi-110039, India",
      href: null,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white px-5 py-10 sm:px-6 sm:py-10 lg:py-18">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

        {/* Soft Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

        {/* Blue Glows */}
        <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
              <Sparkles size={15} />
            </span>

            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
              Contact Winslow
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-6xl md:text-7xl">
            Get In
            <span className="relative mx-auto mt-1 block w-fit text-[#2F2FE4]">
              Touch
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-gray-500 sm:text-lg">
            Have questions about our premium car accessories? Contact the
            Winslow team for product inquiries, support, or business
            collaborations.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative overflow-hidden bg-white px-5 pb-20 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* CONTACT INFO */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-6 shadow-[0_28px_90px_rgba(47,47,228,0.12)] sm:p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F2FE4]/12 blur-[90px]" />
            <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-[#2F2FE4]/8 blur-[90px]" />

            <div className="relative">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)]">
                <MessageCircle size={30} />
              </div>

              <h2 className="text-3xl font-black uppercase tracking-tight text-[#111827] sm:text-4xl">
                Let’s Talk
              </h2>

              <p className="mt-4 text-sm font-medium leading-7 text-gray-500 sm:text-base">
                Reach out to us for product details, order support, dealership
                inquiries, or any car accessories solution.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4]/40 hover:bg-white hover:shadow-[0_18px_45px_rgba(47,47,228,0.12)]">
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2F2FE4]/0 blur-2xl transition group-hover:bg-[#2F2FE4]/14" />

                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_15px_35px_rgba(47,47,228,0.22)] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <Icon size={21} />
                      </div>

                      <div className="relative">
                        <h3 className="text-sm font-black uppercase tracking-wide text-[#111827]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium leading-6 text-gray-500 group-hover:text-[#2F2FE4]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.title} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  );
                })}
              </div>

              {/* Small Trust Strip */}
              <div className="mt-8 rounded-3xl border border-[#2F2FE4]/15 bg-[#2F2FE4]/8 p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                  Fast Response
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                  Our support team usually responds quickly during business
                  hours.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.14)]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F2FE4]/12 blur-[90px]" />

            <div className="relative rounded-4xl bg-[#F7F8FF] p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-4 py-2 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2F2FE4]" />
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                    Send Message
                  </span>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tight text-[#111827] sm:text-4xl">
                  Write Your Message
                </h2>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                  Fill the form and our team will contact you soon.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-wide text-[#111827]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#111827] outline-none transition focus:border-[#2F2FE4]/60 focus:ring-4 focus:ring-[#2F2FE4]/10 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-wide text-[#111827]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#111827] outline-none transition focus:border-[#2F2FE4]/60 focus:ring-4 focus:ring-[#2F2FE4]/10 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-wide text-[#111827]">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#111827] outline-none transition focus:border-[#2F2FE4]/60 focus:ring-4 focus:ring-[#2F2FE4]/10 placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center rounded-full bg-[#2F2FE4] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9] hover:shadow-[0_24px_60px_rgba(47,47,228,0.38)]"
                >
                  Send Message
                  <Send
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
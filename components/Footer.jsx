import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { name: "Shipping Policy", href: "/shipping-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/term-&-conditions" },
  ];

  const trustItems = [
    { icon: ShieldCheck, text: "Premium Quality" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: BadgeCheck, text: "Trusted Brand" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-[#111827]">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

      {/* Blue Glows */}
      <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Main Footer Card */}
        <div className="overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/12 bg-white p-6 shadow-[0_24px_75px_rgba(47,47,228,0.10)] sm:p-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="mb-5 inline-flex items-center gap-4">
                <div className="flex h-17 w-17 items-center justify-center rounded-2xl border border-[#2F2FE4]/15 bg-white p-2 shadow-[0_15px_35px_rgba(47,47,228,0.12)]">
                  <Image
                    src="/logo.png"
                    alt="Winslow Logo"
                    width={60}
                    height={60}
                    className="h-13 w-auto object-contain"
                    priority
                  />
                </div>

                <div>
                  <p className="text-xl font-black uppercase tracking-tight text-[#111827]">
                    Winslow
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                    Premium Accessories
                  </p>
                </div>
              </Link>

              <p className="max-w-sm text-sm font-medium leading-7 text-gray-500">
                Premium car accessories designed for comfort, protection, style,
                and everyday performance.
              </p>

              {/* Social */}
              <div className="mt-6 flex gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61566686099033"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2F2FE4]/15 bg-[#2F2FE4]/8 text-[#2F2FE4] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F2FE4] hover:text-white hover:shadow-[0_15px_35px_rgba(47,47,228,0.24)]"
                >
                  <FaFacebookF size={16} />
                </Link>

                <Link
                  href="https://www.instagram.com/winslow.india/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2F2FE4]/15 bg-[#2F2FE4]/8 text-[#2F2FE4] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F2FE4] hover:text-white hover:shadow-[0_15px_35px_rgba(47,47,228,0.24)]"
                >
                  <FaInstagram size={17} />
                </Link>

                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2F2FE4]/15 bg-[#2F2FE4]/8 text-[#2F2FE4] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F2FE4] hover:text-white hover:shadow-[0_15px_35px_rgba(47,47,228,0.24)]"
                >
                  <FaYoutube size={18} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                Quick Links
              </h4>

              <ul className="space-y-3 text-sm font-bold text-gray-500">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center transition hover:text-[#2F2FE4]"
                    >
                      <span className="mr-2 h-2 w-2 rounded-full bg-[#2F2FE4]/25 transition group-hover:bg-[#2F2FE4]" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                Support
              </h4>

              <ul className="space-y-3 text-sm font-bold text-gray-500">
                {supportLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center transition hover:text-[#2F2FE4]"
                    >
                      <span className="mr-2 h-2 w-2 rounded-full bg-[#2F2FE4]/25 transition group-hover:bg-[#2F2FE4]" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                Contact
              </h4>

              <div className="space-y-3 text-sm font-bold text-gray-500">
                <Link
                  href="mailto:supportwinslow@gmail.com"
                  className="group flex items-start gap-3 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-3 transition hover:border-[#2F2FE4]/35 hover:bg-white hover:text-[#2F2FE4]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                    <Mail size={16} />
                  </span>
                  <span className="pt-2">supportwinslow@gmail.com</span>
                </Link>

                <Link
                  href="tel:+918796250447"
                  className="group flex items-start gap-3 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-3 transition hover:border-[#2F2FE4]/35 hover:bg-white hover:text-[#2F2FE4]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                    <Phone size={16} />
                  </span>
                  <span className="pt-2">+91 8796250447</span>
                </Link>

                <div className="flex items-start gap-3 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                    <MapPin size={16} />
                  </span>
                  <span className="pt-2 leading-6">
                    E-4 Sector 3 Bawana, Delhi-110039
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#2F2FE4]/10 pt-7 text-center text-sm text-gray-500 md:flex-row">
            <p>
              © 2026{" "}
              <span className="font-black uppercase tracking-wide text-[#2F2FE4]">
                Winslow
              </span>
              . All rights reserved.
            </p>

            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
              Premium Car Accessories
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
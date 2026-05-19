"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ShieldCheck,
    Truck,
    Star,
    BadgeCheck,
    ArrowRight,
    Sparkles,
} from "lucide-react";

export default function AboutPage() {
    const highlights = [
        "Premium Quality",
        "Trusted Brand",
        "Fast Delivery",
        "Customer Support",
    ];

    const stats = [
        ["5K+", "Happy Customers"],
        ["500+", "Premium Products"],
        ["99%", "Customer Satisfaction"],
        ["24/7", "Support"],
    ];

    const features = [
        {
            icon: ShieldCheck,
            title: "Premium Quality",
            desc: "High-grade accessories built with perfect fitting and long-lasting finish.",
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            desc: "Quick dispatch and safe packaging for customers across India.",
        },
        {
            icon: Star,
            title: "Trusted Brand",
            desc: "Loved by car owners for reliable quality and premium design.",
        },
        {
            icon: BadgeCheck,
            title: "Satisfaction",
            desc: "Customer-first support with quality-focused automotive solutions.",
        },
    ];

    return (
        <main className="min-h-screen bg-white text-[#111827]">
            {/* HERO SECTION */}
            <section className="relative min-h-140 overflow-hidden bg-white">
                {/* Background Image - clear visible */}
                <Image
                    src="/about/about-banner.png"
                    alt="About Winslow"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Very light overlay only for text readability */}
                <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/15 to-transparent" />

                {/* Bottom soft fade */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-140 max-w-7xl items-center px-5 sm:px-6 lg:px-8">
                    <div className="max-w-xl rounded-4xl border border-white/20 bg-black/25 p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">

                        {/* Small Badge */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[#2F2FE4]">
                            <Sparkles size={15} />
                            <span className="text-xs font-black uppercase tracking-[0.18em]">
                                Premium Accessories
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            About
                            <span className="block text-[#2F2FE4] drop-shadow-[0_0_18px_rgba(47,47,228,0.35)]">
                                Winslow
                            </span>
                        </h1>

                        {/* Short Text */}
                        <p className="mt-4 max-w-md text-sm font-medium leading-7 text-white/85 sm:text-base">
                            Premium car accessories made for style, comfort, protection, and perfect fit.
                        </p>

                        {/* Buttons */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link
                                href="/shop"
                                className="group inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-6 py-3 text-xs font-black uppercase tracking-wide text-white shadow-[0_15px_35px_rgba(47,47,228,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9]"
                            >
                                Shop Now
                                <ArrowRight
                                    size={16}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2F2FE4]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPANY INTRO */}
            <section className="relative overflow-hidden bg-white py-15 sm:py-15 lg:py-15">
                {/* Background */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.10),transparent_42%)]" />
                <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
                    {/* Image Card - image clear visible */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/10 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.16)]">
                        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F2FE4]/12 blur-[90px]" />

                        <div className="relative h-105 overflow-hidden rounded-4xl bg-white sm:h-125">
                            {/* Background only, image ke upar overlay nahi */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#F5F6FF] via-white to-[#EEF0FF]" />
                            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F2FE4]/8 blur-3xl" />

                            <Image
                                src="/about/about-1.png"
                                alt="Winslow Company"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="relative z-10 object-contain p-3 sm:p-5 transition duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#2F2FE4] shadow-[0_0_16px_rgba(47,47,228,0.55)]" />
                            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
                            Built For Better
                            <span className="block text-[#2F2FE4]">Car Upgrades</span>
                        </h2>

                        <p className="mt-6 text-base font-medium leading-8 text-gray-500 sm:text-lg">
                            Winslow specializes in premium automotive accessories like Door
                            Visors, Parcel Trays, Door Guards, and Steering Knobs.
                        </p>

                        <p className="mt-4 text-base font-medium leading-8 text-gray-500 sm:text-lg">
                            Our focus is delivering durable, stylish, and high-performance
                            products that improve your vehicle experience.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {highlights.map((item, i) => (
                                <div
                                    key={item}
                                    className="group relative overflow-hidden rounded-3xl border border-[#2F2FE4]/10 bg-white p-5 shadow-[0_18px_45px_rgba(47,47,228,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4]/40"
                                >
                                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2F2FE4]/0 blur-2xl transition group-hover:bg-[#2F2FE4]/14" />

                                    <p className="text-xs font-black text-[#2F2FE4]/50">
                                        0{i + 1}
                                    </p>

                                    <h3 className="relative mt-2 text-base font-black uppercase tracking-tight text-[#111827] group-hover:text-[#2F2FE4] sm:text-lg">
                                        {item}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="relative overflow-hidden bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2F2FE4] p-6 shadow-[0_30px_90px_rgba(47,47,228,0.28)] sm:p-10">
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
                        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-black/15 blur-3xl" />

                        <div className="relative grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map(([number, label]) => (
                                <div
                                    key={label}
                                    className="relative rounded-[1.8rem] border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15"
                                >
                                    <p className="text-5xl font-black text-white md:text-6xl">
                                        {number}
                                    </p>

                                    <p className="mt-3 text-sm font-black uppercase tracking-wide text-white/75">
                                        {label}
                                    </p>

                                    <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-white" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-14 max-w-4xl text-center">
                        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#2F2FE4] shadow-[0_0_16px_rgba(47,47,228,0.55)]" />
                            <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
                                Why Choose Winslow
                            </span>
                        </div>

                        <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
                            Premium Quality
                            <span className="block text-[#2F2FE4]">You Can Trust</span>
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-4">
                        {features.map((item, i) => {
                            const Icon = item.icon;
                            const featured = i === 0;

                            return (
                                <div
                                    key={item.title}
                                    className={`group relative overflow-hidden rounded-4xl border p-3 transition-all duration-500 hover:-translate-y-3 ${featured
                                        ? "border-[#2F2FE4]/35 bg-white shadow-[0_30px_95px_rgba(47,47,228,0.20)]"
                                        : "border-[#2F2FE4]/10 bg-white shadow-[0_24px_75px_rgba(47,47,228,0.10)] hover:border-[#2F2FE4]/45 hover:shadow-[0_35px_100px_rgba(47,47,228,0.22)]"
                                        }`}
                                >
                                    <div
                                        className={`relative h-full rounded-[1.6rem] p-7 text-center ${featured ? "bg-[#2F2FE4] text-white" : "bg-white"
                                            }`}
                                    >
                                        <div
                                            className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 ${featured
                                                ? "bg-white text-[#2F2FE4]"
                                                : "bg-[#2F2FE4]/8 text-[#2F2FE4] group-hover:bg-[#2F2FE4] group-hover:text-white"
                                                }`}
                                        >
                                            <Icon size={28} strokeWidth={2.4} />
                                        </div>

                                        <h3
                                            className={`text-xl font-black uppercase tracking-tight ${featured ? "text-white" : "text-[#111827]"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`mt-3 text-sm leading-7 ${featured ? "text-white/75" : "text-gray-500"
                                                }`}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
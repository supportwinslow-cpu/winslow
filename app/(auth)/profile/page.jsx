"use client";

import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import {
    Mail,
    User,
    LogOut,
    ShieldCheck,
    BadgeCheck,
    Fingerprint,
    Sparkles,
    ShoppingBag,
    ArrowRight,
} from "lucide-react";

export default function ProfilePage() {
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 text-center">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_48%,#ffffff_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.14)]">
                    <div className="rounded-4xl bg-[#F7F8FF] p-10">
                        <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-3xl bg-[#2F2FE4] text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)]">
                            <User size={34} />
                        </div>

                        <h1 className="text-3xl font-black uppercase text-[#111827]">
                            Please login first
                        </h1>

                        <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-7 text-gray-500">
                            Login to view and manage your Winslow account details.
                        </p>

                        <Link
                            href="/login"
                            className="group mt-7 inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9]"
                        >
                            Login Now
                            <ArrowRight
                                size={18}
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    const provider =
        user?.providerData?.[0]?.providerId === "google.com"
            ? "Google"
            : "Email & Password";

    const initials =
        user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U";

    return (
        <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_48%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

            {/* Blue Glows */}
            <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
            <div className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

            <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-8">
                    <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
                            <Sparkles size={15} />
                        </span>

                        <span className="text-xs font-black uppercase tracking-[0.24em] text-[#2F2FE4]">
                            My Account
                        </span>
                    </div>

                    <h1 className="text-4xl font-black uppercase tracking-tight text-[#111827] sm:text-5xl">
                        My
                        <span className="ml-2 text-[#2F2FE4]">Profile</span>
                    </h1>

                    <p className="mt-2 text-sm font-medium text-gray-500">
                        Manage your account details and login information.
                    </p>
                </div>

                {/* Main Profile Card */}
                <div className="overflow-hidden rounded-[2.7rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_35px_110px_rgba(47,47,228,0.16)]">
                    {/* Cover */}
                    <div className="relative overflow-hidden rounded-[2.25rem] bg-[#2F2FE4] px-6 pb-8 pt-10 text-white sm:px-8 sm:pt-12">
                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
                        <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

                        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                {/* Avatar */}
                                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-4xl border-4 border-white bg-white shadow-[0_20px_55px_rgba(0,0,0,0.22)]">
                                    {user.photoURL ? (
                                        <Image
                                            src={user.photoURL}
                                            alt="profile"
                                            fill
                                            sizes="112px"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-white text-5xl font-black uppercase text-[#2F2FE4]">
                                            {initials}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-xl">
                                        <BadgeCheck size={15} />
                                        <span className="text-xs font-black uppercase tracking-wide">
                                            Active Account
                                        </span>
                                    </div>

                                    <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                                        {user?.displayName || "User"}
                                    </h2>

                                    <p className="mt-2 break-all text-sm font-medium text-white/75">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={logout}
                                className="group inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_18px_45px_rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white"
                            >
                                <LogOut
                                    size={18}
                                    className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                                />
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_0.9fr]">
                        {/* Details */}
                        <div className="space-y-6">
                            <div className="grid gap-5 md:grid-cols-2">
                                {/* Name */}
                                <div className="group relative overflow-hidden rounded-4xl border border-[#2F2FE4]/10 bg-white p-5 shadow-[0_18px_55px_rgba(47,47,228,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4]/35">
                                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#2F2FE4]/0 blur-2xl transition group-hover:bg-[#2F2FE4]/12" />

                                    <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F2FE4]/8 text-[#2F2FE4] transition group-hover:bg-[#2F2FE4] group-hover:text-white">
                                        <User size={22} />
                                    </div>

                                    <h3 className="relative text-sm font-black uppercase tracking-[0.18em] text-[#111827]">
                                        Full Name
                                    </h3>

                                    <p className="relative mt-2 text-sm font-semibold text-gray-500">
                                        {user?.displayName || "Not Added"}
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="group relative overflow-hidden rounded-4xl border border-[#2F2FE4]/10 bg-white p-5 shadow-[0_18px_55px_rgba(47,47,228,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4]/35">
                                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#2F2FE4]/0 blur-2xl transition group-hover:bg-[#2F2FE4]/12" />

                                    <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F2FE4]/8 text-[#2F2FE4] transition group-hover:bg-[#2F2FE4] group-hover:text-white">
                                        <Mail size={22} />
                                    </div>

                                    <h3 className="relative text-sm font-black uppercase tracking-[0.18em] text-[#111827]">
                                        Email Address
                                    </h3>

                                    <p className="relative mt-2 break-all text-sm font-semibold text-gray-500">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                            {/* Account Info */}
                            <div className="overflow-hidden rounded-4xl border border-[#2F2FE4]/10 bg-white p-5 shadow-[0_18px_55px_rgba(47,47,228,0.08)]">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_16px_38px_rgba(47,47,228,0.25)]">
                                        <ShieldCheck size={23} />
                                    </span>

                                    <div>
                                        <h3 className="text-xl font-black uppercase tracking-tight text-[#111827]">
                                            Account Information
                                        </h3>
                                        <p className="text-xs font-semibold text-gray-500">
                                            Login and verification details
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        {
                                            label: "Email Verified",
                                            value: user?.emailVerified ? "Yes" : "No",
                                        },
                                        {
                                            label: "Account Provider",
                                            value: provider,
                                        },
                                        {
                                            label: "User ID",
                                            value: `${user?.uid?.slice(0, 12)}...`,
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between gap-4 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] px-4 py-3"
                                        >
                                            <span className="text-sm font-bold text-gray-500">
                                                {item.label}
                                            </span>

                                            <span className="text-right text-sm font-black text-[#111827]">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel */}
                        <aside className="overflow-hidden rounded-4xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-5 shadow-[0_18px_55px_rgba(47,47,228,0.08)]">
                            <div className="relative overflow-hidden rounded-[1.7rem] bg-white p-6">
                                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#2F2FE4]/12 blur-3xl" />

                                <div className="relative">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F2FE4] text-white shadow-[0_16px_38px_rgba(47,47,228,0.25)]">
                                        <ShoppingBag size={25} />
                                    </div>

                                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#111827]">
                                        Ready To Shop?
                                    </h3>

                                    <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                                        Explore premium car accessories and upgrade your ride with
                                        Winslow.
                                    </p>

                                    <Link
                                        href="/shop"
                                        className="group mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9]"
                                    >
                                        Shop Now
                                        <ArrowRight
                                            size={18}
                                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
}
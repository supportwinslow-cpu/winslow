import {
    ShieldCheck,
    Database,
    Truck,
    Cookie,
    LockKeyhole,
    UserCheck,
    RefreshCw,
    Mail,
    Sparkles,
} from "lucide-react";

const sections = [
    {
        icon: Database,
        title: "Information We Collect",
        content:
            "We may collect the following types of information:",
        points: [
            "Name, phone number, email address",
            "Shipping and billing address",
            "Payment details processed securely via third-party gateways",
            "Device information, IP address, and browser data",
        ],
    },
    {
        icon: Truck,
        title: "How We Use Your Information",
        points: [
            "To process and deliver your orders",
            "To communicate order updates and support",
            "To improve our website and services",
            "To send promotional offers only if you opt-in",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Sharing of Information",
        content:
            "We do not sell or rent your personal data. Your information may be shared only with trusted third-party services such as payment gateways and shipping partners to fulfill your order.",
    },
    {
        icon: Cookie,
        title: "Cookies & Tracking",
        content:
            "We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can disable cookies in your browser settings if you prefer.",
    },
    {
        icon: LockKeyhole,
        title: "Data Security",
        content:
            "We implement appropriate security measures to protect your personal data from unauthorized access, misuse, or disclosure.",
    },
    {
        icon: UserCheck,
        title: "Your Rights",
        content:
            "You have the right to access, update, or delete your personal information. You can contact us anytime for such requests.",
    },
    {
        icon: RefreshCw,
        title: "Changes to This Policy",
        content:
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
    },
    {
        icon: Mail,
        title: "Contact Us",
        content:
            "If you have any questions regarding this Privacy Policy, please contact us at supportwinslow@gmail.com.",
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />
            <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

            {/* Blue Glow */}
            <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
            <div className="absolute -left-32 top-60 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-14 ">
                {/* Hero */}
                <div className="mx-auto mb-12 max-w-4xl text-center">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(47,47,228,0.10)]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2FE4]/10 text-[#2F2FE4]">
                            <Sparkles size={15} />
                        </span>

                        <span className="text-xs font-black uppercase tracking-[0.28em] text-[#2F2FE4]">
                            Winslow Privacy
                        </span>
                    </div>

                    <h1 className="text-5xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-6xl md:text-7xl">
                        Privacy
                        <span className="relative mx-auto mt-1 block w-fit text-[#2F2FE4]">
                            Policy
                            <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#2F2FE4]/15" />
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-gray-500 sm:text-lg">
                        We value your privacy and are committed to protecting your personal
                        information when you visit our website or make a purchase.
                    </p>    
                </div>

                {/* Main Content Layout */}
                <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                    {/* Left Summary Card */}
                    <aside className="h-fit overflow-hidden rounded-[2.5rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_28px_90px_rgba(47,47,228,0.12)] lg:sticky lg:top-28">
                        <div className="relative overflow-hidden rounded-4xl bg-[#2F2FE4] p-8 text-white">
                            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
                            <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-black/20 blur-3xl" />

                            <div className="relative">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#2F2FE4] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                                    <ShieldCheck size={30} />
                                </div>

                                <h2 className="text-3xl font-black uppercase tracking-tight">
                                    Your Data,
                                    <span className="block text-white/80">Protected</span>
                                </h2>

                                <p className="mt-4 text-sm font-medium leading-7 text-white/75">
                                    We only use your information to process orders, provide
                                    support, improve services, and keep your shopping experience
                                    safe.
                                </p>

                                <div className="mt-7 space-y-3">
                                    {["Secure Payments", "Order Support", "No Data Selling"].map(
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
                        {sections.map((section, index) => {
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

                                        {section.content && (
                                            <p className="relative mt-4 text-sm font-medium leading-7 text-gray-500 sm:text-base">
                                                {section.content}
                                            </p>
                                        )}

                                        {section.points && (
                                            <ul className="relative mt-5 grid gap-3">
                                                {section.points.map((point) => (
                                                    <li
                                                        key={point}
                                                        className="flex items-start gap-3 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] px-4 py-3 text-sm font-medium leading-6 text-gray-600"
                                                    >
                                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2F2FE4]" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
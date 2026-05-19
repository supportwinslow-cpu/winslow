import products from "./products";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function DoorVisorPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

            {/* Soft Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

            {/* Blue Glows */}
            <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
            <div className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-7">
                {/* Top Info Strip */}
                <div className="mb-8 flex flex-col justify-between gap-4 rounded-4xl border border-[#2F2FE4]/10 bg-white p-5 shadow-[0_18px_55px_rgba(47,47,228,0.08)] sm:flex-row sm:items-center">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full bg-[#2F2FE4]/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#2F2FE4]">
                            <Sparkles size={13} />
                            Chromeline Only
                        </p>
                        <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-[#111827]">
                            Door Visor
                        </h2>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2F2FE4]/8 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2F2FE4]">
                        <ShieldCheck size={15} />
                        Rain & Wind Protection
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => {
                        const imageSrc = Array.isArray(product.images)
                            ? product.images[0]
                            : product.images;

                        const piecesText = product.specifications?.pieces || "";
                        const isSetOf4 = piecesText.includes("4");
                        const isSetOf6 = piecesText.includes("6");

                        const originalPrice =
                            product.originalPrice ?? (isSetOf6 ? 3000 : isSetOf4 ? 2500 : null);

                        const discountPercentage =
                            product.discountPercentage ?? (originalPrice ? 35 : null);

                        const displayPrice = originalPrice
                            ? Math.round(originalPrice - (originalPrice * (discountPercentage || 0)) / 100)
                            : product.price;

                        return (
                            <Link
                                key={product.id}
                                href={`/shop/door-visor/${product.slug}`}
                                className="group"
                            >
                                <div className="relative h-full overflow-hidden rounded-[2.3rem] border border-[#2F2FE4]/10 bg-white p-3 shadow-[0_24px_75px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-3 hover:border-[#2F2FE4]/45 hover:shadow-[0_35px_100px_rgba(47,47,228,0.22)]">
                                    {/* Hover Shine */}
                                    <div className="absolute -left-full top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:left-[130%]" />

                                    {/* Badges */}
                                    <div className="absolute left-6 top-6 z-30 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_10px_25px_rgba(47,47,228,0.12)] backdrop-blur-xl">
                                        0{index + 1}
                                    </div>

                                    {discountPercentage && (
                                        <div className="absolute right-6 top-6 z-30 rounded-full bg-[#16A34A] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(22,163,74,0.25)]">
                                            {discountPercentage}% OFF
                                        </div>
                                    )}

                                    {/* Image */}
                                    <div className="relative h-72 overflow-hidden rounded-[1.8rem] bg-[#EEF0FF] sm:h-80">
                                        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-inner transition duration-500 group-hover:scale-110" />

                                        <Image
                                            src={imageSrc}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="relative z-10 object-contain p-7 transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-[#2F2FE4]/18" />

                                        <div className="absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 translate-y-12 rounded-full bg-[#2F2FE4]/0 blur-[70px] transition duration-500 group-hover:bg-[#2F2FE4]/24" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-30 -mt-10 px-3 pb-3">
                                        <div className="rounded-[1.8rem] border border-gray-200 bg-white/95 p-5 text-center shadow-[0_18px_45px_rgba(47,47,228,0.12)] backdrop-blur-xl transition duration-500 group-hover:border-[#2F2FE4]/40">
                                            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#2F2FE4]">
                                                Chromeline Finish
                                            </p>

                                            <h2 className="text-xl font-black uppercase tracking-tight text-[#111827] transition duration-300 group-hover:text-[#2F2FE4]">
                                                {product.name}
                                            </h2>

                                            <div className="mt-4 flex flex-wrap items-end justify-center gap-2">
                                                {originalPrice && (
                                                    <span className="text-sm font-bold text-gray-400 line-through">
                                                        ₹{originalPrice}
                                                    </span>
                                                )}

                                                <span className="text-3xl font-black leading-none text-[#2F2FE4]">
                                                    ₹{displayPrice}
                                                </span>
                                            </div>

                                            {originalPrice && (
                                                <p className="mt-2 text-[11px] font-black uppercase tracking-wide text-[#16A34A]">
                                                    Save ₹{originalPrice - displayPrice} on Chromeline
                                                </p>
                                            )}

                                            <div className="mt-5 inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-6 py-3 text-xs font-black uppercase tracking-wide text-white shadow-[0_16px_35px_rgba(47,47,228,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2424c9]">
                                                View Product
                                                <ArrowRight
                                                    size={15}
                                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#2F2FE4] transition-all duration-500 group-hover:w-28" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

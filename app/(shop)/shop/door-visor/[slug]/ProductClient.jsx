"use client";

import { useRouter } from "next/navigation";
import products from "../products";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ShoppingCart,
    Zap,
    ShieldCheck,
    Truck,
    BadgeCheck,
    Minus,
    Plus,
    Sparkles,
} from "lucide-react";

const getPriceInfo = (item) => {
    const piecesText = item?.specifications?.pieces || "";
    const isSetOf4 = piecesText.toLowerCase().includes("set of 4");
    const isSetOf6 = piecesText.toLowerCase().includes("set of 6");

    const originalPrice = isSetOf4
        ? 2500
        : isSetOf6
            ? 3000
            : item?.originalPrice;

    const salePrice = isSetOf4
        ? 1625
        : isSetOf6
            ? 1950
            : item?.price;

    const discountPercentage = isSetOf4 || isSetOf6
        ? 35
        : item?.discountPercentage;

    return {
        piecesText,
        originalPrice,
        salePrice,
        discountPercentage,
    };
};

const getCleanDescription = (description = "") => {
    return description
        .replace(/Available in Smoke and Chromeline finish\./gi, "Available in Chromeline finish.")
        .replace(/Available in Smoke and Chromeline finish/gi, "Available in Chromeline finish")
        .replace(/Smoke and Chromeline/gi, "Chromeline")
        .replace(/Chromeline \/ Smoke/gi, "Chromeline");
};

export default function ProductClient({ slug }) {
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-5 text-center">
                <div className="rounded-4xl border border-[#2F2FE4]/15 bg-white p-10 shadow-[0_24px_75px_rgba(47,47,228,0.12)]">
                    <h1 className="text-3xl font-black uppercase text-[#111827]">
                        Product Not Found
                    </h1>

                    <Link
                        href="/shop"
                        className="mt-6 inline-flex rounded-full bg-[#2F2FE4] px-7 py-3 text-sm font-black uppercase tracking-wide text-white"
                    >
                        Back to Shop
                    </Link>
                </div>
            </main>
        );
    }

    const imageSrc = Array.isArray(product.images)
        ? product.images[0]
        : product.images;

    const priceInfo = getPriceInfo(product);
    const cleanDescription = getCleanDescription(product.description);

    const productForCart = {
        ...product,
        brand: "Chromeline",
        price: priceInfo.salePrice,
        originalPrice: priceInfo.originalPrice,
        discountPercentage: priceInfo.discountPercentage,
        description: cleanDescription,
        variants: Array.isArray(product.variants)
            ? product.variants
                .filter((variant) => variant.name?.toLowerCase() === "Chromeline")
                .map((variant) => ({ ...variant, price: priceInfo.salePrice }))
            : product.variants,
    };

    const handleAddToCart = () => {
        addToCart(productForCart, quantity, "Chromeline");
    };

    const handleBuyNow = () => {
        addToCart(productForCart, quantity, "Chromeline");
        router.push("/cart");
    };

    const relatedProducts = products
        .filter((p) => p.slug !== slug)
        .slice(0, 4);

    return (
        <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[42px_42px]" />

            {/* Blue Glows */}
            <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-[#2F2FE4]/12 blur-[150px]" />
            <div className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />
            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#2F2FE4]/8 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-10 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-bold text-gray-500">
                    <Link href="/" className="transition hover:text-[#2F2FE4]">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/shop" className="transition hover:text-[#2F2FE4]">
                        Shop
                    </Link>
                    <span>/</span>
                    <span className="text-[#2F2FE4]">{product.name}</span>
                </div>

                {/* Product Main Card */}
                <section className="overflow-hidden rounded-[2.6rem] border border-[#2F2FE4]/15 bg-white p-3 shadow-[0_30px_100px_rgba(47,47,228,0.14)]">
                    <div className="grid gap-8 rounded-[2.2rem] bg-white p-4 sm:p-6 lg:grid-cols-2 lg:p-8">
                        {/* Product Image */}
                        <div className="group relative overflow-hidden rounded-4xl bg-white">
                            {/* Badge */}
                            <div className="absolute left-5 top-5 z-20 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_12px_28px_rgba(47,47,228,0.12)] backdrop-blur-xl">
                                {priceInfo.discountPercentage
                                    ? `${priceInfo.discountPercentage}% OFF`
                                    : "Premium Fit"}
                            </div>

                            {/* Image full cover - no gap */}
                            <div className="relative h-105 w-full sm:h-130 lg:h-140">
                                <Image
                                    src={imageSrc}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 px-5 py-2.5">
                                <Sparkles size={15} className="text-[#2F2FE4]" />

                                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                                    Chromeline Only
                                </span>
                            </div>

                            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
                                {product.name}
                            </h1>

                            <div className="mt-5 flex flex-wrap items-end gap-3">
                                {priceInfo.originalPrice && (
                                    <span className="pb-1 text-xl font-black text-gray-400 line-through sm:text-2xl">
                                        ₹{priceInfo.originalPrice}
                                    </span>
                                )}

                                <span className="text-4xl font-black text-[#2F2FE4] sm:text-5xl">
                                    ₹{priceInfo.salePrice}
                                </span>

                                {priceInfo.discountPercentage && (
                                    <span className="mb-1 rounded-full bg-green-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-green-600">
                                        {priceInfo.discountPercentage}% OFF
                                    </span>
                                )}
                            </div>

                            {priceInfo.piecesText && (
                                <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-[#2F2FE4]">
                                    {priceInfo.piecesText} • Chromeline Finish
                                </p>
                            )}

                            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-gray-500">
                                {cleanDescription}
                            </p>

                            {/* Trust Badges */}
                            <div className="mt-7 grid gap-3 sm:grid-cols-3">
                                {[
                                    { icon: ShieldCheck, text: "Premium Quality" },
                                    { icon: Truck, text: "Fast Delivery" },
                                    { icon: BadgeCheck, text: "Perfect Fit" },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.text}
                                            className="flex items-center gap-3 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] px-4 py-3"
                                        >
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                                                <Icon size={17} />
                                            </span>

                                            <span className="text-xs font-black uppercase tracking-wide text-[#111827]">
                                                {item.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Quantity */}
                            <div className="mt-8">
                                <h3 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#111827]">
                                    Quantity
                                </h3>

                                <div className="flex w-fit items-center rounded-full border border-[#2F2FE4]/15 bg-white p-1 shadow-[0_12px_35px_rgba(47,47,228,0.08)]">
                                    <button
                                        type="button"
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4] transition hover:bg-[#2F2FE4] hover:text-white"
                                    >
                                        <Minus size={18} />
                                    </button>

                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(Math.max(1, Number(e.target.value) || 1))
                                        }
                                        className="h-11 w-16 bg-transparent text-center text-lg font-black text-[#111827] outline-none"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4] transition hover:bg-[#2F2FE4] hover:text-white"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <button
                                    onClick={handleAddToCart}
                                    className="group inline-flex items-center justify-center rounded-full border border-[#2F2FE4]/25 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_15px_35px_rgba(47,47,228,0.10)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F2FE4] hover:text-white hover:shadow-[0_20px_45px_rgba(47,47,228,0.25)]"
                                >
                                    <ShoppingCart size={18} className="mr-2" />
                                    Add to Cart
                                </button>

                                <button
                                    onClick={handleBuyNow}
                                    className="group inline-flex items-center justify-center rounded-full bg-[#2F2FE4] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(47,47,228,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2424c9] hover:shadow-[0_24px_60px_rgba(47,47,228,0.38)]"
                                >
                                    <Zap size={18} className="mr-2" />
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="mt-20">
                    <div className="mb-8">
                        <h2 className="text-3xl font-black uppercase text-[#111827]">
                            Related Products
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {relatedProducts.map((item, index) => {
                            const relatedImageSrc = Array.isArray(item.images)
                                ? item.images[0]
                                : item.images;

                            const relatedPriceInfo = getPriceInfo(item);

                            return (
                                <Link
                                    key={item.id}
                                    href={`/shop/door-visor/${item.slug}`}
                                    className="group"
                                >
                                    <div className="relative h-full overflow-hidden rounded-4xl border border-[#2F2FE4]/10 bg-white p-3 shadow-[0_20px_60px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-3 hover:border-[#2F2FE4]/45 hover:shadow-[0_30px_90px_rgba(47,47,228,0.20)]">
                                        <div className="absolute left-5 top-5 z-20 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-sm">
                                            0{index + 1}
                                        </div>

                                        {relatedPriceInfo.discountPercentage && (
                                            <div className="absolute right-5 top-5 z-20 rounded-full bg-[#2F2FE4] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white shadow-sm">
                                                {relatedPriceInfo.discountPercentage}% OFF
                                            </div>
                                        )}

                                        {/* Related image full cover - no gap */}
                                        <div className="relative h-65 overflow-hidden rounded-3xl bg-white">
                                            <Image
                                                src={relatedImageSrc}
                                                alt={item.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, 25vw"
                                                className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                                            />
                                        </div>

                                        <div className="p-4 text-center">
                                            <h3 className="text-sm font-black uppercase tracking-tight text-[#111827] transition group-hover:text-[#2F2FE4]">
                                                {item.name}
                                            </h3>

                                            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                                                {relatedPriceInfo.originalPrice && (
                                                    <span className="text-sm font-black text-gray-400 line-through">
                                                        ₹{relatedPriceInfo.originalPrice}
                                                    </span>
                                                )}

                                                <span className="text-lg font-black text-[#2F2FE4]">
                                                    ₹{relatedPriceInfo.salePrice}
                                                </span>
                                            </div>

                                            {relatedPriceInfo.piecesText && (
                                                <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4]">
                                                    {relatedPriceInfo.piecesText}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
}
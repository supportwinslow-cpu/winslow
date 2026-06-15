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

const SALE_PRICE = 299;
const DEFAULT_ORIGINAL_PRICE = 599;

const getDiscountPercentage = (originalPrice, salePrice) => {
    const original = Number(originalPrice) || DEFAULT_ORIGINAL_PRICE;
    const price = Number(salePrice) || SALE_PRICE;

    if (!original || price >= original) return 0;

    return Math.round(((original - price) / original) * 100);
};

export default function ProductClient({ slug }) {
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-5 text-center">
                <div className="rounded-4xl border border-[#2F2FE4]/15 bg-white p-8 shadow-[0_24px_75px_rgba(47,47,228,0.12)]">
                    <h1 className="text-2xl font-black uppercase text-[#111827] sm:text-3xl">
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

    const originalPrice = Number(product.originalPrice) || DEFAULT_ORIGINAL_PRICE;
    const salePrice = SALE_PRICE;
    const discountPercentage = getDiscountPercentage(originalPrice, salePrice);
    const savedAmount = originalPrice - salePrice;

    const productForCart = {
        ...product,
        price: salePrice,
        originalPrice,
        discountPercentage,
    };

    const handleAddToCart = () => {
        addToCart(productForCart, quantity, product.brand);
    };

    const handleBuyNow = () => {
        addToCart(productForCart, quantity, product.brand);
        router.push("/cart");
    };

    const relatedProducts = products
        .filter((p) => p.slug !== slug)
        .slice(0, 4);

    return (
        <main className="relative min-h-screen overflow-hidden bg-white pb-28 text-[#111827] lg:pb-0">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />
            <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(47,47,228,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(47,47,228,0.06)_1px,transparent_1px)] bg-size-[36px_36px]" />

            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2F2FE4]/10 blur-[110px] sm:h-105 sm:w-105" />
            <div className="absolute -left-32 top-72 h-72 w-72 rounded-full bg-[#2F2FE4]/8 blur-[120px]" />
            <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#2F2FE4]/8 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-4 flex items-center gap-2 overflow-hidden text-[11px] font-bold text-gray-500 sm:mb-8 sm:text-sm">
                    <Link href="/" className="shrink-0 transition hover:text-[#2F2FE4]">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/shop" className="shrink-0 transition hover:text-[#2F2FE4]">
                        Shop
                    </Link>
                    <span>/</span>
                    <span className="truncate text-[#2F2FE4]">{product.name}</span>
                </div>

                {/* Product Main Card */}
                <section className="overflow-hidden rounded-[1.7rem] border border-[#2F2FE4]/15 bg-white p-2 shadow-[0_20px_70px_rgba(47,47,228,0.12)] sm:rounded-[2.6rem] sm:p-3">
                    <div className="grid gap-5 rounded-[1.4rem] bg-white p-3 sm:gap-8 sm:rounded-[2.2rem] sm:p-6 lg:grid-cols-2 lg:p-8">
                        {/* Product Image */}
                        <div className="group relative overflow-hidden rounded-3xl bg-[#F7F8FF] sm:rounded-4xl">
                            <div className="absolute left-3 top-3 z-20 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_10px_24px_rgba(47,47,228,0.12)] backdrop-blur-xl sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                                Premium Fit
                            </div>

                            <div className="absolute right-3 top-3 z-20 rounded-full bg-[#2F2FE4] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(47,47,228,0.22)] sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                                {discountPercentage}% OFF
                            </div>

                            <div className="relative h-77.5 w-full sm:h-130 lg:h-155">
                                <Image
                                    src={imageSrc}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-contain p-4 transition duration-700 group-hover:scale-[1.03] sm:p-6"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 px-4 py-2 sm:mb-5 sm:gap-3 sm:px-5 sm:py-2.5">
                                <Sparkles size={14} className="text-[#2F2FE4]" />

                                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#2F2FE4] sm:text-xs sm:tracking-[0.22em]">
                                    {product.brand || "Winslow Premium"}
                                </span>
                            </div>

                            <h1 className="text-[26px] font-black uppercase leading-[1.08] tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
                                {product.name}
                            </h1>

                            {/* Price */}
                            <div className="mt-5 rounded-3xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-4 sm:bg-transparent sm:p-0 sm:border-0">
                                <div className="flex flex-wrap items-end gap-3">
                                    <span className="text-xl font-black text-gray-400 line-through sm:text-2xl">
                                        ₹{originalPrice}
                                    </span>

                                    <span className="text-4xl font-black leading-none text-[#2F2FE4] sm:text-5xl">
                                        ₹{salePrice}
                                    </span>

                                    <span className="mb-1 rounded-full bg-green-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-green-700">
                                        {discountPercentage}% OFF
                                    </span>
                                </div>

                                <p className="mt-2 text-sm font-black text-green-700">
                                    You Save ₹{savedAmount}
                                </p>
                            </div>

                            <p className="mt-5 text-sm font-medium leading-7 text-gray-500 sm:max-w-xl sm:text-base sm:leading-8">
                                {product.description}
                            </p>

                            {/* Trust Badges */}
                            <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-7 sm:gap-3">
                                {[
                                    { icon: ShieldCheck, text: "Premium Quality" },
                                    { icon: Truck, text: "Fast Delivery" },
                                    { icon: BadgeCheck, text: "Perfect Fit" },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.text}
                                            className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] px-2 py-3 text-center sm:flex-row sm:justify-start sm:gap-3 sm:px-4"
                                        >
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
                                                <Icon size={17} />
                                            </span>

                                            <span className="text-[10px] font-black uppercase leading-tight tracking-wide text-[#111827] sm:text-xs">
                                                {item.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Quantity */}
                            <div className="mt-7 sm:mt-8">
                                <h3 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#111827] sm:text-sm">
                                    Quantity
                                </h3>

                                <div className="flex w-fit items-center rounded-full border border-[#2F2FE4]/15 bg-white p-1 shadow-[0_12px_35px_rgba(47,47,228,0.08)]">
                                    <button
                                        type="button"
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4] transition hover:bg-[#2F2FE4] hover:text-white"
                                        aria-label="Decrease quantity"
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
                                        aria-label="Increase quantity"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Desktop / Tablet Buttons */}
                            <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-2">
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="group inline-flex items-center justify-center rounded-full border border-[#2F2FE4]/25 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_15px_35px_rgba(47,47,228,0.10)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F2FE4] hover:text-white hover:shadow-[0_20px_45px_rgba(47,47,228,0.25)]"
                                >
                                    <ShoppingCart size={18} className="mr-2" />
                                    Add to Cart
                                </button>

                                <button
                                    type="button"
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
                <section className="mt-12 sm:mt-20">
                    <div className="mb-5 sm:mb-8">
                        <h2 className="text-2xl font-black uppercase text-[#111827] sm:text-3xl">
                            Related Products
                        </h2>
                        <p className="mt-1 text-sm font-semibold text-gray-500">
                            More designs for your car protection.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
                        {relatedProducts.map((item, index) => {
                            const relatedImageSrc = Array.isArray(item.images)
                                ? item.images[0]
                                : item.images;

                            const relatedOriginalPrice =
                                Number(item.originalPrice) || DEFAULT_ORIGINAL_PRICE;
                            const relatedSalePrice = SALE_PRICE;
                            const relatedDiscount = getDiscountPercentage(
                                relatedOriginalPrice,
                                relatedSalePrice
                            );

                            return (
                                <Link
                                    key={item.id}
                                    href={`/shop/door-edge-guard/${item.slug}`}
                                    className="group"
                                >
                                    <div className="relative h-full overflow-hidden rounded-[1.4rem] border border-[#2F2FE4]/10 bg-white p-2 shadow-[0_16px_45px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[#2F2FE4]/45 hover:shadow-[0_24px_70px_rgba(47,47,228,0.18)] sm:rounded-4xl sm:p-3">
                                        <div className="absolute left-3 top-3 z-20 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-sm sm:left-5 sm:top-5 sm:px-3 sm:text-[10px]">
                                            0{index + 1}
                                        </div>

                                        <div className="absolute right-3 top-3 z-20 rounded-full bg-[#2F2FE4] px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(47,47,228,0.22)] sm:right-5 sm:top-5 sm:px-3 sm:text-[10px]">
                                            {relatedDiscount}% OFF
                                        </div>

                                        <div className="relative h-37.5 overflow-hidden rounded-[1.2rem] bg-[#F7F8FF] sm:h-64 sm:rounded-3xl">
                                            <Image
                                                src={relatedImageSrc}
                                                alt={item.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 25vw"
                                                className="object-contain p-3 transition duration-700 group-hover:scale-[1.04] sm:p-4"
                                            />
                                        </div>

                                        <div className="px-1 py-3 text-center sm:p-4">
                                            <h3 className="line-clamp-2 min-h-8.5 text-[11px] font-black uppercase leading-tight tracking-tight text-[#111827] transition group-hover:text-[#2F2FE4] sm:min-h-0 sm:text-sm">
                                                {item.name}
                                            </h3>

                                            <div className="mt-3 flex items-center justify-center gap-2">
                                                <span className="text-xs font-black text-gray-400 line-through sm:text-sm">
                                                    ₹{relatedOriginalPrice}
                                                </span>

                                                <span className="text-lg font-black text-[#2F2FE4] sm:text-xl">
                                                    ₹{relatedSalePrice}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#2F2FE4]/15 bg-white/95 px-3 py-3 shadow-[0_-12px_35px_rgba(17,24,39,0.12)] backdrop-blur-xl sm:hidden">
                <div className="mb-2 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-wide text-gray-500">
                            Total Price
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-black text-gray-400 line-through">
                                ₹{originalPrice}
                            </span>
                            <span className="text-2xl font-black leading-none text-[#2F2FE4]">
                                ₹{salePrice}
                            </span>
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-black text-green-700">
                                {discountPercentage}% OFF
                            </span>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-[10px] font-black uppercase text-green-700">
                            Save ₹{savedAmount}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="inline-flex h-12 items-center justify-center rounded-full border border-[#2F2FE4]/25 bg-white text-xs font-black uppercase tracking-wide text-[#2F2FE4]"
                    >
                        <ShoppingCart size={16} className="mr-1.5" />
                        Cart
                    </button>

                    <button
                        type="button"
                        onClick={handleBuyNow}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#2F2FE4] text-xs font-black uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(47,47,228,0.30)]"
                    >
                        <Zap size={16} className="mr-1.5" />
                        Buy Now
                    </button>
                </div>
            </div>
        </main>
    );
}
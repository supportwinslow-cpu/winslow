"use client";

import { useRouter } from "next/navigation";
import products from "../products";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
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
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const product = products.find((p) => p.slug === slug);

    useEffect(() => {
        setSelectedImageIndex(0);
        setQuantity(1);
    }, [slug]);

    if (!product) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
                <div className="rounded-3xl border border-[#2F2FE4]/15 bg-white p-7 shadow-[0_24px_75px_rgba(47,47,228,0.12)] sm:p-10">
                    <h1 className="text-2xl font-black uppercase text-[#111827] sm:text-3xl">
                        Product Not Found
                    </h1>

                    <Link
                        href="/shop"
                        className="mt-6 inline-flex rounded-full bg-[#2F2FE4] px-7 py-3 text-xs font-black uppercase tracking-wide text-white sm:text-sm"
                    >
                        Back to Shop
                    </Link>
                </div>
            </main>
        );
    }

    const productImages = Array.isArray(product.images)
        ? product.images.filter(Boolean)
        : [product.images].filter(Boolean);

    const imageSrc =
        productImages[selectedImageIndex] ||
        productImages[0] ||
        "/products/placeholder.jpg";

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
                .filter((variant) => variant.name?.toLowerCase() === "chromeline")
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
        <main className="relative min-h-screen overflow-hidden bg-white pb-24 text-[#111827] sm:pb-0">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_50%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.10),transparent_42%)]" />
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2F2FE4]/10 blur-[110px] sm:h-105 sm:w-105" />

            <div className="relative mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-10 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-4 flex items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-bold text-gray-500 scrollbar-hide sm:mb-8 sm:text-sm">
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
                <section className="overflow-hidden rounded-[1.7rem] border border-[#2F2FE4]/12 bg-white p-2 shadow-[0_18px_55px_rgba(47,47,228,0.12)] sm:rounded-[2.6rem] sm:p-3 sm:shadow-[0_30px_100px_rgba(47,47,228,0.14)]">
                    <div className="grid gap-5 rounded-[1.45rem] bg-white p-2 sm:gap-8 sm:rounded-[2.2rem] sm:p-6 lg:grid-cols-2 lg:p-8">
                        {/* Product Image Gallery */}
                        <div className="group relative rounded-[1.35rem] bg-white sm:rounded-4xl">
                            {/* Badge */}
                            <div className="absolute left-3 top-3 z-20 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-[0_10px_24px_rgba(47,47,228,0.12)] backdrop-blur-xl sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                                {priceInfo.discountPercentage
                                    ? `${priceInfo.discountPercentage}% OFF`
                                    : "Premium Fit"}
                            </div>

                            {/* Main Image */}
                            <div className="relative h-82.5 w-full overflow-hidden rounded-[1.35rem] bg-white sm:h-130 sm:rounded-4xl lg:h-140">
                                <Image
                                    src={imageSrc}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                                />
                            </div>

                            {/* Mobile-first Thumbnails */}
                            {productImages.length > 1 && (
                                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible sm:pb-0">
                                    {productImages.map((img, index) => (
                                        <button
                                            key={`${img}-${index}`}
                                            type="button"
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl border bg-white transition-all duration-300 sm:h-24 sm:w-auto ${selectedImageIndex === index
                                                    ? "border-[#2F2FE4] shadow-[0_10px_25px_rgba(47,47,228,0.22)]"
                                                    : "border-[#2F2FE4]/15 hover:border-[#2F2FE4]/50"
                                                }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${product.name} image ${index + 1}`}
                                                fill
                                                sizes="120px"
                                                className="object-cover object-center"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-center px-1 pb-2 sm:px-0 sm:pb-0">
                            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#2F2FE4]/20 bg-[#2F2FE4]/8 px-4 py-2 sm:mb-5 sm:gap-3 sm:px-5 sm:py-2.5">
                                <Sparkles size={14} className="text-[#2F2FE4]" />

                                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#2F2FE4] sm:text-xs sm:tracking-[0.22em]">
                                    Chromeline Only
                                </span>
                            </div>

                            <h1 className="text-[24px] font-black uppercase leading-[1.08] tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
                                {product.name}
                            </h1>

                            <div className="mt-4 flex flex-wrap items-end gap-2 sm:mt-5 sm:gap-3">
                                {priceInfo.originalPrice && (
                                    <span className="pb-1 text-base font-black text-gray-400 line-through sm:text-2xl">
                                        ₹{priceInfo.originalPrice}
                                    </span>
                                )}

                                <span className="text-4xl font-black text-[#2F2FE4] sm:text-5xl">
                                    ₹{priceInfo.salePrice}
                                </span>

                                {priceInfo.discountPercentage && (
                                    <span className="mb-1 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-green-600 sm:px-3 sm:text-xs">
                                        {priceInfo.discountPercentage}% OFF
                                    </span>
                                )}
                            </div>

                            {priceInfo.piecesText && (
                                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-[#2F2FE4] sm:mt-3 sm:text-sm">
                                    {priceInfo.piecesText} • Chromeline Finish
                                </p>
                            )}

                            <p className="mt-4 text-sm font-medium leading-7 text-gray-500 sm:mt-5 sm:max-w-xl sm:text-base sm:leading-8">
                                {cleanDescription}
                            </p>

                            {/* Trust Badges */}
                            <div className="mt-5 grid grid-cols-1 gap-2 sm:mt-7 sm:grid-cols-3 sm:gap-3">
                                {[
                                    { icon: ShieldCheck, text: "Premium Quality" },
                                    { icon: Truck, text: "Fast Delivery" },
                                    { icon: BadgeCheck, text: "Perfect Fit" },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.text}
                                            className="flex items-center gap-3 rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] px-3 py-2.5 sm:px-4 sm:py-3"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white sm:h-9 sm:w-9">
                                                <Icon size={16} />
                                            </span>

                                            <span className="text-[11px] font-black uppercase tracking-wide text-[#111827] sm:text-xs">
                                                {item.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Quantity */}
                            <div className="mt-6 sm:mt-8">
                                <h3 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#111827] sm:text-sm">
                                    Quantity
                                </h3>

                                <div className="flex w-fit items-center rounded-full border border-[#2F2FE4]/15 bg-white p-1 shadow-[0_12px_35px_rgba(47,47,228,0.08)]">
                                    <button
                                        type="button"
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4] transition hover:bg-[#2F2FE4] hover:text-white sm:h-11 sm:w-11"
                                    >
                                        <Minus size={17} />
                                    </button>

                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(Math.max(1, Number(e.target.value) || 1))
                                        }
                                        className="h-10 w-14 bg-transparent text-center text-base font-black text-[#111827] outline-none sm:h-11 sm:w-16 sm:text-lg"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8FF] text-[#2F2FE4] transition hover:bg-[#2F2FE4] hover:text-white sm:h-11 sm:w-11"
                                    >
                                        <Plus size={17} />
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Buttons */}
                            <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-2">
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
                <section className="mt-12 sm:mt-20">
                    <div className="mb-5 sm:mb-8">
                        <h2 className="text-2xl font-black uppercase text-[#111827] sm:text-3xl">
                            Related Products
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
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
                                    <div className="relative h-full overflow-hidden rounded-3xl border border-[#2F2FE4]/10 bg-white p-2 shadow-[0_14px_38px_rgba(47,47,228,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2F2FE4]/45 sm:rounded-4xl sm:p-3 sm:hover:-translate-y-3 sm:hover:shadow-[0_30px_90px_rgba(47,47,228,0.20)]">
                                        <div className="absolute left-3 top-3 z-20 rounded-full border border-[#2F2FE4]/20 bg-white/95 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-[#2F2FE4] shadow-sm sm:left-5 sm:top-5 sm:px-3 sm:text-[10px]">
                                            0{index + 1}
                                        </div>

                                        {relatedPriceInfo.discountPercentage && (
                                            <div className="absolute right-3 top-3 z-20 rounded-full bg-[#2F2FE4] px-2 py-1 text-[9px] font-black uppercase tracking-wide text-white shadow-sm sm:right-5 sm:top-5 sm:px-3 sm:text-[10px]">
                                                {relatedPriceInfo.discountPercentage}% OFF
                                            </div>
                                        )}

                                        <div className="relative h-36 overflow-hidden rounded-2xl bg-white sm:h-65 sm:rounded-3xl">
                                            <Image
                                                src={relatedImageSrc}
                                                alt={item.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 25vw"
                                                className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                                            />
                                        </div>

                                        <div className="p-2 text-center sm:p-4">
                                            <h3 className="line-clamp-2 text-[11px] font-black uppercase leading-snug tracking-tight text-[#111827] transition group-hover:text-[#2F2FE4] sm:text-sm">
                                                {item.name}
                                            </h3>

                                            <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                                                {relatedPriceInfo.originalPrice && (
                                                    <span className="text-xs font-black text-gray-400 line-through sm:text-sm">
                                                        ₹{relatedPriceInfo.originalPrice}
                                                    </span>
                                                )}

                                                <span className="text-base font-black text-[#2F2FE4] sm:text-lg">
                                                    ₹{relatedPriceInfo.salePrice}
                                                </span>
                                            </div>

                                            {relatedPriceInfo.piecesText && (
                                                <p className="mt-1 text-[9px] font-black uppercase tracking-wide text-[#2F2FE4] sm:text-[10px]">
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

            {/* Mobile Sticky Bottom CTA */}
            <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#2F2FE4]/10 bg-white/95 px-3 py-3 shadow-[0_-12px_35px_rgba(17,24,39,0.12)] backdrop-blur-xl sm:hidden">
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleAddToCart}
                        className="inline-flex h-12 items-center justify-center rounded-full border border-[#2F2FE4]/25 bg-white text-xs font-black uppercase tracking-wide text-[#2F2FE4]"
                    >
                        <ShoppingCart size={16} className="mr-2" />
                        Add Cart
                    </button>

                    <button
                        onClick={handleBuyNow}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#2F2FE4] text-xs font-black uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(47,47,228,0.30)]"
                    >
                        <Zap size={16} className="mr-2" />
                        Buy Now
                    </button>
                </div>
            </div>
        </main>
    );
}
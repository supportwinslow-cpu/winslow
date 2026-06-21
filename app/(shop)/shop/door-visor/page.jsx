import products from "./products";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Truck,
    Flame,
    Gift,
    Zap,
} from "lucide-react";


export default function DoorVisorPage() {

    return (
        <main className="relative min-h-screen overflow-hidden bg-white text-[#111827]">

            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#F4F6FF_45%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,47,228,0.12),transparent_42%)]" />


            <div className="relative mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8">


                {/* OFFER BANNER */}

                <div className="mb-6 overflow-hidden rounded-3xl bg-linear-to-r from-[#2F2FE4] via-[#4F46E5] to-[#2F2FE4] p-4 text-white shadow-[0_20px_65px_rgba(47,47,228,0.28)] sm:p-6">

                    <div className="flex items-start gap-3 sm:gap-5 md:items-center md:justify-between">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 sm:h-16 sm:w-16">
                            <Gift size={22} />
                        </div>


                        <div className="flex-1">

                            <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-black uppercase sm:text-xs">
                                <Zap size={12} />
                                Chromeline Offer
                            </div>


                            <h1 className="text-xl font-black uppercase sm:text-3xl">
                                Door Visor Deals
                            </h1>


                            <p className="mt-1 text-xs font-semibold text-white/85 sm:text-base">
                                Buy 2 Door Visors & get FREE Door Guard. Extra 20% OFF with SAVE20.
                            </p>

                        </div>


                        <div className="hidden rounded-full bg-white px-6 py-3 text-sm font-black uppercase text-[#2F2FE4] md:block">
                            SAVE20
                        </div>

                    </div>

                </div>




                {/* PRODUCTS */}

                <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">


                    {products.map((product) => {


                        const imageSrc = Array.isArray(product.images)
                            ? product.images[0]
                            : product.images;



                        const pieces =
                            product.specifications?.pieces || "";



                        const isSet4 = pieces.includes("4");
                        const isSet6 = pieces.includes("6");



                        // MRP

                        const originalPrice =
                            isSet6 ? 3000 : 2500;



                        // PRICE BEFORE SAVE20

                        const sellingPrice =
                            isSet6 ? 1512 : 1249;



                        const discountPercentage =
                            Math.round(
                                ((originalPrice - sellingPrice)
                                    / originalPrice) * 100
                            );



                        return (

                            <Link
                                key={product.id}
                                href={`/shop/door-visor/${product.slug}`}
                                className="group"
                            >


                                <div className="overflow-hidden rounded-[1.7rem] border border-[#2F2FE4]/10 bg-white shadow-[0_16px_45px_rgba(47,47,228,0.12)] transition-all duration-500 active:scale-[0.98] lg:hover:-translate-y-2">



                                    {/* IMAGE */}

                                    <div className="relative h-47.5 bg-[#EEF0FF] sm:h-80">


                                        <Image
                                            src={imageSrc}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width:640px) 50vw,33vw"
                                            className="object-contain p-4 transition duration-700 group-hover:scale-110 sm:p-8"
                                        />


                                        <div className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[9px] font-black text-[#2F2FE4] shadow-sm">

                                            {discountPercentage}% OFF

                                        </div>



                                        <div className="absolute right-3 top-3 rounded-full bg-red-50 px-2.5 py-1 text-[9px] font-black text-red-600">

                                            Few Left

                                        </div>


                                    </div>





                                    {/* CONTENT */}


                                    <div className="p-3 text-center sm:p-5">


                                        <p className="mb-1 text-[9px] font-black uppercase tracking-wide text-[#2F2FE4]">
                                            Chromeline Finish
                                        </p>



                                        <h2 className="line-clamp-2 text-sm font-black uppercase sm:text-xl">
                                            {product.name}
                                        </h2>




                                        <div className="mt-2 flex justify-center gap-1 text-[10px] font-black text-yellow-500">

                                            ⭐⭐⭐⭐⭐
                                            <span className="text-gray-500">
                                                4.8
                                            </span>

                                        </div>




                                        <div className="mt-3 flex items-center justify-center gap-2">


                                            <span className="text-xs font-black text-gray-400 line-through sm:text-sm">

                                                ₹{originalPrice}

                                            </span>



                                            <span className="text-xl font-black text-[#2F2FE4] sm:text-2xl">

                                                ₹{sellingPrice}

                                            </span>


                                        </div>



                                        <p className="mt-1 text-[10px] font-black text-green-600">

                                            Apply SAVE20 →
                                            ₹{
                                                Math.round(
                                                    sellingPrice * 0.8
                                                )
                                            }

                                        </p>





                                        <div className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#2F2FE4]/8 px-2 py-2 text-[10px] font-black text-[#2F2FE4]">

                                            <Truck size={12} />
                                            Delivery 2-4 Days

                                        </div>




                                        <div className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-red-50 px-2 py-2 text-[10px] font-black text-red-600">

                                            <Flame size={12} />
                                            High Demand

                                        </div>





                                        <div className="mt-4 flex items-center justify-center rounded-full bg-[#2F2FE4] px-4 py-2.5 text-[10px] font-black uppercase text-white">

                                            View Product

                                            <ArrowRight
                                                size={13}
                                                className="ml-1.5"
                                            />

                                        </div>



                                    </div>


                                </div>


                            </Link>

                        )


                    })}



                </div>


            </div>


        </main>
    );
}
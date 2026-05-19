"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl w-full text-center">

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Order Placed Successfully!
                </h1>

                {/* Message */}
                <p className="text-gray-600 text-lg mb-6">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>

                {/* Order ID */}
                <div className="bg-gray-100 rounded-lg px-6 py-4 mb-8">
                    <p className="text-gray-500 text-sm mb-1">Order ID</p>
                    <p className="text-xl font-semibold text-black">
                        {orderId || "N/A"}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="/products">
                        <button className="px-6 py-3 rounded-lg bg-black text-white hover:bg-red-600 transition">
                            Continue Shopping
                        </button>
                    </Link>

                    <Link href="/">
                        <button className="px-6 py-3 rounded-lg border border-black text-black hover:bg-black hover:text-white transition">
                            Go to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
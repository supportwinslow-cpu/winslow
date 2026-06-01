import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            amount, // frontend se bhejo
        } = await req.json();

        const body =
            razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        const isValid = expectedSignature === razorpay_signature;

        if (!isValid) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid payment signature",
                },
                { status: 400 }
            );
        }

        // Meta Conversions API Purchase Event
        try {
            await fetch(
                `https://graph.facebook.com/v23.0/${process.env.META_PIXEL_ID}/events`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        data: [
                            {
                                event_name: "Purchase",
                                event_time: Math.floor(Date.now() / 1000),
                                action_source: "website",
                                custom_data: {
                                    currency: "INR",
                                    value: amount || 0,
                                },
                            },
                        ],
                        access_token: process.env.META_ACCESS_TOKEN,
                    }),
                }
            );
        } catch (metaError) {
            console.error("Meta CAPI Error:", metaError);
        }

        return NextResponse.json({
            success: true,
            message: "Payment verified successfully",
        });
    } catch (error) {
        console.log("VERIFY PAYMENT ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}
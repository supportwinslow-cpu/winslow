import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const order = await razorpay.orders.create({
      amount: amount * 100, // rupees to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        purpose: "Winslow Order Payment",
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.log("RAZORPAY ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
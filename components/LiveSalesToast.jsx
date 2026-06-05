"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { CheckCircle, ShoppingBag, Star, Tag } from "lucide-react";

const notifications = [
  {
    icon: ShoppingBag,
    title: "New Order",
    message: "Dev from Delhi purchased Door Visor",
  },
  {
    icon: Tag,
    title: "Coupon Used",
    message: "Amit from Jaipur used SAVE20",
  },
  {
    icon: ShoppingBag,
    title: "Product Sold",
    message: "Sneha from Mumbai ordered Parcel Tray",
  },
  {
    icon: ShoppingBag,
    title: "New Order",
    message: "Vikram from Pune bought Door Guard",
  },
  {
    icon: Star,
    title: "5-Star Review",
    message: "Verified customer review received",
  },
  {
    icon: Star,
    title: "4.4-Star Review",
    message: "Verified customer review received",
  },
  {
    icon: Star,
    title: "4-Star Review",
    message: "Verified customer review received",
  },
  {
  icon: ShoppingBag,
  title: "New Order",
  message: "Parth Thakur from Hyderabad purchased Parcel Tray",
},
{
  icon: Tag,
  title: "Coupon Used",
  message: "Priya from Chennai used SAVE20",
},
{
  icon: ShoppingBag,
  title: "Product Sold",
  message: "Arjun from Ahmedabad ordered Steering Knob",
},
{
  icon: ShoppingBag,
  title: "New Order",
  message: "Karan from Lucknow bought Door Edge Guard",
},
{
  icon: Star,
  title: "5-Star Review",
  message: "Verified customer review received",
},
{
  icon: ShoppingBag,
  title: "Product Sold",
  message: "Neha from Kolkata purchased Door Visor",
},
{
  icon: Tag,
  title: "Coupon Used",
  message: "Rohit from Surat used SAVE20",
},
{
  icon: ShoppingBag,
  title: "New Order",
  message: "Anjali from Indore ordered Door Visor",
},
{
  icon: Star,
  title: "4.8-Star Review",
  message: "Verified customer review received",
},
{
  icon: ShoppingBag,
  title: "Product Sold",
  message: "Manish from Chandigarh bought Parcel Tray",
},
];

export default function LiveSalesToast() {
  useEffect(() => {
    let index = 0;

    const showToast = () => {
      toast.dismiss();

      const item = notifications[index % notifications.length];
      const Icon = item.icon;

      toast.custom(
        <div className="w-[92vw] max-w-77.5 rounded-2xl border border-[#2F2FE4]/15 bg-white shadow-[0_16px_45px_rgba(47,47,228,0.18)] overflow-hidden">
          <div className="h-0.5 w-full bg-[#2F2FE4]" />

          <div className="flex items-center gap-3 px-3 py-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F2FE4] text-white">
              <Icon size={19} />

              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-white ring-2 ring-white">
                <CheckCircle size={10} />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-xs font-black uppercase text-[#111827]">
                  {item.title}
                </h3>

                <span className="rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-black uppercase text-green-600">
                  Live
                </span>
              </div>

              <p className="mt-0.5 line-clamp-1 text-xs font-semibold text-gray-700">
                {item.message}
              </p>

              <p className="mt-1 text-[10px] font-medium text-gray-400">
                Just now • Verified
              </p>
            </div>
          </div>
        </div>,
        {
          id: "live-sales-toast",
          duration: 2000,
        }
      );

      index += 1;
    };

    const firstTimer = setTimeout(showToast, 1000);
    const interval = setInterval(showToast, 2000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
      toast.dismiss("live-sales-toast");
    };
  }, []);

  return null;
}
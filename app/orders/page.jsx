"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useAuth,
} from "@/app/context/AuthContext";

import {
  getUserOrders,
} from "@/app/lib/firestore";

import ProtectedRoute from "@/components/ProtectedRoute";

import Link from "next/link";

export default function OrdersPage() {

  const { user } =
    useAuth();

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH ORDERS
  useEffect(() => {

    const fetchOrders =
      async () => {

        if (!user) return;

        try {

          const data =
            await getUserOrders(
              user.uid
            );

          setOrders(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }
      };

    fetchOrders();

  }, [user]);

  return (
    <ProtectedRoute>

      <div className="min-h-screen bg-neutral-50 py-12 px-6">

        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold">
              My Orders
            </h1>

            <p className="text-neutral-500 mt-2">
              Track all your orders
            </p>

          </div>

          {/* LOADING */}
          {loading ? (

            <div className="text-center py-20">
              Loading Orders...
            </div>

          ) : orders.length === 0 ? (

            <div className="bg-white rounded-3xl border p-10 text-center">

              <h2 className="text-2xl font-bold">
                No Orders Yet
              </h2>

              <p className="text-neutral-500 mt-2">
                Start shopping now
              </p>

              <Link
                href="/shop"
                className="inline-block mt-5 bg-black text-white px-6 py-3 rounded-full"
              >
                Continue Shopping
              </Link>

            </div>

          ) : (

            <div className="space-y-6">

              {orders.map(
                (order) => (

                  <div
                    key={order.id}
                    className="bg-white border rounded-3xl p-6"
                  >

                    {/* TOP */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b pb-5">

                      {/* ORDER ID */}
                      <div>

                        <p className="text-sm text-neutral-500">
                          Order ID
                        </p>

                        <h2 className="font-bold">
                          {order.id}
                        </h2>

                      </div>

                      {/* STATUS */}
                      <div>

                        <p className="text-sm text-neutral-500">
                          Order Status
                        </p>

                        <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
                          {order.orderStatus}
                        </span>

                      </div>

                      {/* TOTAL */}
                      <div>

                        <p className="text-sm text-neutral-500">
                          Total
                        </p>

                        <h2 className="text-xl font-bold">
                          ₹{order.total}
                        </h2>

                      </div>

                    </div>

                    {/* ITEMS */}
                    <div className="mt-5 space-y-4">

                      {order.items?.map(
                        (item, index) => (

                          <div
                            key={index}
                            className="flex items-center justify-between border rounded-2xl p-4"
                          >

                            <div>

                              <h3 className="font-semibold">
                                {item.name}
                              </h3>

                              <p className="text-sm text-neutral-500">
                                Qty:
                                {" "}
                                {item.quantity}
                              </p>

                            </div>

                            <h4 className="font-bold">
                              ₹
                              {item.price *
                                item.quantity}
                            </h4>

                          </div>
                        )
                      )}

                    </div>

                  </div>
                )
              )}

            </div>
          )}

        </div>

      </div>

    </ProtectedRoute>
  );
}
"use client";

import {
    useEffect,
    useState,
} from "react";

import AdminRoute from "@/components/AdminRoute";

import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "@/app/lib/firebase";

import {
    ShoppingBag,
    IndianRupee,
    Clock3,
    Users,
} from "lucide-react";

export default function AdminPage() {

    const [orders, setOrders] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    // FETCH ALL ORDERS
    useEffect(() => {

        const fetchOrders =
            async () => {

                try {

                    const querySnapshot =
                        await getDocs(
                            collection(
                                db,
                                "orders"
                            )
                        );

                    const ordersData = [];

                    querySnapshot.forEach(
                        (doc) => {

                            ordersData.push({
                                id: doc.id,
                                ...doc.data(),
                            });

                        }
                    );

                    setOrders(ordersData);

                } catch (error) {

                    console.log(error);

                } finally {

                    setLoading(false);

                }
            };

        fetchOrders();

    }, []);

    // TOTAL SALES
    const totalSales =
        orders.reduce(
            (acc, order) =>
                acc + order.total,
            0
        );

    // PENDING ORDERS
    const pendingOrders =
        orders.filter(
            (order) =>
                order.orderStatus ===
                "Pending"
        ).length;

    return (
        <AdminRoute>

            <div className="min-h-screen bg-neutral-100 p-6">

                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="mb-10">

                        <h1 className="text-4xl font-bold">
                            Admin Dashboard
                        </h1>

                        <p className="text-neutral-500 mt-2">
                            Manage your ecommerce store
                        </p>

                    </div>

                    {/* STATS */}
                    <div className="grid md:grid-cols-4 gap-5 mb-10">

                        {/* TOTAL ORDERS */}
                        <div className="bg-white rounded-3xl p-6 border">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-neutral-500 text-sm">
                                        Total Orders
                                    </p>

                                    <h2 className="text-3xl font-bold mt-2">
                                        {orders.length}
                                    </h2>

                                </div>

                                <ShoppingBag size={36} />

                            </div>

                        </div>

                        {/* SALES */}
                        <div className="bg-white rounded-3xl p-6 border">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-neutral-500 text-sm">
                                        Total Sales
                                    </p>

                                    <h2 className="text-3xl font-bold mt-2">
                                        ₹{totalSales}
                                    </h2>

                                </div>

                                <IndianRupee size={36} />

                            </div>

                        </div>

                        {/* PENDING */}
                        <div className="bg-white rounded-3xl p-6 border">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-neutral-500 text-sm">
                                        Pending Orders
                                    </p>

                                    <h2 className="text-3xl font-bold mt-2">
                                        {pendingOrders}
                                    </h2>

                                </div>

                                <Clock3 size={36} />

                            </div>

                        </div>

                        {/* USERS */}
                        <div className="bg-white rounded-3xl p-6 border">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-neutral-500 text-sm">
                                        Customers
                                    </p>

                                    <h2 className="text-3xl font-bold mt-2">
                                        --
                                    </h2>

                                </div>

                                <Users size={36} />

                            </div>

                        </div>

                    </div>

                    {/* RECENT ORDERS */}
                    <div className="bg-white rounded-3xl border overflow-hidden">

                        <div className="p-6 border-b">

                            <h2 className="text-2xl font-bold">
                                Recent Orders
                            </h2>

                        </div>

                        {loading ? (

                            <div className="p-10 text-center">
                                Loading Orders...
                            </div>

                        ) : orders.length === 0 ? (

                            <div className="p-10 text-center">
                                No Orders Found
                            </div>

                        ) : (

                            <div className="overflow-x-auto">

                                <table className="w-full">

                                    <thead className="bg-neutral-50">

                                        <tr className="text-left">

                                            <th className="p-5">
                                                Customer
                                            </th>

                                            <th className="p-5">
                                                Email
                                            </th>

                                            <th className="p-5">
                                                Total
                                            </th>

                                            <th className="p-5">
                                                Status
                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {orders.map(
                                            (order) => (

                                                <tr
                                                    key={order.id}
                                                    className="border-t"
                                                >

                                                    <td className="p-5 font-medium">
                                                        {order.customerName}
                                                    </td>

                                                    <td className="p-5 text-neutral-500">
                                                        {order.customerEmail}
                                                    </td>

                                                    <td className="p-5 font-semibold">
                                                        ₹{order.total}
                                                    </td>

                                                    <td className="p-5">

                                                        <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm">

                                                            {order.orderStatus}

                                                        </span>

                                                    </td>

                                                </tr>
                                            )
                                        )}

                                    </tbody>

                                </table>

                            </div>
                        )}

                    </div>

                </div>

            </div>

        </AdminRoute>
    );
}
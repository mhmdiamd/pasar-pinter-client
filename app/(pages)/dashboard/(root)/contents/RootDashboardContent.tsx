"use client";

import { useMemo, useState } from "react";
import { Settings, Heart, Bell, Clock } from "lucide-react";

const savedProducts = [
    {
        id: 1,
        name: "Sony WH-1000XM4",
        price: "$348.00",
        image:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300",
        priceChange: -20,
        store: "Amazon",
    },
    {
        id: 2,
        name: "Apple AirPods Pro",
        price: "$249.00",
        image:
            "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=300",
        priceChange: 0,
        store: "Best Buy",
    },
];

const recentActivity = [
    {
        id: 1,
        type: "price_drop",
        product: "Sony WH-1000XM4",
        message: "Price dropped by $20",
        time: "2 hours ago",
    },
    {
        id: 2,
        type: "alert",
        product: "MacBook Pro M1",
        message: "Back in stock",
        time: "5 hours ago",
    },
];

export default function RootDashboardContent() {
    const [activeTab, setActiveTab] = useState("overview");
    // const [currentUser, setCurrentUser] = useState({
    //     displayName: JSON.parse(localStorage.getItem("auth") as string)?.displayName,
    //     email: JSON.parse(localStorage.getItem("auth") as string)?.email
    // });

    const user = useMemo(() => {
        const name = JSON.parse(localStorage.getItem("auth") as string || "{}")?.displayName
        const email = JSON.parse(localStorage.getItem("auth") as string || "{}")?.email
        if (name && email) {
            return { displayName: name, email }
        }

        return null
    }, [localStorage.getItem("auth")])

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Welcome back, {user?.displayName}
                    </h1>
                    <p className="text-gray-600">
                        Here's what's happening with your tracked products
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Heart className="h-6 w-6 text-rose-600" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            Saved Products
                                        </dt>
                                        <dd className="text-lg font-semibold text-gray-900">12</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Bell className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            Active Alerts
                                        </dt>
                                        <dd className="text-lg font-semibold text-gray-900">5</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Clock className="h-6 w-6 text-green-600" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            Price Updates
                                        </dt>
                                        <dd className="text-lg font-semibold text-gray-900">3</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Saved Products */}
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow rounded-lg">
                            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Recently Saved Products
                                </h2>
                            </div>
                            <ul className="divide-y divide-gray-200">
                                {savedProducts.map((product) => (
                                    <li key={product.id} className="p-4 hover:bg-gray-50">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-16 w-16 rounded-lg object-cover"
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                    {product.name}
                                                </p>
                                                <p className="text-sm text-gray-500">{product.store}</p>
                                                <p className="text-sm font-semibold text-gray-900">
                                                    {product.price}
                                                </p>
                                            </div>
                                            {product.priceChange !== 0 && (
                                                <div
                                                    className={`text-sm ${product.priceChange < 0 ? "text-green-600" : "text-red-600"}`}
                                                >
                                                    {product.priceChange < 0 ? "↓" : "↑"} $
                                                    {Math.abs(product.priceChange)}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="lg:col-span-1">
                        <div className="bg-white shadow rounded-lg">
                            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Recent Activity
                                </h2>
                            </div>
                            <ul className="divide-y divide-gray-200">
                                {recentActivity.map((activity) => (
                                    <li key={activity.id} className="p-4">
                                        <div className="flex space-x-3">
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900">
                                                    {activity.product}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {activity.message}
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">
                                                    {activity.time}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Bell, Filter, Trash2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Notification {
  id: string;
  type: "price_drop" | "back_in_stock" | "price_alert" | "system";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  link?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "price_drop",
    title: "Price Drop Alert",
    message: "Sony WH-1000XM4 price has dropped by $50",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
    link: "/product/1",
  },
  {
    id: "2",
    type: "back_in_stock",
    title: "Back in Stock",
    message: "MacBook Pro M1 is back in stock",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: false,
    link: "/product/2",
  },
  {
    id: "3",
    type: "price_alert",
    title: "Price Alert",
    message: "Target price reached for AirPods Pro",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    read: true,
    link: "/product/3",
  },
  // Add more notifications as needed
];

const filters = [
  "All",
  "Unread",
  "Price Drops",
  "Back in Stock",
  "Price Alerts",
  "System",
];

export default function NotificationsContent() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showSettings, setShowSettings] = useState(false);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const filteredNotifications = notifications.filter((notification) => {
    switch (selectedFilter) {
      case "Unread":
        return !notification.read;
      case "Price Drops":
        return notification.type === "price_drop";
      case "Back in Stock":
        return notification.type === "back_in_stock";
      case "Price Alerts":
        return notification.type === "price_alert";
      case "System":
        return notification.type === "system";
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center flex-col sm:flex-row sm:justify-between mb-6 gap-y-3">
              <div className="flex  items-center gap-3">
                <Bell className="h-6 w-6 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">
                  Notifications
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={markAllAsRead}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <CheckCircle className="h-4 w-4" />
                  Mark all as read
                </button>
                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear all
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedFilter === filter
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              <AnimatePresence>
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`relative p-4 rounded-lg ${
                        !notification.read ? "bg-indigo-50" : "bg-gray-50"
                      }`}
                    >
                      <Link
                        href={notification.link || "#"}
                        onClick={() => markAsRead(notification.id)}
                        className="block"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-900">
                              {notification.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {notification.message}
                            </p>
                            <p className="mt-2 text-xs text-gray-400">
                              {formatDistanceToNow(notification.timestamp, {
                                addSuffix: true,
                              })}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                            className="p-1 text-gray-400 hover:text-gray-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <p className="text-gray-500">No notifications found</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

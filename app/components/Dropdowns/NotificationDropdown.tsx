import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bell, Settings, X } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
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
];

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100">
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                Notifications
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-indigo-600 hover:text-indigo-800"
                >
                  Mark all as read
                </button>
                <Link
                  href="/dashboard/notifications"
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <Settings className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            <AnimatePresence>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`relative px-4 py-3 hover:bg-gray-50 ${
                      !notification.read ? "bg-indigo-50" : ""
                    }`}
                  >
                    <Link
                      href={notification.link || "#"}
                      onClick={() => markAsRead(notification.id)}
                      className="block"
                    >
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeNotification(notification.id);
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {formatDistanceToNow(notification.timestamp, {
                          addSuffix: true,
                        })}
                      </p>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm text-gray-500">No notifications</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="px-4 py-3 border-t border-gray-100">
            <Link
              href="/dashboard/notifications"
              className="block text-sm text-center text-indigo-600 hover:text-indigo-800"
            >
              View all notifications
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

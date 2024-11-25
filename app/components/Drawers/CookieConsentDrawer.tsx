"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ChevronRight, Settings } from "lucide-react";
import Link from "next/link";

interface CookieSettings {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
}

export default function CookieConsentDrawer() {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true, // Essential cookies cannot be disabled
    functional: true,
    analytics: true,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    localStorage.setItem(
      "cookieSettings",
      JSON.stringify({
        essential: true,
        functional: true,
        analytics: true,
      }),
    );
    setShow(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "custom");
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.25 }}
          className="fixed bottom-0 inset-x-0 z-50 bg-white border-t shadow-lg"
        >
          {!showPreferences ? (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <Cookie className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-gray-900">
                    Cookie Settings
                  </h3>
                </div>
                <p className="text-sm text-gray-600 flex-1">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. Read our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Cookie Policy
                  </Link>{" "}
                  to learn more.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Accept All
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Cookie className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Cookie Preferences
                  </h3>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-t">
                  <div>
                    <p className="font-medium text-gray-900">
                      Essential Cookies
                    </p>
                    <p className="text-sm text-gray-500">
                      Required for basic site functionality
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.essential}
                    disabled
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between py-4 border-t">
                  <div>
                    <p className="font-medium text-gray-900">
                      Functional Cookies
                    </p>
                    <p className="text-sm text-gray-500">
                      Enable personalized features
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.functional}
                    onChange={(e) =>
                      setSettings({ ...settings, functional: e.target.checked })
                    }
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between py-4 border-t">
                  <div>
                    <p className="font-medium text-gray-900">
                      Analytics Cookies
                    </p>
                    <p className="text-sm text-gray-500">
                      Help us improve our website
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) =>
                      setSettings({ ...settings, analytics: e.target.checked })
                    }
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-6">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

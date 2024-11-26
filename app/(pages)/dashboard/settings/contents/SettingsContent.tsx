"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Lock,
  Mail,
  Shield,
  Globe,
  CreditCard,
  Smartphone,
  Save,
  User,
  Trash2,
} from "lucide-react";
import { useToast } from "@/app/components/Toasts/Toast";
import AnimatedPage from "@/app/components/Animations/AnimatedPage";
import Image from "next/image";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "preferences", label: "Preferences", icon: Globe },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "devices", label: "Devices", icon: Smartphone },
];

export default function SettingsContent() {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState({
    displayName: "Kelompok 16",
    email: "kelompok16@gmail.com",
    bio: "",
    newsletter: true,
    photoUrl: "",
  });
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  // Profile Settings
  const [profileSettings, setProfileSettings] = useState({
    photoUrl: "",
    name: user?.displayName || "",
    email: user?.email || "",
    bio: "",
    newsletter: true,
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    priceDrops: true,
    backInStock: true,
    newFeatures: true,
    productUpdates: true,
    emailNotifications: true,
    pushNotifications: true,
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: "30",
  });

  // Privacy Settings
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    activityVisibility: "friends",
    searchVisibility: true,
  });

  // Preferences Settings
  const [preferenceSettings, setPreferenceSettings] = useState({
    language: "en",
    theme: "light",
    currency: "USD",
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showToast("Settings saved successfully", "success");
    } catch (error) {
      showToast("Failed to save settings", "error");
    } finally {
      setLoading(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <div className="mt-2 flex items-center gap-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(profileSettings.name)}`}
                  alt="Profile"
                  className="h-16 w-16 rounded-full"
                />
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100">
                  Change
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={profileSettings.name}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    name: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={profileSettings.email}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    email: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                value={profileSettings.bio}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    bio: e.target.value,
                  })
                }
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="newsletter"
                checked={profileSettings.newsletter}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    newsletter: e.target.checked,
                  })
                }
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-700">
                Subscribe to newsletter
              </label>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Price Alerts
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Price Drops
                  </p>
                  <p className="text-sm text-gray-500">
                    Get notified when prices drop on your saved items
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.priceDrops}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      priceDrops: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Back in Stock
                  </p>
                  <p className="text-sm text-gray-500">
                    Get notified when out-of-stock items become available
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.backInStock}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      backInStock: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                System Notifications
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    New Features
                  </p>
                  <p className="text-sm text-gray-500">
                    Stay updated with new platform features
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.newFeatures}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      newFeatures: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Product Updates
                  </p>
                  <p className="text-sm text-gray-500">
                    Get notified about updates to your tracked products
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.productUpdates}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      productUpdates: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Notification Methods
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Email Notifications
                  </p>
                  <p className="text-sm text-gray-500">
                    Receive notifications via email
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.emailNotifications}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      emailNotifications: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Push Notifications
                  </p>
                  <p className="text-sm text-gray-500">
                    Receive notifications in your browser
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.pushNotifications}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      pushNotifications: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Account Security
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Two-Factor Authentication
                  </p>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={securitySettings.twoFactorAuth}
                  onChange={(e) =>
                    setSecuritySettings({
                      ...securitySettings,
                      twoFactorAuth: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Login Alerts
                  </p>
                  <p className="text-sm text-gray-500">
                    Get notified of new or suspicious login attempts
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={securitySettings.loginAlerts}
                  onChange={(e) =>
                    setSecuritySettings({
                      ...securitySettings,
                      loginAlerts: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Session Timeout (minutes)
              </label>
              <select
                value={securitySettings.sessionTimeout}
                onChange={(e) =>
                  setSecuritySettings({
                    ...securitySettings,
                    sessionTimeout: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
              </select>
            </div>

            <div>
              <button className="text-sm text-red-600 hover:text-red-800">
                Change Password
              </button>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Visibility
              </label>
              <select
                value={privacySettings.profileVisibility}
                onChange={(e) =>
                  setPrivacySettings({
                    ...privacySettings,
                    profileVisibility: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Activity Visibility
              </label>
              <select
                value={privacySettings.activityVisibility}
                onChange={(e) =>
                  setPrivacySettings({
                    ...privacySettings,
                    activityVisibility: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Search Visibility
                </p>
                <p className="text-sm text-gray-500">
                  Allow others to find you in search results
                </p>
              </div>
              <input
                type="checkbox"
                checked={privacySettings.searchVisibility}
                onChange={(e) =>
                  setPrivacySettings({
                    ...privacySettings,
                    searchVisibility: e.target.checked,
                  })
                }
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>
        );

      case "preferences":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                value={preferenceSettings.language}
                onChange={(e) =>
                  setPreferenceSettings({
                    ...preferenceSettings,
                    language: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Theme
              </label>
              <select
                value={preferenceSettings.theme}
                onChange={(e) =>
                  setPreferenceSettings({
                    ...preferenceSettings,
                    theme: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <select
                value={preferenceSettings.currency}
                onChange={(e) =>
                  setPreferenceSettings({
                    ...preferenceSettings,
                    currency: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
          </div>
        );

      case "billing":
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                You are currently on the free plan. Upgrade to access premium
                features.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Current Plan
              </h3>
              <p className="text-sm text-gray-600">Free Plan</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-600 mr-2" />
                  Basic product analysis
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-600 mr-2" />
                  Limited searches per day
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-600 mr-2" />
                  Standard support
                </li>
              </ul>
              <button className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                Upgrade Plan
              </button>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Payment Methods
              </h3>
              <p className="text-sm text-gray-600">
                No payment methods added yet.
              </p>
              <button className="mt-4 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100">
                Add Payment Method
              </button>
            </div>
          </div>
        );

      case "devices":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Connected Devices
              </h3>
              <div className="border rounded-lg divide-y">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Chrome on MacBook Pro
                      </p>
                      <p className="text-xs text-gray-500">
                        Last active: 2 minutes ago
                      </p>
                    </div>
                    <button className="text-sm text-red-600 hover:text-red-800">
                      Revoke
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Safari on iPhone
                      </p>
                      <p className="text-xs text-gray-500">
                        Last active: 1 hour ago
                      </p>
                    </div>
                    <button className="text-sm text-red-600 hover:text-red-800">
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="text-sm text-red-600 hover:text-red-800">
                Sign out from all devices
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${
                        activeTab === tab.id
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8">
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="h-5 w-5" />
                  Delete Account
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {tabs.find((tab) => tab.id === activeTab)?.label} Settings
                  </h2>
                </div>
                <div className="p-6">{renderTabContent()}</div>
              </div>

              {/* Save Button */}
              <div className="mt-6 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  disabled={loading}
                  className={`flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 ${
                    loading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Save className="h-5 w-5" />
                  )}
                  Save Changes
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

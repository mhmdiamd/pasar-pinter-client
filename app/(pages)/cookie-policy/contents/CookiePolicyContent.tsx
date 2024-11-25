import AnimatedPage from "@/app/components/Animations/AnimatedPage";
import { Cookie, Bell, Shield, Settings } from "lucide-react";

export default function CookiePolicyContent() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Cookie Policy
            </h1>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Essential Cookies
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Required for basic platform functionality:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Authentication and security</li>
                  <li>Session management</li>
                  <li>User preferences</li>
                  <li>Load balancing</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Functional Cookies
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">Enhance your experience:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Saved product preferences</li>
                  <li>Price alert settings</li>
                  <li>Language preferences</li>
                  <li>Personalization features</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Analytics Cookies
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Help us improve our service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Usage patterns</li>
                  <li>Feature popularity</li>
                  <li>Performance monitoring</li>
                  <li>Error tracking</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Cookie Management
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  You can manage cookies through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Browser settings</li>
                  <li>Platform preferences</li>
                  <li>Cookie consent banner</li>
                  <li>Account settings</li>
                </ul>
              </section>

              <section className="border-t pt-8">
                <p className="text-sm text-gray-500">
                  Last updated: March 15, 2024
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  For questions about our cookie policy, please contact
                  privacy@smartbuy.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

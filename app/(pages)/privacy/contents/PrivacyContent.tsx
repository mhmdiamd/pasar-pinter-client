import AnimatedPage from "@/app/components/Animations/AnimatedPage";
import { Shield, Lock, Eye, Database } from "lucide-react";

export default function PrivacyContent() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Data Collection
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  SmartBuy collects information to provide better services to
                  our users. We collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Search queries and product preferences</li>
                  <li>Price tracking and alert settings</li>
                  <li>Product interaction history</li>
                  <li>Account information for personalization</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Data Security
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We implement robust security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>End-to-end encryption for all sensitive data</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure authentication mechanisms</li>
                  <li>Data backup and recovery protocols</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Data Usage
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Your data helps us provide:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Personalized product recommendations</li>
                  <li>Price tracking and alerts</li>
                  <li>AI-powered product analysis</li>
                  <li>Market trend insights</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Data Retention
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">We retain your data for:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Active accounts: Duration of account existence</li>
                  <li>Inactive accounts: 12 months after last activity</li>
                  <li>Analytics data: 24 months</li>
                  <li>Payment information: As required by law</li>
                </ul>
              </section>

              <section className="border-t pt-8">
                <p className="text-sm text-gray-500">
                  Last updated: March 15, 2024
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  For questions about our privacy policy, please contact
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

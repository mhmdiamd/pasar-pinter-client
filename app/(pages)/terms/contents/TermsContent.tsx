import AnimatedPage from "@/app/components/Animations/AnimatedPage";
import { Scale, FileText, Users, AlertTriangle } from "lucide-react";

export default function TermsContent() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Terms and Conditions
            </h1>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Service Terms
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  By using PasarPintar, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Use the service for personal, non-commercial purposes</li>
                  <li>Not attempt to reverse engineer the platform</li>
                  <li>Maintain accurate account information</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Content Policy
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Users must adhere to our content guidelines:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>No misleading or fraudulent reviews</li>
                  <li>Respect intellectual property rights</li>
                  <li>No harmful or malicious content</li>
                  <li>Accurate product information sharing</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    User Responsibilities
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">Users are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Maintaining account security</li>
                  <li>Accurate information provision</li>
                  <li>Respecting other users</li>
                  <li>Reporting violations</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Limitations
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  PasarPintar reserves the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Modify or terminate services</li>
                  <li>Remove content or accounts</li>
                  <li>Update terms and conditions</li>
                  <li>Limit service availability</li>
                </ul>
              </section>

              <section className="border-t pt-8">
                <p className="text-sm text-gray-500">
                  Last updated: March 15, 2024
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  For questions about our terms, please contact
                  legal@PasarPintar.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

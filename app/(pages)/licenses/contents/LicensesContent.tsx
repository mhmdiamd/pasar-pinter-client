import AnimatedPage from "@/app/components/Animations/AnimatedPage";
import { Key, Code, Book, GitBranch } from "lucide-react";

export default function LicensesContent() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Licenses</h1>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Key className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Platform License
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  PasarPintar platform usage terms:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Personal use license</li>
                  <li>Commercial use restrictions</li>
                  <li>API usage limitations</li>
                  <li>Data usage permissions</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Third-Party Licenses
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We use the following open-source software:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>React (MIT License)</li>
                  <li>TailwindCSS (MIT License)</li>
                  <li>Firebase (Apache 2.0)</li>
                  <li>Framer Motion (MIT License)</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Book className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Content License
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">Content usage rights:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>User-generated content rights</li>
                  <li>AI analysis output usage</li>
                  <li>Product data usage terms</li>
                  <li>Image usage restrictions</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    API License
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">API usage terms:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Rate limiting policies</li>
                  <li>Data usage restrictions</li>
                  <li>Integration requirements</li>
                  <li>Commercial usage terms</li>
                </ul>
              </section>

              <section className="border-t pt-8">
                <p className="text-sm text-gray-500">
                  Last updated: March 15, 2024
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  For questions about our licenses, please contact
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

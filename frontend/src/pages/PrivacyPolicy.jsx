import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>Privacy Policy | Arki Dots Interior Design Kerala</title>
        <meta name="description" content="Privacy Policy for Arki Dots. Learn how we collect, use, and protect your personal information when you use our interior design services." />
      </Helmet>

      <section className="py-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-stone-900 mb-4">Privacy Policy</h1>
            <p className="text-stone-600">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 sm:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-amber-600" />
                  Our Commitment to Privacy
                </h2>
                <p className="text-stone-700 leading-relaxed">
                  At Arki Dots, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our interior design services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-amber-600" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-stone-700">
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Personal Information:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Name, phone number, and email address</li>
                      <li>Property address and location in Kerala</li>
                      <li>Project requirements and preferences</li>
                      <li>Communication history with our team</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Project Information:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Home dimensions and layout details</li>
                      <li>Design preferences and style choices</li>
                      <li>Budget information</li>
                      <li>Timeline requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">How We Use Your Information</h2>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Project Consultation:</strong> To understand your requirements and provide design solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Communication:</strong> To contact you regarding your project, quotations, and progress updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Service Delivery:</strong> To execute your interior design project and coordinate installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Post-Project Support:</strong> To provide warranty service and address any concerns</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Information Sharing</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information may be shared only in these limited circumstances:
                </p>
                <ul className="space-y-2 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>With contractors and suppliers necessary for project execution (only project-relevant details)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>When required by law or legal process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>With your explicit consent</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Data Security</h2>
                <p className="text-stone-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. Your data is stored securely and accessed only by authorized personnel who need it for project-related purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Your Rights</h2>
                <p className="text-stone-700 leading-relaxed mb-4">You have the right to:</p>
                <ul className="space-y-2 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Access your personal information we hold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Request deletion of your data (subject to legal and contractual obligations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Opt-out of marketing communications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Cookies and Website Data</h2>
                <p className="text-stone-700 leading-relaxed">
                  Our website may use cookies to improve your browsing experience. Cookies help us understand how you use our site and remember your preferences. You can control cookie settings through your browser.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-amber-600" />
                  Contact Us
                </h2>
                <p className="text-stone-700 leading-relaxed">
                  If you have questions about this Privacy Policy or wish to exercise your rights regarding your personal information, please contact us:
                </p>
                <div className="mt-4 bg-stone-50 p-4 rounded-lg">
                  <p className="text-stone-700"><strong>Email:</strong> info@arkidots.com</p>
                  <p className="text-stone-700"><strong>Phone:</strong> +91 98765 43210</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <p className="text-sm text-stone-700 leading-relaxed">
                  <strong>Note:</strong> This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for the latest information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '../components/ui/card';
import { FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>Terms & Conditions | Arki Dots Interior Design Kerala</title>
        <meta name="description" content="Terms and Conditions for Arki Dots interior design services. Understand our service terms, payment policies, and customer responsibilities." />
      </Helmet>

      <section className="py-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-stone-900 mb-4">Terms & Conditions</h1>
            <p className="text-stone-600">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 sm:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Service Agreement</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  These Terms and Conditions govern the provision of interior design and execution services by Arki Dots ("we", "us", "our") to customers ("you", "client") in Kerala, India.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  By engaging our services, you agree to these terms. Please read them carefully before proceeding with your project.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Scope of Services</h2>
                <div className="space-y-3 text-stone-700">
                  <p>Our services include but are not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Interior design consultation and planning</li>
                    <li>3D design visualizations and material selection</li>
                    <li>Manufacturing of modular products (kitchens, wardrobes, furniture)</li>
                    <li>Coordination of civil work, electrical, and plumbing</li>
                    <li>Installation and project execution</li>
                    <li>Post-installation support and warranty service</li>
                  </ul>
                  <p className="mt-4">
                    The specific scope of work for your project will be detailed in the quotation and work order provided to you.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Quotation and Pricing</h2>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Quotations are valid for 30 days from the date of issue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Prices are subject to change if material costs increase significantly or if project scope changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Any changes to the agreed scope of work will be communicated and approved before execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>All prices include applicable GST unless otherwise stated</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Payment Terms</h2>
                <div className="space-y-4 text-stone-700">
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Standard Payment Schedule:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>30% advance payment upon work order confirmation</li>
                      <li>40% upon completion of manufacturing and before installation begins</li>
                      <li>30% upon project completion and handover</li>
                    </ul>
                  </div>
                  <p>
                    Payment can be made via bank transfer, online payment, or cheque. Payment receipts will be provided for all transactions.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Project Timeline</h2>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Project timelines are estimates based on standard conditions and will be specified in your work order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Delays may occur due to unforeseen circumstances, material availability, or client-requested changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>We commit to informing you promptly of any potential delays and revised timelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Force majeure events (natural disasters, strikes, etc.) may affect timelines</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Client Responsibilities</h2>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Provide accurate site information and access during working hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Obtain necessary approvals from housing societies or local authorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Clear and protect existing furniture and belongings in work areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Make timely decisions on materials, colors, and design elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Ensure timely payment as per agreed schedule</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Changes and Cancellations</h2>
                <div className="space-y-4 text-stone-700">
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Design Changes:</h3>
                    <p>Changes to approved designs after manufacturing has begun may incur additional costs and affect timelines.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Project Cancellation:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Before manufacturing: Advance payment minus design charges (if applicable)</li>
                      <li>During manufacturing: Costs incurred plus 20% of remaining work</li>
                      <li>After installation begins: No refund on completed work</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">8. Quality and Inspection</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  We conduct quality checks at multiple stages. Upon project completion, you will have an opportunity to inspect the work. Any issues must be reported within 7 days of handover for resolution under warranty terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">9. Limitation of Liability</h2>
                <div className="space-y-3 text-stone-700">
                  <p>We are not liable for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Damage to existing structures due to hidden defects or poor original construction</li>
                    <li>Issues arising from client-supplied materials or appliances</li>
                    <li>Delays caused by factors beyond our reasonable control</li>
                    <li>Indirect or consequential damages</li>
                  </ul>
                  <p className="mt-4">
                    Our liability is limited to the contract value of your project.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">10. Intellectual Property</h2>
                <p className="text-stone-700 leading-relaxed">
                  All designs, drawings, and intellectual property created by Arki Dots remain our property. Designs are created specifically for your project and should not be replicated for other properties without our consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">11. Dispute Resolution</h2>
                <p className="text-stone-700 leading-relaxed">
                  In the event of any disputes, both parties agree to first attempt resolution through good-faith negotiation. If unresolved, disputes will be subject to the jurisdiction of courts in Kerala, India.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-700 leading-relaxed">
                      <strong>Contact Us:</strong> For questions about these Terms and Conditions, please contact us at info@arkidots.com or +91 98765 43210.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
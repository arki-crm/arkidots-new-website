import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '../components/ui/card';
import { Shield, CheckCircle2, XCircle, Clock, Wrench } from 'lucide-react';

const WarrantyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>Warranty & Service Policy | Arki Dots Modular Products Kerala</title>
        <meta name="description" content="Arki Dots Warranty Policy: 10-year flat warranty and lifetime free service on modular products. Learn what's covered and how to claim service." />
      </Helmet>

      <section className="py-12 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-stone-900 mb-4">Warranty & Service Policy</h1>
            <p className="text-stone-600">Comprehensive coverage for your modular products</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium Highlights */}
          <div className="mb-12 bg-gradient-to-br from-brand-soft to-stone-50 rounded-2xl p-8 border-2 border-brand-muted">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">10-Year Flat Warranty</h3>
                <p className="text-stone-600">Comprehensive coverage on all modular products</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Lifetime Free Service</h3>
                <p className="text-stone-600">Support for all modular installations forever</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Quick Response</h3>
                <p className="text-stone-600">Service requests attended within 48 hours</p>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-8 sm:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Applicability</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  This warranty and service policy applies exclusively to <strong>modular products</strong> manufactured and installed by Arki Dots, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4">
                  <li>Modular Kitchens</li>
                  <li>Wardrobes and Storage Solutions</li>
                  <li>Custom Modular Furniture</li>
                  <li>TV Units and Entertainment Centers</li>
                  <li>Study Tables and Workstations</li>
                </ul>
                <div className="mt-4 bg-brand-soft border-l-4 border-brand p-4 rounded-r-lg">
                  <p className="text-sm text-stone-700">
                    <strong>Note:</strong> Civil work, painting, false ceiling, and tiling are covered under a separate 1-year workmanship warranty.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-brand" />
                  10-Year Flat Warranty Coverage
                </h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Our 10-year flat warranty covers manufacturing defects and structural integrity of all modular products:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Carcass and Structure</p>
                      <p className="text-stone-600 text-sm">All plywood, HDHMR, and structural components of modular units</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Shutters and Doors</p>
                      <p className="text-stone-600 text-sm">Cabinet doors, drawer fronts, and shutter panels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Laminates and Finishes</p>
                      <p className="text-stone-600 text-sm">Surface finishes including laminates, membranes, and veneers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Installation Quality</p>
                      <p className="text-stone-600 text-sm">Workmanship and installation of all modular components</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Hardware Warranty</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Premium hardware fittings carry manufacturer warranties:
                </p>
                <ul className="space-y-2 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span><strong>Hettich & Blum:</strong> 10-year manufacturer warranty on hinges, channels, and drawer systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span><strong>Handles & Accessories:</strong> 5-year warranty on handles, knobs, and accessories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span><strong>Soft-Close Mechanisms:</strong> Covered under respective brand warranties</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-brand" />
                  Lifetime Free Service
                </h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Even after the 10-year warranty period, we provide lifetime free service for:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Adjustments and Realignments</p>
                      <p className="text-stone-600 text-sm">Hinge adjustments, shutter alignment, drawer realignment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Minor Repairs</p>
                      <p className="text-stone-600 text-sm">Tightening of handles, fixing of loose fittings, minor adjustments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Consultation</p>
                      <p className="text-stone-600 text-sm">Advice on maintenance, care, and optimal usage of your modular products</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-stone-50 p-4 rounded-lg">
                  <p className="text-sm text-stone-700">
                    <strong>Note:</strong> Lifetime free service covers labor only. Replacement parts, if needed, will be charged at actual cost.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  Warranty Exclusions
                </h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  The warranty does not cover:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Misuse or Negligence</p>
                      <p className="text-stone-600 text-sm">Damage from improper use, overloading, or lack of maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">External Factors</p>
                      <p className="text-stone-600 text-sm">Water damage, fire, accidents, natural disasters, or pest infestation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Unauthorized Modifications</p>
                      <p className="text-stone-600 text-sm">Alterations, repairs, or installations done by third parties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Normal Wear and Tear</p>
                      <p className="text-stone-600 text-sm">Minor scratches, natural wood expansion/contraction, fading from direct sunlight</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Electrical/Mechanical Appliances</p>
                      <p className="text-stone-600 text-sm">Kitchen appliances, chimneys, hobs (covered under manufacturer warranty)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Glass, Mirrors, Countertops</p>
                      <p className="text-stone-600 text-sm">Breakage of glass components or damage to stone/quartz surfaces</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">How to Claim Service</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Step 1: Contact Us</h3>
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <p className="text-stone-700 mb-2">Reach out through any of these channels:</p>
                      <p className="text-stone-700"><strong>Phone:</strong> +91 98765 43210</p>
                      <p className="text-stone-700"><strong>Email:</strong> service@arkidots.com</p>
                      <p className="text-stone-700"><strong>WhatsApp:</strong> +91 98765 43210</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Step 2: Provide Details</h3>
                    <p className="text-stone-700">Share your project details, issue description, and photos if possible</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Step 3: Service Visit</h3>
                    <p className="text-stone-700">Our technician will visit within 48 hours to assess and resolve the issue</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Maintenance Tips</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  To ensure longevity of your modular products:
                </p>
                <ul className="space-y-2 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span>Clean surfaces with a soft, damp cloth; avoid harsh chemicals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span>Do not overload drawers or shelves beyond recommended capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span>Wipe up water spills immediately, especially near sinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span>Use drawer and shutter mechanisms gently; avoid slamming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span>Ensure adequate ventilation in kitchens to reduce moisture buildup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-brand-soft to-stone-50 border-2 border-brand-muted p-6 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-3">Our Commitment</h3>
                <p className="text-stone-700 leading-relaxed">
                  At Arki Dots, quality and customer satisfaction are paramount. Our comprehensive warranty and lifetime service commitment reflect our confidence in our products and our dedication to your long-term satisfaction. We stand behind every modular product we create.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WarrantyPolicy;
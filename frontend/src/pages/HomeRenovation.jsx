import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';
import { CheckCircle2, Clock, Shield, Home as HomeIcon, ArrowRight, Hammer, PaintBucket, Lightbulb, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeRenovation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    renovationType: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend API
    toast({
      title: "Site Inspection Request Submitted!",
      description: "Our renovation expert will visit your Kerala home within 48 hours.",
    });
    setFormData({ name: '', phone: '', email: '', location: '', renovationType: '', message: '' });
  };

  const renovationTypes = [
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Kitchen Renovation',
      description: 'Transform old kitchens with new modular units, countertops, tiling, plumbing, and electrical work',
      scope: ['Replace old cabinets', 'New modular kitchen', 'Tile & backsplash update', 'Plumbing & electrical', 'Painting & finishing']
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: 'Bedroom Renovation',
      description: 'Update bedrooms with new wardrobes, false ceiling, flooring, painting, and modern lighting',
      scope: ['New wardrobe installation', 'False ceiling work', 'Flooring replacement', 'Wall painting & texture', 'Lighting upgrades']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Living Room Remodeling',
      description: 'Modernize living spaces with TV units, display areas, ceiling work, and complete aesthetic upgrades',
      scope: ['TV unit & display', 'False ceiling design', 'Wall treatments', 'Lighting design', 'Flooring update']
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: 'Bathroom Renovation',
      description: 'Complete bathroom makeovers with new fixtures, tiling, waterproofing, and modern fittings',
      scope: ['New tiles & flooring', 'Sanitary fittings', 'Waterproofing', 'Plumbing work', 'Ventilation upgrade']
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Full Home Renovation',
      description: 'Complete home transformation - all rooms, kitchen, bathrooms, painting, and structural updates',
      scope: ['Complete room-by-room work', 'Kitchen & bathrooms', 'All painting & finishing', 'Electrical & plumbing', 'Structural repairs']
    }
  ];

  const renovationProcess = [
    {
      step: '01',
      phase: 'Inspection & Assessment',
      description: 'Our team visits your Kerala home to inspect current condition, identify issues, understand your requirements, and assess structural aspects.',
      duration: '1-2 days',
      deliverables: ['Detailed home inspection', 'Structural assessment', 'Requirement discussion', 'Preliminary cost estimate']
    },
    {
      step: '02',
      phase: 'Planning & Design',
      description: 'Create renovation plan with designs, material selection, work schedule, and detailed quotation with transparent costs.',
      duration: '5-7 days',
      deliverables: ['3D designs for renovated spaces', 'Material recommendations', 'Detailed quotation', 'Timeline schedule']
    },
    {
      step: '03',
      phase: 'Execution & Work',
      description: 'Systematic execution room-by-room to minimize disruption. Demolition, civil work, installations, painting - all coordinated efficiently.',
      duration: 'Varies by scope',
      deliverables: ['Progressive work completion', 'Daily updates', 'Quality checks', 'Waste management']
    },
    {
      step: '04',
      phase: 'Finishing & Handover',
      description: 'Final touches, cleanup, quality inspection, and handover of your renovated Kerala home ready to use.',
      duration: '2-3 days',
      deliverables: ['Final inspection', 'Deep cleaning', 'Snag list resolution', 'Project handover']
    }
  ];

  const costEstimates = [
    {
      type: 'Kitchen Renovation',
      basic: '₹1,50,000 - ₹3,00,000',
      premium: '₹3,00,000 - ₹5,00,000+',
      includes: 'Modular kitchen, tiling, painting, basic electrical & plumbing work',
      timeline: '3-4 weeks'
    },
    {
      type: 'Bathroom Renovation',
      basic: '₹80,000 - ₹1,50,000',
      premium: '₹1,50,000 - ₹2,50,000+',
      includes: 'Complete tiling, new fixtures, waterproofing, plumbing, false ceiling',
      timeline: '2-3 weeks'
    },
    {
      type: 'Single Room Renovation',
      basic: '₹60,000 - ₹1,20,000',
      premium: '₹1,20,000 - ₹2,00,000+',
      includes: 'False ceiling, wardrobe, painting, flooring, electrical work',
      timeline: '2-3 weeks'
    },
    {
      type: 'Full Home Renovation (2BHK)',
      basic: '₹4,00,000 - ₹7,00,000',
      premium: '₹7,00,000 - ₹12,00,000+',
      includes: 'Complete renovation - all rooms, kitchen, bathrooms, painting, flooring',
      timeline: '2-3 months'
    }
  ];

  const whyChoose = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Kerala-Specific Expertise',
      description: 'We understand Kerala homes - traditional architecture, climate challenges, and common renovation needs specific to the region.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Transparent Pricing',
      description: 'Detailed quotations with no hidden costs. You know exactly what you\'re paying for before work begins.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Minimal Disruption',
      description: 'Room-by-room approach when needed, so you can continue living in your home during renovation.'
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Quality Workmanship',
      description: 'Experienced craftsmen using proper techniques and quality materials suitable for Kerala\'s climate.'
    }
  ];

  const faqs = [
    {
      question: 'Do I need permission from housing society for apartment renovation in Kerala?',
      answer: 'Yes, for apartments and flats, you typically need approval from your housing society or apartment association before starting renovation. This includes NOC for major structural work, plumbing changes, or work that affects common areas. We help you understand what permissions are needed and can assist with documentation. For independent houses, permission requirements vary by municipality.'
    },
    {
      question: 'How much does a typical home renovation cost in Kerala?',
      answer: 'Renovation costs vary widely based on work scope. A single room renovation costs ₹60,000-2,00,000. Kitchen renovation ranges from ₹1,50,000-5,00,000. Full 2BHK apartment renovation costs ₹4,00,000-12,00,000. These are indicative ranges - actual cost depends on material choices, structural work needed, and finishing quality. We provide detailed quotations after site inspection.'
    },
    {
      question: 'How long does home renovation take in Kerala?',
      answer: 'Timeline depends on renovation scope. A single room takes 2-3 weeks, kitchen renovation 3-4 weeks, bathroom renovation 2-3 weeks. Full 2BHK home renovation takes 2-3 months, 3BHK takes 3-4 months. These timelines include all work phases. We provide realistic schedules and keep you updated on progress.'
    },
    {
      question: 'Can we stay in the house during renovation?',
      answer: 'Yes, for partial renovations like single rooms or kitchen, you can stay in other parts of the house. We work room-by-room to minimize disruption. For full home renovation, it\'s easier to temporarily relocate, but not always necessary. We discuss living arrangements during planning based on your specific project.'
    },
    {
      question: 'What about old furniture and items during renovation?',
      answer: 'We help plan furniture relocation. For room-specific work, we shift items to other rooms with protective covering. For full home renovation, you may need to temporarily store furniture elsewhere. We coordinate waste disposal for demolished items and help with logistics. This is discussed during planning phase.'
    },
    {
      question: 'Do you handle structural repairs like leaking roofs and wall cracks?',
      answer: 'Yes, we handle common structural issues - roof leaks, wall cracks, dampness problems, plumbing leaks, and electrical issues. During initial inspection, we identify structural problems and include necessary repairs in the renovation plan. For major structural work, we may recommend consulting structural engineers.'
    },
    {
      question: 'What warranty do you provide for renovation work?',
      answer: 'We provide 1-year warranty on all renovation work including civil work, electrical, and plumbing. Materials like tiles, sanitary fittings come with manufacturer warranty. Hardware fittings have 5-10 year warranty depending on brand. We address any issues that arise during warranty period at no additional cost.'
    },
    {
      question: 'What materials do you use for Kerala climate?',
      answer: 'For Kerala\'s humid climate, we use moisture-resistant materials - waterproof cement boards, anti-fungal paints, termite-resistant wood treatment, and rust-proof fittings. For bathrooms, we ensure proper waterproofing with multiple layers. All materials are chosen considering Kerala\'s tropical climate and monsoon conditions.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home Renovation Services in Kerala | Arki Dots - Complete Remodeling</title>
        <meta name="description" content="Professional home renovation by Arki Dots. Kitchen remodeling, bathroom renovation, full home makeover in Vatakara, Kozhikode, Kannur & Kerala. Free site inspection." />
        <meta name="keywords" content="home renovation Kerala, house renovation Kozhikode, kitchen renovation Vatakara, bathroom remodeling Kannur, apartment renovation Kerala" />
        <meta property="og:title" content="Home Renovation Services in Kerala | Arki Dots" />
        <meta property="og:description" content="Professional home renovation services. Kitchen, bathroom, and complete home remodeling." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arkidots.com/home-renovation" />
      </Helmet>

      {/* Breadcrumb */}
      <section className="bg-stone-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">Home Renovation</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Hammer className="w-4 h-4" />
                <span>Transform Your Kerala Home</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Home Renovation Services in Kerala
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Give your home a fresh start. Whether it's updating an old kitchen, renovating a bathroom, or transforming your entire home, we handle renovations of all scales across Kerala with transparency and quality workmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Site Inspection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-stone-300 hover:border-brand text-stone-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  onClick={() => document.getElementById('cost-estimates').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg" 
                alt="Home renovation services in Kerala" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-brand">300+</div>
                <div className="text-sm text-stone-600">Renovations Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Many homes in Kerala - whether apartments in cities or independent houses in towns - reach a point where they need updating. Old modular units start showing wear, bathrooms need modernization, electrical wiring needs upgrades, and walls develop dampness from monsoon exposure.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              At <strong>Arki Dots</strong>, we specialize in home renovations across Kerala. We understand the unique challenges - dealing with humidity, managing work in occupied homes, coordinating with housing societies, and working with Kerala's building styles.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Whether you're updating a single room or renovating your entire home, we provide practical solutions with transparent pricing and realistic timelines. No exaggerated promises - just honest work done right.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Renovation */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Types of Home Renovation We Handle</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">From single room updates to complete home transformations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-soft text-brand rounded-full flex items-center justify-center mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl text-stone-900">{type.title}</CardTitle>
                  <CardDescription className="text-stone-600">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Our Renovation Process</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">A systematic approach from inspection to handover</p>
          </div>
          
          <div className="space-y-12">
            {renovationProcess.map((phase, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-soft text-brand rounded-full mb-4">
                          <span className="text-3xl font-bold">{phase.step}</span>
                        </div>
                        <p className="text-sm font-semibold text-stone-600">{phase.duration}</p>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <h3 className="text-2xl font-bold text-stone-900 mb-3">{phase.phase}</h3>
                        <p className="text-stone-600 mb-4 leading-relaxed">{phase.description}</p>
                        
                        <div>
                          <p className="font-semibold text-stone-900 mb-2">What You Get:</p>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((item, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1 bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                                <CheckCircle2 className="w-4 h-4 text-brand" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < renovationProcess.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-full w-0.5 h-12 bg-brand-muted -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimates */}
      <section id="cost-estimates" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Renovation Cost Estimates in Kerala</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">Indicative pricing to help you plan your budget. Actual costs depend on specific work scope and material choices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {costEstimates.map((estimate, index) => (
              <Card key={index} className="border-2 hover:border-brand transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-stone-900 mb-2">{estimate.type}</CardTitle>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm text-stone-600">Basic:</span>
                    <span className="text-lg font-bold text-stone-900">{estimate.basic}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-stone-600">Premium:</span>
                    <span className="text-lg font-bold text-brand">{estimate.premium}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-stone-600 mb-3">{estimate.includes}</p>
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <p className="text-sm text-stone-700">
                      <Clock className="w-4 h-4 inline mr-1 text-brand" />
                      <strong>Timeline:</strong> {estimate.timeline}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-brand-soft border-l-4 border-brand p-6 rounded-r-lg">
            <p className="text-stone-700 leading-relaxed">
              <strong>Important:</strong> These are approximate ranges based on typical renovation projects in Kerala. Your actual cost will depend on the current condition of your home, materials you choose, extent of structural work needed, and any unforeseen issues discovered during work. We provide detailed, itemized quotations after site inspection so you know exactly what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Timeline Expectations</h2>
            <p className="text-lg text-stone-600">Realistic timeframes for renovation projects</p>
          </div>
          
          <div className="space-y-4">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Single Room Renovation: 2-3 weeks</h3>
                    <p className="text-sm text-stone-600">Includes bedroom, living room, or similar space with wardrobe, ceiling, painting, and finishing work.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Kitchen/Bathroom Renovation: 2-4 weeks</h3>
                    <p className="text-sm text-stone-600">Complete renovation including demolition, civil work, new installations, and finishing.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">2BHK Full Renovation: 2-3 months</h3>
                    <p className="text-sm text-stone-600">Complete apartment/house renovation including all rooms, kitchen, bathrooms, and common areas.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">3BHK/Villa Full Renovation: 3-4 months</h3>
                    <p className="text-sm text-stone-600">Larger homes with extensive work, structural repairs, and comprehensive renovation.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Why Choose Arki Dots for Home Renovation</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">What sets us apart in Kerala's renovation market</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-soft text-brand rounded-full mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600">Common questions about home renovation in Kerala</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-stone-50 mb-4 rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-stone-900 hover:text-brand transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-stone-100 to-brand-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Ready to Start Your Home Renovation?</h2>
            <p className="text-lg text-stone-600">Get a free site inspection and detailed renovation plan</p>
          </div>
          
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">Full Name *</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your name"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">Phone Number *</label>
                    <Input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Email Address *</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="border-stone-300 focus:border-brand focus:ring-brand"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">Location in Kerala</label>
                    <Input 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g., Kochi, Trivandrum"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">Renovation Type</label>
                    <Input 
                      value={formData.renovationType}
                      onChange={(e) => setFormData({...formData, renovationType: e.target.value})}
                      placeholder="e.g., Kitchen renovation"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Tell Us About Your Renovation Needs</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe what you want to renovate, any specific issues, timeline expectations, etc."
                    rows={4}
                    className="border-stone-300 focus:border-brand focus:ring-brand"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-brand hover:bg-brand-dark text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Free Site Inspection
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomeRenovation;

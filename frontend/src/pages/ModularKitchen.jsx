import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';
import { CheckCircle2, Clock, Shield, Award, ArrowRight, ChefHat, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModularKitchen = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    kitchenSize: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend API
    toast({
      title: "Request Submitted!",
      description: "Our modular kitchen expert will contact you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', location: '', kitchenSize: '', message: '' });
  };

  const kitchenTypes = [
    {
      title: 'L-Shaped Kitchen',
      description: 'Perfect for small to medium-sized Kerala homes and apartments. Optimizes corner space with efficient workflow.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      features: ['Space-efficient', 'Ideal for 80-150 sq ft', 'Good ventilation']
    },
    {
      title: 'U-Shaped Kitchen',
      description: 'Maximum storage and counter space. Ideal for larger Kerala homes with dedicated kitchen areas.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      features: ['Maximum storage', 'Multiple work zones', 'Best for 120-200 sq ft']
    },
    {
      title: 'Parallel Kitchen',
      description: 'Two parallel counters creating an efficient galley-style workspace. Great for Kerala apartments.',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      features: ['Compact design', 'Easy workflow', 'Perfect for 60-100 sq ft']
    },
    {
      title: 'Island Kitchen',
      description: 'Contemporary design with central island. Premium choice for spacious villas and modern Kerala homes.',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
      features: ['Luxury design', 'Entertainment-friendly', 'Needs 180+ sq ft']
    }
  ];

  const materials = [
    {
      title: 'BWP/BWR Plywood',
      description: 'Boiling Water Resistant plywood - ideal for Kerala\'s humid climate. Termite-resistant and durable.',
      benefits: ['Moisture resistant', 'Long-lasting', 'Termite-proof']
    },
    {
      title: 'HDHMR Boards',
      description: 'High-Density High Moisture Resistant boards. Premium quality with excellent finish capabilities.',
      benefits: ['Superior strength', 'Smooth finish', 'Borer-resistant']
    },
    {
      title: 'Premium Hardware',
      description: 'International brands like Hettich, Blum for drawers, hinges, and channels ensuring smooth operation.',
      benefits: ['Soft-close technology', '10-year warranty', 'Smooth operation']
    },
    {
      title: 'Worktop Materials',
      description: 'Granite, quartz, or stainless steel countertops designed to withstand Kerala\'s tropical climate.',
      benefits: ['Heat resistant', 'Easy maintenance', 'Hygienic']
    }
  ];

  const priceRanges = [
    {
      type: 'Basic Modular Kitchen',
      priceRange: '₹1,20,000 - ₹2,50,000',
      includes: 'BWP plywood, basic hardware, laminate finish, standard accessories'
    },
    {
      type: 'Premium Modular Kitchen',
      priceRange: '₹2,50,000 - ₹4,50,000',
      includes: 'HDHMR, branded hardware, membrane/acrylic finish, premium accessories'
    },
    {
      type: 'Luxury Modular Kitchen',
      priceRange: '₹4,50,000 - ₹8,00,000+',
      includes: 'Imported materials, designer finishes, smart storage, appliances'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'Our designer visits your Kerala home to understand space, requirements, and lifestyle',
      duration: 'Day 1'
    },
    {
      step: '2',
      title: '3D Design & Quote',
      description: 'Detailed 3D visualization with material samples and transparent pricing',
      duration: 'Day 3-5'
    },
    {
      step: '3',
      title: 'Manufacturing',
      description: 'Precision manufacturing in our facility with quality checks at each stage',
      duration: 'Week 2-3'
    },
    {
      step: '4',
      title: 'Installation',
      description: 'Professional installation by skilled craftsmen with minimal disruption',
      duration: 'Week 4'
    }
  ];

  const whyChoose = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Kerala Climate Expertise',
      description: 'Specialized in materials and designs that withstand humidity and monsoon conditions'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '500+ Happy Kitchens',
      description: 'Successfully delivered modular kitchens across Kochi, Trivandrum, Kozhikode, and more'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: '5-Year Warranty',
      description: 'Comprehensive warranty on materials and workmanship with free service support'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Delivery',
      description: 'Committed 4-week timeline from design approval to installation completion'
    }
  ];

  const faqs = [
    {
      question: 'What is the average cost of a modular kitchen in Kerala?',
      answer: 'The cost of a modular kitchen in Kerala typically ranges from ₹1.2 lakhs to ₹8 lakhs depending on size, materials, and finishes. A standard 100 sq ft kitchen with quality materials costs around ₹2-3 lakhs. We provide detailed quotations after understanding your specific requirements and space.'
    },
    {
      question: 'How long does it take to complete a modular kitchen installation?',
      answer: 'A complete modular kitchen typically takes 3-4 weeks from design approval. This includes 2 weeks for manufacturing, quality checks, and 3-5 days for installation. We coordinate with your schedule to minimize disruption to your home.'
    },
    {
      question: 'What warranty do you provide on modular kitchens?',
      answer: 'We provide a comprehensive 5-year warranty on all modular kitchen components. Hardware fittings from brands like Hettich and Blum come with 10-year manufacturer warranty. Our workmanship is guaranteed, and we offer free service visits during the warranty period.'
    },
    {
      question: 'Can I customize the modular kitchen design completely?',
      answer: 'Absolutely! Every modular kitchen we design is customized to your space, lifestyle, and preferences. You can choose colors, finishes, storage solutions, accessories, and even modify layouts. Our designers work closely with you to create your dream kitchen.'
    },
    {
      question: 'Which materials are best for Kerala\'s humid climate?',
      answer: 'For Kerala\'s humid climate, we recommend BWP (Boiling Water Proof) or BWR plywood and HDHMR boards. These materials are specifically designed to resist moisture, prevent termite damage, and maintain structural integrity. We use only ISI-certified materials suitable for tropical conditions.'
    },
    {
      question: 'Do you handle all civil work and electrical fittings?',
      answer: 'Yes, we provide end-to-end solutions including civil work coordination, plumbing adjustments, electrical point installations, and chimney setup. Our team coordinates with electricians and plumbers to ensure your kitchen is fully functional.'
    },
    {
      question: 'What is included in the modular kitchen package?',
      answer: 'Our package includes base cabinets, wall cabinets, drawers with soft-close mechanisms, pull-out baskets, hardware fittings, countertop, backsplash tiles, sink, and installation. Appliances like chimneys, hobs, and built-in ovens can be included based on your choice.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Modular Kitchen Designers in Kerala | Arki Dots - Custom Kitchen Solutions</title>
        <meta name="description" content="Transform your kitchen with Arki Dots - Kerala's trusted modular kitchen designers. Custom L-shape, U-shape, Island kitchens. 5-year warranty. Price starts from ₹1.2L. Free consultation." />
        <meta name="keywords" content="modular kitchen Kerala, kitchen designers Kochi, modular kitchen Trivandrum, kitchen interior design Kerala, modular kitchen price Kerala" />
      </Helmet>

      {/* Breadcrumb */}
      <section className="bg-stone-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">Modular Kitchen</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ChefHat className="w-4 h-4" />
                <span>Kerala's Trusted Modular Kitchen Experts</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Modular Kitchen Designers in Kerala
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Transform your cooking space with custom modular kitchens designed for Kerala homes. From compact apartments to spacious villas, we create functional, beautiful kitchens that withstand our tropical climate.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Design Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-stone-300 hover:border-brand text-stone-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg" 
                alt="Modern modular kitchen in Kerala home" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-brand">₹1.2L+</div>
                <div className="text-sm text-stone-600">Starting Price</div>
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
              Modern Kerala homes demand kitchens that are not just beautiful but also practical and durable. At <strong>Arki Dots</strong>, we specialize in designing modular kitchens that perfectly suit Kerala's unique requirements - from handling monsoon humidity to maximizing space in compact apartments.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Our modular kitchen solutions combine international design trends with materials specifically chosen for tropical climates. Whether you live in a Kochi apartment, a Trivandrum villa, or a Kozhikode townhouse, we create kitchens that enhance your cooking experience while adding value to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Kitchen Types */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Types of Modular Kitchens</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Choose the perfect layout for your Kerala home</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kitchenTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-900">{type.title}</CardTitle>
                  <CardDescription className="text-base text-stone-600">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-stone-700">
                        <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Premium Materials for Kerala Climate</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">We use only ISI-certified, moisture-resistant materials suitable for tropical conditions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="text-center group">
                <div className="bg-brand-soft rounded-2xl p-8 mb-4 group-hover:bg-brand-soft transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{material.title}</h3>
                  <p className="text-sm text-stone-600 mb-4">{material.description}</p>
                  <ul className="space-y-2">
                    {material.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-stone-700 justify-center">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Modular Kitchen Price in Kerala</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Transparent pricing with no hidden costs. Final price depends on size and customization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {priceRanges.map((range, index) => (
              <Card key={index} className="border-2 hover:border-brand transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-stone-900 mb-2">{range.type}</CardTitle>
                  <div className="text-3xl font-bold text-brand">{range.priceRange}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-stone-600 leading-relaxed">{range.includes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-brand-soft border-l-4 border-brand p-6 rounded-r-lg">
            <p className="text-stone-700">
              <strong>Note:</strong> Prices are approximate and vary based on kitchen size, material choice, accessories, and appliances. We provide detailed quotations after site measurement and design discussion. All prices include design, manufacturing, delivery, and installation.
            </p>
          </div>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Our Process & Timeline</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">From concept to completion in just 4 weeks</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-brand-soft w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-brand">{step.step}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-stone-600 mb-3">{step.description}</p>
                  <span className="inline-block bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium">{step.duration}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-amber-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Why Choose Arki Dots for Your Modular Kitchen</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Experience the Arki Dots difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-brand rounded-full mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
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
            <p className="text-lg text-stone-600">Everything you need to know about modular kitchens in Kerala</p>
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

      {/* Related Services */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Explore Our Other Services</h2>
            <p className="text-lg text-stone-600">Complete interior solutions for your Kerala home</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                    <HomeIcon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Full Home Interiors</CardTitle>
                  <CardDescription>Complete interior design solutions for your entire home</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Custom Wardrobes</CardTitle>
                  <CardDescription>Bespoke wardrobe solutions maximizing your storage space</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Home Renovation</CardTitle>
                  <CardDescription>Transform your existing space with expert renovation services</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-stone-100 to-brand-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Get Your Free Kitchen Design Consultation</h2>
            <p className="text-lg text-stone-600">Share your requirements and our expert will contact you with a customized solution</p>
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
                    <label className="block text-sm font-medium text-stone-900 mb-2">Kitchen Size (approx.)</label>
                    <Input 
                      value={formData.kitchenSize}
                      onChange={(e) => setFormData({...formData, kitchenSize: e.target.value})}
                      placeholder="e.g., 100 sq ft"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Your Requirements</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your kitchen requirements, preferred layout, budget range, etc."
                    rows={4}
                    className="border-stone-300 focus:border-brand focus:ring-brand"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-brand hover:bg-brand-dark text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ModularKitchen;
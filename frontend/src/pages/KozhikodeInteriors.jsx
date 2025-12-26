import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';
import { CheckCircle2, MapPin, Phone, Mail, Clock, Award, Users, Home as HomeIcon, ArrowRight, Sparkles, PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';

const KozhikodeInteriors = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    serviceType: '',
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
      description: "Our Kozhikode team will contact you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', area: '', serviceType: '', message: '' });
  };

  const services = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: 'Complete Home Interiors',
      description: 'Full interior design solutions for apartments and villas across Kozhikode - from Kallai to Koyilandy, West Hill to Beach Road.',
      features: ['Living & dining areas', 'Bedroom wardrobes', 'Modular kitchens', 'False ceiling & lighting']
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Modular Kitchen Design',
      description: 'Custom modular kitchens designed for Kozhikode homes, using materials suited for coastal Kerala climate.',
      features: ['L-shape & U-shape layouts', 'Moisture-resistant materials', 'Premium hardware', 'Smart storage solutions']
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Home Renovation',
      description: 'Transform your existing Kozhikode home with our renovation services - updating old interiors to modern designs.',
      features: ['Complete makeovers', 'Kitchen & bathroom updates', 'Flooring & painting', 'Space optimization']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Commercial Interiors',
      description: 'Professional interior design for offices, clinics, and retail spaces in Kozhikode\'s business districts.',
      features: ['Office interiors', 'Retail spaces', 'Clinic setups', 'Reception areas']
    }
  ];

  const whyChooseUs = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local Presence in Kozhikode',
      description: 'We understand Kozhikode\'s unique architecture, climate needs, and design preferences. Our team regularly serves clients across Calicut city and surrounding areas.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: 'Successfully delivered 100+ interior projects in Kozhikode - from compact apartments in Chevayur to spacious villas in Kappad.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Project Delivery',
      description: 'We respect your time. Our Kozhikode projects are completed within agreed timelines, with regular progress updates throughout.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Climate-Appropriate Materials',
      description: 'Kozhikode\'s coastal climate needs special attention. We use moisture-resistant, termite-proof materials that last longer in humid conditions.'
    }
  ];

  const projectTimeline = [
    {
      phase: 'Consultation & Site Visit',
      description: 'Our designer visits your Kozhikode home for free consultation, measurements, and understanding your requirements.',
      duration: '1-2 days',
      activities: ['Home visit in Kozhikode area', 'Detailed measurements', 'Lifestyle discussion', 'Budget planning']
    },
    {
      phase: 'Design & Approval',
      description: 'We create 3D designs specific to your home, showing exactly how your interiors will look.',
      duration: '5-7 days',
      activities: ['3D visualization', 'Material selection', 'Color schemes', 'Quotation finalization']
    },
    {
      phase: 'Manufacturing',
      description: 'Custom furniture and modular components are manufactured with quality checks at every stage.',
      duration: '3-4 weeks',
      activities: ['Precision manufacturing', 'Quality testing', 'Material procurement', 'Regular updates']
    },
    {
      phase: 'Installation & Handover',
      description: 'Professional installation at your Kozhikode home with final inspection and handover.',
      duration: '1-2 weeks',
      activities: ['Professional installation', 'Civil work coordination', 'Final inspection', 'Project handover']
    }
  ];

  const kozhikodeAreas = [
    'Kallai', 'West Hill', 'Chevayur', 'Medical College', 'Beach Road',
    'Palazhi', 'Eranjipalam', 'Koyilandy', 'Mavoor Road', 'Kottooli',
    'Malaparamba', 'Puthiyara', 'Ramanattukara', 'Nadakkavu', 'Kappad'
  ];

  const faqs = [
    {
      question: 'Do you provide interior design services across all areas of Kozhikode?',
      answer: 'Yes, we serve clients throughout Kozhikode city and surrounding areas including Kallai, West Hill, Chevayur, Medical College, Beach Road, Palazhi, Eranjipalam, Koyilandy, Mavoor Road, and other localities. Our team is familiar with the diverse architecture across Calicut and can design for any property type.'
    },
    {
      question: 'What is the typical cost for home interiors in Kozhikode?',
      answer: 'Interior costs in Kozhikode vary based on your home size and requirements. For a 2BHK apartment, expect ₹6-15 lakhs depending on material choices. For a 3BHK or villa, budget ₹10-25 lakhs. We provide detailed quotations after visiting your Kozhikode home and understanding your specific needs.'
    },
    {
      question: 'How long does it take to complete an interior project in Kozhikode?',
      answer: 'A typical 2BHK interior project in Kozhikode takes 8-10 weeks from design approval to completion. A 3BHK or larger home takes 10-12 weeks. Timeline depends on customization level and any civil work needed. We coordinate efficiently to minimize disruption to your routine.'
    },
    {
      question: 'Are your materials suitable for Kozhikode\'s coastal climate?',
      answer: 'Absolutely. Kozhikode\'s coastal location means higher humidity and exposure to sea breeze. We specifically use moisture-resistant materials like BWP/BWR plywood, HDHMR boards, and marine-grade finishes. All materials are termite-proof and designed to withstand Kerala\'s tropical coastal climate.'
    },
    {
      question: 'Can I visit your office or showroom in Kozhikode?',
      answer: 'We serve Kozhikode clients through scheduled consultations and home visits. Contact us to arrange a meeting where our designer will visit your property in Kozhikode with material samples, previous project photos, and design ideas specific to your space.'
    },
    {
      question: 'Do you handle both apartments and independent houses in Kozhikode?',
      answer: 'Yes, we design interiors for all property types in Kozhikode - whether you own an apartment in high-rise buildings near Beach Road, a traditional house in Kallai, or a modern villa in areas like Kappad or Koyilandy. Each project is customized to suit the property\'s architecture and your lifestyle.'
    },
    {
      question: 'What warranty do you provide for projects in Kozhikode?',
      answer: 'All our Kozhikode projects come with a comprehensive 5-year warranty on materials and workmanship. Hardware fittings from premium brands include 10-year manufacturer warranty. We provide free service visits during the warranty period for any adjustments or maintenance needed.'
    },
    {
      question: 'How do I get started with my interior project in Kozhikode?',
      answer: 'Simply fill out the contact form on this page or call us directly. We\'ll schedule a free consultation visit to your home in Kozhikode at your convenience. Our designer will discuss your ideas, take measurements, and provide initial suggestions - all at no cost to you.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Interior Designers in Kozhikode | Arki Dots - Home Interior Design Kozhikode, Kerala</title>
        <meta name="description" content="Leading interior designers in Kozhikode (Calicut), Kerala. Expert home & modular kitchen design services across Kozhikode. Free consultation. 5-year warranty. Call now!" />
        <meta name="keywords" content="interior designers Kozhikode, interior designers Calicut, home interiors Kozhikode, modular kitchen Kozhikode, interior design Calicut Kerala" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kozhikode" />
        <meta name="geo.position" content="11.2588;75.7804" />
        <meta name="ICBM" content="11.2588, 75.7804" />
      </Helmet>

      {/* Breadcrumb */}
      <section className="bg-stone-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">Interior Designers in Kozhikode</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>Serving Kozhikode & Calicut Region</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Interior Designers in Kozhikode
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Transform your Kozhikode home with professional interior design services. Whether you're in Kallai, West Hill, Chevayur, or anywhere across Calicut, we create beautiful, functional spaces that enhance your lifestyle.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Home Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-stone-300 hover:border-brand text-stone-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  onClick={() => {
                    window.location.href = 'tel:+919876543210';
                  }}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </div>
              
              {/* Local Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200">
                <div>
                  <div className="text-2xl font-bold text-brand">100+</div>
                  <div className="text-sm text-stone-600">Projects in Kozhikode</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand">5 Years</div>
                  <div className="text-sm text-stone-600">Warranty</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand">Free</div>
                  <div className="text-sm text-stone-600">Home Visit</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                alt="Interior designers in Kozhikode Kerala" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Kozhikode, or Calicut as many still fondly call it, has always been a city that beautifully blends tradition with modernity. From the historic charm of Kallai to the contemporary apartments along Beach Road, homes in Kozhikode reflect diverse tastes and lifestyles.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              At <strong>Arki Dots</strong>, we understand what makes interior design in Kozhikode unique. The coastal climate, the architectural heritage, the preference for spaces that accommodate joint families, and the need for durability in humid conditions - we design keeping all these factors in mind.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Whether you're furnishing a new apartment in Chevayur, renovating a traditional home in Puthiyara, or designing a villa in Kappad, our team brings local expertise combined with contemporary design thinking to create interiors that truly feel like home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Interior Design Services in Kozhikode</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Comprehensive interior solutions for homes and commercial spaces across Calicut</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-soft text-brand rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-stone-900">{service.title}</CardTitle>
                  <CardDescription className="text-base text-stone-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-stone-700">
                        <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Why Kozhikode Homeowners Choose Arki Dots</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Local expertise meets professional excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
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

      {/* Project Timeline Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Project Execution & Timeline</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">How we bring your interior design vision to life in Kozhikode</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTimeline.map((phase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-soft text-brand rounded-full mb-2">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm font-semibold text-brand">{phase.duration}</p>
                  </div>
                  <CardTitle className="text-xl text-stone-900 text-center">{phase.phase}</CardTitle>
                  <CardDescription className="text-center">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Areas We Serve in Kozhikode</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              Professional interior design services across Calicut and surrounding localities
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {kozhikodeAreas.map((area, index) => (
                <span key={index} className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-soft hover:text-brand-dark transition-colors">
                  <MapPin className="w-4 h-4" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Serving Kozhikode Region</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">We provide interior design services across Kozhikode and nearby areas</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              {/* Google Maps Embed Placeholder */}
              <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-brand mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">Kozhikode, Kerala</h3>
                  <p className="text-stone-600">Serving clients across Calicut city and surrounding areas</p>
                </div>
              </div>
              {/* When you have an actual address, replace the above div with:
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125384.46531165985!2d75.69270482167967!3d11.258753199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659c3f11e2c8b%3A0x3a8e89ba3e6d1e4b!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Arki Dots Kozhikode Location"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600">Common questions from Kozhikode clients</p>
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

      {/* Contact CTA Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-stone-100 to-brand-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Get Your Free Home Visit in Kozhikode</h2>
            <p className="text-lg text-stone-600">Share your details and we'll schedule a consultation at your convenience</p>
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
                    <label className="block text-sm font-medium text-stone-900 mb-2">Area in Kozhikode</label>
                    <Input 
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      placeholder="e.g., Kallai, West Hill"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">Service Needed</label>
                    <Input 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      placeholder="e.g., Full home interior"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Your Requirements</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your interior design needs, property type, timeline, etc."
                    rows={4}
                    className="border-stone-300 focus:border-brand focus:ring-brand"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-brand hover:bg-brand-dark text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Free Home Visit
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-stone-200 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-stone-700">
                  <Phone className="w-5 h-5 text-brand" />
                  <span className="font-semibold">Call:</span>
                  <a href="tel:+919876543210" className="text-brand hover:text-brand-dark">+91 98765 43210</a>
                </div>
                <div className="flex items-center justify-center gap-2 text-stone-700">
                  <Mail className="w-5 h-5 text-brand" />
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:info@arkidots.com" className="text-brand hover:text-brand-dark">info@arkidots.com</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default KozhikodeInteriors;

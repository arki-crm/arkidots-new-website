import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';
import { Home as HomeIcon, Phone, Mail, MapPin, CheckCircle2, Users, Award, Clock, ArrowRight, Sparkles, Hammer, PaintBucket, Sofa, Shield, UserCheck, Pencil, PlayCircle, Package, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoTestimonials from '../components/VideoTestimonials';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend API
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      title: 'Modular Kitchen',
      description: 'Custom-designed modular kitchens with premium fittings and smart storage solutions.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      icon: <Sparkles className="w-6 h-6" />,
      link: '/modular-kitchen'
    },
    {
      title: 'Full Home Interiors',
      description: 'Complete home interior solutions from concept to execution with personalized design.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY2NzQ1ODU4fDA&ixlib=rb-4.1.0&q=85',
      icon: <HomeIcon className="w-6 h-6" />,
      link: '/full-home-interiors'
    },
    {
      title: 'Home Renovation',
      description: 'Transform your existing space with our expert renovation and remodeling services.',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg',
      icon: <Hammer className="w-6 h-6" />,
      link: '/home-renovation'
    },
    {
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces crafted to perfectly fit your space and style preferences.',
      image: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg',
      icon: <Sofa className="w-6 h-6" />,
      link: '/custom-furniture'
    }
  ];

  const whyChoose = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '10+ Years Experience',
      description: 'Proven track record in delivering exceptional interior designs across Kerala'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Design Team',
      description: 'Skilled designers and craftsmen dedicated to bringing your vision to life'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Premium materials and meticulous attention to detail in every project'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Delivery',
      description: 'Committed to completing projects within agreed timelines without compromising quality'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free in-home consultation to understand your needs, preferences, and budget',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our designers create detailed 3D designs and material selections for your approval',
      image: 'https://images.pexels.com/photos/669986/pexels-photo-669986.jpeg'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Skilled craftsmen bring the design to life with precision and quality workmanship',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final inspection, handover, and post-installation support for your satisfaction',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    }
  ];

  const locations = ['Kochi', 'Trivandrum', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam'];

  const faqs = [
    {
      question: 'What is the cost of a complete home interior in Kerala?',
      answer: 'The cost varies based on the size of your home, design complexity, and material choices. Typically, full home interiors range from ₹5 lakhs to ₹25 lakhs. We provide detailed quotations after the initial consultation.'
    },
    {
      question: 'How long does it take to complete a modular kitchen?',
      answer: 'A modular kitchen typically takes 3-4 weeks from design approval to installation. The timeline depends on the kitchen size, customization level, and material availability.'
    },
    {
      question: 'Do you provide warranty on your interior work?',
      answer: 'Yes, we provide a comprehensive warranty on all our work. Hardware and fittings come with 1-2 years warranty, while our workmanship is guaranteed for 5 years.'
    },
    {
      question: 'Can I see design concepts before work begins?',
      answer: 'Absolutely! We create detailed 3D visualizations and material samples for your approval before starting any work. You can request revisions until you\'re completely satisfied with the design.'
    },
    {
      question: 'What is included in full home interior services?',
      answer: 'Our full home interior package includes modular kitchen, wardrobes, TV units, false ceiling, lighting, painting, flooring guidance, and all civil work coordination. We handle everything from design to installation.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg" 
            alt="Modern luxury home interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Best Home Interior Designers in Kerala
            </h1>
            <p className="text-lg sm:text-xl text-stone-200 mb-8 leading-relaxed">
              Transform your home into a masterpiece with Arki Dots. We specialize in custom interior design, modular kitchens, and complete home renovations across Kerala.
            </p>
            <Button 
              size="lg" 
              className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Our Services</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Comprehensive interior design solutions tailored to your lifestyle and budget</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block">
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-stone-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-stone-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">How It Works</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              A transparent, step-by-step process from consultation to move-in
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative pb-12 mb-12 border-l-2 border-brand-muted ml-8 last:border-l-0">
              <div className="absolute -left-10 top-0 w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                01
              </div>
              <div className="ml-12">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center">
                        <UserCheck className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Meet a Designer</h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                          Free consultation to understand your requirements, budget, and design preferences. Our designer visits your Kerala home to assess the space and discuss possibilities.
                        </p>
                        <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                          Free Consultation
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pb-12 mb-12 border-l-2 border-brand-muted ml-8">
              <div className="absolute -left-10 top-0 w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                02
              </div>
              <div className="ml-12">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center">
                        <Pencil className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Book the Design</h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                          Confirm the project and begin detailed design phase. We create 3D visualizations, material selections, and comprehensive project plan for your approval.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <div className="inline-block bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-semibold border border-brand-muted">
                            5% Payment or ₹25,000
                          </div>
                          <span className="text-stone-500 text-sm self-center">(Whichever is lower)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pb-12 mb-12 border-l-2 border-brand-muted ml-8">
              <div className="absolute -left-10 top-0 w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                03
              </div>
              <div className="ml-12">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center">
                        <PlayCircle className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Execution Begins</h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                          Production and execution start after your design approval. Manufacturing of modular components, procurement of materials, and coordination of work begins.
                        </p>
                        <div className="inline-block bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-semibold border border-brand-muted">
                          50% Payment
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative pb-12 mb-12 border-l-2 border-brand-muted ml-8">
              <div className="absolute -left-10 top-0 w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                04
              </div>
              <div className="ml-12">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Ready for Installation</h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                          All work completed and quality-checked. Final payment is made before professional installation and delivery at your Kerala home begins.
                        </p>
                        <div className="inline-block bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-semibold border border-brand-muted">
                          100% Payment Complete
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative ml-8">
              <div className="absolute -left-10 top-0 w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                05
              </div>
              <div className="ml-12">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-soft">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-soft text-brand rounded-lg flex items-center justify-center">
                        <Key className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Move In & Enjoy</h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                          Project handover with final inspection. Your home is ready to enjoy with our 10-year warranty on modular products and lifetime free service support.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            10-Year Warranty
                          </div>
                          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            Lifetime Service
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Payment Summary Box */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-brand-muted shadow-xl bg-gradient-to-br from-brand-soft to-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-6 text-center">Payment Schedule Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand mb-2">5%</div>
                    <p className="text-sm text-stone-600 font-medium">Design Booking</p>
                    <p className="text-xs text-stone-500 mt-1">(or ₹25,000)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand mb-2">50%</div>
                    <p className="text-sm text-stone-600 font-medium">Execution Starts</p>
                    <p className="text-xs text-stone-500 mt-1">Production begins</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand mb-2">45%</div>
                    <p className="text-sm text-stone-600 font-medium">Before Installation</p>
                    <p className="text-xs text-stone-500 mt-1">Final payment</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-brand-muted text-center">
                  <p className="text-sm text-stone-600">
                    <strong>Note:</strong> All payments are clearly defined before work begins. No hidden costs or surprise charges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Why Choose Arki Dots</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Your trusted partner for creating beautiful, functional spaces</p>
          </div>

          {/* Premium Modular Products Highlights */}
          <div className="mb-16 bg-gradient-to-br from-brand-soft to-stone-50 rounded-2xl p-8 border-2 border-brand-muted">
            <div className="text-center mb-8">
              <span className="inline-block bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
                Modular Products Advantage
              </span>
              <p className="text-stone-700 text-sm max-w-2xl mx-auto">
                Industry-leading commitments for all our modular kitchens, wardrobes, and furniture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 10-Year Warranty */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-brand-soft hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">10-Year Flat Warranty</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Genuine 10-year flat warranty on all modular products. Long-term quality assurance and complete peace of mind.
                  </p>
                </div>
              </div>

              {/* Lifetime Free Service */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-brand-soft hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Lifetime Free Service</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Lifetime free service support for all modular installations, even after project completion. We're always here to help.
                  </p>
                </div>
              </div>

              {/* 30-Day Delivery */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-brand-soft hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">30-Day Delivery</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Structured process enables delivery and installation of modular products within 30 days. Fast, reliable execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Existing Why Choose Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-soft text-brand rounded-full mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <VideoTestimonials />

      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Our Process</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">A seamless journey from concept to completion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4 group">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-5xl font-bold text-white/30">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Serving Across Kerala</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              Arki Dots is proud to serve homeowners throughout Kerala with premium interior design services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-2 bg-stone-100 px-6 py-3 rounded-full hover:bg-brand-soft transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand" />
                  <span className="font-medium text-stone-900">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600">Everything you need to know about our interior design services</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg px-6 border-0 shadow-sm">
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-stone-100 to-brand-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Ready to Transform Your Home?</h2>
            <p className="text-lg text-stone-600">Get a free consultation and personalized quote today</p>
          </div>
          
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Project Details</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project requirements"
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

export default Home;
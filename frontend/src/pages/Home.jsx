import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';
import { Home as HomeIcon, Phone, Mail, MapPin, CheckCircle2, Users, Award, Clock, ArrowRight, Sparkles, Hammer, PaintBucket, Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      link: '/'
    },
    {
      title: 'Home Renovation',
      description: 'Transform your existing space with our expert renovation and remodeling services.',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg',
      icon: <Hammer className="w-6 h-6" />,
      link: '/'
    },
    {
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces crafted to perfectly fit your space and style preferences.',
      image: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg',
      icon: <Sofa className="w-6 h-6" />,
      link: '/'
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
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
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
            ))}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <div key={index} className="flex items-center gap-2 bg-stone-100 px-6 py-3 rounded-full hover:bg-amber-100 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-amber-600" />
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
                <AccordionTrigger className="text-left font-semibold text-stone-900 hover:text-amber-600 transition-colors">
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
      <section id="contact-form" className="py-20 bg-gradient-to-br from-stone-100 to-amber-50">
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
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
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
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
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
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Project Details</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project requirements"
                    rows={4}
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
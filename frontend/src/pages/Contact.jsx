import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission - will be replaced with backend API
    setTimeout(() => {
      toast({
        title: "Request Submitted Successfully!",
        description: "Our design consultant will contact you within 24 hours.",
      });
      setFormData({ name: '', phone: '', email: '', city: '', projectType: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const projectTypes = [
    'Modular Kitchen',
    'Full Home Interior',
    'Home Renovation',
    'Commercial Interior',
    'Custom Furniture',
    'Other'
  ];

  const keralaCities = [
    'Kochi',
    'Trivandrum',
    'Kozhikode',
    'Thrissur',
    'Kollam',
    'Kannur',
    'Alappuzha',
    'Palakkad',
    'Malappuram',
    'Kottayam',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>Contact Arki Dots | Interior Designers in Vatakara, Kozhikode, Kerala</title>
        <meta name="description" content="Contact Arki Dots for professional interior design in Kerala. Based in Vatakara, serving Kozhikode, Kannur & all Kerala. Free consultation. Call +91 98765 43210." />
        <meta name="keywords" content="contact Arki Dots, interior designer Vatakara, Kozhikode interior design contact, free consultation Kerala" />
        <meta property="og:title" content="Contact Arki Dots | Interior Designers Kerala" />
        <meta property="og:description" content="Get free consultation for your home interior project in Kerala." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arkidots.com/contact" />
        
        {/* Schema.org markup for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Arki Dots",
            "description": "Premium Interior Design Services in Kerala",
            "telephone": "+91-98765-43210",
            "email": "info@arkidots.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vatakara",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "areaServed": ["Vatakara", "Kozhikode", "Kannur", "Thalassery", "Nadapuram", "Kerala"],
            "priceRange": "₹₹₹"
          })}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Let's Transform Your Space
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Share your requirements and get a free design consultation from our expert team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-900 mb-2">
                      Full Name *
                    </label>
                    <Input 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="border-stone-300 focus:border-brand-soft0 focus:ring-brand-soft0 h-12"
                    />
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-900 mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        id="phone"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter phone number"
                        className="border-stone-300 focus:border-brand-soft0 focus:ring-brand-soft0 h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-900 mb-2">
                        Email Address *
                      </label>
                      <Input 
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter email address"
                        className="border-stone-300 focus:border-brand-soft0 focus:ring-brand-soft0 h-12"
                      />
                    </div>
                  </div>

                  {/* City and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-stone-900 mb-2">
                        City *
                      </label>
                      <Select 
                        required
                        value={formData.city}
                        onValueChange={(value) => setFormData({...formData, city: value})}
                      >
                        <SelectTrigger id="city" className="border-stone-300 focus:border-brand-soft0 focus:ring-brand-soft0 h-12">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          {keralaCities.map((city) => (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-stone-900 mb-2">
                        Project Type *
                      </label>
                      <Select 
                        required
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({...formData, projectType: value})}
                      >
                        <SelectTrigger id="projectType" className="border-stone-300 focus:border-brand-soft0 focus:ring-brand-soft0 h-12">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Privacy Statement */}
                  <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong>Privacy Commitment:</strong> Your information is secure with us. We use your details solely to contact you regarding your interior design project. We do not share, sell, or distribute your personal information to third parties. By submitting this form, you consent to being contacted by Arki Dots regarding your project inquiry.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    size="lg" 
                    className="w-full bg-brand hover:bg-brand-dark disabled:bg-stone-400 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Design Consultation'}
                  </Button>

                  {/* Success Indicators */}
                  <div className="flex items-center justify-center gap-6 pt-4 text-sm text-stone-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>24hr Response</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-stone-900 mb-6">Quick Contact</h2>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+919876543210" 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-soft transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-soft text-brand rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">Call us</p>
                      <p className="font-semibold text-stone-900">+91 98765 43210</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@arkidots.com" 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-soft transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-soft text-brand rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">Email us</p>
                      <p className="font-semibold text-stone-900 break-all">info@arkidots.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-soft text-brand rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">Service areas</p>
                      <p className="font-semibold text-stone-900">Across Kerala</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-soft text-brand rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">Response time</p>
                      <p className="font-semibold text-stone-900">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-soft to-stone-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-stone-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                    <p className="text-sm text-stone-700">Our designer contacts you within 24 hours</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                    <p className="text-sm text-stone-700">Free home visit and requirement discussion</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                    <p className="text-sm text-stone-700">Receive 3D designs and detailed quotation</p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

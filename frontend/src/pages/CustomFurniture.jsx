import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';
import { CheckCircle2, Ruler, Palette, ArrowRight, Sofa, BedDouble, Monitor, Archive, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomFurniture = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    furnitureType: '',
    location: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend API
    toast({
      title: "Consultation Request Submitted!",
      description: "Our furniture design specialist will contact you to discuss your vision.",
    });
    setFormData({ name: '', phone: '', email: '', furnitureType: '', location: '', message: '' });
  };

  const furnitureTypes = [
    {
      icon: <Archive className="w-8 h-8" />,
      title: 'Custom Wardrobes',
      description: 'Designed specifically for your bedroom, maximizing every inch of available space while reflecting your aesthetic preferences.',
      features: ['Personalized layouts', 'Smart internal organization', 'Custom dimensions', 'Choice of finishes', 'Integrated lighting options']
    },
    {
      icon: <BedDouble className="w-8 h-8" />,
      title: 'Bespoke Beds & Headboards',
      description: 'From classic designs to contemporary statements, beds crafted to your exact specifications and room proportions.',
      features: ['Custom sizes & heights', 'Upholstered or wooden', 'Storage integration', 'Matching side tables', 'Premium mattress compatibility']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Entertainment Units',
      description: 'TV units and display systems designed around your equipment, media collection, and living space architecture.',
      features: ['Cable management', 'Display shelving', 'Concealed storage', 'Acoustic considerations', 'Lighting integration']
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: 'Dining Tables & Chairs',
      description: 'Family dining sets crafted to seat your household comfortably, designed to complement your dining space perfectly.',
      features: ['Custom seating capacity', 'Material combinations', 'Extendable options', 'Matching chairs', 'Kerala home proportions']
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: 'Seating & Storage',
      description: 'Window seats, study tables, bookshelves, and multifunctional furniture pieces designed for your specific needs.',
      features: ['Multi-purpose designs', 'Space optimization', 'Built-in storage', 'Ergonomic considerations', 'Style consistency']
    }
  ];

  const materials = [
    {
      title: 'Premium Hardwoods',
      description: 'Teak, rosewood, and mango wood sourced responsibly, ideal for statement furniture pieces that last generations.',
      characteristics: ['Natural grain beauty', 'Exceptional durability', 'Ages gracefully', 'Traditional Kerala preference']
    },
    {
      title: 'Engineered Wood',
      description: 'BWP plywood and HDHMR boards for moisture resistance, perfect for Kerala\'s climate when premium finishes are desired.',
      characteristics: ['Climate-appropriate', 'Consistent quality', 'Versatile applications', 'Cost-effective for larger pieces']
    },
    {
      title: 'Upholstery & Fabrics',
      description: 'Premium fabrics, genuine leather, and performance materials selected for aesthetics, comfort, and durability.',
      characteristics: ['Wide design choices', 'Stain-resistant options', 'Breathable for Kerala climate', 'Easy maintenance']
    },
    {
      title: 'Finishes & Hardware',
      description: 'From natural wood oils to lacquers and laminates, paired with quality hardware from trusted international brands.',
      characteristics: ['Diverse aesthetic options', 'Protective coatings', 'Premium fittings', 'Long-lasting quality']
    }
  ];

  const customizationProcess = [
    {
      step: '01',
      phase: 'Design Consultation',
      description: 'We begin by understanding your space, functional needs, aesthetic preferences, and how the furniture fits into your overall home design.',
      duration: 'Initial meeting',
      focus: ['Space assessment', 'Style discussion', 'Functional requirements', 'Inspiration references']
    },
    {
      step: '02',
      phase: 'Concept Development',
      description: 'Our designers create detailed drawings and 3D visualizations showing exactly how your custom furniture will look in your space.',
      duration: '5-7 days',
      focus: ['Design sketches', '3D visualizations', 'Material samples', 'Dimension planning']
    },
    {
      step: '03',
      phase: 'Material Selection',
      description: 'Together, we select wood types, finishes, fabrics, and hardware that match your vision and budget considerations.',
      duration: 'Discussion phase',
      focus: ['Wood selection', 'Finish options', 'Fabric choices', 'Hardware selection']
    },
    {
      step: '04',
      phase: 'Craftsmanship',
      description: 'Skilled craftsmen bring the design to life in our workshop, with quality checks at every stage of production.',
      duration: '3-6 weeks',
      focus: ['Precision manufacturing', 'Quality control', 'Detail finishing', 'Progress updates']
    },
    {
      step: '05',
      phase: 'Installation',
      description: 'Professional installation at your Kerala home, ensuring perfect fit and finish with final adjustments as needed.',
      duration: 'As required',
      focus: ['Expert installation', 'Final adjustments', 'Quality inspection', 'Care instructions']
    }
  ];

  const idealClients = [
    {
      title: 'Unique Space Requirements',
      description: 'Homes with non-standard dimensions, awkward corners, or architectural features that standard furniture can\'t accommodate.',
      examples: ['Sloped ceilings', 'Unusual wall lengths', 'Bay windows', 'Column placements']
    },
    {
      title: 'Design Vision',
      description: 'Clients with specific aesthetic goals who haven\'t found ready-made furniture that matches their interior design concept.',
      examples: ['Matching home theme', 'Family heirlooms inspiration', 'Personal style preferences', 'Cohesive design language']
    },
    {
      title: 'Quality Seekers',
      description: 'Those who value craftsmanship and longevity over mass-produced alternatives, willing to invest in furniture that lasts.',
      examples: ['Generational pieces', 'Superior materials', 'Detailed craftsmanship', 'Long-term value']
    },
    {
      title: 'Complete Interior Projects',
      description: 'Homeowners undertaking full interior design who want every element - from walls to furniture - thoughtfully integrated.',
      examples: ['New home interiors', 'Complete renovations', 'Designer coordination', 'Unified aesthetics']
    }
  ];

  const faqs = [
    {
      question: 'How is custom furniture different from buying ready-made furniture?',
      answer: 'Custom furniture is designed specifically for your space and needs. You choose exact dimensions, materials, finishes, and functionality. It fits perfectly, matches your style precisely, and uses quality materials you select. Ready-made furniture offers convenience but lacks personalization and often compromises on fit or design. Custom furniture is an investment in pieces that truly belong in your home.'
    },
    {
      question: 'How long does it take to create custom furniture?',
      answer: 'Timeline varies by complexity. Simple pieces like side tables take 3-4 weeks. Wardrobes typically need 4-6 weeks. Complete bedroom or dining sets may take 6-8 weeks. This includes design finalization, material procurement, craftsmanship, and installation. We provide realistic timelines upfront and keep you updated throughout the process.'
    },
    {
      question: 'Can I see the furniture before it\'s installed in my home?',
      answer: 'We provide detailed 3D visualizations during the design phase so you can see exactly how your furniture will look. For significant projects, workshop visits can be arranged to see work in progress. However, final assembly and finishing often happen at your home during installation to ensure perfect fit and prevent transportation damage.'
    },
    {
      question: 'What if I\'m also doing complete home interiors?',
      answer: 'That\'s ideal! Custom furniture works best when integrated with overall interior design. We coordinate furniture design with your room layouts, color schemes, and other interior elements. This ensures aesthetic consistency and optimal space utilization. Many of our custom furniture projects are part of complete home interior packages.'
    },
    {
      question: 'How do I choose between solid wood and engineered wood?',
      answer: 'Both have merits. Solid wood (teak, rosewood) offers natural beauty, traditional appeal, and generational durability - ideal for statement pieces like dining tables and beds. Engineered wood (plywood, HDHMR) is moisture-resistant, consistent, and cost-effective - excellent for wardrobes and larger pieces in Kerala\'s climate. We guide you based on furniture type, location in home, and your preferences.'
    },
    {
      question: 'Do you provide warranty on custom furniture?',
      answer: 'Yes, we provide a 5-year warranty on structural integrity and workmanship. Hardware from premium brands (Hettich, Blum) carries 10-year manufacturer warranty. Natural wood characteristics like minor expansion/contraction due to humidity are normal and not defects. We provide care instructions and offer maintenance guidance throughout the warranty period.'
    },
    {
      question: 'Can you match furniture to existing pieces in my home?',
      answer: 'Absolutely. If you have existing furniture you love and want new pieces to complement it, we can work with photos, samples, or site visits to match styles, finishes, and proportions. This is common when extending dining sets, creating matching bedroom furniture, or adding pieces to living rooms while maintaining design consistency.'
    },
    {
      question: 'How much should I budget for custom furniture?',
      answer: 'Custom furniture investment varies significantly based on materials, size, and complexity. A custom wardrobe might range ₹80,000-2,50,000 depending on size and finish. A dining table set could be ₹1,00,000-3,00,000 based on wood choice and seating capacity. We discuss budget during consultation and design within your parameters, offering material alternatives when needed without compromising quality.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Custom Furniture Designers in Kerala | Arki Dots - Bespoke Furniture</title>
        <meta name="description" content="Premium custom furniture by Arki Dots. Bespoke wardrobes, beds, dining tables crafted in Vatakara. Serving Kozhikode, Kannur & all Kerala with quality craftsmanship." />
        <meta name="keywords" content="custom furniture Kerala, bespoke furniture Kozhikode, custom wardrobe Vatakara, furniture designers Kannur, custom made furniture Kerala" />
        <meta property="og:title" content="Custom Furniture Designers in Kerala | Arki Dots" />
        <meta property="og:description" content="Bespoke furniture design and manufacturing. Custom wardrobes, beds, dining tables." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arkidots.com/custom-furniture" />
      </Helmet>

      {/* Breadcrumb */}
      <section className="bg-stone-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">Custom Furniture</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                <span>Crafted for You, Designed by Experts</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Custom Furniture Designers in Kerala
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Every home has unique spaces and every family has specific needs. We design and craft custom furniture that fits your space perfectly, matches your aesthetic vision, and functions exactly as you need it to.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Design Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg" 
                alt="Custom furniture designers in Kerala" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-brand">Bespoke</div>
                <div className="text-sm text-stone-600">Every Piece Unique</div>
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
              There's a fundamental difference between buying furniture and having it made for you. Off-the-shelf furniture asks you to adapt your life to standard dimensions and generic designs. Custom furniture adapts to your space, your needs, and your vision.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              At <strong>Arki Dots</strong>, custom furniture design is an integral part of our interior design practice. Whether you're furnishing a new Kerala home or seeking that perfect piece that standard furniture stores don't offer, we bring together thoughtful design and skilled craftsmanship.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Our approach is collaborative. We listen to how you use your spaces, understand your aesthetic preferences, and create furniture that feels like it was always meant to be there - because it was designed exactly for that purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Furniture */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Custom Furniture We Design</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">From wardrobes to dining sets, every piece tailored to your specifications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-soft text-brand rounded-full flex items-center justify-center mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl text-stone-900">{type.title}</CardTitle>
                  <CardDescription className="text-stone-600 leading-relaxed">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
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

      {/* Materials & Finishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Materials & Finishes</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Quality materials carefully selected for Kerala's climate and your aesthetic vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-900">{material.title}</CardTitle>
                  <CardDescription className="text-base text-stone-600 leading-relaxed">{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {material.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-stone-700">
                        <Ruler className="w-4 h-4 text-brand flex-shrink-0 mt-1" />
                        <span className="text-sm">{char}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Process */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">The Customization Process</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">From concept to installation, a collaborative journey</p>
          </div>
          
          <div className="space-y-8">
            {customizationProcess.map((phase, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                      <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-soft text-brand rounded-full mb-3">
                          <span className="text-2xl font-bold">{phase.step}</span>
                        </div>
                        <p className="text-sm font-medium text-stone-600">{phase.duration}</p>
                      </div>
                      
                      <div className="lg:col-span-4">
                        <h3 className="text-2xl font-bold text-stone-900 mb-3">{phase.phase}</h3>
                        <p className="text-stone-600 mb-4 leading-relaxed">{phase.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {phase.focus.map((item, idx) => (
                            <span key={idx} className="inline-block bg-brand-soft text-brand-dark px-3 py-1 rounded-full text-sm font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < customizationProcess.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-full w-0.5 h-8 bg-brand-muted"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Who Benefits from Custom Furniture</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Custom furniture makes the most sense in these situations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealClients.map((client, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-stone-900 mb-3">{client.title}</CardTitle>
                  <CardDescription className="text-base text-stone-600 leading-relaxed">{client.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {client.examples.map((example, idx) => (
                      <div key={idx} className="bg-stone-50 px-3 py-2 rounded-lg text-sm text-stone-700 text-center">
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Interiors */}
      <section className="py-20 bg-gradient-to-br from-brand-soft to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">Part of Complete Interior Design</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Custom furniture works best when integrated with overall interior design. At Arki Dots, we coordinate furniture design with room layouts, color palettes, and architectural elements to create cohesive, harmonious spaces.
          </p>
          <p className="text-lg text-stone-700 mb-8">
            Many of our <Link to="/full-home-interiors" className="text-brand hover:text-brand-dark font-semibold underline">full home interior projects</Link> include custom furniture as key elements. This integration ensures every piece - from built-in wardrobes to freestanding dining tables - contributes to a unified design vision.
          </p>
          <Button 
            size="lg"
            variant="outline" 
            className="border-2 border-stone-300 hover:border-brand text-stone-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
            onClick={() => window.location.href = '/full-home-interiors'}
          >
            Explore Full Home Interiors
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600">Common questions about custom furniture design</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Start Your Custom Furniture Project</h2>
            <p className="text-lg text-stone-600">Share your vision and let's create furniture that's uniquely yours</p>
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
                    <label className="block text-sm font-medium text-stone-900 mb-2">Furniture Type</label>
                    <Input 
                      value={formData.furnitureType}
                      onChange={(e) => setFormData({...formData, furnitureType: e.target.value})}
                      placeholder="e.g., Wardrobe, Dining Table"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">Location in Kerala</label>
                    <Input 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g., Kochi, Trivandrum"
                      className="border-stone-300 focus:border-brand focus:ring-brand"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Tell Us About Your Vision</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe the furniture you envision, space dimensions if known, style preferences, any inspiration images you have in mind, etc."
                    rows={4}
                    className="border-stone-300 focus:border-brand focus:ring-brand"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-brand hover:bg-brand-dark text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Design Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CustomFurniture;

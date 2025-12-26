import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';
import { CheckCircle2, Clock, Shield, Users, ArrowRight, Home as HomeIcon, Sofa, Bed, PaintBucket, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const FullHomeInteriors = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    homeType: '',
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
      title: "Request Submitted!",
      description: "Our interior design consultant will contact you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', homeType: '', location: '', message: '' });
  };

  const inclusions = [
    {
      icon: <Sofa className="w-8 h-8" />,
      title: 'Living & Dining Areas',
      items: ['TV unit design', 'Seating arrangements', 'Display units', 'Dining table setup', 'Lighting design']
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: 'Bedrooms',
      items: ['Wardrobe solutions', 'Bed design & setup', 'Study/work areas', 'Storage planning', 'Lighting & ambiance']
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: 'Modular Kitchen',
      items: ['Complete kitchen layout', 'Cabinets & storage', 'Countertops', 'Backsplash & accessories', 'Appliance integration']
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Finishing Works',
      items: ['Wall paint & textures', 'False ceiling', 'Flooring guidance', 'Electrical & lighting', 'Plumbing coordination']
    }
  ];

  const homeScopes = [
    {
      type: '1BHK Interior Design',
      area: '400-600 sq ft',
      scope: [
        'One bedroom with wardrobe',
        'Living room with TV unit',
        'Modular kitchen',
        'Bathroom coordination',
        'Entrance & balcony design'
      ],
      idealFor: 'Young professionals, Small families, First-time homeowners',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY2NzQ1ODU4fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      type: '2BHK Interior Design',
      area: '800-1000 sq ft',
      scope: [
        'Two bedrooms with wardrobes',
        'Living & dining area',
        'Modular kitchen with breakfast counter',
        'Two bathroom coordination',
        'Foyer & utility areas'
      ],
      idealFor: 'Small to medium families, Growing families, Apartment owners',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      type: '3BHK Interior Design',
      area: '1200-1500 sq ft',
      scope: [
        'Three bedrooms with full wardrobes',
        'Spacious living & dining',
        'Premium modular kitchen',
        'Multiple bathroom coordination',
        'Study room, guest areas, balconies'
      ],
      idealFor: 'Larger families, Villa owners, Premium apartments',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    }
  ];

  const costRanges = [
    {
      homeType: '1BHK Apartment',
      area: '400-600 sq ft',
      basicRange: '₹3,00,000 - ₹5,00,000',
      premiumRange: '₹5,00,000 - ₹8,00,000',
      includes: 'Basic modular furniture, standard fittings, simple false ceiling, painting',
      timeline: '6-8 weeks'
    },
    {
      homeType: '2BHK Apartment',
      area: '800-1000 sq ft',
      basicRange: '₹6,00,000 - ₹10,00,000',
      premiumRange: '₹10,00,000 - ₹15,00,000',
      includes: 'Complete modular furniture, premium materials, designer ceiling, quality paint',
      timeline: '8-10 weeks'
    },
    {
      homeType: '3BHK Apartment',
      area: '1200-1500 sq ft',
      basicRange: '₹10,00,000 - ₹15,00,000',
      premiumRange: '₹15,00,000 - ₹25,00,000',
      includes: 'Luxury finishes, imported materials, complete customization, smart features',
      timeline: '10-12 weeks'
    }
  ];

  const workflow = [
    {
      step: '01',
      phase: 'Consultation & Planning',
      description: 'We visit your Kerala home, understand your lifestyle needs, budget, and preferences. Discuss timelines and create a project roadmap.',
      duration: 'Week 1',
      deliverables: ['Site measurement', 'Requirement documentation', 'Budget discussion', 'Timeline planning']
    },
    {
      step: '02',
      phase: 'Design Development',
      description: 'Our designers create detailed 3D designs for each room, select materials, and provide mood boards for your approval.',
      duration: 'Week 2-3',
      deliverables: ['3D visualizations', 'Material samples', 'Color schemes', 'Detailed quotation']
    },
    {
      step: '03',
      phase: 'Manufacturing & Procurement',
      description: 'Once approved, we manufacture modular components in our facility and procure materials from trusted vendors.',
      duration: 'Week 4-8',
      deliverables: ['Quality-checked components', 'Material procurement', 'Regular updates', 'Timeline adherence']
    },
    {
      step: '04',
      phase: 'Execution & Installation',
      description: 'Our skilled team executes civil work, painting, and installs all modular components with minimal disruption to your routine.',
      duration: 'Week 9-12',
      deliverables: ['Civil work coordination', 'Professional installation', 'Quality checks', 'Final handover']
    }
  ];

  const qualityCommitments = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Only ISI-certified, moisture-resistant materials suitable for Kerala\'s climate. Every component passes strict quality checks.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: '5-Year Warranty',
      description: 'Comprehensive warranty on all materials and workmanship. Hardware from brands like Hettich and Blum come with 10-year warranty.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Timeline Commitment',
      description: 'Clear milestones and regular updates. We commit to agreed timelines and keep you informed throughout the project.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Project Manager',
      description: 'A single point of contact manages your entire project, coordinates with all teams, and ensures smooth execution.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh & Priya Kumar',
      location: 'Kochi',
      homeType: '2BHK Apartment',
      text: 'Arki Dots transformed our 2BHK apartment into a beautiful home. They understood our needs perfectly and delivered exactly what we wanted. The quality of work is excellent and they completed on time.',
      rating: 5
    },
    {
      name: 'Anita Menon',
      location: 'Trivandrum',
      homeType: '3BHK Villa',
      text: 'Very professional team. They helped us with every decision - from material selection to color choices. The 3D designs helped us visualize everything before work started. Highly recommended!',
      rating: 5
    },
    {
      name: 'Suresh Krishnan',
      location: 'Kozhikode',
      homeType: '1BHK Apartment',
      text: 'Perfect for our first home. Arki Dots worked within our budget and created a functional, modern space. Their designers are creative and the execution team is very skilled.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What is the total cost of full home interiors in Kerala?',
      answer: 'The cost varies based on your home size, material choices, and design complexity. For a 2BHK apartment (800-1000 sq ft), expect ₹6-15 lakhs. For a 3BHK (1200-1500 sq ft), budget ₹10-25 lakhs. We provide detailed, itemized quotations after understanding your specific requirements and budget.'
    },
    {
      question: 'How long does a complete home interior project take?',
      answer: 'Typically, a 2BHK takes 8-10 weeks and a 3BHK takes 10-12 weeks from design approval to final handover. This includes manufacturing time, material procurement, and installation. Timeline depends on customization level and any civil work required.'
    },
    {
      question: 'Do you handle all the work or do I need to coordinate with multiple vendors?',
      answer: 'We provide complete turnkey solutions. Our team handles everything - design, manufacturing, material procurement, civil work coordination, electrical and plumbing work, painting, and installation. You get a single point of contact who manages the entire project.'
    },
    {
      question: 'What materials do you use for Kerala homes?',
      answer: 'We use moisture-resistant materials specifically suitable for Kerala\'s humid climate - BWP/BWR plywood, HDHMR boards, marine plywood where needed. All materials are ISI-certified. For hardware, we use premium brands like Hettich, Blum, and Ebco that perform well in tropical conditions.'
    },
    {
      question: 'Can I see the design before work starts?',
      answer: 'Absolutely! We create detailed 3D visualizations of your entire home - every room, every angle. You can see exactly how your home will look, make changes, approve materials and colors before we start any work. We also provide physical material samples.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'We provide a comprehensive 5-year warranty on all our work including materials and workmanship. Premium hardware fittings come with 10-year manufacturer warranty. We also offer free service visits during the warranty period for any adjustments needed.'
    },
    {
      question: 'Do I need to vacate my home during the work?',
      answer: 'Not necessarily. For occupied homes, we plan the work in phases - one room at a time. This way, you can continue living in your home. However, for faster completion and less disruption, a vacant home allows us to work more efficiently.'
    },
    {
      question: 'What if I want to make changes after seeing the 3D design?',
      answer: 'Changes are welcome! The 3D design phase is specifically for this - to visualize, review, and refine. You can request modifications to layouts, colors, materials, and finishes. We revise the designs until you\'re completely satisfied before moving to execution.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Full Home Interior Designers in Kerala | Arki Dots - Complete Home Solutions</title>
        <meta name="description" content="Transform your Kerala home with Arki Dots. Complete interior design for apartments and villas. Based in Vatakara, serving Kozhikode, Kannur & all Kerala. 10-year warranty. Free consultation." />
        <meta name="keywords" content="full home interiors Kerala, home interior design Vatakara, interior designers Kozhikode, home interior Kannur, apartment interior design Kerala" />
        <meta property="og:title" content="Full Home Interior Designers in Kerala | Arki Dots" />
        <meta property="og:description" content="Complete home interior solutions by Arki Dots. Living rooms, bedrooms, kitchens with 10-year warranty." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arkidots.com/full-home-interiors" />
      </Helmet>

      {/* Breadcrumb */}
      <section className="bg-stone-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">Full Home Interiors</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HomeIcon className="w-4 h-4" />
                <span>Complete Interior Solutions for Kerala Homes</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Full Home Interior Designers in Kerala
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Whether you own a 1BHK apartment or a spacious villa, we create complete interior solutions that reflect your lifestyle. From concept to completion, we handle everything so you can simply move in and enjoy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-stone-300 hover:border-brand text-stone-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  onClick={() => document.getElementById('cost-estimate').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY2NzQ1ODU4fDA&ixlib=rb-4.1.0&q=85" 
                alt="Full home interior design in Kerala" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-brand">500+</div>
                <div className="text-sm text-stone-600">Homes Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">What Full Home Interiors Include</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Complete interior solutions covering every room and every detail of your home</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusions.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-soft text-brand rounded-full flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-stone-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Type Scope Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Interior Design by Home Type</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Tailored solutions for 1BHK, 2BHK, 3BHK apartments and villas</p>
          </div>
          
          <div className="space-y-12">
            {homeScopes.map((home, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={home.image} 
                      alt={home.type}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">{home.type}</h3>
                    <p className="text-brand font-semibold mb-4">Typical Area: {home.area}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-stone-900 mb-3">What We Cover:</h4>
                      <ul className="space-y-2">
                        {home.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-stone-600">
                            <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-brand-soft p-4 rounded-lg">
                      <p className="text-sm text-stone-700">
                        <strong>Ideal For:</strong> {home.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimate Section */}
      <section id="cost-estimate" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Estimated Cost Range</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">Indicative pricing for complete home interiors in Kerala. Final cost depends on your specific choices and customization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {costRanges.map((cost, index) => (
              <Card key={index} className="border-2 hover:border-brand transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-stone-900 mb-2">{cost.homeType}</CardTitle>
                  <p className="text-sm text-stone-600">{cost.area}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-stone-600 mb-1">Basic Package</p>
                    <p className="text-2xl font-bold text-stone-900">{cost.basicRange}</p>
                  </div>
                  <div>
                    <p className="text-sm text-stone-600 mb-1">Premium Package</p>
                    <p className="text-2xl font-bold text-brand">{cost.premiumRange}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-stone-600 mb-2"><strong>Includes:</strong></p>
                    <p className="text-sm text-stone-700">{cost.includes}</p>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <p className="text-sm text-stone-700">
                      <Clock className="w-4 h-4 inline mr-1 text-brand" />
                      <strong>Timeline:</strong> {cost.timeline}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-brand-soft border-l-4 border-brand p-6 rounded-r-lg">
            <p className="text-stone-700 leading-relaxed">
              <strong>Important Note:</strong> These are indicative price ranges based on typical projects. Your actual cost depends on material selection (standard vs. premium), degree of customization, any structural changes needed, and appliances included. We provide detailed, itemized quotations after site visit and design discussion. No hidden costs - you know exactly what you're paying for.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Design to Delivery Workflow</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">A transparent, step-by-step process from consultation to final handover</p>
          </div>
          
          <div className="space-y-12">
            {workflow.map((phase, index) => (
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
                          <p className="font-semibold text-stone-900 mb-2">Key Deliverables:</p>
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
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-full w-0.5 h-12 bg-brand-muted -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Commitment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Quality, Warranty & Project Management</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Our commitments to ensure your peace of mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityCommitments.map((item, index) => (
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Real experiences from homeowners across Kerala</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-brand mb-4" />
                  <p className="text-stone-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-stone-900">{testimonial.name}</p>
                    <p className="text-sm text-stone-600">{testimonial.homeType} • {testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600">Clear answers to common questions about full home interiors</p>
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

      {/* CTA Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-stone-100 to-brand-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Ready to Transform Your Home?</h2>
            <p className="text-lg text-stone-600">Share your details and our consultant will reach out with a customized plan</p>
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
                    <label className="block text-sm font-medium text-stone-900 mb-2">Home Type</label>
                    <Input 
                      value={formData.homeType}
                      onChange={(e) => setFormData({...formData, homeType: e.target.value})}
                      placeholder="e.g., 2BHK Apartment"
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
                  <label className="block text-sm font-medium text-stone-900 mb-2">Your Requirements</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your interior requirements, timeline, budget range, etc."
                    rows={4}
                    className="border-stone-300 focus:border-brand focus:ring-brand"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-brand hover:bg-brand-dark text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Consultation Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FullHomeInteriors;

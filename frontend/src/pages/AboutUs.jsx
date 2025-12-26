import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2, Target, Compass, Users, ArrowRight, Clock, Shield, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workingProcess = [
    {
      step: '01',
      title: 'Understanding Your Needs',
      description: 'We begin by listening. What do you envision for your space? What are your functional requirements? What\'s your timeline and budget? This foundation shapes everything that follows.'
    },
    {
      step: '02',
      title: 'Detailed Planning',
      description: 'Every project gets a comprehensive plan - design concepts, material specifications, work schedule, and transparent quotations. You see the complete picture before work begins.'
    },
    {
      step: '03',
      title: 'Quality Execution',
      description: 'Our teams coordinate civil work, manufacturing, installations, and finishing. Each phase is monitored for quality, and you receive regular progress updates throughout.'
    },
    {
      step: '04',
      title: 'Timely Delivery',
      description: 'We work within agreed timelines, managing dependencies and coordinating trades efficiently. Delays cost everyone - we plan to avoid them and communicate proactively if issues arise.'
    }
  ];

  const clientExpectations = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Clear Communication',
      description: 'Regular updates on progress, transparent discussions about costs, and honest timelines. You always know where your project stands.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Standards',
      description: 'Materials suitable for Kerala\'s climate, proper installation techniques, and attention to finishing details. We build to last.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Timeline Commitment',
      description: 'Realistic schedules we can meet. If unexpected issues arise, you\'re informed immediately with revised plans.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Single Point of Contact',
      description: 'One project manager coordinates everything - design, procurement, execution, and handover. No confusion about whom to contact.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Arki Dots | Interior Design & Turnkey Execution Company in Kerala</title>
        <meta name="description" content="Arki Dots provides end-to-end home interior design and execution services across Kerala. Learn about our vision, mission, and process-driven approach to transforming homes." />
        <meta name="keywords" content="about Arki Dots, interior design company Kerala, turnkey interiors, home interior execution Kerala" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            About Arki Dots
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            We design and execute home interiors across Kerala - from initial concepts to final installation, managing every aspect of the process so you don't have to.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Arki Dots is an interior design and turnkey execution company based in Kerala. We handle complete home interior projects - modular kitchens, wardrobes, living spaces, bedrooms, renovations, and custom furniture.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              What makes us different is our approach. We're not just designers who hand over drawings. We're not just contractors who execute someone else's plans. We manage the entire journey - from understanding what you need, to designing it, to manufacturing components, to coordinating installation, to final handover.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              This integrated approach means accountability. When you work with Arki Dots, there's one team responsible for everything. If something needs adjusting, we handle it. If timelines need managing, we coordinate it. If decisions need making, we guide you through them.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Compass className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Creating Homes That Work for Kerala Families
              </h2>
              <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
                <p>
                  We envision home interiors where quality isn't a luxury add-on but a standard. Where timelines are met not because we rush, but because we plan properly. Where transparency isn't exceptional - it's just how we operate.
                </p>
                <p>
                  Every Kerala home has unique challenges - humid climate, varying space constraints, diverse family structures. We design understanding these realities, not importing generic solutions from elsewhere.
                </p>
                <p>
                  Our vision is simple: when you choose Arki Dots, you should feel confident that your project will be completed as discussed, within agreed timelines, with materials that last in Kerala's climate, and finish quality you can see and feel.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                alt="Interior design vision Arki Dots Kerala" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg" 
                alt="Interior design execution Arki Dots" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Reliable Execution, Every Project
              </h2>
              <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
                <p>
                  Our mission is straightforward: deliver what we commit to. This means maintaining quality standards, meeting timelines, staying within budgets discussed upfront, and solving problems as they arise rather than passing them to you.
                </p>
                <p>
                  We achieve this through systematic processes - detailed planning before work starts, regular quality checks during execution, proper coordination between teams, and transparent communication throughout.
                </p>
                <p>
                  Every project at Arki Dots follows documented processes. This isn't about bureaucracy - it's about ensuring nothing falls through cracks and everyone knows what needs to happen next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">How We Work</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">A systematic approach from concept to completion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((phase, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{phase.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{phase.description}</p>
                </CardContent>
                {index < workingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-amber-200 -translate-y-1/2"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Can Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">What You Can Expect</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Clear standards we maintain across all projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientExpectations.map((expectation, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                  {expectation.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{expectation.title}</h3>
                <p className="text-stone-600 leading-relaxed">{expectation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 text-center">
                Our Commitment to You
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Detailed Planning:</strong> Every project starts with comprehensive planning. You'll see designs, understand costs, and know timelines before work begins.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Quality Materials:</strong> We use materials appropriate for Kerala's climate - moisture-resistant, termite-proof, and built to last through monsoons and humidity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Skilled Execution:</strong> Our craftsmen and installation teams are experienced in working with Kerala homes - understanding local construction, managing space constraints, and coordinating with existing structures.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Post-Installation Support:</strong> We provide warranty on our work and remain available for any adjustments or questions after project completion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Serving Kerala */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">Serving Homes Across Kerala</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            From apartments in Kochi to villas in Trivandrum, from traditional homes in Kozhikode to modern houses in Thrissur - we've worked across Kerala's diverse architecture and family needs. Each location has its specifics, and we design accordingly.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Whether you're in a major city or a smaller town, our approach remains consistent: understand your needs, plan thoroughly, execute with quality, and deliver on time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            If you're planning home interiors, renovations, or custom furniture in Kerala, we'd like to hear about it. Share your requirements, and we'll discuss how we can help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Speak with Our Design Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-stone-300 hover:border-amber-600 text-stone-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              onClick={() => navigate('/')}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

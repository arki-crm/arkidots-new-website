import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>Our Works - Interior Design Projects Gallery | Arki Dots Kerala</title>
        <meta name="description" content="View completed interior design projects by Arki Dots across Kerala. Apartments, villas, renovations - see our portfolio of home transformations." />
        <meta name="keywords" content="interior design portfolio Kerala, completed projects Arki Dots, home interior gallery, apartment interior photos Kerala" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            Our Works
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            A collection of homes we've transformed across Kerala. Each project tells a unique story of design, craftsmanship, and attention to detail.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/projects/${project.id}`}
                className="group"
              >
                <Card className="border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.name} - ${project.location} interior design by Arki Dots`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                    
                    {/* Project Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-stone-900 px-3 py-1 rounded-full text-xs font-semibold">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand transition-colors">
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-2 text-stone-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Let's discuss how we can transform your Kerala home with thoughtful design and quality execution.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
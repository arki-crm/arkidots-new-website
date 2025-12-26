import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { MapPin, Home as HomeIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">Project Not Found</h1>
          <Link to="/gallery" className="text-brand hover:text-brand-dark font-semibold">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // Flatten all images into single array with section labels
  const allImages = [
    ...project.images.living.map(img => ({ ...img, section: 'Living Room' })),
    ...project.images.kitchen.map(img => ({ ...img, section: 'Kitchen' })),
    ...project.images.bedrooms.map(img => ({ ...img, section: 'Bedrooms' })),
    ...(project.images.dining ? project.images.dining.map(img => ({ ...img, section: 'Dining' })) : [])
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>{project.name} - {project.location} | Arki Dots Interior Design Portfolio</title>
        <meta name="description" content={`${project.description} Interior design project by Arki Dots in ${project.location}, Kerala.`} />
        <meta name="keywords" content={`${project.type} interior design ${project.location}, ${project.name}, Arki Dots portfolio Kerala`} />
      </Helmet>

      {/* Back Button */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/gallery')}
            className="flex items-center gap-2 text-stone-600 hover:text-brand transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Gallery</span>
          </button>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-12 bg-gradient-to-br from-stone-50 to-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-semibold">
                {project.type}
              </span>
              {project.size && (
                <span className="bg-stone-100 text-stone-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {project.size}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 leading-tight">
              {project.name}
            </h1>
            
            <div className="flex items-center gap-2 text-stone-600 mb-6">
              <MapPin className="w-5 h-5 text-brand" />
              <span className="text-lg">{project.location}</span>
            </div>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Continuous Image Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Group images by section but display continuously */}
            {Object.entries({
              'Living Room': project.images.living,
              'Kitchen': project.images.kitchen,
              'Bedrooms': project.images.bedrooms,
              'Dining': project.images.dining || []
            }).map(([sectionName, images]) => {
              if (images.length === 0) return null;
              
              return (
                <div key={sectionName} className="space-y-6">
                  {/* Section Label - Optional visual grouping */}
                  <div className="flex items-center gap-3">
                    <div className="h-px bg-brand w-12"></div>
                    <h2 className="text-xl font-semibold text-stone-900">{sectionName}</h2>
                    <div className="h-px bg-stone-200 flex-1"></div>
                  </div>
                  
                  {/* Images in this section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.map((image, idx) => (
                      <div 
                        key={idx} 
                        className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Inspired by This Project?
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Let's create something beautiful for your Kerala home. Share your vision with our design team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-stone-300 hover:border-brand text-stone-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
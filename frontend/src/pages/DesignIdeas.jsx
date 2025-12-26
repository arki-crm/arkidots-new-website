import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Palette, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { designCategories } from '../data/designIdeas';

const DesignIdeas = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>Design Ideas & Inspiration | Arki Dots Kerala</title>
        <meta name="description" content="Explore interior design ideas and inspiration for your Kerala home. Browse modular kitchens, living rooms, bedrooms, wardrobes, and full home interiors." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", backgroundRepeat: 'repeat' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Design Inspiration</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Design Ideas for Your
            <span className="text-amber-400"> Dream Home</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto mb-8">
            Explore curated interior design inspirations to help you visualize your perfect space. 
            From modular kitchens to complete home interiors.
          </p>

          {/* Inspiration Note */}
          <div className="inline-flex items-center gap-2 bg-stone-800/50 text-stone-400 px-4 py-2 rounded-lg text-sm border border-stone-700">
            <Sparkles className="w-4 h-4" />
            <span>These are design inspirations to help you explore styles and ideas</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Explore By Category
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Browse design ideas organized by room type to find inspiration for every corner of your home
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designCategories.map((category) => (
              <Link
                key={category.id}
                to={`/design-ideas/${category.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.coverImage}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                    
                    {/* Category Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-stone-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                      <span>View Ideas</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Palette className="w-4 h-4" />
            <span>Ready to Start?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Turn Inspiration Into Reality
          </h2>
          
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Found a design you love? Our expert designers can help you customize and adapt 
            any style to perfectly fit your Kerala home.
          </p>
          
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Talk to a Designer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DesignIdeas;

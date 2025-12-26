import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Lightbulb, Phone, Palette, Layers, Settings, Gem, Tv, Layout, Armchair, LightbulbIcon, BedDouble, Square, Grid3X3, Sun, DoorOpen, Archive, Shield, CheckCircle2, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { getCategoryBySlug, getIdeasByCategoryId, designCategories } from '../data/designIdeas';

// Icon mapping for highlight features
const iconMap = {
  palette: Palette,
  layers: Layers,
  settings: Settings,
  gem: Gem,
  tv: Tv,
  layout: Layout,
  sofa: Armchair,
  lightbulb: LightbulbIcon,
  bed: BedDouble,
  square: Square,
  grid: Grid3X3,
  sun: Sun,
  door: DoorOpen,
  archive: Archive,
  shield: Shield,
  check: CheckCircle2
};

const DesignCategory = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find category by slug
  const category = getCategoryBySlug(slug);
  const ideas = category ? getIdeasByCategoryId(category.id) : [];

  const openLightbox = (idea, index) => {
    setSelectedImage(idea);
    setCurrentIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (ideas.length === 0) return;
    const newIndex = currentIndex === 0 ? ideas.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(ideas[newIndex]);
  }, [currentIndex, ideas]);

  const goToNext = useCallback(() => {
    if (ideas.length === 0) return;
    const newIndex = currentIndex === ideas.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(ideas[newIndex]);
  }, [currentIndex, ideas]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // If category not found
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-900 mb-4">Category Not Found</h1>
          <Link to="/design-ideas" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Back to Design Ideas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>{category.metaTitle}</title>
        <meta name="description" content={category.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="absolute inset-0">
          <img
            src={category.coverImage}
            alt={category.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            to="/design-ideas"
            className="inline-flex items-center text-stone-400 hover:text-amber-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Design Ideas
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {category.title}
          </h1>

          <p className="text-lg text-stone-300 max-w-3xl mb-6">
            {category.description}
          </p>

          {/* Inspiration Disclaimer */}
          <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-lg text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>Design inspiration images to help you explore styles and possibilities</span>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ideas.map((idea, index) => (
              <div
                key={idea.id}
                onClick={() => openLightbox(idea, index)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={idea.image}
                      alt={idea.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm">{idea.caption}</p>
                    <span className="text-amber-400 text-xs">{idea.style}</span>
                  </div>

                  {/* Style Badge (visible by default) */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
                      {idea.style}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Design Highlights Section */}
          {category.highlights && (
            <div className="mt-20">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Info className="w-4 h-4" />
                  Material Guide
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
                  Design Highlights
                </h2>
                <p className="text-stone-600 max-w-2xl mx-auto">
                  {category.highlights.intro}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.highlights.features.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon] || Layers;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-stone-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-amber-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-stone-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Customization Note */}
              <div className="mt-8 bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl p-6 border border-amber-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Customization Available</h4>
                    <p className="text-stone-600 text-sm">
                      {category.highlights.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-8 sm:p-12 border border-amber-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                  Like This Style?
                </h3>
                <p className="text-stone-600">
                  Talk to our designer and bring these ideas to life in your home.
                </p>
              </div>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Our Designer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8 text-center">
            Explore Other Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {designCategories
              .filter((cat) => cat.id !== category.id)
              .slice(0, 4)
              .map((cat) => (
                <Link
                  key={cat.id}
                  to={`/design-ideas/${cat.slug}`}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                >
                  <img
                    src={cat.coverImage}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                      {cat.title}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm"></div>

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors p-2"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 text-white hover:text-amber-400 transition-colors p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 text-white hover:text-amber-400 transition-colors p-2"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[70vh] object-contain bg-stone-900"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">
                {selectedImage.caption}
              </h3>
              <p className="text-amber-400">{selectedImage.style}</p>
              <p className="text-stone-500 text-sm mt-2">
                {currentIndex + 1} of {ideas.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignCategory;

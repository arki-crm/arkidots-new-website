import React, { useState, useEffect } from 'react';
import { Play, X, MapPin, Home as HomeIcon } from 'lucide-react';
import { videoTestimonials, getYouTubeThumbnail, getYouTubeEmbedUrl } from '../data/testimonials';

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial) => {
    setSelectedVideo(testimonial);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Hear It From Our Happy Homeowners
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Real stories from families across Kerala who trusted Arki Dots to transform their homes
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group cursor-pointer"
              onClick={() => openModal(testimonial)}
            >
              {/* Video Card */}
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={getYouTubeThumbnail(testimonial.youtubeId, 'hqdefault')}
                    alt={`${testimonial.customerName} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-600 rounded-full flex items-center justify-center shadow-xl group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {testimonial.customerName}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-stone-600">
                    <div className="flex items-center gap-1.5">
                      <HomeIcon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{testimonial.projectType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal/Lightbox */}
      {isModalOpen && selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-5xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 sm:right-0 sm:-top-14 text-white hover:text-amber-400 transition-colors p-2"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo.youtubeId)}
                title={`${selectedVideo.customerName} testimonial video`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Customer Info Below Video */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-1">{selectedVideo.customerName}</h3>
              <p className="text-stone-400">
                {selectedVideo.projectType} • {selectedVideo.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;

// Customer Video Testimonials Data
// To add a new testimonial, simply add a new object to this array
// YouTube video ID can be found in the video URL: https://www.youtube.com/watch?v=VIDEO_ID

export const videoTestimonials = [
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual customer video ID
    customerName: 'Priya & Anand Menon',
    projectType: '3BHK Apartment',
    location: 'Kochi, Kerala'
  },
  {
    id: 2,
    youtubeId: 'jNQXAC9IVRw', // Replace with actual customer video ID
    customerName: 'Sreelatha Nair',
    projectType: 'Modular Kitchen',
    location: 'Kozhikode, Kerala'
  },
  {
    id: 3,
    youtubeId: '9bZkp7q19f0', // Replace with actual customer video ID
    customerName: 'Dr. Rajesh Kumar',
    projectType: 'Full Home Interior',
    location: 'Trivandrum, Kerala'
  },
  {
    id: 4,
    youtubeId: 'M7lc1UVf-VE', // Replace with actual customer video ID
    customerName: 'Fatima & Basheer',
    projectType: 'Villa Renovation',
    location: 'Thrissur, Kerala'
  },
  {
    id: 5,
    youtubeId: 'kJQP7kiw5Fk', // Replace with actual customer video ID
    customerName: 'George & Mary Thomas',
    projectType: '4BHK Duplex',
    location: 'Kannur, Kerala'
  },
  {
    id: 6,
    youtubeId: 'RgKAFK5djSk', // Replace with actual customer video ID
    customerName: 'Lakshmi Pillai',
    projectType: 'Custom Wardrobes',
    location: 'Kollam, Kerala'
  }
];

// Helper function to get YouTube thumbnail URL
export const getYouTubeThumbnail = (videoId, quality = 'hqdefault') => {
  // Quality options: default, mqdefault, hqdefault, sddefault, maxresdefault
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

// Helper function to get YouTube embed URL
export const getYouTubeEmbedUrl = (videoId) => {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
};

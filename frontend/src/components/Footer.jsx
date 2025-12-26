import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Official Arki Dots Logo
  const logoUrl = 'https://customer-assets.emergentagent.com/job_interiordesign-pro/artifacts/qfhhoque_log%20a%20only%20%282%29.png';
  
  const serviceLocations = [
    'Vatakara', 'Nadapuram', 'Kozhikode', 'Thalassery', 'Kannur', 
    'Koyilandy', 'Quilandy', 'Mahe', 'Payyannur', 'Kasaragod'
  ];

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Service Locations Banner */}
      <div className="bg-stone-800 py-8 border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-white font-semibold text-lg mb-2">Arki Dots Service Locations in Kerala</h3>
            <p className="text-stone-400 text-sm">Based in Vatakara | Serving homeowners across North Kerala and beyond</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceLocations.map((location, index) => (
              <span 
                key={index} 
                className="inline-flex items-center gap-1.5 bg-stone-700/50 px-4 py-2 rounded-full text-sm text-stone-300 hover:bg-brand/20 hover:text-brand-light transition-colors"
              >
                <MapPin className="w-3 h-3" />
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoUrl} 
                alt="Arki Dots Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-white">Arki Dots</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-3">
              Arki Dots is a premium interior design company based in Vatakara, Kerala. We specialize in modular kitchens, full home interiors, and custom furniture for homes across Kozhikode, Kannur, and all of Kerala.
            </p>
            <p className="text-xs text-stone-500">
              Trusted by 500+ families in North Kerala
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-brand transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-brand transition-colors">About Arki Dots</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-brand transition-colors">Our Projects</Link></li>
              <li><Link to="/design-ideas" className="text-sm hover:text-brand transition-colors">Design Ideas</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-brand transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-brand transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Interior Services</h3>
            <ul className="space-y-2">
              <li><Link to="/modular-kitchen" className="text-sm hover:text-brand transition-colors">Modular Kitchen in Kerala</Link></li>
              <li><Link to="/full-home-interiors" className="text-sm hover:text-brand transition-colors">Full Home Interiors</Link></li>
              <li><Link to="/home-renovation" className="text-sm hover:text-brand transition-colors">Home Renovation</Link></li>
              <li><Link to="/custom-furniture" className="text-sm hover:text-brand transition-colors">Custom Furniture</Link></li>
              <li><Link to="/interior-designers-kozhikode" className="text-sm hover:text-brand transition-colors">Interior Designers Kozhikode</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Arki Dots</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-sm">Vatakara, Kozhikode District, Kerala, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand flex-shrink-0" />
                <span className="text-sm">info@arkidots.com</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Policy Links */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-stone-400">
              © {currentYear} Arki Dots. All rights reserved. | Premium Interior Designers in Vatakara, Kerala
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link to="/privacy-policy" className="text-stone-400 hover:text-brand transition-colors">
                Privacy Policy
              </Link>
              <span className="text-stone-700">|</span>
              <Link to="/terms-conditions" className="text-stone-400 hover:text-brand transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-stone-700">|</span>
              <Link to="/warranty-policy" className="text-stone-400 hover:text-brand transition-colors">
                Warranty & Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
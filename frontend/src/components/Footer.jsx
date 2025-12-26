import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <span className="text-xl font-bold text-white">Arki Dots</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Premier interior design company in Kerala, specializing in custom home interiors, modular kitchens, and complete renovations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-amber-500 transition-colors">Our Works</Link></li>
              <li><Link to="/design-ideas" className="text-sm hover:text-amber-500 transition-colors">Design Ideas</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-amber-500 transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/modular-kitchen" className="text-sm hover:text-amber-500 transition-colors">Modular Kitchen Design</Link></li>
              <li><Link to="/full-home-interiors" className="text-sm hover:text-amber-500 transition-colors">Full Home Interiors</Link></li>
              <li><Link to="/home-renovation" className="text-sm hover:text-amber-500 transition-colors">Home Renovation</Link></li>
              <li><Link to="/custom-furniture" className="text-sm hover:text-amber-500 transition-colors">Custom Furniture</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Kochi, Kerala, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">info@arkidots.com</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Policy Links */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-stone-400">
              © {currentYear} Arki Dots. All rights reserved. | Designed with care in Kerala
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link to="/privacy-policy" className="text-stone-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-stone-700">|</span>
              <Link to="/terms-conditions" className="text-stone-400 hover:text-amber-500 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-stone-700">|</span>
              <Link to="/warranty-policy" className="text-stone-400 hover:text-amber-500 transition-colors">
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
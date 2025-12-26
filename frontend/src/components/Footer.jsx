import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

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
              <li><a href="#home" className="text-sm hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-sm hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#process" className="text-sm hover:text-amber-500 transition-colors">Our Process</a></li>
              <li><a href="#faq" className="text-sm hover:text-amber-500 transition-colors">FAQ</a></li>
              <li><a href="#contact-form" className="text-sm hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-sm">Modular Kitchen Design</span></li>
              <li><span className="text-sm">Full Home Interiors</span></li>
              <li><span className="text-sm">Home Renovation</span></li>
              <li><span className="text-sm">Custom Furniture</span></li>
              <li><span className="text-sm">Wardrobe Solutions</span></li>
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

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-sm text-stone-400">
            © {currentYear} Arki Dots. All rights reserved. | Designed with care in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
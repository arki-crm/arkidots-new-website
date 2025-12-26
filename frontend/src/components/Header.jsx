import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '#home', link: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Design Ideas', href: '#design-ideas', link: '/design-ideas' },
    { name: 'Portfolio', href: '#portfolio', link: '/gallery' },
    { name: 'About', href: '#about', link: '/about' },
    { name: 'Contact', href: '#contact', link: '/contact' }
  ];

  const scrollToSection = (href, link) => {
    if (link) {
      navigate(link);
      setIsMenuOpen(false);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <span className="text-xl font-bold text-stone-900">Arki Dots</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.link)}
                className="text-stone-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.link)}
                  className="text-stone-700 hover:text-amber-600 font-medium transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg w-full"
                onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
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

  // Official Arki Dots Logo
  const logoUrl = 'https://customer-assets.emergentagent.com/job_interiordesign-pro/artifacts/qfhhoque_log%20a%20only%20%282%29.png';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <img 
                src={logoUrl} 
                alt="Arki Dots Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-stone-900">Arki Dots</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.link)}
                className="text-stone-700 hover:text-brand font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="bg-brand hover:bg-brand-dark text-white rounded-lg transition-all duration-300 hover:scale-105"
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
              className="text-stone-700 hover:text-brand transition-colors"
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
                  className="text-stone-700 hover:text-brand font-medium transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="bg-brand hover:bg-brand-dark text-white rounded-lg w-full"
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
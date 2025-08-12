import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="1111educareer Logo" 
            className="h-12 w-12 mr-3 rounded-lg object-cover group-hover:scale-105 transition-transform" 
          />
          <div className="flex flex-col">
            <span className="text-2xl font-heading font-bold text-primary group-hover:text-primary-hover transition-colors">
              1111educareer
            </span>
            <span className="text-xs font-primary text-text-secondary -mt-1">
              Education Consultant
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="font-primary font-medium text-text-primary hover:text-primary transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/about" 
            className="font-primary font-medium text-text-primary hover:text-primary transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* Programs Dropdown */}
          <div className="relative group">
            <button className="font-primary font-medium text-text-primary hover:text-primary transition-colors flex items-center gap-1">
              Programs
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 invisible group-hover:visible opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 origin-top-left">
              <div className="p-4 space-y-2">
                <Link to="/programs" className="block px-4 py-2 font-primary text-text-primary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  All Programs
                </Link>
                <Link to="/programs?category=masters" className="block px-4 py-2 font-primary text-text-primary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  Master's Programs
                </Link>
                <Link to="/programs?category=bachelor" className="block px-4 py-2 font-primary text-text-primary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  Bachelor's Programs
                </Link>
                <Link to="/programs?category=certification" className="block px-4 py-2 font-primary text-text-primary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  Certifications
                </Link>
              </div>
            </div>
          </div>

          <Link 
            to="/contact" 
            className="font-primary font-medium text-text-primary hover:text-primary transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* CTA Button */}
          <Link 
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-text-primary font-semibold font-primary px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-text-primary hover:text-primary transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block font-primary font-medium text-text-primary hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block font-primary font-medium text-text-primary hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className="block font-primary font-medium text-text-primary hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className="block font-primary font-medium text-text-primary hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact"
              className="inline-block bg-accent hover:bg-accent-hover text-text-primary font-semibold font-primary px-6 py-3 rounded-full transition-all duration-300 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
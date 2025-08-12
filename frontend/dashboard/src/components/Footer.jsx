import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const programs = [
    { name: 'Online MBA', link: '/programs?category=mba' },
    { name: 'Online MCA', link: '/programs?category=mca' },
    { name: 'Online BBA', link: '/programs?category=bba' },
    { name: 'Online BCA', link: '/programs?category=bca' },
    { name: 'Doctorate Programs', link: '/programs?category=doctorate' },
    { name: 'Certification Courses', link: '/programs?category=certification' }
  ];

  const quickLinks = [
    { name: 'About Us', link: '/about' },
    { name: 'Our Services', link: '/services' },
    { name: 'Success Stories', link: '/testimonials' },
    { name: 'Career Guidance', link: '/career-guidance' },
    { name: 'Admission Process', link: '/admission-process' },
    { name: 'Fee Structure', link: '/fees' }
  ];

  const supportLinks = [
    { name: 'Contact Us', link: '/contact' },
    { name: 'Help Center', link: '/help' },
    { name: 'Live Chat', link: '#chat' },
    { name: 'Book Consultation', link: '/consultation' },
    { name: 'Download Brochure', link: '/brochure' },
    { name: 'FAQ', link: '/faq' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Company Info - Spans 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center group">
                <img 
                  src={logo} 
                  alt="1111educareer Logo" 
                  className="h-14 w-14 mr-4 rounded-lg object-cover group-hover:scale-105 transition-transform" 
                />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-accent">1111educareer</h2>
                  <p className="text-white/70 text-sm font-primary">Education & Career Consultancy</p>
                </div>
              </div>
              
              <p className="text-white/80 font-primary leading-relaxed text-base max-w-md">
                Transforming dreams into achievements through expert education counseling and career guidance. 
                Your success is our mission.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent/30 transition-colors">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/90 font-medium font-primary">Near Guru Ki Thadi, Manji Ka Hatha</p>
                    <p className="text-white/70 text-sm font-primary">Jodhpur, Rajasthan</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent/30 transition-colors">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@1111educareer.in" className="text-white/90 font-medium font-primary hover:text-accent transition-colors">
                    info@1111educareer.in
                  </a>
                </div>

                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent/30 transition-colors">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+917426999479" className="text-white/90 font-medium font-primary hover:text-accent transition-colors block">
                      +91-7426999479
                    </a>
                    <a href="tel:+919664159856" className="text-white/70 text-sm font-primary hover:text-accent transition-colors">
                      +91-9664159856
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://wa.me/917426999479" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                
                <a 
                  href="#facebook" 
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="#instagram" 
                  className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="#linkedin" 
                  className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Popular Programs */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-accent mb-4">Popular Programs</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link 
                      to={program.link} 
                      className="text-white/80 hover:text-accent font-primary transition-colors duration-300 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 text-accent/60 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-accent mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.link} 
                      className="text-white/80 hover:text-accent font-primary transition-colors duration-300 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 text-accent/60 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-accent mb-4">Student Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.link} 
                      className="text-white/80 hover:text-accent font-primary transition-colors duration-300 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 text-accent/60 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center bg-accent hover:bg-accent-hover text-text-primary font-semibold font-primary px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">Stay Updated</h3>
              <p className="text-white/80 font-primary mb-8 max-w-2xl mx-auto">
                Get the latest updates on admission deadlines, new programs, and career opportunities directly in your inbox.
              </p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full text-text-primary font-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-accent hover:bg-accent-hover text-text-primary font-semibold font-primary px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/70 font-primary text-sm">
                © {currentYear} 1111educareer - Education & Career Consultancy. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6">
                <Link to="/privacy-policy" className="text-white/70 hover:text-accent font-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="text-white/70 hover:text-accent font-primary text-sm transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/refund-policy" className="text-white/70 hover:text-accent font-primary text-sm transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
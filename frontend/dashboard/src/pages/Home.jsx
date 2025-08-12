import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PopularCourses from '../components/PopularCourses';
import TopColleges from '../components/TopColleges';
import Testimonials from '../components/Testimonials';
import PartnersSection from '../components/PartnersSection';
import InstitutesCarousel from '../components/InstitutesCarousel';
import ProgramsFilter from '../components/ProgramsFilter';

const Home = () => {
  return (
    <div className="home-page bg-gray-100">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-primary to-secondary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Vision Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('/src/assets/WhatsApp Image 2025-08-07 at 18.36.38.jpeg')`
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 fade-in-up leading-tight">
            Discover Your <span className="text-accent">Dream Career</span><br />
            With Expert Guidance
          </h1>
          <p className="font-primary text-lg md:text-xl mb-12 fade-in-up max-w-3xl mx-auto leading-relaxed opacity-90">
            Transform your career aspirations into reality with personalized education counseling, 
            comprehensive course guidance, and expert admission support.
          </p>
          <div className="fade-in-up">
            <SearchBar />
          </div>
        </div>
      </section>

      <div className="fade-in-up">
        <ProgramsFilter />
      </div>

      {/* Promotional Banner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* MBA Specializations Banner */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/src/assets/WhatsApp Image 2025-08-07 at 18.36.44.jpeg" 
                alt="MBA in 20+ Specializations"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Link 
                  to="/programs?category=mba"
                  className="bg-accent hover:bg-accent-hover text-text-primary font-semibold px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2"
                >
                  Explore MBA Programs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* July Session Banner */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/src/assets/WhatsApp Image 2025-08-07 at 18.36.40.jpeg" 
                alt="July Session Closing Soon"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Link 
                  to="/contact"
                  className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2"
                >
                  Enroll Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fade-in-up">
        <PopularCourses />
      </div>
      <div className="fade-in-up">
        <TopColleges />
      </div>
      <div className="fade-in-up">
        <InstitutesCarousel />
      </div>
      <div className="fade-in-up">
        <Testimonials />
      </div>
      <div className="fade-in-up">
        <PartnersSection />
      </div>

      {/* Why Choose Us Section */}
      <section className="about-us-section bg-gradient-to-br from-primary to-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up">
            Why Choose <span className="text-accent">1111educareer</span>?
          </h2>
          <p className="font-primary text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 fade-in-up leading-relaxed">
            We are India's trusted education consultancy with over a decade of experience helping students transform their career aspirations into reality. Our personalized approach ensures every student finds their perfect academic path.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Expert Counseling</h3>
              <p className="font-primary text-white/80">Personalized guidance from industry experts with 10+ years experience</p>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">University Partnerships</h3>
              <p className="font-primary text-white/80">Direct partnerships with 500+ top universities and institutions</p>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">100% Success Rate</h3>
              <p className="font-primary text-white/80">Guaranteed admission support with our proven success track record</p>
            </div>
          </div>

          <Link 
            to="/about"
            className="inline-flex items-center bg-accent hover:bg-accent-hover text-text-primary font-semibold font-primary py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl fade-in-up"
          >
            Learn More About Us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-24 bg-neutral text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6 fade-in-up">
            Ready to Start Your <span className="text-primary">Academic Journey</span>?
          </h2>
          <p className="font-primary text-lg md:text-xl text-text-secondary mb-12 fade-in-up max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your dream career. Get personalized guidance from our education experts and discover the perfect program for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
            <Link 
              to="/contact"
              className="bg-primary hover:bg-primary-hover text-white font-semibold font-primary py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Free Consultation
            </Link>
            <Link 
              to="/programs"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold font-primary py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Amity University Online',
      logo: '/src/assets/WhatsApp Image 2025-08-07 at 18.36.37.jpeg',
    },
    {
      name: 'Amity University',
      logo: '/src/assets/WhatsApp Image 2025-08-07 at 18.36.53.jpeg',
    },
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Our <span className="text-primary">Trusted Partners</span>
        </h2>
        <p className="font-primary text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
          We partner with leading universities and institutions to provide you with the best educational opportunities
        </p>
        
        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-32 flex items-center justify-center group-hover:scale-105">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
          
          {/* Placeholder for more partners */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xs text-text-secondary font-medium">500+ Universities</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="text-xs text-text-secondary font-medium">UGC Approved</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs text-text-secondary font-medium">Affordable Fees</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs text-text-secondary font-medium">Fast Track</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-text-secondary font-primary">University Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-text-secondary font-primary">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">10K+</div>
            <div className="text-text-secondary font-primary">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-text-secondary font-primary">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
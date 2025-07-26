import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Consulting Co., we believe in empowering businesses to reach their full potential. 
          Founded in [Year], our firm has grown to become a trusted partner for organizations 
          seeking strategic guidance and innovative solutions. We pride ourselves on our 
          client-centric approach, delivering tailored strategies that drive measurable results.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our team comprises seasoned professionals with diverse expertise across various industries. 
          We are passionate about helping our clients navigate complex challenges, seize new opportunities, 
          and achieve sustainable growth in an ever-evolving market landscape.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To provide exceptional consulting services that empower our clients to make informed decisions, 
          optimize their operations, and achieve their strategic objectives with confidence and clarity.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li className="mb-2"><strong>Integrity:</strong> Upholding the highest ethical standards in all our interactions.</li>
          <li className="mb-2"><strong>Excellence:</strong> Committing to delivering superior quality and impactful results.</li>
          <li className="mb-2"><strong>Collaboration:</strong> Partnering closely with clients to foster shared success.</li>
          <li className="mb-2"><strong>Innovation:</strong> Embracing new ideas and approaches to solve complex problems.</li>
          <li><strong>Client-Centricity:</strong> Prioritizing our clients' needs and long-term success above all else.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

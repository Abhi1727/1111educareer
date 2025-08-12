import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admission Guidance</h2>
          <p className="text-gray-600 mb-4">We provide comprehensive admission guidance to students at all levels, from undergraduate to postgraduate programs. Our services include:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Career Counseling</li>
            <li>College Selection</li>
            <li>Application Assistance</li>
            <li>Interview Preparation</li>
            <li>Visa Assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

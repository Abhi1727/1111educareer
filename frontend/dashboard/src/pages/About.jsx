import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About 1111educareer</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8 fade-in-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          1111educareer was founded with a simple mission: to make the college admission process easier and more accessible for students everywhere. We understand that navigating the complexities of college applications can be overwhelming, and we are here to help.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our team of experienced education consultants provides personalized guidance and support to students at every stage of their academic journey. We are passionate about helping students find the right fit and achieve their educational and career goals.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8 fade-in-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To empower students to make informed decisions about their future and to provide them with the tools and resources they need to succeed in the college admission process.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 fade-in-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li className="mb-2"><strong>Student-Centric:</strong> We always put the best interests of our students first.</li>
          <li className="mb-2"><strong>Excellence:</strong> We are committed to providing the highest quality of service and support.</li>
          <li className="mb-2"><strong>Integrity:</strong> We believe in honesty and transparency in all our interactions.</li>
          <li className="mb-2"><strong>Collaboration:</strong> We work closely with students and their families to ensure a successful outcome.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

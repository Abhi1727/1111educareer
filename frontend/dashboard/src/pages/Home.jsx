import React, { useEffect, useState } from 'react';
import { getHomeData } from '../api';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHomeData()
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
        console.error('Error fetching home data:', error);
      });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Future Starts Here</h1>
          <p className="text-xl mb-8">Explore our diverse range of programs and unlock your potential.</p>
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Explore Programs
          </button>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Popular Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data && data.items && data.items.map(item => (
              <div key={item.id} className="program-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">Advance your career with our flexible online master's degrees.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn More &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resources for Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="resource-item p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p className="text-gray-600">Stay updated with the latest industry insights.</p>
            </div>
            <div className="resource-item p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Free Courses</h3>
              <p className="text-gray-600">Start learning today with our complimentary courses.</p>
            </div>
            <div className="resource-item p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Student Support</h3>
              <p className="text-gray-600">Dedicated support to help you succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Why Choose Us Section */}
      <section className="about-us-section bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We are committed to providing high-quality education that empowers individuals to achieve their professional goals. Our programs are designed with industry relevance and delivered by expert faculty.
          </p>
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-lg mb-8">Join thousands of successful professionals who chose us for their educational journey.</p>
          <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300">
            Contact Admissions
          </button>
        </div>
      </section>

      {error && <div className="p-4 text-red-500">Error: {error.message}</div>}
    </div>
  );
};

export default Home;

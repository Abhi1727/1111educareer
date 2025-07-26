import React from 'react';

const Home = () => {
  const colleges = [
    { id: 1, name: 'Indian Institute of Management (IIM), Bangalore', description: 'One of the top management schools in Asia.', image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=IIM' },
    { id: 2, name: 'Indian Institute of Technology (IIT), Bombay', description: 'Premier engineering and research institution.', image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=IIT' },
    { id: 3, name: 'Delhi University (DU), Delhi', description: 'A collegiate public central university.', image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=DU' },
    { id: 4, name: 'Vellore Institute of Technology (VIT), Vellore', description: 'Known for its engineering and technology programs.', image: 'https://via.placeholder.com/150/FF33A1/FFFFFF?text=VIT' },
    { id: 5, name: 'Symbiosis International University (SIU), Pune', description: 'A multidisciplinary university with various programs.', image: 'https://via.placeholder.com/150/A133FF/FFFFFF?text=SIU' },
    { id: 6, name: 'Amity University, Noida', description: 'A leading private university with diverse courses.', image: 'https://via.placeholder.com/150/33FFF6/FFFFFF?text=Amity' },
    { id: 7, name: 'Manipal Academy of Higher Education (MAHE), Manipal', description: 'A deemed university known for health sciences, engineering, and management.', image: 'https://via.placeholder.com/150/F6FF33/FFFFFF?text=MAHE' },
    { id: 8, name: 'SRM Institute of Science and Technology, Chennai', description: 'A private deemed university offering engineering, management, and medical courses.', image: 'https://via.placeholder.com/150/FF8C33/FFFFFF?text=SRM' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Welcome to Apnaconsultant
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up">
            Your trusted partner for higher education and career guidance.
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Explore Programs
          </button>
        </div>
      </section>

      {/* Colleges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Top Colleges & Universities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {colleges.map(college => (
              <div key={college.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src={college.image} alt={college.name} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{college.description}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Connect with our expert consultants today to find the perfect program for you.
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

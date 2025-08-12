import React from 'react';
import { Link } from 'react-router-dom';

const PopularCourses = () => {
  const bachelorsCourses = [
    { name: 'Bachelor of Technology (B.Tech)', icon: '💻', description: 'A comprehensive program focusing on engineering and technology.', link: '/programs/btech' },
    { name: 'Bachelor of Business Administration (BBA)', icon: '📈', description: 'Develop essential business and management skills.', link: '/programs/bba' },
    { name: 'Bachelor of Computer Applications (BCA)', icon: '👨‍💻', description: 'Learn the fundamentals of computer science and applications.', link: '/programs/bca' },
    { name: 'Bachelor of Science (B.Sc)', icon: '🔬', description: 'Explore various scientific disciplines and research.', link: '/programs/bsc' },
  ];

  const mastersCourses = [
    { name: 'Master of Business Administration (MBA)', icon: '💼', description: 'Advance your career with strategic business insights.', link: '/programs/mba' },
    { name: 'Master of Computer Applications (MCA)', icon: '👩‍💻', description: 'Specialized studies in advanced computer applications.', link: '/programs/mca' },
    { name: 'Master of Technology (M.Tech)', icon: '⚙️', description: 'In-depth knowledge and research in engineering fields.', link: '/programs/mtech' },
    { name: 'Master of Science (M.Sc)', icon: '🧪', description: 'Advanced scientific study and research opportunities.', link: '/programs/msc' },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Bachelor's Degrees</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {bachelorsCourses.map((course, index) => (
                <Link to={course.link} key={index} className="block">
                  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <span className="text-5xl mb-4">{course.icon}</span>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{course.name}</h4>
                    <p className="text-gray-600 text-center">{course.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Master's Degrees</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {mastersCourses.map((course, index) => (
                <Link to={course.link} key={index} className="block">
                  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <span className="text-5xl mb-4">{course.icon}</span>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{course.name}</h4>
                    <p className="text-gray-600 text-center">{course.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;

import React from 'react';
import { Link } from 'react-router-dom';

const TopColleges = () => {
  const colleges = [
    { name: 'IIT Bombay', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100', link: '/colleges/iit-bombay' },
    { name: 'IIM Ahmedabad', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100', link: '/colleges/iim-ahmedabad' },
    { name: 'Delhi University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100', link: '/colleges/delhi-university' },
    { name: 'VIT Vellore', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100', link: '/colleges/vit-vellore' },
    { name: 'SRM University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100', link: '/colleges/srm-university' },
    { name: 'Amity University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100', link: '/colleges/amity-university' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Top Colleges & Universities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {colleges.map((college, index) => (
            <Link to={college.link} key={index} className="block">
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                <img src={college.logo} alt={`${college.name} logo`} className="h-16 mb-5" />
                <h4 className="text-md font-semibold text-center text-gray-700">{college.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopColleges;

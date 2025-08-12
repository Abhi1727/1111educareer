import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const programsData = [
  {
    id: 1,
    category: 'Doctorate & PhD',
    name: 'Doctor Of Business Administration (DBA)',
    university: 'Swiss School Of Management',
    status: 'Admission Open',
    duration: '3-4 Years',
    mode: 'Online',
  },
  {
    id: 2,
    category: 'Online Masters',
    name: 'Online MBA Degree Programme',
    university: 'Dr. M.G.R. University',
    status: 'Admission Open',
    duration: '2 Years',
    mode: 'Online',
  },
  {
    id: 3,
    category: 'Online Masters',
    name: 'Online MCA Degree Programme',
    university: 'Dr. M.G.R. University',
    status: 'Admission Open',
    duration: '2 Years',
    mode: 'Online',
  },
  {
    id: 4,
    category: 'Online Bachelors',
    name: 'Online BCA Degree Programme',
    university: 'Dr. M.G.R. University',
    status: 'Admission Open',
    duration: '3 Years',
    mode: 'Online',
  },
  {
    id: 5,
    category: 'Online Bachelors',
    name: 'Online BBA Degree Program',
    university: 'Parul University',
    status: 'Admission Open',
    duration: '3 Years',
    mode: 'Online',
  },
  {
    id: 6,
    category: 'Long Duration Certification',
    name: 'Post Graduate Certificate Programme in Digital Strategy and Marketing Analytics',
    university: 'IIM Nagpur',
    status: 'Admission Open',
    duration: '11 Months',
    mode: 'Online',
  },
  {
    id: 7,
    category: 'Short Duration Certification',
    name: 'Strategic Leadership Programme for Women Executives',
    university: 'IIM Ahmedabad',
    status: 'Admission Open',
    duration: '8 Months',
    mode: 'Online',
  },
  {
    id: 8,
    category: 'Fulltime Masters / PG Programs',
    name: 'MBA Program in Real Estate',
    university: 'NHSRE and HSNC University',
    status: 'Admission Closed',
    duration: '2 Years',
    mode: 'Full-time',
  },
  {
    id: 9,
    category: 'Online Masters',
    name: 'Online MA Degree Programme',
    university: 'Dr. M.G.R. University',
    status: 'Admission Open',
    duration: '2 Years',
    mode: 'Online',
  },
  {
    id: 10,
    category: 'Online Masters',
    name: 'Online M.Sc. Data Science and AI Degree Programme',
    university: 'Dr. M.G.R. University',
    status: 'Admission Open',
    duration: '2 Years',
    mode: 'Online',
  },
  {
    id: 11,
    category: 'Online Masters',
    name: 'Online M.Sc Statistics Degree Programme',
    university: 'Dr. M.G.R. University',
    status: 'Admission Open',
    duration: '2 Years',
    mode: 'Online',
  },
  {
    id: 12,
    category: 'Online Masters',
    name: 'Online M.com Degree Programme',
    university: 'Dr. M.G.R. University',
    status: 'Admission Open',
    duration: '2 Years',
    mode: 'Online',
  },
];

const ProgramsFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All Programs');
  const [showMore, setShowMore] = useState(false);

  const filterButtons = [
    'All Programs',
    'Online Masters',
    'Online Bachelors',
    'Doctorate & PhD',
    'Long Duration Certification',
    'Short Duration Certification',
    'Fulltime Masters / PG Programs'
  ];

  // Filter programs based on active filter
  const filteredPrograms = programsData.filter(program => {
    if (activeFilter === 'All Programs') {
      return true;
    }
    return program.category === activeFilter;
  });

  // Show only 8 programs initially (4 columns × 2 rows)
  const displayedPrograms = showMore ? filteredPrograms : filteredPrograms.slice(0, 8);
  const hasMorePrograms = filteredPrograms.length > 8;

  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Explore Our <span className="text-primary">Programs</span>
          </h2>
          <p className="font-primary text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Discover a wide range of educational programs designed to advance your career and achieve your academic goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowMore(false); // Reset show more when changing filter
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base font-primary
                ${activeFilter === filter
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-text-secondary border border-gray-200 hover:bg-gray-50 hover:border-primary/20 hover:text-primary'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Programs Grid - 4 columns × 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedPrograms.map(program => (
            <Link 
              to={`/programs/${program.id}`} 
              key={program.id} 
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 group-hover:border-primary/20 group-hover:transform group-hover:scale-105">
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    program.status === 'Admission Open' 
                      ? 'bg-success/10 text-success border border-success/20' 
                      : 'bg-warning/10 text-warning border border-warning/20'
                  }`}>
                    {program.status}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/5 text-primary rounded-lg">
                    {program.mode}
                  </span>
                </div>

                {/* Program Details */}
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                
                <p className="font-primary text-sm text-text-secondary mb-3 font-medium">
                  {program.university}
                </p>

                <div className="flex justify-between items-center text-xs text-text-secondary">
                  <span className="font-medium">Duration: {program.duration}</span>
                  <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {hasMorePrograms && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center px-8 py-4 bg-accent text-text-primary font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 shadow-lg font-primary"
            >
              <span>{showMore ? 'View Less' : `View All ${filteredPrograms.length} Programs`}</span>
              <svg 
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsFilter;
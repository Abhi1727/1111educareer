import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
        <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden border border-white/20">
          <div className="flex-1 relative">
            <svg 
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for colleges, courses, universities, and programs..."
              className="w-full pl-14 pr-4 py-5 text-lg font-primary text-text-primary placeholder-text-secondary bg-transparent focus:outline-none"
            />
          </div>
          <button 
            type="submit"
            className="px-8 py-5 bg-accent text-text-primary font-semibold font-primary hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span className="hidden sm:inline">Search Now</span>
            <span className="sm:hidden">Search</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        </div>
        
        {/* Popular Searches */}
        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm font-primary mb-3">Popular Searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['MBA Programs', 'Online Degrees', 'IIT Courses', 'Medical Colleges', 'Engineering'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setSearchTerm(term)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/20 transition-all duration-300 font-primary border border-white/20"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

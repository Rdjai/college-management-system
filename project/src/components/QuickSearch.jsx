import React, { useState } from 'react';
import { Search } from 'lucide-react';

const QuickSearch = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log('Searching for:', query);
  };

  const popularSearches = [
    'Apprenticeships',
    'Engineering courses',
    'Financial support',
    'Open days',
    'International students'
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Your Course</h2>
            <p className="text-gray-600">
              Search our database of over 200 courses to find the perfect match for your interests and career goals
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search courses, subjects or keywords..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex-shrink-0"
              >
                Search Courses
              </button>
            </div>
          </form>

          <div>
            <p className="text-gray-600 mb-2">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(term)}
                  className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;

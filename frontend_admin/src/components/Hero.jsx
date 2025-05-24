import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-blue-800 h-screen max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          filter: "brightness(0.7)"
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Your Future Starts at LNCT COLLEGE
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Discover our range of courses and find your perfect path to success
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold text-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                Explore Courses
              </a>
              <a
                href="#"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-md font-semibold text-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                Book an Open Day
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
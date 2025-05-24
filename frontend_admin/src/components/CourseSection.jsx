import React, { useState } from 'react';

const CourseCard = ({ title, category, level, duration, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-blue-800 bg-blue-100 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-sm text-gray-600">
            {level}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">Duration: {duration}</p>
        <a
          href="#"
          className="block w-full text-center bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const CourseSection = () => {
  const courses = [
    {
      title: "Business Administration",
      category: "Business",
      level: "Level 3",
      duration: "2 Years",
      imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Computer Science",
      category: "Technology",
      level: "Level 4",
      duration: "3 Years",
      imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Culinary Arts",
      category: "Hospitality",
      level: "Level 2",
      duration: "1 Year",
      imageUrl: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Electrical Engineering",
      category: "Engineering",
      level: "Level 5",
      duration: "3 Years",
      imageUrl: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of courses designed to help you achieve your goals
            and prepare for your future career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;

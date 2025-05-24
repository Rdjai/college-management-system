import React from 'react';
import { Calendar } from 'lucide-react';

const NewsCard = ({ title, date, excerpt, imageUrl, category }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 left-0 bg-blue-800 text-white px-3 py-1 m-2 text-sm font-semibold rounded">
          {category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <a
          href="#"
          className="text-blue-800 font-medium hover:text-blue-700 transition-colors duration-200"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

const EventCard = ({ title, date, time, location }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300 flex items-start">
      <div className="flex-shrink-0 mr-4 bg-blue-100 text-blue-800 p-3 rounded-lg text-center w-16">
        <span className="block text-sm font-bold">{date.split(' ')[0]}</span>
        <span className="block text-xl font-bold">{date.split(' ')[1]}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-1">{time}</p>
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
    </div>
  );
};

const NewsEvents = () => {
  const newsItems = [
    {
      title: "LNCT COLLEGE Celebrates 100% Pass Rate in Advanced Engineering",
      date: "June 15, 2023",
      excerpt: "Students in the Advanced Engineering program have achieved a remarkable 100% pass rate for the third consecutive year, setting a new college record.",
      imageUrl: "https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Success Story"
    },
    {
      title: "New Partnership with Local Tech Companies Creates Job Opportunities",
      date: "May 28, 2023",
      excerpt: "LNCT COLLEGE has formed partnerships with five leading technology companies in the region to provide guaranteed interviews for qualifying graduates.",
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Partnerships"
    },
    {
      title: "College Library Undergoes Major Renovation",
      date: "April 10, 2023",
      excerpt: "The central campus library has reopened after a £2 million renovation project, featuring new study spaces, digital resources, and modernized facilities.",
      imageUrl: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Campus Update"
    }
  ];

  const events = [
    {
      title: "Summer Open Day",
      date: "Jul 12",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus"
    },
    {
      title: "Career Fair 2023",
      date: "Aug 05",
      time: "11:00 AM - 3:00 PM",
      location: "Enterprise Building"
    },
    {
      title: "Workshop: CV Writing Skills",
      date: "Jul 18",
      time: "2:00 PM - 4:00 PM",
      location: "Room B202"
    },
    {
      title: "Alumni Networking Event",
      date: "Aug 22",
      time: "6:00 PM - 8:00 PM",
      location: "Conference Center"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at LNCT COLLEGE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Latest News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
            <div className="mt-8 text-right">
              <a
                href="#"
                className="text-blue-800 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                View All News →
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-800 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                View Full Calendar →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

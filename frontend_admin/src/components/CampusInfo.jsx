import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const CampusInfo = () => {
  const campuses = [
    {
      name: "Main Campus",
      address: "Monks Road, Lincoln, LN2 5HQ",
      phone: "01522 876000",
      email: "info@lincolncollege.ac.uk",
      hours: "Monday-Friday: 8:30am-5pm",
      image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      name: "Technology Center",
      address: "Cathedral Street, Lincoln, LN2 5HQ",
      phone: "01522 876123",
      email: "tech@lincolncollege.ac.uk",
      hours: "Monday-Friday: 9am-6pm",
      image: "https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Campuses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our modern campuses equipped with state-of-the-art facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{campus.name}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-800 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{campus.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-800 mr-3 flex-shrink-0" />
                    <span>{campus.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-800 mr-3 flex-shrink-0" />
                    <span>{campus.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-800 mr-3 flex-shrink-0" />
                    <span>{campus.hours}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block bg-blue-800 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Campus Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Your Way to LNCT COLLEGE</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
              {/* This would be an iframe for Google Maps in a real implementation */}
              <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center text-gray-500">
                Interactive Map Would Be Displayed Here
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Public Transport</h4>
                <p className="text-gray-600 mb-4">
                  LNCT COLLEGE is well-served by public transport with bus stops directly outside the main entrance. The main railway station is a 15-minute walk from the college.
                </p>
                <a
                  href="#"
                  className="text-blue-800 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  View Transport Information →
                </a>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Parking</h4>
                <p className="text-gray-600 mb-4">
                  Limited parking is available for visitors. Please contact reception in advance to reserve a space. Students are encouraged to use public transport where possible.
                </p>
                <a
                  href="#"
                  className="text-blue-800 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  Parking Information →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusInfo;
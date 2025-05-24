import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      title: 'About Us',
      submenu: ['Our History', 'Mission & Values', 'Leadership', 'Campus Facilities']
    },
    {
      title: 'Courses',
      submenu: ['Undergraduate', 'Postgraduate', 'Professional', 'Short Courses', 'Apprenticeships']
    },
    {
      title: 'Student Life',
      submenu: ['Accommodation', 'Student Support', 'Careers', 'Library']
    },
    {
      title: 'News & Events',
      submenu: ['Latest News', 'Calendar', 'Open Days']
    },
    {
      title: 'International',
      submenu: ['Apply from Abroad', 'International Support', 'Visa Information']
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <div className="h-10 w-40 relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="text-xl font-bold text-blue-800">LNCT COLLEGE</span>
                </div>
              </div>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="group relative">
                <button className="text-gray-700 hover:text-blue-800 font-medium flex items-center">
                  {link.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left invisible group-hover:visible">
                  <div className="py-1">
                    {link.submenu.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-800">
              <Search className="h-5 w-5" />
            </button>
            <a
              href="#"
              className="bg-blue-800 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Apply Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white px-2 pt-2 pb-3 space-y-1 shadow-lg">
          {navLinks.map((link, index) => (
            <div key={index}>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-md"
              >
                {link.title}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-1">
                {link.submenu.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-800 rounded-md"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a
            href="#"
            className="block w-full text-center bg-blue-800 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 mt-4"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
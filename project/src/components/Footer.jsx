import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">LNCT COLLEGE</h4>
            <p className="mb-4 text-blue-200">
              Providing quality education and training opportunities for all, helping students achieve their potential and supporting employers to grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Courses</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Student Support</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Events</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">News</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Careers</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-200" />
                <span>Monks Road, Lincoln, LN2 5HQ</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-blue-200" />
                <span>01522 876000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-blue-200" />
                <span>info@lincolncollege.ac.uk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Virtual Campus Tour</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Student Portal</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Library Resources</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Term Dates</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Policies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} LNCT COLLEGE. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Accessibility</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
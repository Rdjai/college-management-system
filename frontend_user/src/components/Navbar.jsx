import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">MyCollege</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 transition">Home</a>
                        <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 transition">Courses</a>
                        <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 transition">Departments</a>
                        <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 transition">Library</a>
                        <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 transition">Contact</a>
                        <button className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                            Login
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 pb-4 space-y-2">
                    <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 transition">Home</a>
                    <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 transition">Courses</a>
                    <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 transition">Departments</a>
                    <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 transition">Library</a>
                    <a href="#" className="block text-gray-700 dark:text-white hover:text-blue-600 transition">Contact</a>
                    <button className="w-full mt-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

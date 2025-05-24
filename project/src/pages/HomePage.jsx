import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CourseSection from '../components/CourseSection';
import QuickSearch from '../components/QuickSearch';
import NewsEvents from '../components/NewsEvents';
import Testimonials from '../components/Testimonials';
import CampusInfo from '../components/CampusInfo';
import StatsSection from '../components/StatsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <QuickSearch />
      <CourseSection />
      <StatsSection />
      <NewsEvents />
      <Testimonials />
      <CampusInfo />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
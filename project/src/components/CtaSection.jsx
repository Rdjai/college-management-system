import React from 'react';
import { GraduationCap, Calendar, FileText, Phone } from 'lucide-react';

const CtaSection = () => {
  const ctaCards = [
    {
      title: "Apply Now",
      description: "Start your journey with LNCT COLLEGE today. Our application process is straightforward and our team is here to help.",
      icon: <GraduationCap className="h-10 w-10 text-blue-800" />,
      buttonText: "Start Application",
      color: "bg-blue-50"
    },
    {
      title: "Book an Open Day",
      description: "Experience LNCT COLLEGE firsthand. Meet our staff, tour our facilities, and see what we have to offer.",
      icon: <Calendar className="h-10 w-10 text-green-700" />,
      buttonText: "Book Your Visit",
      color: "bg-green-50"
    },
    {
      title: "Download Prospectus",
      description: "Access our full course catalog and learn more about what studying at LNCT COLLEGE is like.",
      icon: <FileText className="h-10 w-10 text-purple-700" />,
      buttonText: "Get Prospectus",
      color: "bg-purple-50"
    },
    {
      title: "Contact Us",
      description: "Have questions? Our team is ready to help. Contact us by phone, email, or visit us in person.",
      icon: <Phone className="h-10 w-10 text-red-700" />,
      buttonText: "Get in Touch",
      color: "bg-red-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Take Your Next Step</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your journey with LNCT COLLEGE? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} rounded-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="flex justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-5">{card.description}</p>
              <a
                href="#"
                className="inline-block bg-blue-800 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
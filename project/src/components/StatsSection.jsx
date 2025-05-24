import React from 'react';
import { Users, Award, Building, Briefcase } from 'lucide-react';

const StatCard = ({ icon, value, label, color }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${color} mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          <p className="text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-blue-800" />,
      value: "10,000+",
      label: "Students",
      color: "bg-blue-100"
    },
    {
      icon: <Award className="h-6 w-6 text-green-700" />,
      value: "95%",
      label: "Success Rate",
      color: "bg-green-100"
    },
    {
      icon: <Building className="h-6 w-6 text-purple-700" />,
      value: "3",
      label: "Campuses",
      color: "bg-purple-100"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-red-700" />,
      value: "200+",
      label: "Employer Partners",
      color: "bg-red-100"
    }
  ];

  return (
    <section className="py-12 bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import React from 'react';
import { Users, Target, CheckCircle, Sprout, Network } from 'lucide-react';

export default function ProgramHighlights() {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Build a Team",
      description: "Foster cross-department collaboration among teachers, administrators, and child nutrition staff."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Comprehensive Support",
      description: "Partner with a dedicated Farm to School Coach for guidance throughout the program."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Create an Action Plan",
      description: "Develop a school-wide plan rooted in values and community connections."
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Develop Skills",
      description: "Engage in hands-on workshops and receive targeted technical assistance."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Connect with Peers",
      description: "Network with practitioners, teams, and community partners."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Program Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <div className="text-green-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
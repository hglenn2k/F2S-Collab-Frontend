import React from 'react';
import { Users, Target, CheckCircle, Sprout, Network, Calendar, School, Clock } from 'lucide-react';

export default function ProgramHighlights() {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Build a Team",
      description: "Foster cross-department collaboration among teachers, administrators, and child nutrition staff for shared leadership and growth.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Comprehensive Support",
      description: "Partner with a dedicated Farm to School Coach for guidance throughout the program, with regular check-ins and personalized assistance.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Create an Action Plan",
      description: "Develop a school-wide plan rooted in values, integrating curriculum, local procurement, youth voices, and community connections.",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Develop Skills",
      description: "Engage in hands-on workshops and receive targeted technical assistance to enhance your program implementation and impact.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Connect with Peers",
      description: "Network with practitioners, teams, and community partners for ongoing support, resources, and inspiration throughout your journey.",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-cyan-700 mb-6 text-shadow-white">Program Highlights</h2>
          <p className="text-xl text-gray-700 mb-4">
            The AZ Farm to School Collaborative empowers schools to create impactful farm to school 
            and early childhood programs aligned with their priorities. Through building essential relationships and skills, your team will develop 
            the foundation needed for a sustainable farm to school program.
          </p>
        </div>

        {/* Main Highlights Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="bg-cyan-300/10 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-cyan-700">
              <div className="text-cyan-700 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-2 text-shadow-white">{item.title}</h3>
              <p className="text-xl text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Program Details Section */}
        <div className="bg-cyan-300/20 rounded-xl p-8 max-w-4xl mx-auto border border-cyan-700 shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-cyan-700 mb-4 text-center text-shadow-white">
            What You&apos;ll Receive
          </h3>
          <p className="text-center mb-6 text-xl text-gray-700">
            We will recruit 8 school or district teams from across the state to 
            participate in this comprehensive program.
          </p>
          
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-3">
              <School className="w-5 h-5 text-cyan-700 flex-shrink-0" />
              <span className="text-xl text-gray-700">Work with an experienced Farm to School Coach throughout the program</span>
            </li>
            <li className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-cyan-700 flex-shrink-0" />
              <span className="text-xl text-gray-700">Attend a 3-day retreat in Summer 2025 to action plan and build relationships</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-cyan-700 flex-shrink-0" />
              <span className="text-xl text-gray-700">Receive ongoing technical assistance through monthly meetings during 2025-2026</span>
            </li>
          </ul>
          
          <p className="text-center text-xl text-gray-700">
            Plus, receive ongoing support from the Arizona Farm to School Network to ensure 
            your program&apos;s success.
          </p>
        </div>
      </div>
    </section>
  );
}
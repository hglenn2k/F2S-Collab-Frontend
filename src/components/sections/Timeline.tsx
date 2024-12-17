import React from 'react';
import { Calendar } from 'lucide-react';

export default function Timeline() {
  const events = [
    { date: "Spring 2025", event: "Program Launch" },
    { date: "Summer 2025", event: "Three-day Immersive Retreat" },
    { date: "Fall-Winter 2025", event: "Present Action Plan to AZ Farm to School Network" },
    { date: "Spring 2026", event: "Present reflections on your action plan" }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Program Timeline</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {events.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-800">{item.date}</h3>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
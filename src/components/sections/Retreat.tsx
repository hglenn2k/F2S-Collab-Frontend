import React from 'react';

export default function Retreat() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">May 2025 Retreat</h2>
          <p className="text-lg text-gray-700 mb-6">
            The Arizona Farm to School Collaborative will host the inaugural Farm to School 
            Collaborative Retreat. Participating schools will attend a three-day immersive retreat 
            experience and create actionable goals for the 2025-2026 school year.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-green-800 mb-4">Selection Process</h3>
            <p className="text-gray-700">
              Eight schools will be selected to begin the journey with the AZF2SC for the upcoming 
              25-26 school year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
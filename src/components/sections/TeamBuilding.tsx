import React from 'react';

export default function TeamBuilding() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Building Your Team</h2>
          <p className="text-xl text-green-800">
            Eight teams will be selected to begin the journey with the AZF2SC for the upcoming 25-26 school year.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-900">
            <h3 className="text-xl font-bold text-green-800 mb-4">School-based Teams</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Classroom teachers</li>
              <li>• Administrators</li>
              <li>• Child nutrition staff</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-900">
            <h3 className="text-xl font-bold text-green-800 mb-4">District-wide Teams</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• District leadership</li>
              <li>• School representatives</li>
              <li>• Community partners</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
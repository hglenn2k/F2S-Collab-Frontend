import React from 'react';

export default function TeamBuilding() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Building Your Team</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">School-based Teams</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Classroom teachers</li>
              <li>• Administrators</li>
              <li>• Child nutrition staff</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
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
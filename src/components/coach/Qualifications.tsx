import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Qualifications() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-700 mb-8 text-center">
            Who can become a Farm to School Coach?
          </h2>

          <div className="space-y-8">
            <p className="text-xl text-gray-700">
              We&apos;re looking for passionate, community-minded individuals over the age of 18 who are 
              excited to support local schools in their Farm to School journey.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-md border border-orange-200">
              <h3 className="text-xl font-bold text-orange-700 mb-6">
                You might be a great fit if you:
              </h3>
              <ul className="space-y-4">
                {[
                  "Have a love for fresh, local food and sustainable practices",
                  "Enjoy working with schools, farmers, or community organizations",
                  "Can commit to attending our coach development series in spring 2025, attend our three-day retreat May 23-25, 2025 and dedicate time each month to school coaching through May 2026",
                  "Have strong facilitation skills",
                  "Bring experience in education, gardening, agriculture, community leadership, plus enthusiasm and a willingness to learn!"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-xl text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-100 rounded-xl p-8 text-center">
              <p className="text-xl text-gray-700">
                No prior Farm to School experience? No problem! We provide comprehensive training 
                to prepare you for success. We value diverse perspectives and encourage applicants 
                from all backgrounds to join us in creating vibrant, connected school communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function JobDescription() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">
            What is a Farm to School Coach?
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-gray-700">
              Implementing a Farm to School program at a campus or district can be a lot of work! 
              Using a coaching model helps each school stay on track and succeed as they embark 
              on the Farm to School journey.
            </p>

            <p className="text-xl text-gray-700">
              That&apos;s where coaches come in! Coaches can be anyone from the community with love 
              and ambition for Farm to School work.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-md border border-green-200 mt-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                The Farm to School Collaborative coaches will:
              </h3>
              <ul className="space-y-4 text-xl text-gray-700">
                <li>• Be paired with a school that is mutually a great fit</li>
                <li>• Receive training in coaching and facilitation practices</li>
                <li>• Dedicate time and energy to meeting with and coaching their partner school throughout the 2025-2026 school year</li>
                <li className="pl-6">- All coaches attend the three-day kickoff retreat May 23rd-25th, 2025 at Orme School</li>
                <li className="pl-6">- Commit to meeting with their school teams monthly during the 2025-2026 school year to roll out the school&apos;s action plan and vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

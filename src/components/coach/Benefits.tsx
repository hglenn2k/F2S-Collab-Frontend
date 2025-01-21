import React from 'react';

export default function Benefits() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-700 mb-8 text-center">
            Why Become a Farm to School Coach?
          </h2>

          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-700">
                Farm to School isn&apos;t just about better food—it&apos;s about building a healthier, more vibrant 
                school culture. By turning cafeterias and classrooms into centers for food-related 
                discovery, schools give students the tools to connect what&apos;s on their plate to where it 
                comes from, how it&apos;s made, and why it matters.
              </p>
              
              <p className="text-xl text-gray-700">
                The result is stronger academic outcomes, deeper engagement, and a community that thrives 
                together—inside and outside the classroom.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-purple-200">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                As a Coach, You&apos;ll Receive:
              </h3>
              <ul className="space-y-4">
                <li className="text-xl text-gray-700">• Leadership training and hands-on preparation</li>
                <li className="text-xl text-gray-700">• Work experience with determined people toward meaningful goals</li>
                <li className="text-xl text-gray-700">• A $2,500 stipend for your contribution</li>
                <li className="text-xl text-gray-700">• Great new relationships and personal growth</li>
                <li className="text-xl text-gray-700">• Satisfaction of contributing to a positive shift in the community</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
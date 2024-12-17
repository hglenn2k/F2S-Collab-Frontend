import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Resources() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Learn More</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold text-green-800 mb-4">Watch Our Information Session</h3>
            <button className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2">
              View Recording
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
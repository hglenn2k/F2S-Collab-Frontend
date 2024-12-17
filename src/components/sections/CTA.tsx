import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Grow?</h2>
        <p className="text-xl mb-8">
          Healthy, conscious school communities connected to each other and our abundant home.
        </p>
        <button className="bg-white text-green-900 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2">
          Sign Up for Updates
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
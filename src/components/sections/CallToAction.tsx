import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Grow?</h2>
        <p className="text-xl mb-8">
          Healthy, conscious school communities connected to each other and our abundant home.
        </p>
        <div className="flex flex-row items-center justify-center gap-6">
          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors inline-flex items-center gap-2 shadow-lg ring-1 ring-white/50">
            Sign Up for Enrollment&nbsp;Updates
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors inline-flex items-center gap-2 shadow-lg ring-1 ring-white/50">
            Watch Session
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
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
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-lg mx-auto">
          <a
            href="http://eepurl.com/i6wuL2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 bg-green-600 text-white px-8 rounded-lg hover:bg-green-700/90 transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50"
          >
            <span className="pointer-events-none">Sign up for Enrollment&nbsp;Updates</span>
            <ArrowRight className="w-5 h-5 pointer-events-none" />
          </a>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <a
              href="https://docs.google.com/document/d/1lFUwltHkN_1iTulBAh7R6xNkGb4fVHUpwUDBU_pT5Mk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 md:flex-1 bg-white/20 backdrop-blur-sm text-white px-8 rounded-lg hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50"
            >
              <span className="pointer-events-none">FAQ for Teams</span>
              <ArrowRight className="w-5 h-5 pointer-events-none" />
            </a>
            <a
              href="https://docs.google.com/document/d/1hSd8EWEbzTgtw4GDx51Z-w-98swoEcyUQfkr0m8I7uQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 md:flex-1 bg-white/20 backdrop-blur-sm text-white px-8 rounded-lg hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50"
            >
              <span className="pointer-events-none">FAQ for Coaches</span>
              <ArrowRight className="w-5 h-5 pointer-events-none" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
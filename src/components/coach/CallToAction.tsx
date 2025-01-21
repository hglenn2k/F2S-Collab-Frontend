import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-900">
              APPLY NOW
            </h2>
            <p className="text-xl text-gray-700">
              Connect with the Arizona Farm to School Collaborative and discover 
              your potential as a Farm-to-School coach!
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-md border border-green-200">
            <a 
              href="https://arizonafarmtoschoolcollaborative.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-semibold text-green-700 hover:text-green-800 transition-colors"
            >
              Visit arizonafarmtoschoolcollaborative.org to begin your application today!
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          <div className="space-y-6 pt-4">
            <p className="text-xl text-gray-700">
              Be part of the change — a vibrant, conscious, and connected educational community awaits!
            </p>

            <p className="text-xl text-gray-700">
              Reach out to{' '}
              <a 
                href="mailto:f2scollaborative@mollenfoundation.org"
                className="text-green-700 hover:text-green-800 underline"
              >
                f2scollaborative@mollenfoundation.org
              </a>
              {' '}with any questions or inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
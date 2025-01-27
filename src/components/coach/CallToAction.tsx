import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-900">
              Apply Today!
            </h2>
            <p className="text-xl text-gray-700">
              Connect with the Arizona Farm to School Collaborative and discover
              your potential as a Farm&nbsp;to&nbsp;School coach!
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFPNv-5-HKQc_BGQvBcJVodQKQ_VaBw7umYC4kAxgpwp9Beg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-3/5 h-12 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50 bg-green-600 text-white hover:bg-green-700/90"
            >
              <span className="pointer-events-none">Apply</span>
              <ArrowRight className="w-5 h-5 pointer-events-none" />
            </a>
          </div>
          <div className="space-y-6 pt-4">
            <p className="text-xl text-gray-700">
              <span className="font-bold">Applications are due February 17th</span>, be part of the change! 
              A vibrant, conscious, and connected educational community awaits!
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
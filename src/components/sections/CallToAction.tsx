import React from 'react';
import { ButtonGroup } from '@/components/Buttons';

export default function CallToAction() {
  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Grow?</h2>
        <p className="text-xl mb-8">
          Healthy, conscious school communities connected to each other and our abundant home.
        </p>
        <ButtonGroup />
      </div>
    </section>
  );
}
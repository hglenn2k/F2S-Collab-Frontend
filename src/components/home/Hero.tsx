import Image from 'next/image';
import React from 'react';
import { ButtonGroup } from '@/components/Buttons';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center py-8 overflow-hidden">
      <picture className="absolute inset-0">
        <source srcSet="/images/hero.webp" type="image/webp" />
        <Image
          src="/images/hero.jpg"
          alt="Background"
          fill
          className="object-cover object-[70%_center] md:object-[70%_top] scale-105"
          priority
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/10" />
      <div className="relative container mx-auto px-4 text-center text-white -mt-4">
        <picture className="relative block">
          <source srcSet="/images/logo.webp" type="image/webp" />
          <Image
            src="/images/logo.jpeg"
            alt="Arizona Farm to School Collaborative"
            width={350}
            height={200}
            className="mx-auto w-4/5 sm:w-2/3 md:w-auto max-w-sm"
          />
        </picture>
        <h2 className="text-lg md:text-xl mt-1 mb-8">An initiative of the Mollen Foundation</h2>
        <p className="text-xl md:text-xl mb-8 max-w-2xl mx-auto">
          A special, one-year professional learning experience designed to empower schools, districts,
          early childhood centers, and communities across the state to build strong, sustainable Farm to School programs.
        </p>
        <ButtonGroup />
      </div>
    </header>
  );
}
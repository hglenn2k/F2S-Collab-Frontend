import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center">
      {/* Background image with Next.js Image */}
      <picture>
        <source srcSet="/images/hero.webp" type="image/webp" />
        <Image
          src="/images/hero.jpg"  // This acts as fallback
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </picture>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/10" />
            
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Arizona Farm to School Collaborative
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          A special, one-year professional learning experience empowering Arizona school teams
          to bring Farm to School practices to life.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Sign up for 2025 Enrollment Updates
        </button>
      </div>
    </header>
  );
}
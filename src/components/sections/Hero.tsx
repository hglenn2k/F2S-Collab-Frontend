import Image from 'next/image';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center">
      {/* Background image with Next.js Image */}
      <picture>
        <source srcSet="/images/hero.webp" type="image/webp" />
        <Image
          src="/images/hero.jpg" // This acts as fallback
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </picture>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/10" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white translate-y-16">
        <h1 className="text-5xl font-bold mb-6">
          Arizona Farm to School Collaborative
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          A special, one-year professional learning experience empowering Arizona school teams
          to bring Farm to School practices to life.
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700/90 transition-colors inline-flex items-center gap-2 shadow-lg ring-1 ring-white/50">
            Sign up for Enrollment&nbsp;Updates
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors inline-flex items-center gap-2 shadow-lg ring-1 ring-white/50">
            Watch Information Session
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
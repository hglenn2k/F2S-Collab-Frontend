import Image from 'next/image';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  
  console.log("HERO COMPONENT RENDERING");
  console.log("ENV VARS:", {
    enrollmentLink: process.env.NEXT_PUBLIC_ENROLLMENT_UPDATES_LINK,
    faqTeamLink: process.env.NEXT_PUBLIC_FAQ_TEAM_LINK,
    faqCoachLink: process.env.NEXT_PUBLIC_FAQ_COACH_LINK
  });
  
  return (
    <header className="relative min-h-screen h-fit lg:h-screen flex items-center justify-center py-8 lg:py-0">
      {/* Background image with Next.js Image */}
      <picture className="absolute inset-0">
        <source srcSet="/images/hero2.webp" type="image/webp" />
        <Image
          src="/images/hero2.jpg"
          alt="Background"
          fill
          className="object-cover object-[70%_center] md:object-[70%_top]"
          priority
        />
      </picture>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/10" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white -mt-4">
        {/* Logo with picture element for webp support */}
        <picture className="relative block mb-6">
          <source srcSet="/images/logo.webp" type="image/webp" />
          <Image
            src="/images/logo.jpeg"
            alt="Arizona Farm to School Collaborative"
            width={350}
            height={200}
            className="mx-auto w-4/5 sm:w-2/3 md:w-auto max-w-sm"
          />
        </picture>

        <p className="text-xl md:text-xl mb-8 max-w-2xl mx-auto">
          A special, one-year professional learning experience designed to empower schools and
          communities across the state to build strong, sustainable Farm to School programs.
        </p>

        <div 
          className="flex flex-col items-center justify-center gap-4 w-full max-w-lg mx-auto" 
          style={{maxWidth: '480px'}}
        >
          <a
            href={"http://eepurl.com/i6wuL2"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 bg-green-600 text-white px-8 rounded-lg hover:bg-green-700/90 transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50"
          >
            <span className="pointer-events-none">Sign up for Enrollment&nbsp;Updates</span>
            <ArrowRight className="w-5 h-5 pointer-events-none" />
          </a>

          {/* FAQ Buttons Container - flex-col on mobile, flex-row on desktop */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <a
              href={"https://docs.google.com/document/d/1lFUwltHkN_1iTulBAh7R6xNkGb4fVHUpwUDBU_pT5Mk/edit?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 md:flex-1 bg-white/20 backdrop-blur-sm text-white px-8 rounded-lg hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50"
            >
              <span className="pointer-events-none">FAQ for Teams</span>
              <ArrowRight className="w-5 h-5 pointer-events-none" />
            </a>

            <a
              href={"https://docs.google.com/document/d/1hSd8EWEbzTgtw4GDx51Z-w-98swoEcyUQfkr0m8I7uQ/edit?usp=sharing"}
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
    </header>
  );
}
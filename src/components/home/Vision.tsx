import React from 'react';

export default function Vision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-green-900">
              Connecting Cafeterias, Classrooms, and Communities
            </h2>
            <p className="text-2xl italic font-serif text-green-900">
              Where Food Becomes the Heart of Learning
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 min-[1250px]:grid-cols-3 min-[1250px]:gap-8">
            {/* Vision Section */}
            <div className={`
              relative
              w-full
              min-[450px]:w-3/4
              max-[1249px]:max-w-[600px] 
              min-[1250px]:w-[375px] 
              min-[450px]:max-[1249px]:justify-self-start
            `}>
              <div className="p-8 rounded-2xl h-full bg-green-300 shadow-md hover:shadow-xl transition-shadow border border-green-900">
                <div className="flex items-center justify-center mb-3 w-full">
                  <div className="h-px bg-white flex-grow"></div>
                  <h3 className="text-2xl font-semibold text-green-900 px-4" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                    Our Vision
                  </h3>
                  <div className="h-px bg-white flex-grow"></div>
                </div>

                <p className="leading-relaxed text-green-900 text-xl" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                  Farm to School is a vibrant journey of collaboration, growth, and scholastic success. 
                  Cafeterias and classrooms are transformed into resilient, interconnected systems that nourish 
                  communities in mind, body, and spirit. Picture a campus where the cafeteria isn&apos;t just a 
                  dining space — it&apos;s the heart of a thriving educational ecosystem.
                </p>
              </div>
            </div>

            {/* Journey Section */}
            <div className={`
              relative 
              w-full 
              min-[450px]:w-3/4
              max-[1249px]:max-w-[600px] 
              min-[1250px]:w-[375px]
              min-[450px]:max-[1249px]:justify-self-center
            `}>
              <div className="p-8 rounded-2xl h-full bg-green-300 shadow-md hover:shadow-xl transition-shadow border border-green-900">
                <div className="flex items-center justify-center mb-3 w-full">
                  <div className="h-px bg-white flex-grow"></div>
                  <h3 className="text-2xl font-semibold text-green-900 px-4" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                    Your Journey
                  </h3>
                  <div className="h-px bg-white flex-grow"></div>
                </div>

                <p className="leading-relaxed text-green-900 text-xl" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                  Join us during the 2025-2026 school year for the inaugural Farm to School Collaborative Retreat! 
                  Schools will attend a three-day immersive experience to create actionable goals for 2025-2026. 
                  Teams will receive ongoing coaching and peer support as Farm to School gradually unfolds on their 
                  campus throughout the year.
                </p>
              </div>
            </div>

            {/* Details Section */}
            <div className={`
              relative 
              w-full 
              min-[450px]:w-3/4
              max-[1249px]:max-w-[600px] 
              min-[1250px]:w-[375px]
              min-[450px]:max-[1249px]:justify-self-end
            `}>
              <div className="p-8 rounded-2xl h-full bg-green-300 shadow-md hover:shadow-xl transition-shadow border border-green-900">
                <div className="flex items-center justify-center mb-3 w-full">
                  <div className="h-px bg-white flex-grow"></div>
                  <h3 className="text-2xl font-semibold text-green-900 px-4" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                    The Details
                  </h3>
                  <div className="h-px bg-white flex-grow"></div>
                </div>

                <p className="leading-relaxed text-green-900 text-xl" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                  Eight school, district, or early childhood teams will be accepted to work through an 
                  evidence-based approach guided by dedicated coaches to implement their own adaptation of Farm to School 
                  practices. These teams should consist of at least one classroom teacher, an administrator, 
                  and child nutrition staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
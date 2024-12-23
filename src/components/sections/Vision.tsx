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
            <p className="text-xl italic font-serif text-green-900">
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
              min-[1250px]:w-[325px] 
              min-[450px]:max-[1249px]:justify-self-start
            `}>
              <div className="p-8 rounded-2xl h-full bg-green-300 shadow-md hover:shadow-xl transition-shadow border-2 border-green-900">
                <div className="flex items-center justify-center mb-3 w-full">
                  <div className="h-px bg-white flex-grow"></div>
                  <h3 className="text-2xl font-semibold text-green-900 px-4" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                    Our Vision
                  </h3>
                  <div className="h-px bg-white flex-grow"></div>
                </div>
                <p className="leading-relaxed text-green-900" style={{ textIndent: '2em', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                  Farm to School transforms cafeterias and classrooms into vibrant learning spaces 
                  where students connect with their food from seed to plate. The cafeteria isn't 
                  just a dining space—it's the heart of a thriving educational ecosystem, creating 
                  resilient, interconnected systems that nourish communities in mind, body, and spirit.
                </p>
              </div>
            </div>

            {/* Journey Section */}
            <div className={`
              relative 
              w-full 
              min-[450px]:w-3/4
              max-[1249px]:max-w-[600px] 
              min-[1250px]:w-[325px]
              min-[450px]:max-[1249px]:justify-self-center
            `}>
              <div className="p-8 rounded-2xl h-full bg-green-300 shadow-md hover:shadow-xl transition-shadow border-2 border-green-900">
                <div className="flex items-center justify-center mb-3 w-full">
                  <div className="h-px bg-white flex-grow"></div>
                  <h3 className="text-2xl font-semibold text-green-900 px-4" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                    The Journey
                  </h3>
                  <div className="h-px bg-white flex-grow"></div>
                </div>
                <p className="leading-relaxed text-green-900" style={{ textIndent: '2em', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                  Beginning May 2025, join us for the inaugural Farm to School Collaborative 
                  Retreat. Selected schools will embark on a three-day immersive experience, 
                  creating customized goals aligned to each team's unique values and vision. 
                  Watch as Farm to School gradually unfolds on your campus with ongoing coaching, 
                  peer-networking, and support from the Collaborative throughout the entire year.
                </p>
              </div>
            </div>

            {/* Details Section */}
            <div className={`
              relative 
              w-full 
              min-[450px]:w-3/4
              max-[1249px]:max-w-[600px] 
              min-[1250px]:w-[325px]
              min-[450px]:max-[1249px]:justify-self-end
            `}>
              <div className="p-8 rounded-2xl h-full bg-green-300 shadow-md hover:shadow-xl transition-shadow border-2 border-green-900">
                <div className="flex items-center justify-center mb-3 w-full">
                  <div className="h-px bg-white flex-grow"></div>
                  <h3 className="text-2xl font-semibold text-green-900 px-4" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                    The Details
                  </h3>
                  <div className="h-px bg-white flex-grow"></div>
                </div>
                <p className="leading-relaxed text-green-900" style={{ textIndent: '2em', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)' }}>
                  Eight schools will be selected to begin this transformative journey. School or 
                  district teams should include at least one classroom teacher, an administrator, 
                  and child nutrition staff. Together, you'll work through an evidence-based 
                  approach guided by dedicated coaches to implement your own adaptation of 
                  Farm to School practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
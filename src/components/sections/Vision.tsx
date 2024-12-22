import React from 'react';

export default function Vision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading - Using cyan */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-700">
              Connecting Cafeterias, Classrooms, and Communities
            </h2>
            <p className="text-xl italic font-serif text-cyan-700">
              Where Food Becomes the Heart of Learning
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[50px] min-[1250px]:grid-cols-3 min-[1250px]:gap-[100px]">
            {/* Vision Section - High contrast orange/yellow */}
            <div className={`
              relative
              w-full
              min-[450px]:w-4/5
              max-[1249px]:max-w-[800px] 
              min-[1250px]:w-[375px] 
              min-[450px]:max-[1249px]:justify-self-start
            `}>
              <div className="p-8 rounded-3xl h-full bg-orange-100 border-l-4 border-r-4 border-orange-900" 
                style={{ borderRadius: '24px' }}>
                <h3 className="text-2xl font-semibold mb-3 text-center text-orange-900">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-orange-900" style={{ textIndent: '2em' }}>
                  Farm to School transforms cafeterias and classrooms into vibrant learning spaces 
                  where students connect with their food from seed to plate. The cafeteria isn't 
                  just a dining space—it's the heart of a thriving educational ecosystem, creating 
                  resilient, interconnected systems that nourish communities in mind, body, and spirit.
                </p>
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full -z-10 bg-orange-700" />
            </div>

            {/* Journey Section - High contrast purple */}
            <div className={`
              relative 
              w-full 
              min-[450px]:w-4/5
              max-[1249px]:max-w-[800px] 
              min-[1250px]:w-[375px]
              min-[450px]:max-[1249px]:justify-self-center
            `}>
              <div className="p-8 rounded-3xl h-full bg-purple-300 border-l-4 border-r-4 border-purple-900" 
                style={{ borderRadius: '24px' }}>
                <h3 className="text-2xl font-semibold mb-3 text-center text-purple-950">
                  The Journey
                </h3>
                <p className="leading-relaxed text-purple-950" style={{ textIndent: '2em' }}>
                  Beginning May 2025, join us for the inaugural Farm to School Collaborative 
                  Retreat. Selected schools will embark on a three-day immersive experience, 
                  creating customized goals aligned to each team's unique values and vision. 
                  Watch as Farm to School gradually unfolds on your campus with ongoing coaching, 
                  peer-networking, and support from the Collaborative throughout the entire year.
                </p>
              </div>
              <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full -z-10 bg-purple-700" />
            </div>

            {/* Details Section - High contrast green */}
            <div className={`
              relative 
              w-full 
              min-[450px]:w-4/5
              max-[1249px]:max-w-[800px] 
              min-[1250px]:w-[375px]
              min-[450px]:max-[1249px]:justify-self-end
            `}>
              <div className="p-8 rounded-3xl h-full bg-green-300 border-l-4 border-r-4 border-green-900" 
                style={{ borderRadius: '24px' }}>
                <h3 className="text-2xl font-semibold mb-3 text-center text-green-900">
                  The Details
                </h3>
                <p className="leading-relaxed text-green-900" style={{ textIndent: '2em' }}>
                  Eight schools will be selected to begin this transformative journey. School or 
                  district teams should include at least one classroom teacher, an administrator, 
                  and child nutrition staff. Together, you'll work through an evidence-based 
                  approach guided by dedicated coaches to implement your own adaptation of 
                  Farm to School practices.
                </p>
              </div>
              <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full -z-10 bg-green-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
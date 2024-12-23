import React from 'react';
import { Rocket, Users, Presentation, ClipboardCheck } from 'lucide-react';

export default function Timeline() {
  const events = [
    { 
      date: "Spring 2025", 
      event: "Program Launch",
      Icon: Rocket,
      color: "#85C88D" // Light Green
    },
    { 
      date: "Summer 2025", 
      event: "Three-day Immersive Retreat",
      Icon: Users,
      color: "#F6A20E",  // Golden orange
    },
    { 
      date: "Fall / Winter 2025", 
      event: "Present your Action Plan to \n AZ Farm-to-School Network",
      Icon: Presentation,
      color: "#93D8CC",  // Light cyan
    },
    { 
      date: "Spring 2026", 
      event: "Present reflections on your action plan",
      Icon: ClipboardCheck,
      color: "#85C88D" // Light Green
    }
  ];

  // Create path points based on icon positions
  const points = events.map((_, index) => {
    const x = index % 2 === 0 ? 120 : 880;
    const y = index * 180 + 20;
    return { x, y };
  });

  // Create SVG path string with steeper node transitions
  const pathData = points.reduce((path, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    
    const prevPoint = points[index - 1];
    const verticalDistance = 70;
    const horizontalOffset = index % 2 === 0 ? -380 : 380;
    
    // Control points that create steeper angles near nodes
    const cp1x = prevPoint.x + (horizontalOffset * 0.15); // Reduce coefficient to increase verticality of parabola out of nodes
    const cp1y = prevPoint.y + verticalDistance;
    
    // Middle point for wide berth around text
    const midX = prevPoint.x + horizontalOffset;
    const midY = (prevPoint.y + point.y) / 2;
    
    // Control points for steeper entry into next node
    const cp2x = point.x - (horizontalOffset * 0.15); // Reduced horizontal offset near nodes
    const cp2y = point.y - verticalDistance;
    
    return `${path} C ${cp1x} ${cp1y}, ${midX} ${midY}, ${midX} ${midY} C ${midX} ${midY}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  }, '');

  const linearGradientId = "path-gradient";

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">Program Timeline: 2025-2026 Retreat</h2>
          <p className="text-lg text-gray-700 mb-8">
            The Arizona Farm to School Collaborative will host the inaugural Farm to School 
            Collaborative Retreat. Participating schools will attend a three-day immersive retreat 
            experience and create actionable goals for the 2025-2026 school year.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative h-[600px]">
          {/* SVG curved path with gradient */}
          <svg 
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
            preserveAspectRatio="none"
            viewBox="0 0 1000 600"
          >
            <defs>
              <linearGradient id={linearGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={events[0].color} />
                <stop offset="9%" stopColor={events[0].color} />
                  <stop offset="25%" stopColor={events[1].color} />
                  <stop offset="42%" stopColor={events[1].color} />
                <stop offset="56%" stopColor={events[2].color} />
                <stop offset="75%" stopColor={events[2].color} />
                  <stop offset="85%" stopColor={events[3].color} />
                  <stop offset="100%" stopColor={events[3].color} />
              </linearGradient>
            </defs>
            <path
              d={pathData}
              stroke={`url(#${linearGradientId})`}
              strokeWidth="3"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>
          
          <div className="relative" style={{ zIndex: 1 }}>
            {events.map((item, index) => {
              const Icon = item.Icon;
              const isLeft = index % 2 === 0;
              const top = `${(index * 180) + 20}px`;
              const left = isLeft ? '12%' : '88%';
              
              return (
                <div 
                  key={index} 
                  className="absolute flex items-center"
                  style={{
                    top,
                    left,
                    transform: `translate(${isLeft ? '0' : '-100%'}, -50%)`
                  }}
                >
                  {/* Circle with icon */}
                  <div className="relative flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center" style={{ borderColor: item.color }}>
                      <Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center ${
                    isLeft ? 'ml-3' : 'mr-3 text-right order-first'
                  }`}
                  style={{ 
                    width: isLeft ? '250px' : '350px',
                    minWidth: isLeft ? '250px' : '350px'
                  }}>
                    <h3 className="font-bold" style={{ color: item.color }}>{item.date}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selection Process */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-orange-700 mb-4">Selection Process</h3>
            <p className="text-gray-700">
              Eight schools will be selected to begin the journey with the AZF2SC for the upcoming 
              25-26 school year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

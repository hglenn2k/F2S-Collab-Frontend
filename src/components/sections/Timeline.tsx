import React from 'react';
import { Rocket, Users, Presentation, ClipboardCheck } from 'lucide-react';

export default function Timeline() {
  const events = [
    { 
      date: "Spring 2025", 
      event: "Program Launch",
      Icon: Rocket
    },
    { 
      date: "Summer 2025", 
      event: "Three-day Immersive Retreat",
      Icon: Users
    },
    { 
      date: "Fall / Winter 2025", 
      event: "Present your Action Plan to \n AZ Farm-to-School Network",
      Icon: Presentation
    },
    { 
      date: "Spring 2026", 
      event: "Present reflections on your action plan",
      Icon: ClipboardCheck
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

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Program Timeline</h2>
        <div className="max-w-4xl mx-auto relative h-[600px]">
          {/* SVG curved path */}
          <svg 
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
            preserveAspectRatio="none"
            viewBox="0 0 1000 600"
          >
            <path
              d={pathData}
              stroke="#86EFAC"
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
                    <div className="w-16 h-16 rounded-full bg-green-50 border-4 border-green-600 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-green-600" />
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
                    <h3 className="font-bold text-green-800 text-lg mb-1">{item.date}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
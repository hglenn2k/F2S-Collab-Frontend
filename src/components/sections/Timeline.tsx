import React from 'react';
import { Rocket, Users, Presentation, ClipboardCheck } from 'lucide-react';

export default function Timeline() {
  const events = [
    { 
      date: "Spring 2025", 
      event: "Program Launch: Schools, Districts, and ECEs assemble teams and submit applications",
      Icon: Rocket,
      color: "#85C88D" // Light Green
    },
    { 
      date: "May 2025", 
      event: "Three-day Immersive Retreat at\u00A0the Orme School in Mayer, Arizona",
      Icon: Users,
      color: "#F6A20E",  // Golden orange
    },
    { 
      date: "Fall / Winter 2025", 
      event: "Receive ongoing coaching to implement your Farm\ to\ School\u00A0action plan",
      Icon: Presentation,
      color: "#93D8CC",  // Light cyan
    },
    { 
      date: "Spring 2026", 
      event: "Reflect on your action plan and\u00A0share your experience with\u00A0the network",
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
    
    const cp1x = prevPoint.x + (horizontalOffset * 0.15);
    const cp1y = prevPoint.y + verticalDistance;
    
    const midX = prevPoint.x + horizontalOffset;
    const midY = (prevPoint.y + point.y) / 2;
    
    const cp2x = point.x - (horizontalOffset * 0.15);
    const cp2y = point.y - verticalDistance;
    
    return `${path} C ${cp1x} ${cp1y}, ${midX} ${midY}, ${midX} ${midY} C ${midX} ${midY}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  }, '');

  const linearGradientId = "path-gradient";

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">2025-2026 Program Timeline</h2>
          <p className="text-xl text-gray-700">
            From the initial program launch, through a transformative retreat, and into a full year 
            of coaching and implementation, <span className="font-bold">eight selected teams</span> will work together to bring their 
            farm to school visions to life across Arizona.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative h-[600px] mb-4">
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
                  <div className="relative flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center" style={{ borderColor: item.color }}>
                      <Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center ${
                    isLeft ? 'ml-3' : 'mr-3 text-right order-first'
                  } w-[280px] md:w-[400px]`}>
                    <h3 className="font-bold text-xl" style={{ color: item.color }}>{item.date}</h3>
                    <p className="text-gray-700 text-lg">{item.event}</p>
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
import React from 'react';

export default function InitiativeDescription() {
  return (
    <section className="pb-16 pt-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-700 mb-8 text-center">
            What is Farm to School?
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-gray-700">
              Farm to School is a program for school, district, or early childhood education 
              communities that brings healthy, local food into school cafeterias, supports food, 
              agriculture, and nutrition education in the classrooms, and builds strong community 
              partnerships with local farmers and other interested groups.
            </p>
            
            <p className="text-xl text-gray-700">
              Some schools have garden or culinary programs, while others choose to focus on taste 
              tests or composting leftover cafeteria waste. Each school sets their own vision for 
              its program and selects goals to focus on during a given school year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

const ApproachCard = ({ color = '#ef4444', title, text }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="relative w-full flex justify-center">
        <div
          className="triangle"
          style={{
            width: 0,
            height: 0,
            borderLeft: '48px solid transparent',
            borderRight: '48px solid transparent',
            borderBottom: `72px solid ${color}`
          }}
        />
        <div className="absolute -top-6 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" fill={color} />
          </svg>
        </div>
      </div>

      <h4 className="mt-10 font-semibold text-lg text-white">{title}</h4>
      <p className="mt-3 text-sm text-white/90 max-w-xs leading-relaxed">{text}</p>
    </div>
  );
};

const Approach = () => {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8" style={{ backgroundColor: '#6D8196' }}>
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="inline-block px-4 py-2 rounded-full border border-white/20 text-white font-medium">Our Methodology</div>
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">Our Approach</h2>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Comprehensive solutions tailored to your campus needs</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-start">
          <ApproachCard
            color="#ef4444"
            title="Student Collaboration Focus"
            text="Dedicated task force on the engagement to uplift students"
          />

          <ApproachCard
            color="#2563eb"
            title="Campus-Centric Planning"
            text="Focus on premise-based activities directly linked to campus sessions"
          />

          <ApproachCard
            color="#ef4444"
            title="Concept-to-Execution Support"
            text="Concept creation with hands-on support through delivery"
          />

          <ApproachCard
            color="#2563eb"
            title="Strategic Event Consultation"
            text="Aligned with college objectives to achieve measurable outcomes"
          />

          <ApproachCard
            color="#ef4444"
            title="Detail-Oriented Coordination"
            text="Up-to-date plans and documentation for incoming and outgoing tasks"
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;

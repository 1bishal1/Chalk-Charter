import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="w-full" style={{ backgroundColor: '#6D8196' }}>
      <div className="py-16 md:py-24 px-4 md:px-8 max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">What We Do</h2>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          We specialize in creating meaningful connections between brands and the vibrant campus community
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#191970] rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-left text-white">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12l5-5 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 19h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">BTL Marketing</h3>
            <p className="mt-3 text-white/90">Strategic below-the-line marketing campaigns tailored for educational environments</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#191970] rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-left text-white">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-500 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 6v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 14h12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Brand-Institution Bridge</h3>
            <p className="mt-3 text-white/90">Connecting Point between Brands and Educational Institutions for mutual growth</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#191970] rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-left text-white">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15a7.6 7.6 0 10-14.8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Targeted Promotion</h3>
            <p className="mt-3 text-white/90">Promotion of targeted audience of brands within college institutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

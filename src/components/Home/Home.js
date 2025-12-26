import React from 'react';
import Overview from './Overview';
import Approach from './Approach';
import WhatWeDo from './WhatWeDo';

const Home = () => {
  return (
    <>
    <div className="w-full min-h-[calc(100vh-80px)] py-12 md:py-20 px-4 md:px-8 flex items-center justify-center" style={{ backgroundColor: '#6D8196' }}>
      <div className="max-w-[1200px] w-full text-center">
        <div className="font-cursive text-[clamp(2.5rem,9vw,6rem)] text-white tracking-wider leading-tight italic drop-shadow-lg">
          Chalk & Charter
        </div>
      </div>
    </div>
      {/* Feature Cards (added before overview / "What We Do" section) */}
      <div className="w-full" style={{ backgroundColor: '#6D8196' }}>
        <div className="py-12 md:py-16 px-4 md:px-8 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card A */}
            <div className="relative bg-[#191970] rounded-2xl shadow-md p-8 overflow-hidden text-white">
              <div className="absolute top-3 left-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-600 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="white"/>
                  <path d="M6 14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14V18H6V14Z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Concept to Design</h3>
              <p className="mt-3 text-white/90">Transforming innovative ideas into compelling campus experiences</p>
              <a href="#" className="mt-6 inline-flex items-center text-white font-medium">Read More <span className="ml-2">→</span></a>
            </div>

            {/* Card B */}
            <div className="relative bg-[#191970] rounded-2xl shadow-md p-8 overflow-hidden text-white">
              <div className="absolute top-3 right-3 w-4 h-4 border-2 border-blue-500 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-2 border-blue-500 rounded-full transform rotate-45"></div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-600 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12h6v6H3z" fill="white"/>
                  <path d="M15 6h6v6h-6z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">A Quiet Bridge To Connectivity</h3>
              <p className="mt-3 text-white/90">Seamlessly connecting brands with student communities</p>
              <a href="#" className="mt-6 inline-flex items-center text-white font-medium">Read More <span className="ml-2">→</span></a>
            </div>

            {/* Card C */}
            <div className="relative bg-[#191970] rounded-2xl shadow-md p-8 overflow-hidden text-white">
              <div className="absolute top-3 left-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-600 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3l7 6v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9l7-6z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Campus Design</h3>
              <p className="mt-3 text-white/90">Crafting strategic presence across educational institutions</p>
              <a href="#" className="mt-6 inline-flex items-center text-white font-medium">Read More <span className="ml-2">→</span></a>
            </div>
          </div>
        </div>
      </div>

      <Overview />
      <Approach />
      <WhatWeDo />

      {/* Stats Strip */}
      <div className="w-full" style={{ backgroundColor: '#6D8196' }}>
        <div className="py-12 px-4 md:px-8 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#191970] rounded-xl shadow-md p-8 text-center text-white">
            <div className="text-4xl md:text-5xl font-extrabold">50+</div>
            <div className="mt-2 text-white/90">Partner Institutions</div>
          </div>

          <div className="bg-[#191970] rounded-xl shadow-md p-8 text-center text-white">
            <div className="text-4xl md:text-5xl font-extrabold">100+</div>
            <div className="mt-2 text-white/90">Brand Collaborations</div>
          </div>

          <div className="bg-[#191970] rounded-xl shadow-md p-8 text-center text-white">
            <div className="text-4xl md:text-5xl font-extrabold">500K+</div>
            <div className="mt-2 text-white/90">Students Reached</div>
          </div>

          <div className="bg-[#191970] rounded-xl shadow-md p-8 text-center text-white">
            <div className="text-4xl md:text-5xl font-extrabold">95%</div>
            <div className="mt-2 text-white/90">Client Satisfaction</div>
          </div>
        </div>
      </div>
  </>
  );
};

export default Home;

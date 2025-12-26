import React from 'react';

const Home = () => {
  return (
    <>
    <div className="w-full min-h-[calc(100vh-80px)] bg-white py-8 md:py-16 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-[1400px] w-full flex justify-center items-center">
        <div 
          className="relative w-full max-w-[1200px] aspect-video md:aspect-video bg-[#2d3436] rounded-xl md:rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
        >
          {/* Carousel Indicator */}
          <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#4A90E2] rounded-full shadow-[0_0_10px_rgba(74,144,226,0.5)] z-10"></div>
          
          {/* Chalkboard Content */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12">
            
            {/* Image behind text */}
            <div
              className="absolute inset-0 flex items-center justify-center z-[1]"
            >
              <div
                className="w-[90%] md:w-[75%] lg:w-[65%] h-[70%] bg-center bg-no-repeat bg-contain opacity-90"
                style={{
                  backgroundImage: "url('/assets/chalk-hand-bg.png')"
                }}
              />
            </div>

            {/* Text */}
            <div
              className="font-cursive text-[clamp(2.5rem,9vw,7rem)] text-white tracking-wider relative z-[2] text-center leading-tight italic"
              style={{
                textShadow: `
                  0 0 8px rgba(255, 255, 255, 0.6),
                  0 0 16px rgba(255, 255, 255, 0.4),
                  0 0 24px rgba(255, 255, 255, 0.3),
                  0 2px 4px rgba(0, 0, 0, 0.3)
                `
              }}
            >
              Chalk & Charter
            </div>

          </div>
        </div>
      </div>
    </div>
      {/* Feature Cards (added before overview / "What We Do" section) */}
      <div className="w-full bg-[#f3f7fb] py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card A */}
            <div className="relative bg-white rounded-2xl shadow-md p-8 overflow-hidden">
              <div className="absolute top-3 left-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-600 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="white"/>
                  <path d="M6 14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14V18H6V14Z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#0b2743]">Concept to Design</h3>
              <p className="mt-3 text-[#6b7280]">Transforming innovative ideas into compelling campus experiences</p>
              <a href="#" className="mt-6 inline-flex items-center text-[#0b2743] font-medium">Read More <span className="ml-2">→</span></a>
            </div>

            {/* Card B */}
            <div className="relative bg-white rounded-2xl shadow-md p-8 overflow-hidden">
              <div className="absolute top-3 right-3 w-4 h-4 border-2 border-blue-500 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-2 border-blue-500 rounded-full transform rotate-45"></div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-600 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12h6v6H3z" fill="white"/>
                  <path d="M15 6h6v6h-6z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#0b2743]">A Quiet Bridge To Connectivity</h3>
              <p className="mt-3 text-[#6b7280]">Seamlessly connecting brands with student communities</p>
              <a href="#" className="mt-6 inline-flex items-center text-[#0b2743] font-medium">Read More <span className="ml-2">→</span></a>
            </div>

            {/* Card C */}
            <div className="relative bg-white rounded-2xl shadow-md p-8 overflow-hidden">
              <div className="absolute top-3 left-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-2 border-red-500 rounded-full transform rotate-45"></div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-600 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3l7 6v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9l7-6z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#0b2743]">Campus Design</h3>
              <p className="mt-3 text-[#6b7280]">Crafting strategic presence across educational institutions</p>
              <a href="#" className="mt-6 inline-flex items-center text-[#0b2743] font-medium">Read More <span className="ml-2">→</span></a>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="w-full bg-gradient-to-b from-white to-[#fbfdff] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2743]">What We Do</h2>
          <p className="mt-4 text-lg md:text-xl text-[#516b78] max-w-2xl mx-auto">
            We specialize in creating meaningful connections between brands and the vibrant campus community
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-left">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12l5-5 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 19h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#0b2743]">BTL Marketing</h3>
              <p className="mt-3 text-[#516b78]">Strategic below-the-line marketing campaigns tailored for educational environments</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-left">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-500 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 6v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 14h12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#0b2743]">Brand-Institution Bridge</h3>
              <p className="mt-3 text-[#516b78]">Connecting Point between Brands and Educational Institutions for mutual growth</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-left">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15a7.6 7.6 0 10-14.8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#0b2743]">Targeted Promotion</h3>
              <p className="mt-3 text-[#516b78]">Promotion of targeted audience of brands within college institutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="w-full py-12 px-4 md:px-8 bg-gradient-to-r from-white via-[#fbfbff] to-[#fff7fb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-purple-600">50+</div>
            <div className="mt-2 text-gray-600">Partner Institutions</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-purple-600">100+</div>
            <div className="mt-2 text-gray-600">Brand Collaborations</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-purple-600">500K+</div>
            <div className="mt-2 text-gray-600">Students Reached</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-purple-600">95%</div>
            <div className="mt-2 text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
  </>
  );
};

export default Home;

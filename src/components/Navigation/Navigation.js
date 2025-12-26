import React from 'react';

const Navigation = () => {
  return (
    <nav className="w-full bg-[#1a1a1a] py-5 sticky top-0 z-[1000] shadow-lg">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-6 md:gap-10 px-4 md:px-8 flex-wrap">
        <a 
          href="#home" 
          className="text-white no-underline text-xs md:text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gray-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          HOME
        </a>
        <a 
          href="#our-way" 
          className="text-white no-underline text-xs md:text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gray-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          OUR WAY
        </a>
        <a 
          href="#capabilities" 
          className="text-white no-underline text-xs md:text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gray-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          OUR CAPABILITIES
        </a>
        
        <div className="flex items-center justify-center mx-2 md:mx-4 cursor-pointer transition-transform duration-300 hover:scale-110">
          <img src="/assets/logo.png" alt="Chalk and Charter" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
        </div>
        
        <a 
          href="#campus-charter" 
          className="text-white no-underline text-xs md:text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gray-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          CAMPUS CHARTER
        </a>
        <a 
          href="#brands" 
          className="text-white no-underline text-xs md:text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gray-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          CHALKING OUT BRANDS
        </a>
        <a 
          href="#contact" 
          className="text-white no-underline text-xs md:text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gray-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navigation;


import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0f1724] via-[#162235] to-[#2b1723] text-white py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="Chalk and Charter" className="w-12 h-12 object-contain" />
              <div className="text-lg font-semibold">Chalk and Charter</div>
            </div>
            <p className="mt-4 text-sm text-white/80 max-w-sm">Where Brands Connect with Educational Institutions</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">f</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">ig</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">in</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>BTL Marketing</li>
              <li>Brand Connections</li>
              <li>Campus Promotions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="text-white/80 space-y-3">
              <li>contact@chalkandcharter.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Campus District, Education Avenue</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-white/70">© 2025 Chalk and Charter. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

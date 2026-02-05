import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Aapne logo path check kar lein

const CodonLogo = ({ className = "h-8" }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src={logo} 
      alt="Logo" 
      className="h-full w-auto object-contain" 
    />
  </div>
);

const Header = () => {
  return (
<nav className="bg-black/90 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg w-full border-b border-white/5">
        {/* Relative wrapper jo links ko center hone mein help karega */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

          {/* 1. Left Side: Logo (Position wahi rahegi) */}
          <div className="flex items-center z-10">
            <Link to="/" className="cursor-pointer">
              <CodonLogo className="h-10" />
               <span className="text-2xl font-black tracking-tighter">
          Cod<span className="text-[#5bc5d4]">ON</span>
        </span>
            </Link>
          </div>

          {/* 2. Middle: Navigation Links (ABSOLUTE CENTERED) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex gap-8 text-[13px] font-bold tracking-wide uppercase">
              {/* <Link to="/" className="hover:text-[#5bc5d4] transition-colors">Home</Link> */}
              <a href="#" className="hover:text-[#5bc5d4] transition-colors">NEET UG</a>
              {/* <a href="#" className="hover:text-[#5bc5d4] transition-colors">Plans</a> */}
              <a href="#" className="hover:text-[#5bc5d4] transition-colors">MENTORS</a>
              <Link to="/plan" className="hover:text-[#5bc5d4] transition-colors">PLANS</Link>
              <Link to="/feacure" className="hover:text-[#5bc5d4] transition-colors">FEATURES</Link>
              <Link to="/AboutUS" className="hover:text-[#5bc5d4] transition-colors">AboutUS</Link>
              <Link to="/contact" className="hover:text-[#5bc5d4] transition-colors">CONTACT</Link>

            </div>
          </div>

          {/* 3. Right Side: Dashboard Button */}
          {/* <div className="flex items-center z-10">
            <button className="bg-[#5bc5d4] px-7 py-2.5 rounded-lg font-bold text-sm hover:bg-white hover:text-[#1a7a85] transition-all duration-300 shadow-lg active:scale-95">
              Dashboard
            </button>
          </div> */}

        </div>
      </nav>
  );
};

export default Header;
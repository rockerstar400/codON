import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import {
  PlayCircle, BookOpen, Play, Apple, BarChart2, Settings, Activity, ChevronLeft,
  ChevronRight, GraduationCap, Loader2, Sparkles, Facebook, Instagram, Youtube, Users, Dna, Database, ClipboardCheck, Video
} from 'lucide-react'; // Aapne logo path check kar lein

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
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

          {/* 1. Left Side: Logo (Name BELOW Logo) */}
          <div className="flex items-center z-10">
            <Link to="/" className="flex flex-col items-center cursor-pointer group">
              <CodonLogo className="h-9 w-auto" />
              <span className="text-xs font-black tracking-widest uppercase mt-1">
                Cod<span className="text-[#5bc5d4]">ON</span>
              </span>
            </Link>
          </div>

          {/* 2. Middle: Navigation Links (Exactly as per your drawing) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex gap-8 text-[12px] font-bold tracking-wider uppercase">
              <a href="#" className="hover:text-[#5bc5d4] transition-colors">NEET UG</a>
              <a href="#" className="hover:text-[#5bc5d4] transition-colors">MENTORS</a>
              <Link to="#" className="hover:text-[#5bc5d4] transition-colors">PLANS</Link>
              <Link to="#" className="hover:text-[#5bc5d4] transition-colors">FEATURES</Link>
              <Link to="/contact" className="hover:text-[#5bc5d4] transition-colors">CONTACT</Link>
              <a href="/AboutUs" className="hover:text-[#5bc5d4] transition-colors">ABOUT US</a>

            </div>
          </div>

          {/* 3. Right Side: Play Store & App Store Buttons */}
          <div className="hidden lg:flex items-center gap-3 z-10">
            {/* Play Store Button */}
            <a
              href="#"
              className="flex items-center gap-2.5 px-3 py-1.5 border border-white/20 rounded-xl bg-white/5 hover:bg-[#5bc5d4]/10 hover:border-[#5bc5d4] transition-all duration-300 group"
            >
              <Play size={20} className="fill-[#5bc5d4] text-[#5bc5d4]" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[7px] font-medium text-white/60 uppercase tracking-tighter">Get it on</span>
                <span className="text-[13px] font-bold text-white group-hover:text-[#5bc5d4]">Google Play</span>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center gap-2.5 px-3 py-1.5 border border-white/20 rounded-xl bg-white/5 hover:bg-[#5bc5d4]/10 hover:border-[#5bc5d4] transition-all duration-300 group"
            >
              <Apple size={22} className="text-white group-hover:text-[#5bc5d4] -mt-0.5" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[7px] font-medium text-white/60 uppercase tracking-tighter">Download on the</span>
                <span className="text-[13px] font-bold text-white group-hover:text-[#5bc5d4]">App Store</span>
              </div>
            </a>
          </div>

        </div>
      </nav>
  );
};

export default Header;
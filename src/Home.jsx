import React, { useState } from 'react'; // Corrected Import
import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, BarChart2, Settings, Activity, ChevronLeft, ChevronRight, Sparkles, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";
import logo from "./assets/logo.png"

// --- PROFESSIONAL LOGO COMPONENT ---
const CodonLogo = ({ className = "h-8" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src={logo}
      alt="Logo"
      className="h-full w-auto object-contain" // h-full se ye parent ki height (h-8 ya h-16) le lega
    />
  </div>
);

// Testimonials Data
const testimonialsData = [
  {
    text: "My reasons for sticking with codON are the faculty and QBank. I gave all the codON GTs and reviewing them properly helped me overcome plateaus. Knowing everything and attempting questions are two different games.",
    name: "Dr Pooshan",
    rank: "Rank 1",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "I built my concepts through codON Videos and solved the QBank as much as possible. I found codON QBank and its explanations really nice - they gave me a complete idea of the subject while solving. Revision is the key.",
    name: "Dr Greeshma",
    rank: "Rank 2",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "My core strategy revolved around GTs - from improving weak areas to revising important topics. I did most of my revision through analysing old GTs, which also boosted my confidence. I'd strongly suggest codON GTs.",
    name: "Dr Ashutosh",
    rank: "Rank 3",
    img: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    text: "The clinical explanations in the QBank are unmatched. It helped me bridge the gap between theory and clinical practice seamlessly. Highly recommended for every NEET PG aspirant.",
    name: "Dr Sneha",
    rank: "Rank 12",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const LandingPage = () => {
  // --- SLIDER STATE & LOGIC (Must be inside component) ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // We show 3 cards at once on desktop, so we stop before the last 3
    if (currentIndex < testimonialsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* 1. NAVBAR */}
      {/* <nav className="flex items-center justify-between px-6 py-4 bg-[#1a7a85] text-white sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-12 flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <CodonLogo className="h-10" />
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-[#5bc5d4] transition">Home</Link>
            <a href="#" className="hover:text-[#5bc5d4] transition">NEET PG</a>
            <a href="#" className="hover:text-[#5bc5d4] transition">Plans</a>
            <a href="#" className="hover:text-[#5bc5d4] transition">Careers</a>
            <a href="/contact" className="hover:text-[#5bc5d4] transition">Contact</a>
            <a href="/AboutUS" className="hover:text-[#5bc5d4] transition">AboutUS</a>

          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#5bc5d4] px-6 py-2 rounded-md font-bold hover:bg-white hover:text-[#1a7a85] transition-all duration-300 shadow-lg">
            Dashboard
          </button>
        </div>
      </nav> */}
      <nav className="bg-[#1a7a85] text-white sticky top-0 z-50 shadow-md w-full">
        {/* Relative wrapper jo links ko center hone mein help karega */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

          {/* 1. Left Side: Logo (Position wahi rahegi) */}
          <div className="flex items-center z-10">
            <Link to="/" className="cursor-pointer">
              <CodonLogo className="h-10" />
            </Link>
          </div>

          {/* 2. Middle: Navigation Links (ABSOLUTE CENTERED) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex gap-8 text-[13px] font-bold tracking-wide uppercase">
              <Link to="/" className="hover:text-[#5bc5d4] transition-colors">Home</Link>
              <a href="#" className="hover:text-[#5bc5d4] transition-colors">NEET PG</a>
              {/* <a href="#" className="hover:text-[#5bc5d4] transition-colors">Plans</a> */}
              <a href="#" className="hover:text-[#5bc5d4] transition-colors">Careers</a>
              <Link to="/contact" className="hover:text-[#5bc5d4] transition-colors">Contact</Link>
              <Link to="/AboutUS" className="hover:text-[#5bc5d4] transition-colors">AboutUS</Link>
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

      {/* 2. HERO SECTION */}
      {/* <section className="relative bg-gradient-to-b from-[#1a7a85] to-[#2a9ba8] pt-24 pb-32 text-center text-white px-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="mb-8 flex justify-center">
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
            <CodonLogo className="h-16" />
          </div>
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
          The Gold Standard for <br/>
          <span className="text-[#5bc5d4]">NEET PG and more</span>
        </motion.h1>

        <div className="flex flex-col items-center gap-6">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#5bc5d4] px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-white hover:text-[#1a7a85] transition-all">
            Go to dashboard
          </motion.button>
          <a href="#" className="flex items-center gap-2 underline text-sm opacity-90 hover:text-[#5bc5d4]">
            View Plans <Activity size={16} />
          </a>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.43,125.72,118.81,185.58,112.26,244.22,105.82,285.66,74.5,321.39,56.44Z"></path>
            </svg>
        </div>
      </section> */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#8db6bd]">

        {/* 1. DYNAMIC BACKGROUND LAYER (Ultra Premium Mesh) */}
        <div className="absolute inset-0 z-0">
          {/* Animated Glow Spotlights */}
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#5bc5d4]/20 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 -right-[5%] w-[40%] h-[40%] bg-[#5bc5d4]/30 blur-[100px] rounded-full"
          />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        </div>

        {/* 2. FLOATING DECORATIVE ELEMENTS (Adds Depth) */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/4 left-10 md:left-24 opacity-20 hidden md:block"
          >
            <Activity size={40} className="text-[#5bc5d4]" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/4 right-10 md:right-24 opacity-20 hidden md:block"
          >
            <Sparkles size={40} className="text-[#5bc5d4]" />
          </motion.div>
        </div>

        {/* 3. MAIN CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

          {/* Logo with Enhanced Glassmorphism */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-10 inline-block"
          >
            <div className="p-1 rounded-full bg-gradient-to-tr from-white/30 to-transparent">
              <div className="p-6 md:p-8 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                {/* <CodonLogo className="h-12 md:h-16" /> */}
                <img src={logo} className="h-16 md:h-16 object-contain" alt="Logo" />
              </div>
            </div>
          </motion.div>

          {/* Headline with Gradient Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              The Gold Standard for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5bc5d4] to-white">
                NEET PG and more
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Conceptual clarity, premium question banks, and AI-driven analytics designed for the doctors of tomorrow.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <button className="group relative bg-white text-[#1a7a85] px-12 py-5 rounded-2xl text-xl font-bold shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Go to dashboard <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5bc5d4]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            <a href="#" className="flex items-center gap-2 text-white/80 font-semibold border-b border-white/20 pb-1 hover:text-[#5bc5d4] hover:border-[#5bc5d4] transition-all">
              Explore Preparation Plans <Activity size={18} />
            </a>
          </motion.div>
        </div>

        {/* 4. PREMIUM SMOOTH WAVE TRANSITION */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M0,0 C300,80 900,10 1200,80 V120 H0 Z" opacity="0.4"></path>
            <path d="M0,40 C400,120 800,20 1200,100 V120 H0 Z"></path>
          </svg>
        </div>
      </section>

      {/* 5. WHY codeON SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">The <span className="text-[#1a7a85]">codeON</span> Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Moving beyond rote memorization to a conceptual ecosystem.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1a7a85] rounded-lg flex items-center justify-center text-white mb-6"><BookOpen size={28} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#1a7a85]">Evidence-Based Learning</h3>
              <p className="text-gray-600 text-sm">Every MCQ and video is structured for concept-based learning.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#34b3c1] rounded-lg flex items-center justify-center text-white mb-6"><Settings size={28} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#1a7a85]">Active Solving</h3>
              <p className="text-gray-600 text-sm">Master the art of educated guessing and negative marking management.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#5bc5d4] rounded-lg flex items-center justify-center text-white mb-6"><BarChart2 size={28} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#1a7a85]">Simulation</h3>
              <p className="text-gray-600 text-sm">Experience real-time exam simulations with in-depth analytics.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="text-[#34b3c1] mb-4"><PlayCircle size={48} /></div>
            <h2 className="text-4xl font-bold mb-6">Recorded <span className="text-[#34b3c1]">Video</span> Classes</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Integrated conceptual content across all 19 subjects.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="relative">
            <div className="bg-white p-4 rounded-xl shadow-xl">
              <img src="https://via.placeholder.com/500x300" alt="Video" className="rounded-lg w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Success Stories from <span className="text-[#1a7a85]">Top Rankers</span></h2>
            <p className="text-gray-600">Join thousands of successful doctors who cleared NEET PG with codON.</p>
          </div>

          <div className="relative px-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-xl transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#1a7a85] hover:text-white text-gray-600'}`}
            >
              <ChevronLeft size={28} />
            </button>

            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentIndex * (100 / 3.05)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonialsData.map((item, index) => (
                  <div key={index} className="min-w-[calc(33.333%-16px)] bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-[350px]">
                    <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">"{item.text}"</p>
                    <div className="flex items-center gap-4 mt-6">
                      <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#5bc5d4]" />
                      <div>
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-[#1a7a85] font-bold text-xs">{item.rank}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= testimonialsData.length - 3}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-xl transition-all ${currentIndex >= testimonialsData.length - 3 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#1a7a85] hover:text-white text-gray-600'}`}
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <div className="h-1.5 w-48 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#1a7a85] rounded-full"
                animate={{ width: `${((currentIndex + 3) / testimonialsData.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEST SERIES SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <BarChart2 size={48} className="mx-auto text-[#34b3c1] mb-4" />
          <h2 className="text-4xl font-bold mb-6">The largest pan-India <span className="text-[#34b3c1]">Test Series</span></h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
            <div className="text-sm text-gray-400">Your rank</div>
            <div className="text-5xl font-bold text-[#1a7a85] my-2">22<span className="text-xl">nd</span></div>
            <div className="text-blue-500 font-bold">99.8th Percentile</div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-gray-900 py-12 text-center text-white">
        <div className="mb-6 flex justify-center opacity-80"><CodonLogo /></div>
        <p className="text-gray-500 text-sm">© 2026 codON Academy. Empowering Future Specialists.</p>
      </footer> */}

      <footer className="bg-gray-900 py-12 text-center text-white">
        {/* Logo Section */}
        <div className="mb-6 flex justify-center opacity-80">
          <CodonLogo />
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1877F2] transition-all duration-300 transform hover:scale-110"
          >
            <Facebook size={24} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E4405F] transition-all duration-300 transform hover:scale-110"
          >
            <Instagram size={24} />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110"
          >
            <Youtube size={24} />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            {/* Lucide me Twitter icon hi X ke liye use hota hai */}
            <Twitter size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-500 text-sm border-t border-gray-800 pt-8 max-w-xs mx-auto">
          © 2026 codON Academy. Empowering Future Specialists.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
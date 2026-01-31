import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, BarChart2, Smartphone, Settings, Activity } from 'lucide-react';
import { Link } from "react-router-dom";

// --- PROFESSIONAL LOGO COMPONENT ---
const CodonLogo = ({ className = "h-8", textColor = "text-white" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex items-center justify-center">
      {/* Abstract DNA/Tech Icon */}
      <svg viewBox="0 0 100 100" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" className="opacity-20" />
        <path d="M30 70C30 70 35 50 50 50C65 50 70 30 70 30" stroke="#5bc5d4" strokeWidth="8" strokeLinecap="round" />
        <path d="M30 30C30 30 35 50 50 50C65 50 70 70 70 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="50" cy="50" r="12" fill="#1a7a85" stroke="white" strokeWidth="2" />
      </svg>
    </div>
    <span className={`text-2xl font-black tracking-tight ${textColor}`}>
      cod<span className="text-[#5bc5d4]">ON</span>
    </span>
  </div>
);

const LandingPage = () => {
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* 1. NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#1a7a85] text-white sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-8">
          {/* Integrated Logo */}
          {/* <CodonLogo /> */}
            <Link to="/" className="cursor-pointer">
    <CodonLogo />
  </Link>
          
          <div className="hidden md:flex gap-6 text-sm font-medium">
             <Link to="/" className="hover:text-[#5bc5d4] transition">Home</Link>
            <a href="#" className="hover:text-[#5bc5d4] transition">NEET PG</a>
            <a href="#" className="hover:text-[#5bc5d4] transition">Plans</a>
            <a href="#" className="hover:text-[#5bc5d4] transition">Careers</a>
            <a href="/contact" className="hover:text-[#5bc5d4] transition">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#5bc5d4] px-6 py-2 rounded-md font-bold hover:bg-white hover:text-[#1a7a85] transition-all duration-300 shadow-lg">
            Dashboard
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1a7a85] to-[#2a9ba8] pt-24 pb-32 text-center text-white px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          {/* Big Hero Logo */}
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
            <CodonLogo className="h-16" />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight"
        >
          The Gold Standard for <br/>
          <span className="text-[#5bc5d4]">NEET PG  and more</span>
        </motion.h1>

        <div className="flex flex-col items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5bc5d4] px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-white hover:text-[#1a7a85] transition-all"
          >
            Go to dashboard
          </motion.button>
          <a href="#" className="flex items-center gap-2 underline text-sm opacity-90 hover:text-[#5bc5d4]">
            View Plans <Activity size={16} />
          </a>
        </div>

        {/* Decorative Wave/Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.43,125.72,118.81,185.58,112.26,244.22,105.82,285.66,74.5,321.39,56.44Z"></path>
            </svg>
        </div>
      </section>

      {/* 5. WHY codeON SECTION */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        The <span className="text-[#1a7a85]">codeON</span> Advantage
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Moving beyond rote memorization to a conceptual ecosystem designed by India's top rankers and most loved faculty.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* 1. Concept & Content Quality */}
      <motion.div 
        {...fadeInUp}
        className="p-8 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-xl transition-shadow"
      >
        <div className="w-12 h-12 bg-[#1a7a85] rounded-lg flex items-center justify-center text-white mb-6">
          <BookOpen size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4 text-[#1a7a85]">Evidence-Based Learning</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Every MCQ and video is structured for <strong>Concept-based learning</strong>. Our peer-reviewed, error-free content is backed by the latest standard textbooks, ensuring you master high-yield topics before memorizing facts.
        </p>
      </motion.div>

      {/* 2. Active Solving & Customization */}
      <motion.div 
        {...fadeInUp}
        className="p-8 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-xl transition-shadow"
      >
        <div className="w-12 h-12 bg-[#34b3c1] rounded-lg flex items-center justify-center text-white mb-6">
          <Settings size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4 text-[#1a7a85]">Active Solving vs Reading</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Don't just read; <strong>SOLVE</strong>. Master the art of educated guessing and negative marking management. Create your own <strong>Custom Modules</strong> by filtering difficulty, tags like #RecentUpdates, or your bookmarked errors.
        </p>
      </motion.div>

      {/* 3. Competitive Readiness */}
      <motion.div 
        {...fadeInUp}
        className="p-8 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-xl transition-shadow"
      >
        <div className="w-12 h-12 bg-[#5bc5d4] rounded-lg flex items-center justify-center text-white mb-6">
          <BarChart2 size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4 text-[#1a7a85]">Pan-India Simulation</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Be part of the <strong>Largest Test Series</strong> in India. Experience real-time exam simulations with in-depth analytics that provide an accurate All-India Rank, prepared in collaboration with the top 20% of rank holders.
        </p>
      </motion.div>
    </div>

    {/* Mixed Paragraph Highlight */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-16 bg-gradient-to-r from-[#1a7a85] to-[#34b3c1] p-1 rounded-2xl"
    >
      <div className="bg-white p-8 md:p-12 rounded-[14px]">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic text-center font-medium">
          "At codeON, we combine the expertise of India's most loved teachers with high-probability MCQs to make you exam-ready. By shifting from passive reading to active, evidence-based solving with custom performance analytics, we ensure you don't just study—you compete at the highest level."
        </p>
      </div>
    </motion.div>
  </div>
</section>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="text-[#34b3c1] mb-4"><PlayCircle size={48} /></div>
            <h2 className="text-4xl font-bold mb-6">Recorded <span className="text-[#34b3c1]">Video</span> Classes by India's top faculty</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Integrated conceptual content across all 19 subjects. Includes animations & real clinical scenarios for better understanding.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="relative">
             <div className="bg-white p-4 rounded-xl shadow-xl">
                <img src="https://via.placeholder.com/500x300" alt="Video" className="rounded-lg w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/20 p-4 rounded-full backdrop-blur-sm">
                        <PlayCircle size={64} className="text-white" />
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
           <section className="py-20 px-6 max-w-6xl mx-auto text-center">
              <motion.div {...fadeInUp}>
                  <BarChart2 size={48} className="mx-auto text-[#34b3c1] mb-4" />
                  <h2 className="text-4xl font-bold mb-6">The largest pan-India <span className="text-[#34b3c1]">Test Series</span></h2>
                  <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-lg">
                      Taken by over 1 lakh participants across India, the Test Series gives you a fair idea of where you stand in the actual competition.
                  </p>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
                      <div className="text-sm text-gray-400">Your rank</div>
                      <div className="text-5xl font-bold text-[#1a7a85] my-2">22<span className="text-xl">nd</span></div>
                      <div className="text-blue-500 font-bold">99.8th Percentile</div>
                  </div>
              </motion.div>
            </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 py-12 text-center text-white">
        <div className="mb-6 flex justify-center opacity-80">
          <CodonLogo />
        </div>
        <p className="text-gray-500 text-sm">© 2026 codON Academy. Empowering Future Specialists.</p>
        <div className="flex justify-center gap-6 mt-4 text-xs text-gray-400">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
import React from "react";
import { motion } from "framer-motion";

import {
  PlayCircle,Phone, Mail , BookOpen, Play, Apple, BarChart2, Settings, Activity, ChevronLeft,
  ChevronRight, GraduationCap, Loader2, Sparkles, Facebook, Instagram, Youtube, Users, Dna, Database, ClipboardCheck, Video
} from 'lucide-react'; 
import { Link } from "react-router-dom";
import logo from './assets/logo.png'; // Aapne logo path check kar lein



/* SAME LOGO COMPONENT */
const CodonLogo = ({ className = "h-8" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src={logo}
      alt="Logo"
      className="h-full w-auto object-contain"
    />
  </div>
);

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
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


      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1a7a85] to-[#2a9ba8] py-28 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* CONTACT CARD */}
      <section className="-mt-24 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-10"
        >
          {/* <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-[#5bc5d4] rounded-full flex items-center justify-center text-white">
              <Phone />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call (8am – 8pm, Everyday)</p>
              <p className="font-bold text-lg text-[#1a7a85]">+91 91111111111</p>
            </div>
          </div> */}
          <a
              href="https://wa.me/9191111111111"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-4 mb-8 group cursor-pointer"
>
  <div className="w-12 h-12 bg-[#5bc5d4] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition">
    <Phone />
  </div>

  <div>
    <p className="text-sm text-gray-500">Call (8am – 8pm, Everyday)</p>
    <p className="font-bold text-lg text-[#1a7a85] group-hover:underline">
      +91 91111111111
    </p>
  </div>
</a>


          {/* <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#5bc5d4] rounded-full flex items-center justify-center text-white">
              <Mail />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email us</p>
              <p className="font-bold text-lg text-[#1a7a85]">
                support@codonacademy.com
              </p>
            </div>
          </div> */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=support@codonmed.com"
  target="_blank"
  rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 bg-[#5bc5d4] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition">
              <Mail />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email us</p>
              <p className="font-bold text-lg text-[#1a7a85] group-hover:underline">
                support@codonacademy.com
              </p>
            </div>
          </a>

        </motion.div>
      </section>

      {/* ADDRESS */}
      <section className="text-center pb-16">
        <p className="font-semibold text-[#1a7a85]">CodON Academy Pvt. Ltd.</p>
        <p className="text-gray-600 text-sm mt-2">
          393, Second Cross, Dollars Colony <br />
          JP Nagar 4th Phase, Bangalore – 560078
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-12 text-center text-white">
        <div className="flex justify-center mb-4 opacity-80">
          <CodonLogo />
        </div>
        <p className="text-gray-500 text-sm">© 2026 codON Academy</p>
        <div className="flex justify-center gap-6 mt-4 text-xs text-gray-400">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </footer>

    </div>
  );
};

export default ContactPage;

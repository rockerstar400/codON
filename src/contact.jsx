import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
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
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-[#5bc5d4] rounded-full flex items-center justify-center text-white">
              <Phone />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call (8am – 8pm, Everyday)</p>
              <p className="font-bold text-lg text-[#1a7a85]">+91 91111111111</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#5bc5d4] rounded-full flex items-center justify-center text-white">
              <Mail />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email us</p>
              <p className="font-bold text-lg text-[#1a7a85]">
                support@codonacademy.com
              </p>
            </div>
          </div>
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

'use client';
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-[#080818] to-[#0a0030] text-white py-20 px-6 min-w-screen">
      {/* Main container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border-b border-gray-700/50 pb-12">
        
        {/* Left side: Contact prompt */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center w-full md:w-1/2">
          <h3 className="text-[40px] font-semibold mb-4 text-white max-w-72">Do you have any questions?</h3>
          <p className="text-white mb-6">Feel free to send us your questions.</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full max-w-md gap-3"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#1A00D7] to-[#D700F3] transition-all text-white font-semibold px-5 py-3 rounded-sm whitespace-nowrap"
            >
              TALK WITH US
            </button>
          </form>
        </div>

        {/* Right side: Logo */}
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right w-full md:w-1/2">
          <div className="flex items-center justify-center md:justify-end gap-3 mb-2">
            <img
              src="/logo.png"
              alt="Mindsheep Labs Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-white font-extrabold text-2xl tracking-wide">
              MINDSHEEPLABS
            </span>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-6xl mx-auto text-gray-500 text-sm pt-6 text-center md:text-right">
        © 2025 — Copyright
      </div>
    </footer>
  );
};

export default Footer;

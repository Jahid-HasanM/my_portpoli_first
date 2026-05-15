import React from 'react';

const Navbar = () => {
  return (
    // Replaced arbitrary custom colors with unified Tailwind background tokens
    <div className="bg-gray-950 text-white font-sans w-full">
      <nav className="flex justify-between items-center px-6 py-5 md:px-12 fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-900">
        
        {/* Brand Logo with matching gradient theme */}
        <div className="text-2xl font-extrabold tracking-tighter cursor-pointer group">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            JAHID
          </span>
          <span className="text-emerald-400">.</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          <li className="hover:text-white cursor-pointer transition-colors duration-200">Home</li>
          <li className="hover:text-white cursor-pointer transition-colors duration-200">Services</li>
          <li className="hover:text-white cursor-pointer transition-colors duration-200">Portfolio</li>
          <li className="hover:text-white cursor-pointer transition-colors duration-200">Contact</li>
        </ul>

        {/* Action Button */}
        <button className="border border-gray-800 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-200 hover:bg-white hover:text-gray-950 hover:border-transparent transition-all duration-300 active:scale-95 cursor-pointer shadow-md">
          Let's Talk
        </button>

      </nav>
    </div>
  );
};

export default Navbar;
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-darkBg text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center p-8 fixed w-full z-50 bg-darkBg/80 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-tighter">ANDREW.</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">Portfolio</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </ul>
        <button className="border border-gray-700 px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
          Let's Talk
        </button>
      </nav>
      </div>
  )
}

export default Navbar
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#0e0e0e] text-white h-screen flex items-center px-10">
      <div className="max-w-4xl">
        <h4 className="text-gray-400 tracking-widest mb-4">HELLO, I'M JAHID HASAN</h4>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
          MERN STRACK <span className="text-gray-500 underline">Designer</span> & Developer.
        </h1>
        <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
          View My CV
        </button>
      </div>
    </section>
  )
}

export default Hero
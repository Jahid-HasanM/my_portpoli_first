import React from 'react';


const Hero = () => {
  // লোগো ডেটা সেট
  const logos = [
    { name: 'MongoDB', url: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Express', url: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
    { name: 'React', url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Node.js', url: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'Tailwind', url: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { name: 'JavaScript', url: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
    { name: 'TypeScript', url: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
    { name: 'GitHub', url: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  ];

  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col justify-center px-4 sm:px-10 py-16 overflow-hidden relative">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 mb-20">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
          <h4 className="text-emerald-400 tracking-[0.2em] text-sm sm:text-lg font-extrabold uppercase animate-fade-in-down">
            HELLO, I'M JAHID HASAN
          </h4>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight animate-slide-up [animation-delay:200ms]">
            MERN STACK{' '}
            <span className="relative inline-block bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
              Designer
            </span>{' '}
            & Developer.
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up [animation-delay:400ms]">
            I craft high-performance backend systems and translate complex business requirements into sleek, pixel-perfect user interfaces.
          </p>

          <div className="pt-4 animate-slide-up [animation-delay:600ms]">
            <button className="relative group overflow-hidden border-2 border-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white transition-all duration-300 hover:text-gray-900 hover:border-transparent active:scale-95 cursor-pointer shadow-lg">
              <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10 flex items-center gap-2">
                View My CV
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-fade-in [animation-delay:800ms]">
          <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-3xl blur-md opacity-25 group-hover:opacity-60 transition duration-700 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 bg-gray-950 aspect-square flex items-center justify-center shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dqrofv2dd/image/upload/v1778846300/Adobe_Express_-_file_1_slecjk.jpg" 
                alt="Jahid Hasan" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- INFINITE TECH SCROLLER (Right to Left) --- */}
      <div className="w-full mt-10 relative z-10 py-10 border-t border-gray-800/50">
        <div className="flex overflow-hidden group">
            {/* Fade effect edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-20"></div>

            <div className="flex animate-infinite-scroll whitespace-nowrap items-center py-4">
                {/* স্লাইডারটি লুপ করার জন্য লোগোগুলো ২ বার রেন্ডার করা হয়েছে */}
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex items-center gap-4 mx-12 group/logo">
                        <img 
                            src={logo.url} 
                            alt={logo.name} 
                            className="h-10 w-auto grayscale opacity-40 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-500"
                        />
                        <span className="text-gray-600 text-xl font-bold tracking-tighter group-hover/logo:text-gray-300 transition-colors">
                            {logo.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
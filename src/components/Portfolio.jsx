import React from 'react';

const Portfolio = () => {
  // Array of your real projects - easy to fetch from MongoDB later
  const projects = [
    { id: 1, name: 'E-Commerce Platform', category: 'MERN Stack', year: '2026', img: 'https://res.cloudinary.com/dqrofv2dd/image/upload/v1778846019/cld-sample-5.jpg' },
    { id: 2, name: 'SaaS Dashboard', category: 'React & Tailwind', year: '2026', img: 'https://res.cloudinary.com/dqrofv2dd/image/upload/v1778846019/cld-sample-5.jpg' },
    { id: 3, name: 'Realtime Chat App', category: 'Socket.io & Node', year: '2025', img: 'https://res.cloudinary.com/dqrofv2dd/image/upload/v1778846019/cld-sample-5.jpg' },
    { id: 4, name: 'AI Image Generator', category: 'MERN Stack', year: '2025', img: 'https://res.cloudinary.com/dqrofv2dd/image/upload/v1778846019/cld-sample-5.jpg' },
    { id: 5, name: 'Crypto Wallet Tracker', category: 'Web3 / React', year: '2026', img: 'https://res.cloudinary.com/dqrofv2dd/image/upload/v1778846019/cld-sample-5.jpg' },
    { id: 6, name: 'Task Management System', category: 'Express & Mongo', year: '2025', img: 'https://res.cloudinary.com/dqrofv2dd/image/upload/v1778846019/cld-sample-5.jpg' },
  ];

  return (
    <section className="py-20 px-4 sm:px-10 md:px-16 bg-gray-900 text-white border-b border-gray-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            My Creative Works
          </span>
          <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-tight">
            Featured Portfolios
          </h2>
        </div>

        {/* 3-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer overflow-hidden bg-gray-950 aspect-[4/3] relative rounded-3xl border border-gray-800 hover:border-gray-700 shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Background Portfolio Image */}
              <img 
                src={project.img} 
                alt={project.name} 
                className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dark Overlay Tint Layer */}
              <div className="absolute inset-0 bg-gray-950/40 group-hover:bg-gray-950/70 transition-all duration-500 z-10" />

              {/* Centered Content Container with Sliding Up Glassmorphism Panel */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm bg-gray-950/60">
                
                {/* Paragraph Tag (Category/Year) */}
                <p className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase mb-2">
                  {project.category} &bull; {project.year}
                </p>
                
                {/* H3 Tag (Project Title) */}
                <h3 className="text-2xl font-extrabold text-white tracking-tight max-w-xs leading-snug">
                  {project.name}
                </h3>

                {/* Decorative View Link Button Effect */}
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 group/btn border border-blue-500/30 px-4 py-1.5 rounded-full bg-blue-500/10">
                  Case Study 
                  <svg className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </span>

              </div>
             
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
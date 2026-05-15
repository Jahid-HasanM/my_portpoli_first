import React from 'react';

const About = () => {
  // Centralized skill data for easy updates
  const skills = [
    { name: 'MongoDB', level: 'Database Architecture' },
    { name: 'Express.js', level: 'RESTful APIs & Routing' },
    { name: 'React.js', level: 'State Management & UI' },
    { name: 'Node.js', level: 'Scalable Backend Logic' },
    { name: 'Tailwind CSS', level: 'Responsive Fluid Design' },
    { name: 'TypeScript', level: 'Type-Safe Development' },
  ];

  // Quick portfolio metrics to show business impact
  const metrics = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '99.9%', label: 'Uptime Delivery' },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Content (Spans 7 columns on large screens) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              About Me
            </span>
            <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Engineering Scalable Full-Stack Web Applications
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Hello! I am a passionate MERN Stack Developer dedicated to building high-performance, responsive web applications. I bridge the gap between elegant user interfaces and robust backend logic, ensuring seamless data flow from the database straight to the client side.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            My development philosophy centers around writing clean, modular code, optimization, and creating intuitive user experiences. Whether it's structural database modeling or state-driven UI animations, I love solving complex technical challenges.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-800/50 border border-gray-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">{metric.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Stack & Skills Showcase (Spans 5 columns on large screens) */}
        <div className="lg:col-span-5 lg:ml-4">
          <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700/60 shadow-xl space-y-6 relative overflow-hidden group">
            {/* Background Decorative Glow */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-gray-700 pb-4">
              My Core Ecosystem
            </h3>

            {/* Tech Stack List */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-3 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-between group/item"
                >
                  <div className="flex items-center gap-3">
                    {/* Tiny Check icon */}
                    <div className="h-2 w-2 rounded-full bg-emerald-400 group-hover/item:scale-125 transition-transform"></div>
                    <span className="font-semibold text-gray-200 group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Option inside About */}
            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity shadow-lg text-center"
              >
                Let's Build Something Together
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
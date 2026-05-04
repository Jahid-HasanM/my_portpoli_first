import React from 'react'

const Portfolio = () => {
  return (
    <div>
         <section className="py-20 px-8 md:px-20">
        <h2 className="text-4xl font-bold mb-16 uppercase italic">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer overflow-hidden bg-gray-900 aspect-[4/3] relative">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-sm font-mono text-accent">Branding / 2024</p>
                <h3 className="text-2xl font-bold">Project Name {item}</h3>
              </div>
              {/* Image Placeholder */}
              <div className="w-full h-full bg-neutral-800 transition-transform duration-700 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Portfolio
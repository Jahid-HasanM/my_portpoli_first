import React from 'react'

const Services = () => {
  const services = [
    { id: '01', title: 'Branding', desc: 'Crafting distinct brand identities.' },
    { id: '02', title: 'UX/UI Design', desc: 'Creating intuitive digital experiences.' },
    { id: '03', title: 'Web Development', desc: 'Building responsive, fast websites.' },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-10 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((s) => (
          <div key={s.id} className="group border-b border-gray-700 pb-10 hover:border-white transition">
            <span className="text-sm text-gray-500 group-hover:text-white">{s.id}</span>
            <h3 className="text-3xl font-semibold mt-4 mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services
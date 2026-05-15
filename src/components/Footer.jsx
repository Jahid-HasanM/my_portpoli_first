import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Reviews', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-gray-900">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 text-white font-extrabold text-2xl tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              JugLu
            </span>
            <span>Forge</span>
          </div>
          <p className="text-sm max-w-sm leading-relaxed text-gray-400">
            Building robust full-stack solutions with the MERN ecosystem. Empowering developers to scale applications seamlessly.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
          <ul className="space-y-3 text-sm">
            {links.product.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-white transition-colors duration-200">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            {links.company.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-white transition-colors duration-200">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Stay Updated</h3>
          <p className="text-sm text-gray-400">Subscribe to get the latest updates and feature releases.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md lg:max-w-none" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity duration-200 shrink-0 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {currentYear} JugluSForge. All rights reserved.</p>
        <div className="flex gap-6">
          {links.legal.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-gray-400 transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
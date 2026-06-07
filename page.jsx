import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function ApexCranesWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/apex-logo.jpg" alt="Apex Crane and Hoist" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Services', 'About', 'Projects', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-amber-400 transition-colors font-semibold text-sm uppercase tracking-wide">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-black/95 backdrop-blur-md">
              {['Services', 'About', 'Projects', 'Contact'].map(item => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={handleNavClick}
                  className="block text-gray-300 hover:text-amber-400 py-3 px-2 font-semibold text-base transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/50 rounded-full mb-6 md:mb-8">
              <span className="text-amber-400 text-xs md:text-sm font-bold tracking-widest">INDUSTRIAL EXCELLENCE</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Crane & Hoist
              <span className="block text-amber-400">Solutions</span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Expert repair, assembly, and maintenance for overhead cranes. Keeping your operations running with precision engineering and uncompromising quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-6 sm:px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-base active:scale-95">
                Get a Quote <ChevronRight size={20} />
              </a>
              <a href="#services" className="px-6 sm:px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-base sm:text-base active:bg-white/30">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">Complete crane solutions tailored to your industrial needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Crane Repair',
                description: 'Comprehensive repairs for all crane types. From emergency fixes to preventive maintenance.',
                icon: '🔧'
              },
              {
                title: 'Crane Assembly',
                description: 'Expert installation and assembly of new overhead cranes with precision engineering.',
                icon: '⚙️'
              },
              {
                title: 'Maintenance Programs',
                description: 'Scheduled maintenance plans to keep your equipment running at peak efficiency.',
                icon: '📋'
              },
              {
                title: 'Inspections',
                description: 'Thorough safety and compliance inspections to meet all regulatory requirements.',
                icon: '🔍'
              },
              {
                title: 'Parts & Equipment',
                description: 'Quality replacement parts and components for all major crane manufacturers.',
                icon: '📦'
              },
              {
                title: 'Emergency Support',
                description: '24/7 emergency response for critical crane failures and urgent repairs.',
                icon: '🚨'
              }
            ].map((service, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-amber-600/20 hover:border-amber-600/60 transition-all group hover:shadow-xl hover:shadow-amber-600/10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">Why Choose Apex Cranes?</h2>
              <ul className="space-y-4 md:space-y-6">
                {[
                  'Decades of experience in industrial crane solutions',
                  'Certified technicians with factory training',
                  'Fast, reliable service with minimal downtime',
                  'Transparent pricing with no hidden costs',
                  'Full warranty on all work performed',
                  'Compliance with all safety regulations'
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-300 text-base md:text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-xl border-2 border-amber-600/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl mb-4">🏭</div>
                  <p className="text-gray-300 text-base md:text-lg font-semibold px-4">Industrial Excellence Since Day One</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-base md:text-lg">Ready to discuss your crane needs? Contact us today for a free consultation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { icon: <Phone className="w-8 h-8" />, label: 'Parts Manager', value: '(437) 882-8309' },
              { icon: <Mail className="w-8 h-8" />, label: 'Email', value: 'service@apexcraneandhoist.com' },
              { icon: <Phone className="w-8 h-8" />, label: 'Service Manager', value: '(416) 988-3444' }
            ].map((contact, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-slate-700 border border-amber-600/20">
                <div className="inline-block p-3 bg-amber-600/20 rounded-lg mb-4 text-amber-400">
                  {contact.icon}
                </div>
                <p className="text-gray-400 text-xs md:text-sm mb-2">{contact.label}</p>
                <p className="text-white font-bold text-base md:text-lg break-all">{contact.value}</p>
              </div>
            ))}
          </div>

          <form className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 md:p-8 rounded-xl border border-amber-600/20 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 md:py-4 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-600 text-base md:text-sm" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 md:py-4 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-600 text-base md:text-sm" />
            </div>
            <input type="text" placeholder="Company Name" className="w-full px-4 py-3 md:py-4 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-600 text-base md:text-sm" />
            <textarea placeholder="Tell us about your crane needs..." rows="5" className="w-full px-4 py-3 md:py-4 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-600 resize-none text-base md:text-sm"></textarea>
            <button type="submit" className="w-full px-6 py-4 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 text-base md:text-base active:scale-95">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-amber-600/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Apex Crane and Hoist. All rights reserved. | Professional Crane & Hoist Solutions</p>
        </div>
      </footer>
    </div>
  );
}

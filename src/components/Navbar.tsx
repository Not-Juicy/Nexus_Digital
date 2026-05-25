import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Send, Facebook, Instagram, Linkedin, PhoneCall, ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    services: [
      { name: 'Digital Consulting', href: '/services' },
      { name: 'SaaS Strategy', href: '/services' },
      { name: 'AI & Automation', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/services' },
      { name: 'Clients', href: '/#testimonials' },
      { name: 'Blog', href: '/blog' },
    ]
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
  <img 
    src="/img/1. Image.png" 
    alt="NEXUS DIGITAL" 
    className="h-16 w-auto"
    referrerPolicy="no-referrer"
  />
</Link>

          {/* Main Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-xs font-bold uppercase tracking-widest transition-colors ${pathname === '/' ? 'text-red-500' : 'text-white hover:text-red-500'}`}>Home</Link>
            
            <div className="relative group" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to="/services" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors">
                Services <ChevronDown className="w-3" />
              </Link>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-56 bg-[#111] border border-white/10 p-4 shadow-2xl"
                  >
                    <div className="flex flex-col gap-3">
                      {menuItems.services.map(item => (
                        <Link key={item.name} to={item.href} className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-red-500 transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group" onMouseEnter={() => setActiveDropdown('company')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors">
                Company <ChevronDown className="w-3" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-56 bg-[#111] border border-white/10 p-4 shadow-2xl"
                  >
                    <div className="flex flex-col gap-3">
                      {menuItems.company.map(item => (
                        <Link key={item.name} to={item.href} className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-red-500 transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a 
              href="https://t.me/DanLP18" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 bg-red-600 py-4 px-6 hover:bg-white hover:text-black group transition-all cursor-pointer rounded-full"
            >
              <div className="bg-white/20 p-2 rounded-lg group-hover:bg-black/10">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-white group-hover:text-black">
                <span className="text-[8px] font-black tracking-widest opacity-60">STRATEGY CALL</span>
                <span className="text-sm font-black whitespace-nowrap uppercase tracking-tighter">CONSULTATION</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-sm h-screen bg-[#0a0a0a] z-[100] p-12 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
<img 
  src="/img/1. Image.png" 
  alt="NEXUS DIGITAL" 
  className="h-12 w-auto"
  referrerPolicy="no-referrer"
/>
                <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white hover:text-red-600 transition-colors uppercase tracking-tighter">Home</Link>
                <div className="space-y-4">
                  <Link to="/services" onClick={() => setIsOpen(false)} className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] hover:text-white transition-colors">Services</Link>
                  {menuItems.services.map(item => (
                    <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="block text-xl font-bold text-white/70 hover:text-white uppercase tracking-tight ml-4 underline underline-offset-4 decoration-red-600/30">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white hover:text-red-600 transition-colors uppercase tracking-tighter">About Us</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white hover:text-red-600 transition-colors uppercase tracking-tighter">Contact</Link>
              </div>

              <div className="mt-20 pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">Connect with us</p>
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/Nexusdigital.asia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Facebook className="text-white/50 hover:text-red-500 transition-colors cursor-pointer" />
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Facebook</span>
                  </a>
                  <a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Send className="text-white/50 hover:text-red-500 transition-colors cursor-pointer" />
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Telegram</span>
                  </a>
                  <a href="https://www.linkedin.com/company/nexus-digital-ad-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Linkedin className="text-white/50 hover:text-red-500 transition-colors cursor-pointer" />
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

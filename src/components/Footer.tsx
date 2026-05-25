import { Facebook, Instagram, Linkedin, Send, ArrowUpRight, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
<img 
  src="/img/Nexus-Digital-1.png" 
  alt="NEXUS DIGITAL" 
  className="h-16 w-auto mb-12"
  referrerPolicy="no-referrer"
/>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] uppercase italic">
              LET'S ARCHITECT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900 leading-none">THE FUTURE.</span>
            </h3>
            <p className="text-white/40 max-w-md text-lg mb-12 font-medium">
              Digital consulting for brands that want to grow fast and smart. 
              Based in Cambodia, serving clients globally.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@nexus-digital.asia" className="flex items-center gap-4 text-xl md:text-2xl font-bold hover:text-red-500 transition-colors group">
                <span className="pb-1 border-b-2 border-red-600/30 group-hover:border-red-500 transition-all">info@nexus-digital.asia</span>
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-red-500" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-10">Services</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest leading-none">
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">Digital Consulting</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">SaaS Strategy</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">AI & Automation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-10">Company</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest leading-none">
              <li><Link to="/about" className="text-white/50 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/" className="text-white/50 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/#testimonials" className="text-white/50 hover:text-white transition-colors">Clients</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-10">Connect</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest leading-none">
              <li><a href="mailto:info@nexus-digital.asia" className="text-white/50 hover:text-white transition-colors">Email Us</a></li>
              <li><a href="https://www.linkedin.com/company/nexus-digital-ad-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-10">Headquarters</h4>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 text-sm font-bold uppercase tracking-widest leading-relaxed text-white/50">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  OCIC, <br />
                  Phnom Penh, Cambodia.
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/50">
                  <Phone className="w-5 h-5 text-red-600 shrink-0" />
                  +855 81 968 581
                </div>
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[8px] font-black text-red-600 uppercase tracking-widest mb-1">LOCAL TIME</span>
                  <span className="text-xs font-black text-white/40 uppercase tracking-widest">
                    {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Phnom_Penh', hour: '2-digit', minute: '2-digit', hour12: true })} PNH
                  </span>
                </div>
              </div>
              <div className="pt-8 border-t border-white/5">
                <div className="flex gap-6">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/Nexusdigital.asia" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/nexus-digital-ad-solutions/?viewAsMember=true" },
                    { Icon: Send, href: "https://t.me/DanLP18" },
                    { Icon: Instagram, href: "#" }
                  ].map((social, i) => (
                    <a key={social.href + i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-red-600 transition-all rounded-lg">
                      <social.Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2026 NEXUS DIGITAL ASIA. HIGH PERFORMANCE ENGINEERING.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] font-black text-white/40 hover:text-red-500 transition-all uppercase tracking-widest group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all rounded-full">
              <ArrowUp className="w-3 h-3 text-white" />
            </div>
          </button>

          <div className="flex gap-8 text-[10px] font-black text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="absolute bottom-[-5%] left-[-2%] text-[22vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter italic leading-none whitespace-nowrap">
        NEXUS DIGITAL
      </div>
    </footer>
  );
}


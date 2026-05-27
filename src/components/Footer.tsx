import { Facebook, Instagram, Linkedin, Send, ArrowUpRight, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState(new Date());
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@nexus-digital.asia?subject=Newsletter Signup&body=${encodeURIComponent(email)}`;
    setEmail('');
  };

  return (
    <footer className="bg-black text-white pt-24 md:pt-32 pb-10 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16 md:mb-24">
          {/* Brand */}
          <div className="md:col-span-5 text-center md:text-left">
            <img 
              src="/img/Nexus-Digital-1.png" 
              alt="NEXUS DIGITAL" 
              className="h-12 md:h-16 w-auto mb-8 mx-auto md:mx-0"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[0.9] uppercase italic">
              LET'S ARCHITECT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900 leading-none">THE FUTURE.</span>
            </h3>
            <p className="text-white/40 max-w-md text-base md:text-lg mb-8 font-medium mx-auto md:mx-0">
              Digital consulting for brands that want to grow fast and smart. 
              Based in Cambodia, serving clients globally.
            </p>
            <a href="mailto:info@nexus-digital.asia" className="inline-flex items-center gap-3 text-lg md:text-xl font-bold hover:text-red-500 transition-colors group">
              <span className="pb-1 border-b-2 border-red-600/30 group-hover:border-red-500 transition-all">info@nexus-digital.asia</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-red-500 shrink-0" />
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-8">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest leading-none">
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">Digital Consulting</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">SaaS Strategy</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">AI & Automation</Link></li>
              <li><Link to="/ecommerce" className="text-white/50 hover:text-white transition-colors">Ecommerce Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-8">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest leading-none">
              <li><Link to="/about" className="text-white/50 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about#process" className="text-white/50 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/about#case-studies" className="text-white/50 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/#testimonials" className="text-white/50 hover:text-white transition-colors">Clients</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-8">Connect</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest leading-none">
              <li><a href="mailto:info@nexus-digital.asia" className="text-white/50 hover:text-white transition-colors">Email Us</a></li>
              <li><a href="https://www.linkedin.com/company/nexus-digital-ad-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">Telegram</a></li>
              <li><a href="https://www.facebook.com/Nexusdigital.asia" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Second Row: Newsletter + Headquarters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16 md:mb-20">
          {/* Newsletter */}
          <div className="md:col-span-7">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-6">Stay Updated</h4>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-white/20 mt-3 max-w-lg">
              No spam — just occasional insights on digital strategy and emerging tech.
            </p>
          </div>

          {/* Headquarters */}
          <div className="md:col-span-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-6">Headquarters</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 text-sm font-bold uppercase tracking-widest leading-relaxed text-white/50">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>OCIC, Phnom Penh, Cambodia.</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/50">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span>+855 81 968 581</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/50">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a href="mailto:info@nexus-digital.asia" className="hover:text-white transition-colors">info@nexus-digital.asia</a>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/30">
                <span>Local Time:</span>
                <span className="text-white/50">
                  {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Phnom_Penh', hour: '2-digit', minute: '2-digit', hour12: true })} PNH
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/Nexusdigital.asia" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/nexus-digital-ad-solutions/?viewAsMember=true" },
                  { Icon: Send, href: "https://t.me/DanLP18" },
                  { Icon: Instagram, href: "#" }
                ].map((social, i) => (
                  <a key={social.href + i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 text-center md:text-left order-3 md:order-1">
            © 2026 NEXUS DIGITAL ASIA
          </p>

          <div className="flex gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-white/20 order-2">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[9px] font-black text-white/30 hover:text-red-500 transition-all uppercase tracking-widest order-1 md:order-3"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all rounded-full hover:bg-red-600 hover:border-red-600">
              <ArrowUp className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none overflow-hidden">
        <div className="text-[18vw] md:text-[16vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.015] via-white/[0.025] to-transparent tracking-tighter italic leading-none whitespace-nowrap py-0">
          NEXUS DIGITAL
        </div>
      </div>
    </footer>
  );
}

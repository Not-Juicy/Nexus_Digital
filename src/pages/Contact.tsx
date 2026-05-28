import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useRef, FormEvent } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;
    const mailto = `mailto:info@nexus-digital.asia?subject=${encodeURIComponent(subject || 'New inquiry from ' + name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="pt-32 bg-black">
      {/* Header */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">Connect</span>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-8 leading-none">
            START THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">CONVERSATION.</span>
          </h1>
          <p className="max-w-2xl text-white/50 text-xl font-light">
            Have a project in mind? We're ready to help you navigate the digital landscape and achieve measurable growth.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8 underline underline-offset-8">Information</h2>
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Location</h3>
                    <p className="text-white/40 leading-relaxed">OCIC, <br />Phnom Penh, Cambodia.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
                    <p className="text-white/40 leading-relaxed">+855 (81) 968 581</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                    <p className="text-white/40 leading-relaxed">info@nexus-digital.asia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8 underline underline-offset-8">Social Connect</h2>
              <div className="flex gap-6">
                <a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-widest">
                  <MessageCircle className="w-4 h-4" /> Telegram
                </a>
                <a href="https://www.facebook.com/Nexusdigital.asia" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-widest">Facebook</a>
                <a href="https://www.linkedin.com/company/nexus-digital-ad-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-widest">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#080808] p-12 border border-white/5 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-12 tracking-tight italic">Write us a Message</h2>
            <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-white/50">Full Name</label>
                  <input id="name" name="name" type="text" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 focus:bg-[#111] transition-all duration-200" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-white/50">Email Address</label>
                  <input id="email" name="email" type="email" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 focus:bg-[#111] transition-all duration-200" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-white/50">Subject</label>
                <input id="subject" name="subject" type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 focus:bg-[#111] transition-all duration-200" placeholder="I'm interested in..." />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-white/50">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 focus:bg-[#111] transition-all duration-200 resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-red-600 text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 rounded-lg">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-[#111] grayscale relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-6xl md:text-[12rem] tracking-tighter uppercase select-none italic">
          NEXUS DIGITAL
        </div>
      </section>
    </div>
  );
}
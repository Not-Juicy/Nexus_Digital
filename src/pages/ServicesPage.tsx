import { motion } from 'motion/react';
import { ShieldCheck, Zap, ArrowRight, Lightbulb, TrendingUp, Phone, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

import { services } from '../data/services';
import SEO from '../components/SEO';

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <div className="pt-32 bg-black">
      <SEO 
        title="Our Services" 
        description="Explore our high-performance digital marketing, SaaS strategy, and AI automation services designed for rapid business growth." 
      />
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">Our Services</span>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-12">
            STRATEGIES BUILT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">FOR GROWTH.</span>
          </h1>
          <p className="max-w-3xl text-white/60 text-xl md:text-2xl font-medium leading-relaxed">
            We combine strategic consulting, precision targeting, creative optimization, data-driven and automation to help ambitious brands scale smarter.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] p-12 hover:bg-[#161616] transition-all border border-white/5 relative group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-red-600 transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/20 font-mono text-xs uppercase tracking-widest">{service.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-red-500 transition-colors italic">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-12">
                {service.desc}
              </p>
              <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer border-b border-white/10 pb-2">
                Learn More <ArrowRight className="w-4 h-4 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 italic">
                WHY CHOOSE <br />NEXUS DIGITAL?
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-xl">
                We combine strategic consulting, precision targeting, creative optimization, data-driven and automation to help ambitious brands scale smarter.
              </p>
              <div className="space-y-6">
                {[
                  'Strategic alignment with business goals',
                  'High-performance technical execution',
                  'Localized SEA market expertise',
                  'Transparent reporting & constant support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold">✓</div>
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/case-studies/enterprise-scale" className="relative aspect-video bg-[#111] overflow-hidden border border-white/10 group block">
              <img 
                src="/img/why-choose.webp"
                alt="Digital Strategy" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <span className="text-red-500 font-mono text-xs uppercase tracking-widest underline block mb-2">Case Study</span>
                <span className="text-2xl font-bold text-white tracking-tight">Enterprise Scale</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Process */}
      <section className="py-32 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">Methodology</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic">
              A PROVEN <br />PROCESS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { step: '01', title: 'Discovery', desc: 'We audit your current digital presence, understand your goals, and identify the highest-impact opportunities for growth.' },
              { step: '02', title: 'Strategy', desc: 'A detailed roadmap with timelines, KPIs, and clear milestones. Every recommendation backed by data and industry insights.' },
              { step: '03', title: 'Execution', desc: 'Our team implements across all channels — from ad campaigns to product launches — with weekly reporting and optimization.' },
              { step: '04', title: 'Scale', desc: 'Once we find what works, we double down. Continuous testing, scaling, and refining to maximize your return on investment.' }
            ].map((p, i) => (
              <div key={i} className="bg-[#111] p-12 border border-white/5 group hover:bg-[#161616] transition-colors">
                <span className="block text-red-600 font-mono text-xl mb-8">{p.step}</span>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight group-hover:text-red-500 transition-colors">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Contact Callout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-2 border-black p-12 md:p-20 relative">
            <div className="absolute top-4 left-4 w-4 h-4 bg-red-600" />
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-red-600" />
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic leading-none mb-4">
                READY TO <br />GROW?
              </h2>
              <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Customized solutions for your business structure.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-5 bg-black text-white text-center font-black uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-3">
                <Send size={18} /> Telegram
              </a>
              <a href="tel:+85581968581" className="flex-1 px-8 py-5 border-2 border-black text-black text-center font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-3">
                <Phone size={18} /> +855 81 968 581
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { ShoppingCart, Layout, Cpu, LineChart, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Digital Consulting',
    desc: 'Scaling businesses through strategic, data-driven advertising campaigns that generate qualified leads, increase conversions, and maximize ROI across Facebook, Instagram, TikTok, LinkedIn, and beyond.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Layout,
    title: 'SaaS Strategy',
    desc: 'Product strategy, roadmap planning, and go-to-market execution for SaaS businesses. From PRDs to launching SaaS product beyond and building modern web applications for your online business.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Integrate AI tools and workflows into your business operations. Automate repetitive tasks and unlock new capabilities with intelligent systems.',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
          <div className="flex-1">
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
              SERVICES BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">FOR GROWTH.</span>
            </h2>
          </div>
<p className="max-w-sm text-white/40 text-sm leading-relaxed uppercase tracking-wide flex-shrink-0">
  Every engagement is powered by strategic consulting, precision targeting, creative optimization, data-driven strategies and AI automation — engineered to scale.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-[#0a0a0a]/60 backdrop-blur-xl p-12 transition-all duration-500 border border-white/5 hover:border-red-500/30 hover:bg-[#0c0c0c]/80 hover:scale-[1.03] rounded-3xl hover:shadow-[0_20px_50px_-20px_rgba(220,38,38,0.15)] overflow-hidden"
            >
              {/* Tech Corner Brackets */}
              <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t border-l border-white/10 group-hover:border-red-500/40 transition-colors duration-500" />
              <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-red-500/40 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b border-l border-white/10 group-hover:border-red-500/40 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b border-r border-white/10 group-hover:border-red-500/40 transition-colors duration-500" />

              <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${s.color} bg-opacity-10 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-red-500 transition-colors italic">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 group-hover:text-red-500 group-hover:border-red-500/30 transition-colors">
                  {i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

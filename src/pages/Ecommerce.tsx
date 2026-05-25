import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShoppingCart, Layout, Users, Zap, Globe, BarChart3, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Ecommerce() {
  const services = [
    { title: 'User interface Designs', icon: Layout },
    { title: 'User Experience Flow', icon: Users },
    { title: 'Seamless Integrations', icon: Zap },
    { title: 'Sales and marketing funnel mapping', icon: BarChart3 },
    { title: 'Personalized shopping experiences', icon: ShoppingCart },
    { title: 'Fully localized experience', icon: Globe },
  ];

  return (
    <div className="pt-32 bg-black min-h-screen">
      {/* Hero Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-3ad0334863f3?auto=format&fit=crop&q=80&w=2000" 
            alt="Ecommerce Tech" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 uppercase italic leading-none">
              Ecommerce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Solutions</span>
            </h1>
            <div className="flex justify-center items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] mt-8">
              <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-white/60">Services</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-red-500">Ecommerce</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#111] border border-white/5 p-10">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8 pb-4 border-b border-red-600/30">
                Overview
              </h2>
              <nav className="flex flex-col gap-6">
                <Link to="/about" className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white group transition-all">
                  About <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-red-500" />
                </Link>
                <Link to="/services" className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white group transition-all">
                  Services <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-red-500" />
                </Link>
              </nav>
            </div>

            <div className="bg-red-600 p-10 text-white">
              <h3 className="text-2xl font-black tracking-tighter mb-6 uppercase italic">Need Help?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Speak with our experts to find the right solution for your business growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-t border-white/20 pt-8">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold opacity-60 uppercase tracking-widest">Call Expert</span>
                    <span className="text-lg font-black">+855 81 968 581</span>
                  </div>
                </div>
                <a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-t border-white/20 pt-8 group">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <Send className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold opacity-60 uppercase tracking-widest">Telegram</span>
                    <span className="text-lg font-black group-hover:underline">@DanLP18</span>
                  </div>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter italic uppercase">
                Ecommerce Solutions
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                We help you align your digital goals with practical execution. Whether you’re unsure where to begin or need to optimize an existing system, our team provides full-spectrum solutions that drive results.
              </p>

              <div className="relative aspect-video mb-16 overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ecommerce Operations" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                    <div className="w-1 h-8 bg-red-600" />
                    How we help you
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Our ecommerce strategies focus on reducing friction in the customer journey while maximizing lifetime value through automation and personalized experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                    <div className="w-1 h-8 bg-red-600" />
                    Our Focus
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Transform how your business works, sells, and connects. We build for scale in the competitive Southeast Asian digital landscape.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight italic">Services Covered</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 bg-[#111] p-6 border border-white/5 group hover:border-red-500/30 transition-colors">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">{s.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <CheckCircle2 className="w-16 h-16 text-red-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-6">
            Drive real business results, fast.
          </h2>
          <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-sm">
            Localized experience for global dominance.
          </p>
        </div>
      </section>
    </div>
  );
}

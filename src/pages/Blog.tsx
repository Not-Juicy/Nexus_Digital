import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Clock, Phone, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="pt-32 bg-[#050505]">
      {/* Header */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">Insights</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-none">
            THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">DIGITAL BRIEF.</span>
          </h1>
          <p className="max-w-2xl text-white/50 text-xl font-light">
            Stay updated with the latest trends in e-commerce, enterprise automation, and digital strategy in Asia.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
              <motion.article
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#111] border border-white/5 relative mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>

                <div className="flex gap-6 mb-4 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors leading-tight italic tracking-tight">
                  {post.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-lg">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all border-b border-white/20 pb-2">
                  Read Article <ArrowRight className="w-4 h-4 text-red-500" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-20 bg-white border-y border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase italic leading-none">
                QUESTIONS? <br /><span className="text-red-600">TALK TO US.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <a href="tel:+85581968581" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Phone size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-black/30 uppercase tracking-widest">Direct Line</span>
                  <span className="text-sm font-black text-black">+855 81 968 581</span>
                </div>
              </a>
              <a href="https://t.me/ndxdigital_support" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Send size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-black/30 uppercase tracking-widest">Telegram</span>
                  <span className="text-sm font-black text-black">@ndxdigital_support</span>
                </div>
              </a>
              <a href="mailto:info@nexus-digital.asia" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-black/30 uppercase tracking-widest">Email Support</span>
                  <span className="text-sm font-black text-black italic">Email Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter simple */}
      <section className="py-32 bg-[#111] border-y border-white/5 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase italic leading-none">Stay Ahead <br /><span className="text-red-500">of the Curve.</span></h2>
          <p className="text-white/40 mb-12 uppercase tracking-wide text-sm font-bold">Join 5,000+ businesses receiving our weekly digital strategy insights.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-black border border-white/10 px-8 py-5 text-white focus:outline-none focus:border-red-500 transition-colors uppercase font-bold text-xs tracking-widest"
            />
            <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

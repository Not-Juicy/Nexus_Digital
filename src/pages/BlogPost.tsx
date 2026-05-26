import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import SEO from '../components/SEO';
import NotFound from './NotFound';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <div className="pt-32 bg-[#050505]">
      <SEO title={post.title} description={post.excerpt} image={post.image} article />

      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-10"
          >
            <ArrowLeft className="w-4 h-4 text-red-500" />
            Back to Insights
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-[1.05] italic">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 mb-10 text-white/30 text-[10px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="text-red-500 underline">{post.category}</span>
          </div>
        </motion.div>
      </section>

      {/* Cover */}
      <section className="px-6 max-w-5xl mx-auto pb-14">
        <div className="aspect-[16/9] overflow-hidden bg-[#111] border border-white/5 relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-32 max-w-3xl mx-auto">
        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-white/60 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Talk to Nexus Digital
          </Link>
        </div>
      </section>
    </div>
  );
}


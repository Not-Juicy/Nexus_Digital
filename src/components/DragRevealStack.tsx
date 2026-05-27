import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function DragRevealStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    startY.current = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isAnimating) return;
    const delta = e.clientY - startY.current;
    setDragY(Math.max(0, delta));
  };

  const handleMouseUp = () => {
    if (!isDragging || isAnimating) return;
    setIsDragging(false);

    if (dragY > 120) {
      setIsAnimating(true);
      setDragY(600);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % caseStudies.length);
        setDragY(0);
        setIsAnimating(false);
      }, 400);
    } else {
      setDragY(0);
    }
  };

  const remaining = caseStudies.slice(activeIndex + 1);
  const topStudy = caseStudies[activeIndex];

  if (remaining.length === 0) return null;

  return (
    <div className="relative w-full select-none" style={{ height: '480px' }}>
      {/* Stacked cards underneath */}
      {remaining.map((cs, i) => (
        <Link
          key={cs.slug}
          to={`/case-studies/${cs.slug}`}
          className="absolute inset-0 w-full h-full block"
          style={{ zIndex: remaining.length - i }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 group cursor-pointer">
            <img
              src={cs.image}
              alt={cs.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] block mb-2">{cs.category}</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors mb-1">{cs.title}</h3>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{cs.results}</span>
            </div>
          </div>
        </Link>
      ))}

      {/* Draggable top card */}
      {topStudy && (
        <Link
          to={`/case-studies/${topStudy.slug}`}
          className="absolute inset-0 w-full h-full block"
          style={{
            zIndex: remaining.length + 1,
            transform: `translateY(${dragY}px)`,
            transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            pointerEvents: isDragging || isAnimating ? 'none' : 'auto',
          }}
        >
          <div
            className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={topStudy.image}
              alt={topStudy.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] block mb-2">{topStudy.category}</span>
              <h3 className="text-2xl font-bold text-white mb-1">{topStudy.title}</h3>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{topStudy.results}</span>
            </div>

            {/* Drag handle hint */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
              <ChevronDown className="w-5 h-5 text-white animate-bounce" />
              <span className="text-[8px] font-bold text-white uppercase tracking-widest">Drag down</span>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

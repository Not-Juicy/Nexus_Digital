import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function RootLayout() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Force scroll on every navigation
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const timer = setTimeout(() => {
      if (navigationType === 'POP') {
        const saved = scrollPositions.current[pathname];
        if (saved) {
          lenis.scrollTo(saved, { immediate: true });
        }
      } else {
        if (!hash) {
          lenis.scrollTo(0, { immediate: true });
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
        }
      }
    }, 100);

    return () => {
      scrollPositions.current[pathname] = lenis.scroll;
      clearTimeout(timer);
    };
  }, [pathname, hash, navigationType]);

  // Handle hash scrolling
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element && lenisRef.current) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(element, { offset: -80, duration: 1.2 });
        }, 300);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white relative">
      
      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

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

  // Initialize Lenis
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

  // Scroll to top on forward nav, restore on back
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (navigationType === 'POP') {
      const saved = scrollPositions.current[pathname];
      if (saved !== undefined) {
        lenis.scrollTo(saved, { duration: 0.8 });
      }
    } else if (!hash) {
      lenis.scrollTo(0, { duration: 0.6 });
    }

    return () => {
      scrollPositions.current[pathname] = lenis.scroll;
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

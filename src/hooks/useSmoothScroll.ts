import { useEffect } from 'react';
import Lenis from 'lenis';

const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis with enhanced settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Enhanced raf function for better performance
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add scroll snap to sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      (section as HTMLElement).style.scrollSnapAlign = 'start';
    });

    // Add scroll snap container to body
    document.documentElement.style.scrollSnapType = 'y proximity';

    return () => {
      lenis.destroy();
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);
};

export default useSmoothScroll;
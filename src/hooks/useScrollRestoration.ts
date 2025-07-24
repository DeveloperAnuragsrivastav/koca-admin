
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollPosition {
  x: number;
  y: number;
}

const scrollPositions = new Map<string, ScrollPosition>();

export const useScrollRestoration = () => {
  const location = useLocation();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Save current scroll position before navigation
    const saveScrollPosition = () => {
      if (!isNavigatingRef.current) {
        scrollPositions.set(currentPath, {
          x: window.scrollX,
          y: window.scrollY
        });
      }
    };

    // Restore scroll position for this page
    const restoreScrollPosition = () => {
      const savedPosition = scrollPositions.get(currentPath);
      
      if (savedPosition && isNavigatingRef.current) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo({
            left: savedPosition.x,
            top: savedPosition.y,
            behavior: 'smooth'
          });
          isNavigatingRef.current = false;
        });
      } else if (!isNavigatingRef.current) {
        // New page visit - scroll to top
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Listen for beforeunload to save position
    window.addEventListener('beforeunload', saveScrollPosition);
    
    // Set navigation flag for back/forward navigation
    const handlePopState = () => {
      isNavigatingRef.current = true;
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Restore position when component mounts
    restoreScrollPosition();

    return () => {
      saveScrollPosition();
      window.removeEventListener('beforeunload', saveScrollPosition);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname]);

  // Function to handle programmatic navigation
  const navigateWithScrollSave = (callback: () => void) => {
    const currentPath = location.pathname;
    scrollPositions.set(currentPath, {
      x: window.scrollX,
      y: window.scrollY
    });
    callback();
  };

  return { navigateWithScrollSave };
};

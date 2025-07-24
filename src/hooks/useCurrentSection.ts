import { useState, useEffect } from 'react';

export const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', element: document.querySelector('[data-section="hero"]') },
        { id: 'spirit', element: document.querySelector('[data-section="spirit"]') },
        { id: 'menu-events', element: document.querySelector('[data-section="menu-events"]') },
        { id: 'team', element: document.querySelector('[data-section="team"]') },
        { id: 'contact', element: document.querySelector('[data-section="contact"]') },
      ];

      const scrollPosition = window.scrollY + 100; // offset for header height

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return currentSection;
};
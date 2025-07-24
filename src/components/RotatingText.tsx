import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const RotatingText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          
          // Show after first section (100vh)
          setIsVisible(scrollPosition > windowHeight);
          
          // Calculate rotation based on scroll position with smoother speed
          const rotation = scrollPosition * 0.3;
          setScrollRotation(rotation);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="relative w-24 h-24"
        style={{ transform: `rotate(${scrollRotation}deg)` }}
      >
        {/* Circular Text */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text className="text-xs fill-foreground font-light tracking-wider">
            <textPath href="#circle" startOffset="0%">
              • RESERVE A TABLE • RESERVE A TABLE
            </textPath>
          </text>
        </svg>
        
        {/* Center Star */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-6 h-6 fill-foreground" viewBox="0 0 47 43">
            <path d="M46.8619 17.6251C46.4968 16.5092 45.5081 15.7398 44.3471 15.6583L31.7579 14.7666C31.55 14.7513 31.3675 14.6086 31.2864 14.415L26.5407 2.65469C26.0996 1.56935 25.0704 0.871277 23.8941 0.871277C22.7179 0.871277 21.6937 1.56426 21.2475 2.65469L16.5019 14.4303C16.4258 14.6137 16.2433 14.7564 16.0303 14.7717L3.44119 15.6634C2.28013 15.7398 1.29145 16.5143 0.926401 17.6302C0.576562 18.7563 0.911191 19.9639 1.81368 20.7232L10.6611 28.2033L8.60259 39.4133C8.3288 40.5547 8.75977 41.7317 9.69774 42.4247C10.2048 42.7916 10.7929 42.975 11.381 42.975C11.9033 42.975 12.4255 42.8323 12.8919 42.5317L23.6051 35.8108C23.7724 35.7038 23.9955 35.7038 24.1781 35.8108L34.8913 42.5317C35.8799 43.1584 37.1323 43.1228 38.0854 42.4247C39.0234 41.7317 39.4544 40.5496 39.1958 39.4795L37.112 28.1778C37.2539 28.0861 37.3858 27.9791 37.5176 27.8772L45.9746 20.7232C46.872 19.9639 47.2117 18.7563 46.8619 17.6302V17.6251Z" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RotatingText;
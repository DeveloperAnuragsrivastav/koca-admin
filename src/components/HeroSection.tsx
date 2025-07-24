import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import kocaFullLogo from "@/assets/koca-full.svg";
import yuvrajImage from "@/assets/yuvraj.png";
import yuvrajSign from "@/assets/yuvraj-sign.svg";
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section ref={ref} className="relative min-h-[180vh] bg-black text-white overflow-hidden" data-section="hero">
      
      {/* Main KOCA logo - full width (doubled from 90%) */}
      <motion.div 
        className="flex items-center justify-center pt-24 pb-4 w-full px-4"
        style={{ y: logoY }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="w-full max-w-5xl h-auto overflow-hidden" style={{ height: '200px' }}>
          <img 
            src={kocaFullLogo} 
            alt="KOCA Logo" 
            className="w-full h-auto object-top"
            style={{ transform: 'translateY(-10px)' }}
          />
        </div>
      </motion.div>
      
      {/* Tagline - compact */}
      <motion.div 
        className="text-center mb-6 py-[70px]"
        style={{ y: textY }}
      >
        <AnimatedSection delay={0.5}>
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal tracking-[0.3em] mb-1 uppercase text-white">
            THE <span className="font-bold">PULSE</span> OF
          </h2>
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal tracking-[0.3em] uppercase text-white">
            THE PARTY.
          </h2>
        </AnimatedSection>
      </motion.div>
      
      {/* Animated divider line with pulse dot - fixed layout */}
      <div className="flex flex-col items-center mb-8 h-24">
        <div className="relative h-20 w-0.5 bg-transparent">
          <motion.div 
            className="absolute top-0 left-0 w-0.5 bg-white"
            animate={{ 
              height: [20, 80, 20]
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </div>
        <motion.div 
          className="w-3 h-3 bg-white rounded-full mt-2"
          animate={{ 
            scale: [0.5, 1.2, 0.5],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      </div>
      
      {/* Story section - expanded layout */}
      <div className="flex flex-col items-center justify-center px-8 py-[30px] w-full mx-auto">
        <AnimatedSection delay={1.0} className="text-center mb-8 max-w-2xl">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl leading-tight mb-8 font-bold text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Six balls, six sixes.
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-light text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <span className="font-semibold text-white">Yuvraj Singh</span> didn't just play cricket;<br />
            he redefined it.
          </motion.p>
          <motion.p 
            className="text-base md:text-lg lg:text-xl leading-relaxed font-light text-white/80 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Now, sharing his life journey and love for food<br />
            together into a celebration with <span className="font-semibold text-white not-italic">KOCA</span>.
          </motion.p>
        </AnimatedSection>
        
        {/* Yuvraj image - 90% of section width with bottom fade */}
        <AnimatedSection delay={1.2} className="relative mb-8 flex justify-center w-full">
          <div className="w-[90%] relative">
            <motion.img 
              src={yuvrajImage} 
              alt="Yuvraj Singh" 
              className="w-full h-auto object-cover object-top grayscale contrast-125"
            />
            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            
            {/* Yuvraj signature - positioned near tie area */}
            <AnimatedSection delay={1.4} className="absolute bottom-[20%] right-[10%]">
              <motion.img 
                src={yuvrajSign} 
                alt="Yuvraj Singh Signature" 
                className="w-32 h-auto opacity-80"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.8 }}
              />
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
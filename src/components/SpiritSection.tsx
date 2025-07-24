import { motion } from 'framer-motion';
import kocaFullLogo from "@/assets/koca-full.svg";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const SpiritSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 text-white overflow-hidden" data-section="spirit">
      {/* KOCA Logo */}
      <motion.div 
        className="flex items-center justify-center pt-16 pb-8 w-full px-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img 
          src={kocaFullLogo} 
          alt="KOCA Logo" 
          className="w-full max-w-md h-auto"
        />
      </motion.div>

      {/* Restaurant Interior Image */}
      <AnimatedSection delay={0.3} className="flex justify-center px-8 mb-12">
        <div className="w-full max-w-4xl">
          <motion.img 
            src="https://kocaofficial.com/_ipx/w_1920&f_webp&q_100&fit_contain/images/jpg/kitchen-1.jpg" 
            alt="Restaurant Interior" 
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </AnimatedSection>

      {/* Text and Button */}
      <AnimatedSection delay={0.6} className="text-center px-8 pb-16">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          WHERE SPIRITS RISE AND CONVERSATIONS FLOW.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Button 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300"
          >
            JOIN THE CELEBRATION
          </Button>
        </motion.div>
      </AnimatedSection>
    </section>
  );
};

export default SpiritSection;
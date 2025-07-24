import { motion } from 'framer-motion';
import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import ParallaxImage from "./ParallaxImage";

const KitchenSection = () => {
  return (
    <section className="py-20 bg-background">
      {/* Kitchen images with parallax and hover effects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 px-8 max-w-7xl mx-auto">
        <AnimatedSection delay={0.2} direction="left">
          <motion.div 
            className="overflow-hidden rounded-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ParallaxImage
              src={kitchen1}
              alt="Kitchen interior 1"
              className="h-96"
            />
            <motion.div
              className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4} direction="right">
          <motion.div 
            className="overflow-hidden rounded-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ParallaxImage
              src={kitchen2}
              alt="Kitchen interior 2"
              className="h-96"
            />
            <motion.div
              className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
        </AnimatedSection>
      </div>
      
      {/* Animated tagline */}
      <AnimatedSection delay={0.6}>
        <div className="text-center mb-12">
          <motion.h6 
            className="text-lg font-light tracking-widest text-foreground uppercase"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            WHERE SPIRITS RISE AND CONVERSATIONS FLOW.
          </motion.h6>
        </div>
      </AnimatedSection>
      
      {/* Animated CTA Button */}
      <AnimatedSection delay={0.8}>
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm font-medium tracking-wider relative overflow-hidden group uppercase"
            >
              <motion.span
                className="relative z-10"
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                JOIN THE CELEBRATION
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default KitchenSection;
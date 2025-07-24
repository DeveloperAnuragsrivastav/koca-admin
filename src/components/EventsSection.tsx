import { motion } from 'framer-motion';
import AnimatedSection from "./AnimatedSection";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";
import event5 from "@/assets/event5.jpg";
const EventsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <AnimatedSection delay={0.2}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground uppercase tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            IN-HOUSE EVENTS
          </motion.h2>
        </AnimatedSection>
        
        {/* Events grid with real images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[event1, event2, event3, event4, event5].map((image, index) => (
            <AnimatedSection key={index} delay={0.4 + index * 0.2}>
              <motion.div 
                className="overflow-hidden rounded-lg aspect-video group cursor-pointer relative"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={image} 
                  alt={`Event ${index + 1}`} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
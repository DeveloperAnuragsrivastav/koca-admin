import { motion } from 'framer-motion';
import ramenIcon from "@/assets/ramen-icon.svg";
import liquorIcon from "@/assets/liquor-icon.svg";
import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/food3.jpg";
import food4 from "@/assets/food4.jpg";
import food5 from "@/assets/food5.jpg";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const MenuSection = () => {
  const foodImages = [food1, food2, food3, food4, food5];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* Animated Header */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <motion.p 
              className="text-lg font-light tracking-widest mb-4 text-foreground uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              A CULINARY CANVAS
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              EXPLORE OUR MENU
            </motion.h2>
          </div>
        </AnimatedSection>
        
        {/* Animated Menu buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
          <AnimatedSection delay={0.4} direction="left">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="outline" 
                className="flex flex-col items-center gap-4 p-8 h-auto border-primary text-foreground hover:bg-primary hover:text-primary-foreground group relative overflow-hidden uppercase"
              >
                <motion.img 
                  src={ramenIcon} 
                  alt="Food icon" 
                  className="w-12 h-12 group-hover:filter group-hover:brightness-0 transition-all duration-300"
                  whileHover={{ rotate: 10 }}
                />
                <span className="font-medium tracking-wider">FOOD MENU</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} direction="right">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="outline" 
                className="flex flex-col items-center gap-4 p-8 h-auto border-primary text-foreground hover:bg-primary hover:text-primary-foreground group relative overflow-hidden uppercase"
              >
                <motion.img 
                  src={liquorIcon} 
                  alt="Drinks icon" 
                  className="w-12 h-12 group-hover:filter group-hover:brightness-0 transition-all duration-300"
                  whileHover={{ rotate: -10 }}
                />
                <span className="font-medium tracking-wider">DRINKS MENU</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
        
        {/* Animated Food images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {foodImages.map((image, index) => (
            <AnimatedSection key={index} delay={0.8 + index * 0.1}>
              <motion.div 
                className="overflow-hidden rounded-lg aspect-square group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: 2,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={image} 
                  alt={`Food ${index + 1}`} 
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

export default MenuSection;
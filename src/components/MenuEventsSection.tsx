import { motion } from 'framer-motion';
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import foodDish from "@/assets/food-dish.jpg";
import eventNew from "@/assets/event-new.jpg";
import event3 from "@/assets/e-3.png";
import event4 from "@/assets/e-4.png";
import event2 from "@/assets/e-2.png";

const MenuEventsSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-20" data-section="menu-events">
      
      {/* Menu Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-8 mb-24 max-w-7xl mx-auto">
        
        {/* Food Image */}
        <AnimatedSection delay={0.2} className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <motion.img 
              src={foodDish} 
              alt="Culinary dish"
              className="w-full max-w-lg h-auto rounded-3xl shadow-2xl object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </AnimatedSection>

        {/* Menu Text & Buttons */}
        <AnimatedSection delay={0.4} className="lg:w-1/2 text-left">
          <motion.p 
            className="text-sm text-gray-400 mb-6 tracking-[0.2em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A CULINARY CANVAS
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            EXPLORE OUR MENU
          </motion.h2>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 border-2 border-red-600"
            >
              🍽️ FOOD MENU
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 border-2 border-red-600"
            >
              🍹 DRINKS MENU
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Events Section */}
      <AnimatedSection delay={0.6} className="px-8 max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          IN-HOUSE EVENTS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Event 1 - Byanna */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${eventNew})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <div>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">BYANNA</h3>
                <p className="text-sm opacity-90 font-medium">KARNATAKA FOOD FESTIVAL</p>
              </div>
            </div>
          </motion.div>

          {/* Event 2 - Pre Launch Yuvraj Singh */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${event3})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <div>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">YUVRAJ SINGH</h3>
                <p className="text-sm opacity-90 font-medium">EXCLUSIVE PREVIEW</p>
              </div>
            </div>
          </motion.div>

          {/* Event 3 - Opening Doors KOCA */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${event4})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <div>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">KOCA</h3>
                <p className="text-sm opacity-90 font-medium">GRAND OPENING</p>
              </div>
            </div>
          </motion.div>

          {/* Event 4 - Ride The Wave Walter Scalzone */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${event2})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <div>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">WALTER SCALZONE</h3>
                <p className="text-sm opacity-90 font-medium">LIVE PERFORMANCE</p>
              </div>
            </div>
          </motion.div>

        </div>
      </AnimatedSection>
    </section>
  );
};

export default MenuEventsSection;
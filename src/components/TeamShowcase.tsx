import { motion } from 'framer-motion';
import AnimatedSection from "./AnimatedSection";

const TeamShowcase = () => {
  const teamMembers = [
    {
      name: "Shobhit Agarwal",
      role: "Founder",
      image: "/lovable-uploads/47fe7912-2d28-43f6-a05a-34e6589897fd.png"
    },
    {
      name: "Kapil Goel", 
      role: "Founder",
      image: "/lovable-uploads/47fe7912-2d28-43f6-a05a-34e6589897fd.png"
    },
    {
      name: "Prateek Jha",
      role: "Head Chef", 
      image: "/lovable-uploads/47fe7912-2d28-43f6-a05a-34e6589897fd.png"
    },
    {
      name: "Adiba Ji",
      role: "Head Pastry",
      image: "/lovable-uploads/47fe7912-2d28-43f6-a05a-34e6589897fd.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white" data-section="team">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Team Members - Left Side */}
          <div className="flex gap-8 md:gap-12 flex-1">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                <motion.div 
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full overflow-hidden bg-gray-300 shadow-2xl">
                      <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-sm opacity-90 font-medium">
                    {member.role}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Text Content - Right Side */}
          <AnimatedSection delay={0.2} className="text-right ml-8 flex-shrink-0">
            <motion.p 
              className="text-sm font-medium tracking-[0.3em] uppercase opacity-90 mb-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              BEHIND THE SCENES
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MEET OUR TEAM
            </motion.h2>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
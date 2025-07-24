import { motion } from 'framer-motion';
import AnimatedSection from "./AnimatedSection";

const TeamSection = () => {
  const teamMembers = [
    { name: "Shobhit Agarwal", role: "Founder" },
    { name: "Kapil Goel", role: "Founder" },
    { name: "Prateek Jha", role: "Head Chef" },
    { name: "Adiba Jha", role: "Head Pastry Chef" },
    { name: "Megha Kohli", role: "Food Creator" },
    { name: "Noah Barnes", role: "Food Creator" },
    { name: "Luca Cinalli", role: "Cocktail Curator" },
    { name: "Prateek Kumar", role: "General Manager" },
    { name: "Ankur Arora", role: "COO" },
    { name: "Vikas Gupta", role: "Interior Design and Execution Partner" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* Behind the Scenes Header */}
        <AnimatedSection delay={0.2}>
          <motion.p 
            className="text-lg font-light tracking-widest mb-4 text-center text-muted-foreground uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            BEHIND THE SCENES
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground uppercase tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            MEET OUR TEAM
          </motion.h2>
        </AnimatedSection>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={0.4 + index * 0.1}>
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-muted rounded-lg h-48 mb-4 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.p 
                    className="text-muted-foreground relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Photo
                  </motion.p>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm tracking-wider">
                    {member.role}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
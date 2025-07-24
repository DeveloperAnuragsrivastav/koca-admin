import { motion } from 'framer-motion';
import kocaLogo from "@/assets/koca-logo.svg";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-8">
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center justify-center text-center">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={kocaLogo} alt="KOCA" className="h-16 mx-auto" />
            </motion.div>
            
            {/* Tagline */}
            <motion.p 
              className="text-lg font-light tracking-widest mb-8 text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              WHERE SPIRITS RISE AND CONVERSATIONS FLOW.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-foreground font-medium mb-2">Contact</p>
                <p className="text-muted-foreground">info@kocaofficial.com</p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-2">Location</p>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-2">Hours</p>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
            </motion.div>
            
            {/* Copyright */}
            <motion.div 
              className="pt-8 border-t border-border w-full text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground text-sm">
                © 2024 KOCA. All rights reserved.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin } from 'lucide-react';
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
const ContactSection = () => {
  return <section className="py-32 bg-black text-white" data-section="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-start justify-center gap-28 lg:gap-40">
          {/* Left Side - Logo and Tagline */}
          <AnimatedSection delay={0.2} className="flex-shrink-0">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <img 
                src="https://kocaofficial.com/images/svg/koca-full.svg" 
                alt="KOCA" 
                className="h-20 md:h-24 lg:h-28 mb-2"
              />
              
            </motion.div>
          </AnimatedSection>

          {/* Right Side - Contact Information */}
          <AnimatedSection delay={0.4} className="flex-shrink-0 text-left">
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="space-y-4">
              {/* Social Media Icons */}
              <div className="flex justify-start gap-3 mb-5">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-black" />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-black" />
                </div>
              </div>

              {/* Phone Number */}
              <div className="text-base font-medium">
                +91 8448 180 111
              </div>

              {/* Email */}
              <div className="text-sm underline">
                info@kocaofficial.com
              </div>

              {/* Address */}
              <div className="text-xs space-y-0.5 leading-relaxed opacity-90">
                <div>Floor No.: Sushant Lok 1</div>
                <div>Building No./Flat No.: B749</div>
                <div>Road/Street: Sushant Lok 1</div>
                <div>City/Town/Village: Gurugram</div>
                <div>District: Gurugram</div>
                <div>State: Haryana</div>
                <div>PIN Code: 122001</div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-6">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-medium text-xs tracking-wide transition-all duration-300 border-2 border-orange-600">
                  <MapPin className="w-3 h-3 mr-1" />
                  Get Directions
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default ContactSection;
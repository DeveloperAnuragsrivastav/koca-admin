import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import useScrollDirection from '@/hooks/useScrollDirection';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';

const Header = () => {
  const currentSection = useCurrentSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();
  const { navigateWithScrollSave } = useScrollRestoration();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define colors for each section
  const getSectionColors = () => {
    switch (currentSection) {
      case 'hero':
        return { text: 'text-white', bg: 'bg-black/20' };
      case 'spirit':
        return { text: 'text-black', bg: 'bg-white/20' };
      case 'menu-events':
        return { text: 'text-white', bg: 'bg-black/20' };
      case 'team':
        return { text: 'text-white', bg: 'bg-black/20' };
      case 'contact':
        return { text: 'text-white', bg: 'bg-black/20' };
      default:
        return { text: 'text-white', bg: 'bg-black/20' };
    }
  };

  const colors = getSectionColors();
  
  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0.8 }
  };

  const shouldHideHeader = scrollDirection === 'down' && isScrolled;

  // Enhanced navigation function
  const handleNavigation = (path: string) => {
    navigateWithScrollSave(() => navigate(path));
  };
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : `${colors.text} ${colors.bg}`
      }`}
      variants={headerVariants}
      initial="visible"
      animate={shouldHideHeader ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center space-x-6">
        <Button 
          variant="ghost" 
          className="text-white text-sm font-medium tracking-wider relative uppercase hover:bg-transparent hover:text-white"
          onClick={() => handleNavigation('/')}
        >
          <Home className="w-4 h-4 mr-2" />
          <span className="relative z-10">HOME</span>
        </Button>
        <Button 
          variant="ghost" 
          className="text-white text-sm font-medium tracking-wider relative uppercase hover:bg-transparent hover:text-white"
          onClick={() => handleNavigation('/menu')}
        >
          <span className="relative z-10">VIEW OUR MENU</span>
        </Button>
        <Button 
          variant="ghost" 
          className="text-white text-sm font-medium tracking-wider relative uppercase hover:bg-transparent hover:text-white"
          onClick={() => handleNavigation('/gallery')}
        >
          <span className="relative z-10">GALLERY</span>
        </Button>
        <Button 
          variant="ghost" 
          className="text-white text-sm font-medium tracking-wider relative uppercase hover:bg-transparent hover:text-white"
          onClick={() => handleNavigation('/corporate-enquiry')}
        >
          <span className="relative z-10">CORPORATE ENQUIRY</span>
        </Button>
      </div>
      
      <div>
        <Button 
          variant="outline" 
          className="border-white text-white text-sm font-medium tracking-wider px-6 relative uppercase hover:bg-transparent hover:text-white"
          onClick={() => handleNavigation('/reserve-table')}
        >
          <span className="relative z-10">RESERVE A TABLE</span>
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;

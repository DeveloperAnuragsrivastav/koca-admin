
import { useEffect } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpiritSection from "@/components/SpiritSection";
import MenuEventsSection from "@/components/MenuEventsSection";
import TeamShowcase from "@/components/TeamShowcase";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import RotatingText from "@/components/RotatingText";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

const Index = () => {
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <RotatingText />
      <Header />
      <HeroSection />
      <SpiritSection />
      <MenuEventsSection />
      <TeamShowcase />
      <ContactSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;

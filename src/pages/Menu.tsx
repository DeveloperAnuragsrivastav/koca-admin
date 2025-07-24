import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

// Import food images
import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/food3.jpg";
import food4 from "@/assets/food4.jpg";
import food5 from "@/assets/food5.jpg";

const Menu = () => {
  useScrollRestoration();
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'APPETIZERS' },
    { id: 'mains', name: 'MAIN COURSES' },
    { id: 'desserts', name: 'DESSERTS' },
    { id: 'cocktails', name: 'COCKTAILS' },
    { id: 'wine', name: 'WINES' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: "TRUFFLE ARANCINI",
        description: "Crispy risotto balls with black truffle, parmesan, and herb aioli",
        image: food1
      },
      {
        name: "TUNA TARTARE",
        description: "Fresh yellowfin tuna with avocado, citrus, and sesame crisp",
        image: food2
      },
      {
        name: "BURRATA CAPRESE",
        description: "Creamy burrata with heirloom tomatoes, basil oil, and balsamic pearls",
        image: food3
      }
    ],
    mains: [
      {
        name: "WAGYU BEEF TENDERLOIN",
        description: "Premium wagyu with roasted vegetables and red wine jus",
        image: food4
      },
      {
        name: "LOBSTER THERMIDOR",
        description: "Fresh lobster with cognac cream sauce and gruyere cheese",
        image: food5
      },
      {
        name: "DUCK CONFIT",
        description: "Slow-cooked duck leg with cherry gastrique and potato gratin",
        image: food1
      }
    ],
    desserts: [
      {
        name: "CHOCOLATE SOUFFLÉ",
        description: "Warm dark chocolate soufflé with vanilla bean ice cream",
        image: food2
      },
      {
        name: "TIRAMISU",
        description: "Classic Italian dessert with mascarpone and espresso",
        image: food3
      }
    ],
    cocktails: [
      {
        name: "KOCA SIGNATURE",
        description: "Premium gin, elderflower, cucumber, and tonic",
        image: food4
      },
      {
        name: "SMOKE & MIRRORS",
        description: "Whiskey, smoked maple, lemon, and aromatic bitters",
        image: food5
      },
      {
        name: "GOLDEN HOUR",
        description: "Vodka, passion fruit, lime, and champagne float",
        image: food1
      }
    ],
    wine: [
      {
        name: "CHAMPAGNE DOM PÉRIGNON",
        description: "Vintage champagne with exceptional elegance and complexity",
        image: food2
      },
      {
        name: "BAROLO BRUNATE",
        description: "Full-bodied Italian red with notes of cherry and truffle",
        image: food3
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <AnimatedSection delay={0.2}>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              OUR MENU
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CRAFTED WITH PASSION, SERVED WITH EXCELLENCE
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-8 py-3 text-sm font-medium tracking-wider ${
                  activeCategory === category.id 
                    ? "bg-primary text-black hover:bg-primary/90" 
                    : "hover:bg-muted"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <AnimatedSection delay={0.3}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    </div>
                    <div className="md:w-2/3 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <AnimatedSection delay={0.2}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              READY TO EXPERIENCE KOCA?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Reserve your table and embark on a culinary journey
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={() => window.location.href = '/reserve-table'}
                className="bg-primary text-black hover:bg-primary/90 px-8 py-3 text-lg font-medium tracking-wider"
              >
                RESERVE A TABLE
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;

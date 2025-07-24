import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

// Import images
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";
import event5 from "@/assets/event5.jpg";
import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/food3.jpg";
import food4 from "@/assets/food4.jpg";
import food5 from "@/assets/food5.jpg";

const Gallery = () => {
  useScrollRestoration();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: event1, title: "Live Music Night", category: "Events" },
    { src: food1, title: "Signature Dish", category: "Food" },
    { src: event2, title: "Private Party", category: "Events" },
    { src: food2, title: "Gourmet Selection", category: "Food" },
    { src: event3, title: "Corporate Event", category: "Events" },
    { src: food3, title: "Chef's Special", category: "Food" },
    { src: event4, title: "Birthday Celebration", category: "Events" },
    { src: food4, title: "Appetizer Platter", category: "Food" },
    { src: event5, title: "Weekend Vibes", category: "Events" },
    { src: food5, title: "Dessert Collection", category: "Food" },
  ];

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
              GALLERY
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CAPTURING MOMENTS, FLAVORS & EXPERIENCES
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Optimized Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square bg-black"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(image.src)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">{image.category}</p>
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-full object-contain rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <button
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors text-4xl font-light"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ×
          </button>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

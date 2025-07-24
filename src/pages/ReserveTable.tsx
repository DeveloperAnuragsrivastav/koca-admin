
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, Users, Check, Sparkles, Star, Heart } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RestaurantFloor from "@/components/RestaurantFloor";

const ReserveTable = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];
  const availableTables = [1, 2, 3, 5, 6, 8]; // Mock available tables

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulate booking process with animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsAnimating(false);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Animated confirmation screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        <Header />
        
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: 0
              }}
              animate={{ 
                y: -100,
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity
              }}
            />
          ))}
        </div>

        <motion.div
          className="text-center z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-32 h-32 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            <Check className="w-16 h-16 text-black" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ delay: 1, duration: 1, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.div
            className="flex justify-center space-x-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              >
                <Star className="w-6 h-6 text-primary fill-current" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            RESERVATION CONFIRMED!
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground text-lg mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Thank you for choosing KOCA
          </motion.p>
          
          <motion.p
            className="text-white text-xl mb-8 flex items-center justify-center gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            See you on {date && format(date, 'MMMM d, yyyy')} at {time} - Table {selectedTable}
            <Heart className="w-5 h-5 text-red-500 fill-current" />
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary transition-all duration-300 px-8 py-3 text-lg font-semibold"
            >
              BACK TO HOME
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Loading animation screen
  if (isAnimating) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Header />
        <motion.div className="text-center">
          <motion.div
            className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="text-2xl font-bold mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            SECURING YOUR RESERVATION...
          </motion.h2>
          <motion.div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Header />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-radial from-yellow-500/10 to-transparent rounded-full"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <AnimatedSection delay={0.2}>
            <motion.div className="text-center mb-12">
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-12 h-12 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                RESERVE A TABLE
              </h1>
              <p className="text-lg text-muted-foreground">
                SECURE YOUR PREMIUM DINING EXPERIENCE
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Animated Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center relative ${
                      currentStep >= step 
                        ? 'bg-gradient-to-r from-primary to-yellow-500 border-primary text-black' 
                        : 'border-white/30 text-white/50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    animate={{
                      scale: currentStep === step ? [1, 1.1, 1] : 1,
                    }}
                  >
                    {currentStep > step ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <span className="text-lg font-bold">{step}</span>
                    )}
                    {currentStep >= step && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  {step < 4 && (
                    <motion.div
                      className={`w-16 h-1 ${currentStep > step ? 'bg-gradient-to-r from-primary to-yellow-500' : 'bg-white/20'}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: currentStep > step ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Animated Form Container */}
          <motion.div
            className="bg-gradient-to-r from-gray-900/50 to-black/50 p-8 rounded-2xl border border-primary/20 backdrop-blur-sm"
            layout
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2
                    className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    <Clock className="w-8 h-8 text-primary" />
                    SELECT DATE & TIME
                  </motion.h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Label className="text-lg mb-4 block text-primary">Choose Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-14 bg-black/30 border-primary/30 hover:bg-primary/10",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto bg-black border-primary/30"
                          />
                        </PopoverContent>
                      </Popover>
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label className="text-lg mb-4 block text-primary">Choose Time</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot, index) => (
                          <motion.div key={slot}>
                            <Button
                              variant={time === slot ? "default" : "outline"}
                              className={cn(
                                "h-12 transition-all duration-300",
                                time === slot 
                                  ? "bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary" 
                                  : "bg-black/30 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                              )}
                              onClick={() => setTime(slot)}
                            >
                              {slot}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Label className="text-lg mb-4 block text-primary flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Number of Guests
                    </Label>
                    <div className="flex gap-3 flex-wrap">
                      {guestOptions.map((option, index) => (
                        <motion.div key={option}>
                          <Button
                            variant={guests === option ? "default" : "outline"}
                            className={cn(
                              "w-16 h-14 text-lg transition-all duration-300",
                              guests === option 
                                ? "bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary" 
                                : "bg-black/30 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                            )}
                            onClick={() => setGuests(option)}
                          >
                            {option}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary">SELECT YOUR TABLE</h2>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <p className="text-muted-foreground mb-4">
                        Click on an available table (golden) to select it. Gray tables are unavailable.
                      </p>
                      {selectedTable && (
                        <motion.p
                          className="text-primary text-lg font-semibold"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          Table {selectedTable} Selected ✨
                        </motion.p>
                      )}
                    </div>
                    <RestaurantFloor
                      selectedTable={selectedTable}
                      onTableSelect={setSelectedTable}
                      availableTables={availableTables}
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary">YOUR DETAILS</h2>
                  <div className="space-y-6">
                    {[
                      { id: 'name', label: 'Full Name', value: name, setter: setName, placeholder: 'Enter your full name' },
                      { id: 'email', label: 'Email Address', value: email, setter: setEmail, placeholder: 'Enter your email', type: 'email' },
                      { id: 'phone', label: 'Phone Number', value: phone, setter: setPhone, placeholder: 'Enter your phone number', type: 'tel' }
                    ].map((field, index) => (
                      <motion.div
                        key={field.id}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Label htmlFor={field.id} className="text-lg text-primary">{field.label}</Label>
                        <Input
                          id={field.id}
                          type={field.type || 'text'}
                          value={field.value}
                          onChange={(e) => field.setter(e.target.value)}
                          className="mt-2 h-14 bg-black/30 border-primary/30 focus:border-primary text-white"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary">CONFIRM RESERVATION</h2>
                  <div className="space-y-4 mb-8">
                    {[
                      { label: 'Date', value: date && format(date, "MMMM d, yyyy") },
                      { label: 'Time', value: time },
                      { label: 'Guests', value: `${guests} ${guests === '1' ? 'Guest' : 'Guests'}` },
                      { label: 'Table', value: `Table ${selectedTable}` },
                      { label: 'Name', value: name }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex justify-between items-center p-4 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-lg border border-primary/20"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <span className="text-primary font-medium">{item.label}:</span>
                        <span className="font-semibold text-white">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="flex justify-between mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={prevStep}
                variant="outline"
                disabled={currentStep === 1}
                className="px-8 py-3 bg-black/30 border-primary/30 hover:bg-primary/10 disabled:opacity-30"
              >
                BACK
              </Button>
              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && (!date || !time || !guests)) ||
                    (currentStep === 2 && !selectedTable) ||
                    (currentStep === 3 && (!name || !email || !phone))
                  }
                  className="bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary px-8 py-3 disabled:opacity-50"
                >
                  NEXT
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary px-8 py-3"
                >
                  CONFIRM RESERVATION
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReserveTable;

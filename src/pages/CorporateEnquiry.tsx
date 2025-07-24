import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Building2, Mail, Phone, MapPin, Star, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const CorporateEnquiry = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      eventType: '',
      guestCount: '',
      eventDate: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Black Curtain Header */}
      <motion.div 
        className="relative bg-black text-white py-4 px-6 overflow-hidden z-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Curtain texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90" />
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Crown className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Star className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-12 h-0.5 bg-primary" />
              <Crown className="w-5 h-5 text-primary" />
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            
            <h2 className="text-lg md:text-xl font-bold tracking-wide">
              <span className="text-primary">Every 100th customer</span> will get a chance to meet{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                Yuvraj Singh
              </span>{" "}
              at <span className="font-extrabold">KOCA</span>
            </h2>
            
            <div className="flex items-center justify-center space-x-3 mt-2">
              <div className="w-12 h-0.5 bg-primary" />
              <Star className="w-5 h-5 text-primary" />
              <div className="w-12 h-0.5 bg-primary" />
            </div>
          </motion.div>
        </div>
        
        {/* Bottom border gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://kocaofficial.com/_ipx/w_1920&f_webp&q_100&fit_contain/images/jpg/kitchen-1.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Corporate Enquiry
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Elevate your corporate events with our exceptional culinary experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Get In Touch
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center text-white">
                        <Building2 className="w-5 h-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">Corporate Events</p>
                          <p className="text-white/70 text-sm">Professional catering & venue services</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-white">
                        <Mail className="w-5 h-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">corporate@koca.com</p>
                          <p className="text-white/70 text-sm">Response within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-white">
                        <Phone className="w-5 h-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">+1 (555) 123-4567</p>
                          <p className="text-white/70 text-sm">Mon-Fri 9AM-6PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-white">
                        <MapPin className="w-5 h-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">Downtown Location</p>
                          <p className="text-white/70 text-sm">Private dining & event spaces</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Featured Image Section */}
                    <div className="mt-8 space-y-4">
                      <div className="rounded-lg overflow-hidden border border-white/20">
                        <img 
                          src="https://curlytales.com/wp-content/uploads/2025/04/Kamiya-Jani-KOCA.jpg"
                          alt="Kamiya Jani at KOCA"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Send Your Enquiry
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyName" className="text-white">Company Name</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="Your company name"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="contactPerson" className="text-white">Contact Person</Label>
                          <Input
                            id="contactPerson"
                            value={formData.contactPerson}
                            onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="Your name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-white">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone" className="text-white">Phone</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="+1 (555) 123-4567"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="eventType" className="text-white">Event Type</Label>
                          <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border">
                              <SelectItem value="conference">Conference</SelectItem>
                              <SelectItem value="team-building">Team Building</SelectItem>
                              <SelectItem value="product-launch">Product Launch</SelectItem>
                              <SelectItem value="gala-dinner">Gala Dinner</SelectItem>
                              <SelectItem value="board-meeting">Board Meeting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="guestCount" className="text-white">Guest Count</Label>
                          <Input
                            id="guestCount"
                            value={formData.guestCount}
                            onChange={(e) => handleInputChange('guestCount', e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            placeholder="Number of guests"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="eventDate" className="text-white">Preferred Event Date</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange('eventDate', e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-white">Additional Requirements</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                          placeholder="Tell us about your event requirements, dietary restrictions, or special requests..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6"
                      >
                        Submit Enquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CorporateEnquiry;

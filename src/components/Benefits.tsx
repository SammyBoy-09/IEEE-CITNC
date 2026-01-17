import { BookOpen, Users, GraduationCap, Calendar, ShoppingBag, Heart, Award, Gift, Sparkles, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Benefits = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation({ threshold: 0.1 });

  const benefits = [
    {
      icon: BookOpen,
      title: "Access IEEE journals, standards, and research to stay ahead in technology.",
      color: "from-blue-500/20 to-blue-600/20",
      hoverColor: "group-hover:text-blue-500"
    },
    {
      icon: Users,
      title: "Network with global professionals, mentors, and peers through IEEE events.",
      color: "from-purple-500/20 to-purple-600/20",
      hoverColor: "group-hover:text-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Learn and grow with IEEE’s online courses, webinars, and certifications.",
      color: "from-green-500/20 to-green-600/20",
      hoverColor: "group-hover:text-green-500"
    },
    {
      icon: Calendar,
      title: "Engage in branch events, workshops, and volunteering opportunities.",
      color: "from-orange-500/20 to-orange-600/20",
      hoverColor: "group-hover:text-orange-500"
    },
    {
      icon: ShoppingBag,
      title: "Get exclusive member discounts on IEEE conferences, tools, and learning content.",
      color: "from-pink-500/20 to-pink-600/20",
      hoverColor: "group-hover:text-pink-500"
    },
    {
      icon: Heart,
      title: "Volunteer and apply your skills to serve society through IEEE initiatives.",
      color: "from-red-500/20 to-red-600/20",
      hoverColor: "group-hover:text-red-500"
    },
    {
      icon: Award,
      title: "Join IEEE Societies to access specialized resources in your field.",
      color: "from-yellow-500/20 to-yellow-600/20",
      hoverColor: "group-hover:text-yellow-600"
    },
    {
      icon: Gift,
      title: "Scholarships: Women up to ₹50,000 & Men up to ₹15,000",
      color: "from-primary/20 to-primary-glow/20",
      hoverColor: "group-hover:text-primary"
    },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 bg-primary-glow/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          ref={headerRef}
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border border-primary/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
            <span className="text-primary text-xs sm:text-sm font-medium leading-tight">Member Benefits</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Benefits of Joining IEEE
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Unlock opportunities for growth, learning, and global networking as an IEEE member.
          </motion.p>
          
          <motion.div 
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={headerVisible ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div ref={benefitsRef} className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={benefitsVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="p-5 sm:p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-500 group border-2 border-primary/20 hover:border-primary/60 h-full relative overflow-hidden">
                  {/* Gradient glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-500 flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 12,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon className={`h-7 w-7 sm:h-8 sm:w-8 text-primary transition-colors duration-300 ${benefit.hoverColor}`} />
                      </motion.div>
                    </motion.div>
                    
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300 break-words">
                      {benefit.title}
                    </p>

                    {/* Animated bottom accent */}
                    <motion.div 
                      className="mt-3 sm:mt-4 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center mt-12 sm:mt-14 md:mt-16 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={benefitsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white shadow-lg hover:shadow-2xl transition-all duration-300 group text-sm sm:text-base px-6 sm:px-7 md:px-8 py-5 sm:py-6 min-h-[44px]"
              asChild
            >
              <a 
                href="https://www.ieee.org/membership/membership-benefits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Know More
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Guidelines from "./Guidelines";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-primary via-primary-glow to-blue-600 overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
            <span className="text-white text-[11px] sm:text-xs md:text-sm font-medium leading-tight">Advancing Technology for Humanity</span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            IEEE Student Branch
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Cambridge Institute of Technology North Campus
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 justify-center px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-2xl transition-all duration-300 group text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-5 sm:py-6 min-h-[44px]"
                onClick={() => navigate('/guidelines')}
              >
                <span className="flex items-center gap-2">
                  Join Us Today
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="ghost"
                className="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-5 sm:py-6 min-h-[44px]"
              >
                <a href="#guidelines" onClick={(e) => scrollToSection(e, '#guidelines')} className="flex items-center gap-2">
                  Guidelines
                </a>
              </Button>
            </motion.div>
          </motion.div>
          {/* Mobile: keep CTA buttons only (Guidelines section rendered on page) */}
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div 
            className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

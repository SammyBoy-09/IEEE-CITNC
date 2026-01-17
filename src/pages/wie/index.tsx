import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import wieLogo from "@/assets/team/wie/wie_logo.png";
import About from "./About";
import Pillars from "./Pillars";
import Events from "./Events";
import Benefits from "./Benefits";
import Team from "./Team";

const WIELanding = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: "About", action: () => scrollToSection('wie-about') },
    { label: "Events", action: () => scrollToSection('wie-events') },
    { label: "Benefits", action: () => scrollToSection('wie-benefits') },
    { label: "Team", action: () => scrollToSection('wie-team') },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header Section */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-purple-100 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={wieLogo} alt="WIE logo" className="h-12 sm:h-16 md:h-20 lg:h-18 w-auto object-contain" />
              <div className="hidden sm:block">
                <h1 className="text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">IEEE Women In Engineering</h1>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-tight font-medium">CITNC Affinity Group</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">IEEE Women In Engineering</h1>
                <p className="text-[10px] text-gray-600 leading-tight font-medium">CITNC Affinity Group</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={item.action}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >{/* Desktop Back Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="hidden md:flex items-center gap-2 hover:bg-purple-50 text-gray-700 hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                aria-label="Back to home"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back</span>
              </Button>
              
              {/* Mobile Back Button and Menu Toggle */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-1.5 text-gray-700 hover:text-purple-600 transition-colors px-2.5 py-1.5 border border-purple-200 rounded-lg focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                  aria-label="Back to home"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm font-medium">Back</span>
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-purple-600 transition-colors p-2 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-lg"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
              
              {/* Join Us Button - hidden on mobile, shown on desktop */}
              <Button 
                size="sm" 
                onClick={() => {
                  navigate('/', { state: { scrollTo: 'contact' } });
                }}
                className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg font-semibold text-sm focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
              >
                Join Us
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-purple-100"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="block w-full text-left py-2.5 px-4 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate('/', { state: { scrollTo: 'contact' } });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2.5 px-4 mt-2 text-sm font-semibold text-purple-600 hover:bg-purple-50 rounded-md transition-colors border-t border-purple-100 pt-4"
              >
                Join Us
              </button>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-hidden">
        {/* Animated background elements - using CSS animations for better performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 -left-10 sm:left-10 w-64 sm:w-72 h-64 sm:h-72 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/4 sm:top-1/3 -right-10 sm:right-10 md:right-20 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br from-pink-200/50 to-purple-200/50 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-2xl flex items-center justify-center mb-8 border-4 border-purple-100"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ duration: 0.3 }}
            >
              <img src={wieLogo} alt="IEEE Women In Engineering CITNC logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-lg rounded-full text-purple-600 text-xs sm:text-sm font-semibold mb-6 border border-purple-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span>Empowering Women Engineers</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight uppercase">
              Women in Engineering
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light">
              Cambridge Institute of Technology North Campus - Empowering women engineers through community, mentorship and opportunity.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById('wie-content');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] text-base font-semibold focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
              >
                Discover More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Modern wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 sm:h-28 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Content Sections */}
      <div id="wie-content">
        <div id="wie-about">
          <About />
        </div>
        <Pillars />
        <div id="wie-events">
          <Events />
        </div>
        <div id="wie-benefits">
          <Benefits />
        </div>
        <div id="wie-team">
          <Team />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/65 backdrop-blur-sm flex items-center justify-center">
                <img src={wieLogo} alt="WIE logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold">IEEE Women In Engineering</h3>
                <p className="text-xs text-white/80">CITNC Affinity Group</p>
              </div>
            </div>
            <p className="text-sm text-white/90 mb-2">
              Cambridge Institute of Technology North Campus
            </p>
            <p className="text-xs text-white/70">
              © 2026 IEEE WIE Student Branch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WIELanding;

import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import wieLogo from "@/assets/affinity/IEEE WIE SOCIETY LOGO.png";
import About from "./About";
import Pillars from "./Pillars";
import Events from "./Events";
import Benefits from "./Benefits";
import Team from "./Team";

const WIELanding = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <>
      <Helmet>
        <title>Women in Engineering (WIE) | IEEE Student Branch CITNC</title>
        <meta name="description" content="IEEE Women in Engineering (WIE) at CITNC - Empowering women in engineering and technology. Join our community, attend workshops, and build your technical career." />
        <meta name="keywords" content="Women in Engineering, WIE, IEEE WIE, women in tech, CITNC, Cambridge Institute of Technology, female engineers, tech diversity, women empowerment, STEM women" />
        <link rel="canonical" href="https://ieee.citnc.co.in/wie" />
        <meta property="og:title" content="Women in Engineering (WIE) | IEEE CITNC" />
        <meta property="og:description" content="Empowering women in engineering and technology through IEEE WIE at Cambridge Institute of Technology North Campus" />
        <meta property="og:url" content="https://ieee.citnc.co.in/wie" />
      </Helmet>
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
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={wieLogo} alt="WIE logo" className="h-10 sm:h-12 w-auto object-contain" />
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">IEEE WIE</h1>
                <p className="text-xs text-gray-600 leading-tight font-medium">Women In Engineering</p>
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
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="hidden sm:flex items-center gap-2 hover:bg-purple-50 text-gray-700 hover:text-purple-700"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back</span>
              </Button>
              <Button 
                size="sm" 
                onClick={() => {
                  navigate('/', { state: { scrollTo: 'contact' } });
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg font-semibold text-sm"
              >
                Join Us
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-2xl flex items-center justify-center mb-8 border-4 border-purple-100"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={wieLogo} alt="WIE logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-lg rounded-full text-purple-600 text-sm font-semibold mb-6 border border-purple-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span>Empowering Women Engineers</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight uppercase">
              Women in Engineering
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light">
              Cambridge Institute of Technology North Campus — empowering women engineers through community, mentorship and opportunity.
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[180px] text-base font-semibold"
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
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <img src={wieLogo} alt="WIE logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold">IEEE WIE</h3>
                <p className="text-xs text-white/80">Women In Engineering</p>
              </div>
            </div>
            <p className="text-sm text-white/90 mb-2">
              Cambridge Institute of Technology North Campus
            </p>
            <p className="text-xs text-white/70">
              © 2025 IEEE WIE Student Branch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WIELanding;

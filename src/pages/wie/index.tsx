import { Link, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import wieLogo from "@/assets/affinity/IEEE WIE SOCIETY LOGO.png";
import DecorativeAnimations from "@/components/DecorativeAnimations";

const WIELanding = () => {
  const navigate = useNavigate();

  const navItems = [
    { to: "about", label: "About" },
    { to: "pillars", label: "Our Core Pillars" },
    { to: "events", label: "Our Events" },
    { to: "benefits", label: "Benefits" },
    { to: "team", label: "Meet The Team" },
    { to: "contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DecorativeAnimations />
      
      {/* Header Section */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b-2 border-purple-100 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="flex items-center gap-2 hover:bg-purple-50 text-gray-700 hover:text-purple-700"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline font-semibold">Back to Main Site</span>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-2 shadow-md">
                <img src={wieLogo} alt="WIE logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">IEEE WIE</h1>
                <p className="text-xs text-gray-600 leading-tight font-medium">Women In Engineering</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="contact">
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg font-semibold">
                  Join WIE
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-hidden pt-20">
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

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
              Women In Engineering
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
              <Link to="about">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[180px] text-base font-semibold"
                >
                  Discover More
                </Button>
              </Link>
              <Link to="contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white border-2 border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 shadow-lg hover:shadow-xl min-w-[180px] text-base font-semibold"
                >
                  Join Our Community
                </Button>
              </Link>
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

      {/* Navigation Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Explore WIE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link to={item.to}>
                  <Button
                    variant="outline"
                    className="bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 hover:border-purple-400 text-purple-700 hover:text-purple-900 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                  >
                    {item.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl border-2 border-purple-100 p-8 sm:p-10 md:p-12"
          >
            <Outlet />
          </motion.div>
        </div>
      </section>

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

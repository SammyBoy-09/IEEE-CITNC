import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ieeeLogo from "@/assets/ieee-logo.png";
import citncLogo from "@/assets/citnc-logo.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | null, targetId: string) => {
    // If called from an anchor click, prevent default navigation
    if (e) e.preventDefault();

    // If we're not on the home page, navigate there with hash first
    if (location.pathname !== "/") {
      // navigate to home with hash; the effect below will handle scrolling after navigation
      navigate(`/${targetId}`);
      return;
    }

    setActiveSection(targetId);
    const element = document.querySelector(targetId);
    if (element) {
      // account for fixed header by scrolling a bit above
      const headerOffset = 80; // approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#guidelines", "#events", "#team", "#benefits"];
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (accounting for header height)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When the location hash/path changes (e.g. navigate to "/#guidelines"), scroll to the element
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash; // includes the '#'
      // small delay to ensure content is mounted
      setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) {
          // compute header offset dynamically if possible
          const headerEl = document.querySelector('header');
          const headerOffset = headerEl ? (headerEl as HTMLElement).offsetHeight : 80;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setActiveSection(targetId);
        }
      }, 50);
    }
  }, [location]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#team", label: "Team" },
    { href: "#affinity", label: "Societies" },
    { href: "#benefits", label: "Benefits" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          <motion.div 
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img 
              src={ieeeLogo} 
              alt="IEEE Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto flex-shrink-0"
              whileHover={{ scale: 1.03, }}
              transition={{ duration: 0.3 }}
            />
            <div className="hidden sm:block">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight">Student Branch</h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight" style={{ marginTop: -2 }}>Cambridge Institute of Technology North Campus</p>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium transition-colors cursor-pointer relative group ${
                  activeSection === item.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {item.label}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-glow min-h-[36px] px-4"
                onClick={() => navigate('/guidelines')}
              >
                Join Us
              </Button>
            </motion.div>
          </nav>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden min-h-[44px] min-w-[44px]"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </motion.header>
  );
};

export default Header;

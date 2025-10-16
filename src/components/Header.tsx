import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import ieeeLogo from "@/assets/ieee-logo.png";
import citncLogo from "@/assets/citnc-logo.png";

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#team", label: "Team" },
    { href: "#benefits", label: "Benefits" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img 
              src={ieeeLogo} 
              alt="IEEE Logo" 
              className="h-12 w-auto"
              whileHover={{ scale: 1.03, }}
              transition={{ duration: 0.3 }}
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground">IEEE Student Branch</h1>
              <p className="text-xs text-muted-foreground">Cambridge Institute of Technology North Campus</p>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
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
                className="bg-primary hover:bg-primary-glow"
              >
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Join Us</a>
              </Button>
            </motion.div>
          </nav>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

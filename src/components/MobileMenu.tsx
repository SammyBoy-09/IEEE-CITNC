import { X, Home, Info, Calendar, Users, Gift, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { LucideIcon } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, activeSection, onNavigate }: MobileMenuProps) => {
  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: Info },
    { href: "#events", label: "Events", icon: Calendar },
    { href: "#team", label: "Team", icon: Users },
    { href: "#benefits", label: "Benefits", icon: Gift },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  // Staggered animation variants
  const wrapperVariants = {
    open: {
      transition: {
        when: "beforeChildren" as const,
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        when: "afterChildren" as const,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const iconVariants = {
    open: { scale: 1, rotate: 0 },
    closed: { scale: 0, rotate: -180 },
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isOpen]);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onNavigate(e, href);
    // Small delay before closing to ensure navigation completes
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed inset-0 w-screen h-screen z-[70] overflow-hidden flex items-start justify-center"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl rounded-b-2xl">
              {/* Header */}
              <div className="flex-shrink-0 flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-gray-900 dark:text-white" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="py-5">
                <ul className="space-y-2 px-6">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleNavigate(e, item.href)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                            activeSection === item.href
                              ? "bg-blue-600 text-white shadow-md"
                              : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavigate(e, "#contact")}
                  className="block w-full px-6 py-3 bg-blue-600 text-white text-center text-base font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Join Us Today
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

const container = (stagger = 0.08) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: stagger,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", stagger = 0.08 }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.12 });

  return (
    <motion.section
      ref={ref as any}
      className={className}
      variants={container(stagger)}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Wrap direct children so they receive the item variants for nice staggering */}
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return (
          <motion.div variants={item} className="w-full">
            {child}
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default AnimatedSection;

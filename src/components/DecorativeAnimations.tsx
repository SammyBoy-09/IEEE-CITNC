import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Sparkles } from "lucide-react";

const float = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 6, -6, 0],
    transition: { duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] },
  },
};

const DecorativeAnimations: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="hidden md:block absolute -left-8 top-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary-glow/10 blur-2xl"
        {...float}
      />

      <motion.div
        className="absolute right-8 top-32 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary/60"
        {...float}
      >
        <Star className="h-8 w-8 text-white/40" />
      </motion.div>

      <motion.div
        className="absolute left-12 bottom-24 w-20 h-20 rounded-full bg-gradient-to-tr from-purple-100/10 to-pink-100/10 flex items-center justify-center"
        animate={{ y: [4, -8, 4], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: [0.42, 0, 0.58, 1], delay: 1 }}
      >
        <Award className="h-10 w-10 text-primary/40" />
      </motion.div>

      <motion.div
        className="absolute right-24 bottom-12 w-28 h-28 rounded-full bg-gradient-to-br from-primary/6 to-primary-glow/6 blur-3xl"
        animate={{ y: [0, -14, 0], scale: [0.98, 1.03, 0.98], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
      />

      <motion.div
        className="absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 flex items-center justify-center"
        animate={{ y: [0, 10, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
      >
        <Sparkles className="h-6 w-6 text-primary/40" />
      </motion.div>
    </div>
  );
};

export default DecorativeAnimations;

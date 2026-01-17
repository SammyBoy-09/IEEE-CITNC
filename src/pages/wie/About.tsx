import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-100 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border border-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 flex-shrink-0" />
            <span className="text-purple-600 text-xs sm:text-sm font-medium leading-tight">About WIE</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight">
            WHO WE ARE
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 sm:mb-8 px-2 leading-relaxed">
            Empowering Women Engineers. Building Leaders. Shaping the Future.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8" />
        </motion.div>
        
        <motion.div 
          className="max-w-5xl mx-auto space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">IEEE Women in Engineering (WIE)</strong> is one of the world's largest international professional organizations dedicated to inspiring, supporting, and empowering women engineers and scientists across all disciplines. As a global network within IEEE, WIE promotes women's participation in STEM fields while fostering innovation and leadership.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            At CITNC, our WIE affinity group creates a vibrant, inclusive community through technical workshops, mentorship programs, leadership conferences, and outreach initiatives. We build technical strength, nurture leadership qualities, and inspire the next generation of women engineers to shape technology for humanity.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
            <em>When women thrive in engineering, innovation becomes richer, solutions become more inclusive, and the future becomes brighter.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

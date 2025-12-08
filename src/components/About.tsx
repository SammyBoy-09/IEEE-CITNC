import { Sparkles, Users, Trophy, Lightbulb, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
            <span className="text-primary text-xs sm:text-sm font-medium leading-tight">About IEEE</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            WHO WE ARE
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6 sm:mb-8 px-2 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empowering Innovators. Building Leaders. Shaping the Future.
          </motion.p>
          <motion.div 
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={headerVisible ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The IEEE Student Branch at Cambridge Institute of Technology, North Campus is a dynamic and inclusive community of engineering students driven by a passion for technology, innovation, and leadership. We aim to bridge the gap between academics and industry by providing a platform for students to collaborate on cutting-edge projects, participate in global IEEE initiatives, and develop essential professional skills. Our branch nurtures curiosity, creativity, and competence — empowering future engineers to make a lasting impact on society.
          </motion.p>
        </motion.div>
        
        {/* Four Pillars */}
        <div ref={pillarsRef} className="mb-16 sm:mb-20">
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10 sm:mb-12 px-2 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={pillarsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Pillars
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 max-w-7xl mx-auto">
            {/* Collaboration */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={pillarsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg flex-shrink-0">
                    <Users className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Collaboration
                  </h4>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    Work hand-in-hand with like-minded students, mentors, and professionals across diverse domains. Participate in team-based projects, IEEE hackathons, and interdisciplinary challenges that foster teamwork and innovation.</p>
                  
                  <div className="mt-5 sm:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </motion.div>
            
            {/* Innovation */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={pillarsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg flex-shrink-0">
                    <Lightbulb className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Innovation
                  </h4>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    Explore the frontier of technology through workshops, competitions, and research initiatives in areas like AI, IoT, robotics, and data science. Turn your ideas into impactful solutions guided by experts and industry leaders.
                  </p>
                  
                  <div className="mt-5 sm:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </motion.div>
            
            {/* Skill Development */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={pillarsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg flex-shrink-0">
                    <Rocket className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Skill Development
                  </h4>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    Sharpen your technical, analytical, and leadership skills through continuous learning opportunities — including technical sessions, professional training, and mentorship programs designed to prepare you for real-world challenges.
                  </p>
                  
                  <div className="mt-5 sm:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </motion.div>
            
            {/* Global Exposure */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={pillarsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-6 sm:p-8 h-full flex-col flex">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg flex-shrink-0">
                    <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Global Exposure
                  </h4>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    Connect with IEEE's worldwide community of innovators, attend international conferences, and gain visibility on a global stage. Experience the true spirit of IEEE by engaging in initiatives that span continents and cultures.
                  </p>
                  
                  <div className="mt-5 sm:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Vision */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={pillarsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-primary/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 sm:mb-6 px-2 leading-tight">
              Our Vision
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-5 sm:mb-6" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
              To create a culture of learning, leadership, and innovation where students not only master technology but use it responsibly to build a better and more connected world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

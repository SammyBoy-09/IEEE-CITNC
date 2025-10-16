import { Calendar, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const EventSchedule = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation({ threshold: 0.1 });

  const events = [
    {
      title: "IEEE Inauguration",
      description: "Grand opening ceremony of the IEEE Student Branch with distinguished guests",
      status: "Upcoming"
    },
    {
      title: "Technical Workshops",
      description: "Hands-on workshops on cutting-edge technologies and tools",
      status: "Upcoming"
    },
    {
      title: "Hackathons",
      description: "24-hour coding challenges to solve real-world problems",
      status: "Upcoming"
    },
    {
      title: "Guest Lectures",
      description: "Industry experts sharing insights on latest tech trends",
      status: "Upcoming"
    },
    {
      title: "Project Competitions",
      description: "Showcase your innovative projects and compete with peers",
      status: "Upcoming"
    },
    {
      title: "Skill Development Programs",
      description: "Comprehensive training sessions to enhance technical and soft skills",
      status: "Upcoming"
    },
  ];

  return (
    <section id="events" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Events & Activities</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Events
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"
            initial={{ width: 0 }}
            animate={headerVisible ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Upcoming events and activities organized by IEEE Student Branch
          </motion.p>
        </motion.div>
        
        <div ref={eventsRef} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={eventsVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
            >
              <Card className="p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-500 group border-2 border-primary/20 hover:border-primary/60 h-full relative overflow-hidden">
                {/* Gradient glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Calendar className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span className="text-primary text-xs font-medium">{event.status}</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Animated bottom accent line */}
                  <motion.div 
                    className="mt-6 h-1 bg-gradient-to-r from-primary to-primary-glow"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;

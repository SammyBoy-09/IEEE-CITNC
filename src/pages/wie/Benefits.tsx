import { Card } from "../../components/ui/card";
import { TrendingUp, Users, Wrench, Trophy, Globe, Heart, GraduationCap, Lightbulb, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { 
    title: "Career Growth & Leadership", 
    description: "Leadership opportunities through IEEE-WIE chapters",
    detail: "Skill development in communication, management, and teamwork",
    icon: TrendingUp 
  },
  { 
    title: "Networking & Mentorship", 
    description: "Connect with professionals, researchers, and students worldwide",
    detail: "Access to mentors from industry and academia",
    icon: Users 
  },
  { 
    title: "Technical & Professional Development", 
    description: "Workshops, seminars, hackathons, and webinars",
    detail: "Exposure to latest technologies and research trends",
    icon: Wrench 
  },
  { 
    title: "Opportunities & Recognition", 
    description: "Scholarships, grants, awards, and competitions",
    detail: "Platform to showcase projects and innovations",
    icon: Trophy 
  },
  { 
    title: "Global Exposure", 
    description: "International conferences and IEEE events",
    detail: "Collaboration with global IEEE members",
    icon: Globe 
  },
  { 
    title: "Supportive Community", 
    description: "Encourages diversity and inclusion in engineering",
    detail: "Motivating environment, especially for women in STEM",
    icon: Heart 
  },
  { 
    title: "Academic & Industry Advantage", 
    description: "Strengthens resume and professional profile",
    detail: "Better internship, research, and placement opportunities",
    icon: GraduationCap 
  },
  { 
    title: "Entrepreneurship Support", 
    description: "Guidance for startups, innovation, and product development",
    detail: "Exposure to funding and incubation opportunities",
    icon: Lightbulb 
  },
  { 
    title: "Research & Publication Support", 
    description: "Motivation and guidance to publish papers in IEEE journals",
    detail: "Research collaboration opportunities",
    icon: FileText 
  },
];

const Benefits = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border border-purple-200 shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 flex-shrink-0" />
            <span className="text-purple-600 text-xs sm:text-sm font-medium leading-tight">Why Join WIE</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2 leading-tight">
            Benefits of Joining WIE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Empowering women engineers with opportunities, resources, and a supportive community.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="h-full"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-500 border border-purple-100 hover:border-purple-400 bg-white group relative overflow-hidden flex flex-col">
                  {/* Gradient glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:text-purple-600 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 mb-4 flex-grow">
                      <p className="leading-relaxed">• {benefit.description}</p>
                      <p className="leading-relaxed">• {benefit.detail}</p>
                    </div>

                    {/* Animated bottom accent line */}
                    <div className="mt-auto pt-4">
                      <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded w-12 group-hover:w-20 transition-all duration-300" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

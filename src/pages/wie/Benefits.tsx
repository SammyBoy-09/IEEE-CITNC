import { Card } from "../../components/ui/card";
import { TrendingUp, Users, Wrench, Trophy, Globe, Heart, GraduationCap, Lightbulb, FileText } from "lucide-react";
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 mb-4">
            <span className="text-purple-600 text-xs sm:text-sm font-medium">Why Join WIE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            BENEFITS OF JOINING WIE
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering women engineers with opportunities, resources, and a supportive community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 bg-white group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="leading-relaxed">• {benefit.description}</p>
                    <p className="leading-relaxed">• {benefit.detail}</p>
                  </div>
                  <div className="mt-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
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

import { Users, Lightbulb, Wrench, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    id: 1,
    title: "Inspire",
    icon: Users,
    content: (
      <>
        <p className="text-sm sm:text-base mb-4 leading-relaxed">
          Igniting curiosity in STEM among young girls through hands-on activities, mentorship, and real-world engineering applications.
        </p>
        <p className="text-sm sm:text-base font-semibold text-purple-600">
          STAR Program - Sparking early motivation and confidence to pursue STEM careers.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Engage",
    icon: Lightbulb,
    content: (
      <>
        <p className="text-sm sm:text-base mb-4 leading-relaxed">
          Building strong connections through international conferences, workshops, and networking events that unite students and professionals.
        </p>
        <p className="text-sm sm:text-base font-semibold text-purple-600">
          Global Leadership Conferences - Fostering active participation and community bonds.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Encourage",
    icon: Wrench,
    content: (
      <>
        <p className="text-sm sm:text-base mb-4 leading-relaxed">
          Uplifting women in STEM by showcasing role models, celebrating achievements, and breaking stereotypes through digital campaigns.
        </p>
        <p className="text-sm sm:text-base font-semibold text-purple-600">
          Women Leaders Showcase - Creating a culture where women feel valued and motivated.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Empower",
    icon: Globe,
    content: (
      <>
        <p className="text-sm sm:text-base mb-4 leading-relaxed">
          Enabling women to thrive through professional development programs, technical training, and leadership courses.
        </p>
        <p className="text-sm sm:text-base font-semibold text-purple-600">
          Career Development - Ensuring women grow, lead, and excel with long-term success.
        </p>
      </>
    ),
  },
];

const Pillars = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
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
            <span className="text-purple-600 text-xs sm:text-sm font-medium leading-tight">Our Mission</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight">
            CORE PILLARS OF WIE
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {pillars.map((p, index) => {
          const Icon = p.icon;
          return (
            <motion.article 
              key={p.id} 
              className="relative rounded-2xl p-6 pt-10 bg-white shadow-md border border-purple-100 hover:shadow-xl transition-all duration-300 h-full group focus-within:ring-2 focus-within:ring-purple-400 focus-within:ring-offset-2 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-2 flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{p.title}</h3>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {p.content}
                </div>
              </div>

              <div className="mt-6">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded group-hover:w-20 transition-all duration-300" />
              </div>
            </motion.article>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;

import { motion } from "framer-motion";
import wieLogo from "@/assets/affinity/IEEE WIE SOCIETY LOGO.png";
import nanoLogo from "@/assets/affinity/IEEE Nanotechnology Logo.png";
import sensorsLogo from "@/assets/affinity/IEEE Sensors council Logo.png";
import systemsLogo from "@/assets/affinity/IEEE Systems council Logo.png";
import transportLogo from "@/assets/affinity/IEEE Transportation and Electrification Council Logo.png";

const groups = [
  {
    id: 1,
    title: "IEEE - Women In Engineering (WIE)",
    color: "from-purple-600 to-purple-400",
    description: "Championing women engineers through mentorship, events and leadership.",
    logo: wieLogo,
  },
  {
    id: 2,
    title: "IEEE - Nanotechnology Council",
    color: "from-teal-500 to-cyan-400",
    description: "Exploring nanoscale innovations and cross-disciplinary research.",
    logo: nanoLogo,
  },
  {
    id: 3,
    title: "IEEE - Sensors Council",
    color: "from-amber-500 to-yellow-400",
    description: "Focus on sensing technologies and embedded systems.",
    logo: sensorsLogo,
  },
  {
    id: 4,
    title: "IEEE - Systems Council",
    color: "from-sky-600 to-blue-400",
    description: "Systems engineering, integration and architecture discussions.",
    logo: systemsLogo,
  },
  {
    id: 5,
    title: "IEEE - Transportation & Electrification",
    color: "from-emerald-600 to-lime-400",
    description: "Mobility, EVs and sustainable transport electrification.",
    logo: transportLogo,
  },
];

const AffinityGroups = () => {
  return (
    <section id="affinity" className="min-h-screen py-16 sm:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Modern asymmetric grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {groups.map((g, idx) => {
            return (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 100 }}
                className="group h-full"
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br ${g.color} p-6 sm:p-8 text-white flex flex-col`}
                  style={{
                    minHeight: "320px"
                  }}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Animated gradient orb */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.5
                    }}
                  />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Header with logo */}
                    <div className="flex items-start gap-4 sm:gap-6 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-lg"
                      >
                        {g.logo ? (
                          <img src={g.logo} alt={`${g.title} logo`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-lg" />
                        ) : (
                          <span className="text-xl sm:text-2xl font-bold">{g.title.split(" ").slice(0,2).map(s=>s[0]).join("")}</span>
                        )}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 leading-tight">{g.title}</h3>
                        <div className="h-0.5 w-16 bg-white/40 rounded-full" />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1 mb-4">
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed">{g.description}</p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      {g.id === 1 ? (
                        <motion.a
                          href="/wie"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <span>Explore WIE</span>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </motion.svg>
                        </motion.a>
                      ) : (
                        <motion.div
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm sm:text-base font-semibold border border-white/30 cursor-not-allowed opacity-75"
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          <span>Coming Soon</span>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AffinityGroups;

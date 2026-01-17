import { Card } from "../../components/ui/card";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import WIEEventModal from "./WIEEventModal";
import poster1 from "@/assets/events/Poster Presentation-1.jpeg";
import poster2 from "@/assets/events/Poster Presentation-2.jpeg";
import poster3 from "@/assets/events/Poster Presentation-3.webp";
import chess1 from "@/assets/events/CHESS.jpeg";
import chess2 from "@/assets/events/CHESS-1.jpeg";

const eventCards = [
  {
    title: "Poster Presentation",
    desc: "Showcase innovative research projects and ideas through creative poster presentations and academic displays.",
    fullDesc: "Knowledge on display! Our recent Poster Presentation event brought together the brightest minds at CIT-NC to showcase their research and technical innovation. From intricate designs to insightful discussions with our faculty, the energy was all about pushing the boundaries of engineering.",
    heading: "Knowledge on display!",
    images: [poster1, poster2, poster3],
    isClickable: true,
    date: "29th December 2025",
    status: "completed",
  },
  {
    title: "Chess Tournament",
    desc: "Strategic chess competition to enhance critical thinking, problem-solving skills and sportsmanship.",
    fullDesc: "Checkmate your limits! The WIE Chess Tournament brought together strategic thinkers from across CIT-NC for an intense battle of wits and tactics. With every move calculated and every strategy tested, our participants demonstrated exceptional critical thinking and sportsmanship. The tournament wasn't just about winning—it was about fostering mental agility, patience, and the kind of strategic mindset that defines great engineers.",
    heading: "Checkmate your limits!",
    images: [chess1, chess2],
    isClickable: true,
    date: "29th December 2025",
    status: "completed",
  },
  {
    title: "Women Empowerment & Awareness Programs",
    desc: "Panels, mentorship circles and awareness initiatives that celebrate and support women in engineering.",
  },
  {
    title: "Social Impact & Outreach Activities",
    desc: "Community service projects and outreach to inspire the next generation of engineers.",
  },
  {
    title: "Competitions & Hackathons",
    desc: "Team challenges, hackathons and competitions to showcase innovation and problem-solving.",
  },
  {
    title: "Networking & Collaboration",
    desc: "Events and mixers to foster collaboration, build professional networks, and create peer support.",
  },
];

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    images: string[];
    title: string;
    date: string;
    description: string;
    heading?: string;
  }>({ images: [], title: "", date: "", description: "" });

  const handleCardClick = (event: typeof eventCards[0]) => {
    if (!event.isClickable) return;
    
    setModalData({
      images: event.images || [],
      title: event.title,
      date: event.date || "Upcoming Event",
      description: event.fullDesc || event.desc,
      heading: event.heading,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-purple-50 to-white">
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
              <span className="text-purple-600 text-xs sm:text-sm font-medium leading-tight">Events & Activities</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2 leading-tight">Our Events</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">Explore our completed events and stay tuned for details on the upcoming ones.</p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eventCards.map((c, index) => {
              return (
                <motion.div
                  key={c.title}
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
                    scale: c.isClickable ? 1.02 : 1,
                    transition: { duration: 0.3 } 
                  }}
                  onClick={() => handleCardClick(c)}
                  className={`h-full ${c.isClickable ? "cursor-pointer" : ""}`}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-500 group border border-purple-100 hover:border-purple-400 h-full relative overflow-hidden flex flex-col">
                    {/* Gradient glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex-grow flex flex-col">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                            {c.title}
                          </h3>
                          {c.isClickable && (
                            <span className="text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block mt-1">
                              • Click for details
                            </span>
                          )}
                        </div>
                        {(c.date || !c.status) && (
                          <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                            c.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {c.status === 'completed' ? '✓ ' : ''}{c.date || 'Upcoming'}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mb-4 flex-grow leading-relaxed">{c.desc}</p>

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

        <WIEEventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={modalData.images}
          title={modalData.title}
          date={modalData.date}
          description={modalData.description}
          heading={modalData.heading}
        />
      </section>
    </>
  );
};

export default Events;

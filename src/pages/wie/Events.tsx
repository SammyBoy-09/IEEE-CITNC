import { Card } from "../../components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import InaugurationTimeline from "../../components/InaugurationTimeline";
import poster1 from "@/assets/events/Poster Presentation-1.jpeg";
import poster2 from "@/assets/events/Poster Presentation-2.jpeg";
import poster3 from "@/assets/events/Poster Presentation-3.jpeg";
import chess1 from "@/assets/events/CHESS.jpeg";
import chess2 from "@/assets/events/CHESS-1.jpeg";

const eventCards = [
  {
    title: "Poster Presentation",
    desc: "Showcase innovative research projects and ideas through creative poster presentations and academic displays.",
    fullDesc: "Knowledge on display! Our recent Poster Presentation event brought together the brightest minds at CIT-NC to showcase their research and technical innovation. From intricate designs to insightful discussions with our faculty, the energy was all about pushing the boundaries of engineering.",
    images: [poster1, poster2, poster3],
    isClickable: true,
    date: "29th December 2025",
    status: "completed",
  },
  {
    title: "Chess Tournament",
    desc: "Strategic chess competition to enhance critical thinking, problem-solving skills and sportsmanship.",
    fullDesc: "Checkmate your limits! The WIE Chess Tournament brought together strategic thinkers from across CIT-NC for an intense battle of wits and tactics. With every move calculated and every strategy tested, our participants demonstrated exceptional critical thinking and sportsmanship. The tournament wasn't just about winning—it was about fostering mental agility, patience, and the kind of strategic mindset that defines great engineers.",
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
  {
    title: "Annual Flagship Events",
    desc: "Major yearly conferences, summits and flagship events highlighting WIE achievements and initiatives.",
  },
];

const Events = () => {
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    images: string[];
    title: string;
    date: string;
    description: string;
  }>({ images: [], title: "", date: "", description: "" });

  // Gallery animation variants (staggered entrance + hover scale)
  const galleryVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const handleCardClick = (event: typeof eventCards[0]) => {
    if (!event.isClickable) return;
    
    setModalData({
      images: event.images || [],
      title: event.title,
      date: event.date || "Upcoming Event",
      description: event.fullDesc || event.desc,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-16 sm:py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">All events listed below are upcoming — stay tuned for dates and registration details.</p>
          </div>

          <div ref={eventsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventCards.map((c, index) => {
              return (
                <motion.div
                  key={c.title}
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
                  onClick={() => handleCardClick(c)}
                  className={c.isClickable ? "cursor-pointer" : ""}
                >
                  <Card className={`p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-500 group border-2 border-purple-100 hover:border-purple-400 h-full relative overflow-hidden ${c.isClickable ? 'hover:scale-[1.02]' : ''}`}>
                    {/* Gradient glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                          {c.title}
                          {c.isClickable && (
                            <span className="ml-2 text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              • Click for details
                            </span>
                          )}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          c.status === 'completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {c.date || 'Upcoming'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>

                      {/* Animated bottom accent line */}
                      <motion.div 
                        className="mt-4 h-1 bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <InaugurationTimeline
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={modalData.images}
          title={modalData.title}
          date={modalData.date}
          description={modalData.description}
          showTimeline={false}
        />
      </section>
    </>
  );
};

export default Events;

import { Calendar, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import InaugurationTimeline from "./InaugurationTimeline";
import kscst1 from "@/assets/events/Ribbon Cutting IPR.png";
import kscst2 from "@/assets/events/LIGHTING LAMP.png";
import kscst3 from "@/assets/events/Appreciation Certificate.png";
import membership1 from "@/assets/events/Membership drive-1.png";
import membership2 from "@/assets/events/Membership drive-2.png";
import membership3 from "@/assets/events/Membership drive-3.png";
import inaugural1 from "@/assets/events/Inauguration lamp-SB.png";
import inaugural2 from "@/assets/events/Addressing the gathering .png";
import inaugural3 from "@/assets/events/Falicitation .png";
import techTalk1 from "@/assets/events/Tech Talk.jpg";
import techTalk2 from "@/assets/events/Yogabalaji-1.png";
import techTalk3 from "@/assets/events/Felicitation to yogabalaji.png";
import startup1 from "@/assets/events/Startup idea-GOWRISH H B.jpg";
import startup2 from "@/assets/events/Gowrish explaination.png";
import startup3 from "@/assets/events/Hell Craft tech.png";

const EventSchedule = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [timelineData, setTimelineData] = useState<{
    images: string[];
    title: string;
    date: string;
    description: string;
    showTimeline?: boolean;
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

  const events = [
    {
      title: "KSCST Cell Inauguration",
      description: "Inauguration of the KSCST IPR Cell to promote innovation and IP awareness",
      status: "17th October 2025",
      images: [kscst1, kscst2, kscst3],
      isClickable: true
    },
    {
      title: "Membership Drive",
      description: `The IEEE Student Branch of Cambridge Institute of Technology – North Campus conducted its IEEE Membership Drive on 28th October, aimed at introducing students to the world’s largest technical professional organization. The session highlighted the benefits of IEEE membership, including access to global resources, technical societies, research opportunities, and professional development pathways. With an engaging presentation and active student participation, the event successfully motivated aspiring engineers to join the IEEE community and unlock new avenues for learning, innovation, and career growth.`,
      status: "28th October 2025",
      images: [membership1, membership2, membership3],
      isClickable: true
    },
    {
      title: "Inauguration-Student Branch",
      description: "Grand opening ceremony of the IEEE Student Branch with distinguished guests",
      status: "14th November 2025",
      images: [inaugural1, inaugural2, inaugural3],
      isClickable: true
    },
    {
      title: "Decoding Data Science",
      description: "An enlightening technical session featuring Yogabalaji, who delved into the fascinating world of data science and artificial intelligence. The event covered cutting-edge trends, practical applications, and hands-on approaches to solving real-world problems using data-driven methodologies. Participants explored machine learning algorithms, data analytics techniques, and AI frameworks, gaining valuable insights into the rapidly evolving field of data science and its impact on modern technology.",
      status: "Upcoming - 15th December 2025, 10am",
      images: [techTalk1, techTalk2, techTalk3],
      isClickable: true
    },
    {
      title: "From Idea to Startup",
      description: "An inspiring session where Gowrish H B shares his entrepreneurial journey and insights on transforming innovative ideas into successful startups. The event featured Hell Craft Tech, showcasing real-world applications of technology in building and scaling a startup from concept to execution. Participants gained valuable knowledge on ideation, market validation, product development, and the challenges faced by early-stage entrepreneurs.",
      status: "Upcoming - 15th December 2025, 2pm",
      images: [startup1, startup2, startup3],
      isClickable: true
    },
    {
      title: "Technical",
      description: "Hands-on workshops on cutting-edge technologies and tools",
      status: "Upcoming",
      isClickable: false
    },
    {
      title: "Non-Technical",
      description: "24-hour coding challenges to solve real-world problems",
      status: "Upcoming",
      isClickable: false
    },
    {
      title: "Administrative",
      description: "Industry experts sharing insights on latest tech trends",
      status: "Upcoming",
      isClickable: false
    },
  ];

  return (
    <section id="events" className="py-16 sm:py-20 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-5 sm:top-10 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"
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
            <span className="text-primary text-xs sm:text-sm font-medium leading-tight">Events & Activities</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Events
          </motion.h2>
          <motion.div 
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-5 sm:mb-6"
            initial={{ width: 0 }}
            animate={headerVisible ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Upcoming events and activities organized by IEEE Student Branch
          </motion.p>
        </motion.div>
        
        <div ref={eventsRef} className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5 sm:gap-6 items-stretch auto-rows-fr">
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
              onClick={() => {
                if (!event.isClickable) return;

                // If KSCST event clicked, load timelineData with images and detailed description
                if (event.title === "KSCST IPR Cell Inauguration") {
                  setTimelineData({
                    // Pass the event images into the timeline modal
                    images: event.images ?? [],
                    title: event.title,
                    date: event.status,
                    description: `The IPR (Intellectual Property Rights) Inauguration Program in collaboration with Karnataka State Council for Science and Technology (KSCST) was successfully conducted at CITNC, Bengaluru on 7th October in the Seminar Hall. The program aimed to create awareness among students and faculty about patents, design registration, and the significance of Intellectual Property Rights in innovation and research.

IPR Workshop

Session 1: 11:00 AM – 1:00 PM

Topic: Comprehensive Guide to Patent Filing and Protection
Speaker: Dr. Sarasija Padmanabhan,
Patent Agent, WIPO Tutor, and Consultant to KSCST

Dr. Sarasija provided a detailed explanation of the patenting process, mandatory documentation, types of patents, and strategies for safeguarding intellectual work. She also discussed case studies and encouraged participants to pursue patentable innovations.

Session 2: 2:00 PM – 3:00 PM

Topic: Importance of Design Registration
Speaker: Mr. Vineeth Kumar S. R,
Project Engineer, KSCST

He explained the importance of design protection, differences between patent and design registration, and real-time applications in industries. The session helped students understand how design registration protects creativity and ensures commercial rights.

The inauguration of the IPR Cell in association with KSCST at CITNC was highly informative and impactful. It strengthened awareness about patents, designs, and copyrights, and motivated students and faculty to engage actively in innovation, research, and intellectual property activities. The event marked a significant step toward building a strong research and innovation culture on campus.
`,
                    showTimeline: false
                  });

                  setIsTimelineOpen(true);
                  return;
                }

                // Membership Drive long description
                if (event.title === "Membership Drive") {
                  setTimelineData({
                    images: event.images ?? [],
                    title: event.title,
                    date: event.status,
                    description: `The IEEE Student Branch conducted a Membership Drive on 28/10/2025 to create
awareness among students about the advantages of joining IEEE. The session aimed to
guide students about membership benefits, opportunities, and the selection process for
IEEE and WIE positions.

Overview of the Session — Students were briefed about:
- Benefits of IEEE Membership
- Steps for Top 20 IEEE Members Quiz
- Instructions for applying to WIE positions (Vice-Chair, Secretary, Treasurer, Webmaster)

Benefits of IEEE Membership:
A. Research Paper Publishing (Low Cost Advantage)
IEEE members receive discounted publishing fees. Students gain access to journals,
conferences, and indexed publication platforms. Members can publish in globally
recognized venues, improving visibility and academic credibility.

B. Foreign Travel Grants
IEEE offers grants for international conferences, covering airfare, accommodation, and
registration. These opportunities help students present papers, network globally, and
explore advanced research labs.

C. Scholarships
IEEE provides scholarships for merit, leadership, and research. They support students
academically and professionally, motivating participation in projects and competitions.
`,
                    showTimeline: false
                  });

                  setIsTimelineOpen(true);
                  return;
                }

                // Inauguration of Student Branch: show description card and hide timeline
                if (event.title === "Inauguration of Student Branch") {
                  setTimelineData({
                    images: event.images ?? [],
                    title: event.title,
                    date: event.status,
                    description: `The IEEE Student Branch Inauguration Ceremony at Cambridge Institute of
 Technology – North Campus for the academic year 2025–26, conducted from
 9:00 AM to 10:00 AM, unfolded as an intellectually distinguished convocation
 that harmonised academic gravitas, institutional ambition, and IEEE’s global
 technological ethos. Far beyond a ceremonial gathering, it symbolised the
 consecration of CITNC’s long-term pedagogical vision, positioning the
 institution within a broader constellation of engineering bodies committed to
 advancing humanity through technological enlightenment. Bringing together a
 diverse cohort of students, faculty, and academic custodians, the event affirmed
 the institution’s dedication to inquiry driven innovation, ethical intellectualism,
 and multidimensional engineering leadership. Through its structured
 proceedings and dignified rituality, the inauguration crystallised IEEE’s
 ideological framework, foregrounding transdisciplinary collaboration, scientific
 integrity, professional ascension, and humanitarian technological stewardship. In
 essence, it served as a catalytic institutional proclamation, inaugurating not only
 the Student Branch hierarchy but also a unified pursuit of engineers defined by
 intellectual acuity, technocratic competence, and societal commitment, thereby
 reinforcing CITNC’s academic identity and its forward-looking trajectory of
 excellence and global relevance.

Our esteemed Chief Guest, Dr. Parameshachari B D, graced the inauguration with
an oration of extraordinary intellectual magnitude and philosophical depth. Their
presence imparted an aura of scholarly gravitas, ceremonial distinction, and
visionary foresight, elevating the event from a formal convocation to a moment of
institutional transcendence. The Chief Guest delivered a discursively rich and rhetorically resonant keynote
address, exploring the evolving frontiers of science and engineering with
exceptional eloquence. They expounded upon:
- The emergent responsibilities of the modern engineer,
- The symbiotic interplay between innovation and societal upliftment,
- And the global relevance of IEEE as a beacon of intellectual stewardship.

Through collective ambition, intellectual discipline, and unwavering integrity, the
IEEE Student Branch at CITNC now steps confidently into a future defined by
excellence, resilience, and global relevance.`,
                    showTimeline: false
                  });

                  setIsTimelineOpen(true);
                  return;
                }

                // Applied Data Science & AI session
                if (event.title === "Applied Data Science & AI") {
                  setTimelineData({
                    images: event.images ?? [],
                    title: event.title,
                    date: event.status,
                    description: `Decoding Data Science

This session features Mr. Yogabalaji G, a Decision Scientist at Mu Sigma, who shares practical insights into AI, analytics, and real-world data science applications. The talk focuses on industry-relevant knowledge, career guidance, and hands-on perspectives from an experienced professional and mentor, helping students understand how data science is applied beyond theory.`,
                    showTimeline: false
                  });

                  setIsTimelineOpen(true);
                  return;
                }

                // From Idea to Startup session
                if (event.title === "From Idea to Startup") {
                  setTimelineData({
                    images: event.images ?? [],
                    title: event.title,
                    date: event.status,
                    description: `This talk is led by Mr. Gowrish H B, Founder of HellCraftTech™, who explains his journey of building a startup while still in college.

The session inspires students to explore entrepreneurship, emphasizing passion, experimentation, and self-driven innovation, while guiding them on how to turn ideas into real startups.

Key Highlights:

• Building a startup while pursuing college education
• The entrepreneurial mindset: passion, experimentation, and innovation
• Practical steps to transform ideas into viable startups
• Overcoming challenges as a student entrepreneur
• Self-driven innovation and creative problem-solving
• Real-world lessons from startup journey

About the Speaker:
Mr. Gowrish H B is the Founder of HellCraftTech™, a testament to the power of young entrepreneurship. As a student entrepreneur, he successfully built his startup from the ground up while managing academic responsibilities. His journey serves as an inspiration for students looking to venture into entrepreneurship, demonstrating that age and experience are not barriers to innovation and business success.`,
                    showTimeline: false
                  });

                  setIsTimelineOpen(true);
                  return;
                }

                // Default behavior for other clickable events
                if (event.isClickable) {
                  setTimelineData({ images: event.images ?? [], title: event.title, date: event.status, description: event.description, showTimeline: true });
                  setIsTimelineOpen(true);
                }
              }}
              className={event.isClickable ? "cursor-pointer" : ""}
            >
              <Card className={`p-6 sm:p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-500 group border-2 border-primary/20 hover:border-primary/60 h-full relative overflow-hidden ${event.isClickable ? 'hover:scale-[1.02]' : ''}`}>
                {/* Gradient glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1 rounded-full mb-3 sm:mb-4 border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                    </motion.div>
                    <span className="text-primary text-[10px] sm:text-xs font-medium leading-tight">{event.status}</span>
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2.5 sm:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    <span className="break-words">{event.title}</span>
                    {event.isClickable && (
                      <span className="ml-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        • Click for details
                      </span>
                    )}
                  </h3>
                  
                  <p
                    className="text-muted-foreground text-xs sm:text-sm leading-relaxed break-words"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {event.description}
                  </p>

                  {/* Image gallery: three thumbnails per event */}
                  {event.images && event.images.length > 0 ? (
                    <motion.div initial="hidden" animate="visible" variants={galleryVariants} className={`mt-4 gap-2 ${event.images.length === 1 ? 'flex justify-center' : 'grid grid-cols-3'}`}>
                      {event.images.map((img, i) => (
                        <motion.img
                          key={i}
                          src={img}
                          alt={`${event.title} image ${i + 1}`}
                          variants={itemVariants}
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className={`${event.images.length === 1 ? 'w-full max-h-48 object-contain' : i === 0 ? 'w-full h-24 object-contain' : 'w-full h-24 object-cover'} rounded-md border border-primary/10`}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <div className="mt-4 h-24" />
                  )}

                  {/* Animated bottom accent line */}
                  <motion.div 
                    className="mt-5 sm:mt-6 h-1 bg-gradient-to-r from-primary to-primary-glow"
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

      <InaugurationTimeline
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
        images={timelineData.images}
        title={timelineData.title}
        date={timelineData.date}
        description={timelineData.description}
        showTimeline={timelineData.showTimeline ?? true}
      />
    </section>
  );
};

export default EventSchedule;

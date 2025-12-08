import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  email?: string;
  linkedin?: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
}

const TeamCarousel = ({ members }: TeamCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const validIndex = ((newIndex % members.length) + members.length) % members.length;
    setCurrentIndex(validIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      updateCarousel(currentIndex + 1);
    }
    if (touchStart - touchEnd < -75) {
      updateCarousel(currentIndex - 1);
    }
  };

  const getCardClass = (index: number) => {
    const offset = ((index - currentIndex) + members.length) % members.length;
    
    if (offset === 0) return "center";
    if (offset === 1) return "right-1";
    if (offset === 2) return "right-2";
    if (offset === members.length - 1) return "left-1";
    if (offset === members.length - 2) return "left-2";
    return "hidden";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="team-carousel-wrapper md:hidden">
      <h2 className="carousel-title">OUR TEAM</h2>
      
      <div className="carousel-container-mobile">
        <button 
          className="nav-arrow-mobile left"
          onClick={() => updateCarousel(currentIndex - 1)}
          aria-label="Previous member"
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          className="carousel-track-mobile"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {members.map((member, index) => (
            <div
              key={index}
              className={`carousel-card-mobile ${getCardClass(index)}`}
              onClick={() => updateCarousel(index)}
            >
              <img src={member.image} alt={member.name} />
            </div>
          ))}
        </div>

        <button 
          className="nav-arrow-mobile right"
          onClick={() => updateCarousel(currentIndex + 1)}
          aria-label="Next member"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="member-info-mobile">
        <AnimatePresence mode="wait">
          <motion.h3 
            key={`name-${currentIndex}`}
            className="member-name-mobile"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text"
              initial={{ backgroundPosition: "0% center" }}
              animate={{ backgroundPosition: "200% center" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {members[currentIndex].name}
            </motion.span>
          </motion.h3>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.p 
            key={`role-${currentIndex}`}
            className="member-role-mobile"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.4,
              delay: 0.1,
              ease: "easeOut"
            }}
          >
            {members[currentIndex].designation}
          </motion.p>
        </AnimatePresence>

        {/* Contact buttons for mobile view */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-3">
          {(() => {
            const memberEmail = members[currentIndex]?.email;
            const mailHref = memberEmail
              ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(memberEmail)}`
              : `mailto:`;
            return (
              <a
                href={mailHref}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300"
                aria-label={`Email ${members[currentIndex].name}`}
                {...(memberEmail ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-primary-foreground"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            );
          })()}

          {members[currentIndex]?.linkedin && (
            <a
              href={members[currentIndex]!.linkedin}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile for ${members[currentIndex].name}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-primary-foreground"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/></svg>
            </a>
          )}
        </div>
      </div>

      <div className="dots-mobile">
        {members.map((_, index) => (
          <div
            key={index}
            className={`dot-mobile ${index === currentIndex ? "active" : ""}`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;

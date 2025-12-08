import { X, Clock, Users, Music, Lightbulb, Mic, Trophy, Coffee, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useEffect, useRef, useState } from "react";

interface InaugurationTimelineProps {
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  title?: string;
  date?: string;
  description?: string;
  showTimeline?: boolean;
}

interface TimelineEvent {
  time: string;
  event: string;
  duration: string;
  icon: any;
  color: string;
  position: 'top' | 'bottom';
}

const InaugurationTimeline = ({ isOpen, onClose, images = [], title = "IEEE Student Branch Inauguration", date = "", description = "", showTimeline = true }: InaugurationTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const timelineEvents: TimelineEvent[] = [
    { time: "10:00 am", event: "Welcoming of the Guest", duration: "20 mins", icon: Users, color: "from-blue-400 to-blue-600", position: 'bottom' },
    { time: "10:20 am", event: "Lighting of the Lamp", duration: "15 mins", icon: Lightbulb, color: "from-amber-400 to-amber-600", position: 'top' },
    { time: "10:35 am", event: "Prayer Song", duration: "5 mins", icon: Music, color: "from-emerald-400 to-emerald-600", position: 'bottom' },
    { time: "10:40 am", event: "Invocation Dance", duration: "10 mins", icon: Music, color: "from-rose-400 to-rose-600", position: 'top' },
    { time: "10:50 am", event: "Guest Speeches (5 Speakers)", duration: "50 mins", icon: Mic, color: "from-violet-400 to-violet-600", position: 'bottom' },
    { time: "11:40 am", event: "IEEE Members Intro", duration: "10 mins", icon: Users, color: "from-cyan-400 to-cyan-600", position: 'top' },
    { time: "1:10 pm", event: "National Anthem", duration: "2 mins", icon: Music, color: "from-orange-400 to-orange-600", position: 'bottom' },
    { time: "1:15 pm", event: "Lunch Break", duration: "60 mins", icon: Coffee, color: "from-lime-400 to-lime-600", position: 'top' },
    { time: "2:30 pm", event: "Tech Tussle 2.0", duration: "45 mins", icon: Trophy, color: "from-primary to-primary-glow", position: 'bottom' },
    { time: "3:15 pm", event: "Prize Distribution", duration: "20 mins", icon: Trophy, color: "from-indigo-400 to-indigo-600", position: 'top' },
    { time: "3:35 pm", event: "Vote of Thanks", duration: "10 mins", icon: Users, color: "from-teal-400 to-teal-600", position: 'bottom' },
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isOpen) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.8; // pixels per frame
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    let animationId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Smooth reset to beginning when reaching the end
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isOpen, isPaused]);

  // Carousel autoplay for images (if provided)
  useEffect(() => {
    if (!isOpen || !images || images.length <= 1) return;

    if (!isAutoPlay) return;

    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3500);

    return () => clearInterval(id);
  }, [isOpen, images, isAutoPlay]);

  const guestSpeeches = [
    { time: "10:50 am", guest: "Guest – 1", duration: "10 mins" },
    { time: "11:00 am", guest: "Guest – 2", duration: "10 mins" },
    { time: "11:10 am", guest: "Guest – 3", duration: "10 mins" },
    { time: "11:20 am", guest: "Guest – 4", duration: "10 mins" },
    { time: "11:30 am", guest: "Guest – 5", duration: "10 mins" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 bg-background rounded-2xl sm:rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[95vh] sm:max-h-none"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 400,
              duration: 0.5
            }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-primary to-primary-glow p-4 sm:p-6 md:p-8 overflow-hidden flex-shrink-0">
              {/* Animated background circles */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, -20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, type: "spring", damping: 25, stiffness: 300 }}
                className="relative z-10 pr-12"
              >
                <motion.h2 
                  className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, type: "spring", damping: 20 }}
                >
                  {title}
                </motion.h2>
                <motion.p 
                  className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex items-center gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, type: "spring", damping: 25 }}
                >
                  <motion.span
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    📅
                  </motion.span>
                  {date || 'Date not specified'}
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: "spring", damping: 20, stiffness: 300 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20"
              >
                <button
                  className="text-white hover:bg-white/20 rounded-full h-10 w-10 sm:min-h-[44px] sm:min-w-[44px] hover:rotate-90 transition-all duration-300 hover:scale-110"
                  onClick={onClose}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", damping: 25 }}
                className="text-center py-4 sm:py-6 md:py-8 px-4 bg-gradient-to-b from-primary/5 to-transparent"
              >
                <motion.h3 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", damping: 20 }}
                >
                  {title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground text-xs sm:text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  {date || 'A day filled with innovation, celebration, and inspiration'}
                </motion.p>
              </motion.div>

              {/* Horizontal Timeline */}
                <div 
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="relative px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 overflow-x-auto scrollbar-hide"
                style={{ 
                  scrollBehavior: 'auto',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {/* If images provided, show carousel hero */}
                {images && images.length > 0 ? (
                  <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
                    <div className="relative rounded-xl overflow-hidden bg-muted">
                      <AnimatePresence initial={false} mode="wait">
                        <motion.img
                          key={images[currentIndex]}
                          src={images[currentIndex]}
                          alt={`Slide ${currentIndex + 1}`}
                          className="w-full h-56 sm:h-72 md:h-96 object-cover"
                          initial={{ opacity: 0, x: 30, scale: 0.98 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -30, scale: 0.98 }}
                          transition={{ duration: 0.6 }}
                        />
                      </AnimatePresence>

                      {/* Controls */}
                      <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4">
                        <button
                          aria-label="Previous"
                          className="bg-black/30 hover:bg-black/40 text-white rounded-full p-2"
                          onClick={() => { setIsAutoPlay(false); setCurrentIndex((i) => (i - 1 + images.length) % images.length); }}
                        >
                          ‹
                        </button>
                        <button
                          aria-label="Next"
                          className="bg-black/30 hover:bg-black/40 text-white rounded-full p-2"
                          onClick={() => { setIsAutoPlay(false); setCurrentIndex((i) => (i + 1) % images.length); }}
                        >
                          ›
                        </button>
                      </div>

                      {/* Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => { setIsAutoPlay(false); setCurrentIndex(i); }}
                            className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {description && (
                      <motion.p className="mt-3 text-sm text-muted-foreground px-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        {description}
                      </motion.p>
                    )}
                  </div>
                ) : (
                  // No images: show a professional card with title/date/description
                  <div className="max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                    <Card className="p-6 md:p-8 shadow-lg">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{title}</h4>
                            {date && <p className="text-sm text-muted-foreground mt-1">{date}</p>}
                          </div>
                        </div>

                        {description && (
                          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
                        )}
                      </motion.div>
                    </Card>
                  </div>
                )}
                {/* Removed hardcoded inauguration paragraph to avoid duplicate long text. */}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InaugurationTimeline;

import { X, Clock, Users, Music, Lightbulb, Mic, Trophy, Coffee, ChevronRight, LucideIcon } from "lucide-react";
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
  icon: LucideIcon;
  color: string;
  position: 'top' | 'bottom';
}

const InaugurationTimeline = ({ isOpen, onClose, images = [], title = "IEEE Student Branch Inauguration", date = "", description = "", showTimeline = true }: InaugurationTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-primary to-primary-glow p-3 sm:p-4 md:p-5 overflow-hidden flex-shrink-0">
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
                  <span>📅</span>
                  {date || 'Date not specified'}
                </motion.p>
              </motion.div>
              
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
                <button
                  className="text-white hover:bg-white/20 rounded-full h-10 w-10 sm:min-h-[44px] sm:min-w-[44px] transition-all duration-300"
                  onClick={onClose}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div 
              className="flex-1 overflow-y-auto overflow-x-hidden min-h-0"
              style={{ 
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch'
              }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {/* Content with 2:1 layout */}
              <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6">
                {images && images.length > 0 ? (
                  <div className="max-w-7xl mx-auto">
                    {/* Two-column layout on desktop, stacked on mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                      {/* Image Carousel - Takes 2/3 of space on desktop */}
                      <div className="lg:col-span-2">
                        <div className="sticky top-0 rounded-xl overflow-hidden bg-gray-900">
                          <AnimatePresence initial={false} mode="wait">
                            <motion.img
                              key={images[currentIndex]}
                              src={images[currentIndex]}
                              alt={`${title} - Image ${currentIndex + 1}`}
                              className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-contain bg-gray-900"
                              initial={{ opacity: 0, x: 100 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -100 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                          </AnimatePresence>

                          {/* Navigation Controls */}
                          {images.length > 1 && (
                            <>
                              <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-3 pointer-events-none">
                                <button
                                  aria-label="Previous image"
                                  className="pointer-events-auto bg-black/40 hover:bg-black/60 text-white rounded-full h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center transition-all duration-300 text-xl sm:text-2xl font-bold"
                                  onClick={() => { setIsAutoPlay(false); setCurrentIndex((i) => (i - 1 + images.length) % images.length); }}
                                >
                                  ‹
                                </button>
                                <button
                                  aria-label="Next image"
                                  className="pointer-events-auto bg-black/40 hover:bg-black/60 text-white rounded-full h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center transition-all duration-300 text-xl sm:text-2xl font-bold"
                                  onClick={() => { setIsAutoPlay(false); setCurrentIndex((i) => (i + 1) % images.length); }}
                                >
                                  ›
                                </button>
                              </div>
                            </>
                          )}

                          {/* Image counter */}
                          {images.length > 1 && (
                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                              {currentIndex + 1} / {images.length}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description Column - Takes 1/3 of space on desktop */}
                      <div className="flex flex-col lg:col-span-1">
                        {description && (
                          <motion.div 
                            className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-4 sm:p-5 md:p-6 shadow-lg border-2 border-primary/20 h-full overflow-y-auto"
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">About this Event</h3>
                            <div className="text-gray-800 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                              {description}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // No images: show text content only
                  <div className="max-w-3xl mx-auto">
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-6 sm:p-8 shadow-lg border-2 border-primary/20"
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.2 }}
                    >
                      {description && (
                        <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                          {description}
                        </div>
                      )}
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InaugurationTimeline;

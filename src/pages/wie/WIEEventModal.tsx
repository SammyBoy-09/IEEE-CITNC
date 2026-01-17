import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface WIEEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  title?: string;
  date?: string;
  description?: string;  heading?: string;}

const WIEEventModal = ({ isOpen, onClose, images = [], title = "", date = "", description = "", heading }: WIEEventModalProps) => {
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

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Carousel autoplay
  useEffect(() => {
    if (!isOpen || !images || images.length <= 1 || !isAutoPlay) return;

    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => clearInterval(id);
  }, [isOpen, images, isAutoPlay]);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsAutoPlay(true);
    }
  }, [isOpen]);

  // Keyboard navigation for carousel
  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIsAutoPlay(false);
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setIsAutoPlay(false);
        setCurrentIndex((i) => (i + 1) % images.length);
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [isOpen, images.length]);

  // Get custom heading based on event title
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
            className="fixed inset-4 sm:inset-6 md:inset-8 lg:inset-16 bg-background rounded-2xl sm:rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[95vh] sm:max-h-none"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 400,
              duration: 0.4
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-4 md:p-5 overflow-hidden flex-shrink-0">
              {/* Animated background circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-blob animation-delay-2000" />
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, type: "spring", damping: 25 }}
                className="relative z-10 pr-12"
              >
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-2 leading-tight">
                  {title}
                </h2>
                <p className="text-white/90 text-sm sm:text-sm md:text-base font-medium flex items-center gap-1.5">
                  <span>📅</span>
                  {date || 'Date not specified'}
                </p>
              </motion.div>
              
              <button
                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 text-white hover:bg-white/20 rounded-full h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center transition-all duration-300"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="h-5 w-5 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Content */}
            <div 
              className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 p-4 sm:p-5 md:p-6"
              style={{ 
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch'
              }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
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
                          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-5 md:p-6 shadow-lg border-2 border-purple-200 h-full"
                          initial={{ opacity: 0, x: 20 }} 
                          animate={{ opacity: 1, x: 0 }} 
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">{heading || 'About this Event'}</h3>
                          <div className="text-gray-800 text-sm sm:text-base leading-relaxed">
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
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 sm:p-8 shadow-lg border-2 border-purple-200"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2 }}
                  >
                    {description && (
                      <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                        {description}
                      </div>
                    )}
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WIEEventModal;

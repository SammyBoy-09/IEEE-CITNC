import { Mail, Linkedin, Phone } from "lucide-react";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  email?: string;
  linkedin?: string;
  phone?: string;
  delay?: number;
}

const TeamCard = ({ name, designation, image, delay = 0, email, linkedin, phone }: TeamCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="group relative animate-fade-in-up transition-all duration-500 cursor-pointer flex flex-col items-center"
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 mx-auto">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative w-full h-full bg-card rounded-full overflow-hidden">
              {/* Circular Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
          
          {/* Name below image */}
          <div className="text-center mt-4 w-full">
            <motion.h3 
              className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: delay + 0.2,
                ease: "easeOut"
              }}
            >
              <motion.span
                className="inline-block"
                initial={{ backgroundPosition: "200% center" }}
                whileInView={{ backgroundPosition: "-200% center" }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  delay: delay + 0.4,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(var(--primary-rgb, 0, 112, 243), 0.3) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                }}
              >
                {name}
              </motion.span>
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground font-medium mt-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.3,
                ease: "easeOut"
              }}
            >
              {designation}
            </motion.p>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="w-11/12 max-w-sm sm:max-w-md">
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {name}
            </h3>
            <p className="text-muted-foreground font-medium">
              {designation}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full items-center justify-center">
            {(() => {
              const mailHref = email
                ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`
                : `mailto:`;
              return (
                <a
                  href={mailHref}
                  className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                  aria-label={`Send email to ${name}`}
                  role="button"
                  {...(email ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </a>
              );
            })()}

            {linkedin && (
              <a
                href={linkedin}
                className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open LinkedIn profile for ${name}`}
                role="link"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone}`}
                className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                aria-label={`Call ${name}`}
                role="button"
              >
                <Phone className="h-5 w-5 text-primary-foreground" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamCard;

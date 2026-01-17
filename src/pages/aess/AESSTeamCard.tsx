import { Mail, Linkedin } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { motion } from "framer-motion";

interface AESSTeamCardProps {
  name: string;
  position: string;
  role: string;
  image: string;
  index?: number;
  email?: string;
  linkedin?: string;
}

const AESSTeamCard = ({ name, position, role, image, index = 0, email, linkedin }: AESSTeamCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer group"
        >
          <div
            className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] border-2 border-blue-500/30 group-hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={image} 
              alt={`${name} - ${position}`} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
          <h3 className="text-lg font-bold mb-1 text-blue-400">{name}</h3>
          <p className="text-sm font-semibold text-slate-300 mb-1">{position}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="w-11/12 max-w-sm sm:max-w-md bg-slate-900 border-blue-500/30 [&>button]:text-slate-300 [&>button]:hover:text-blue-400 [&>button]:hover:bg-blue-500/10 [&>button]:flex [&>button]:items-center [&>button]:justify-center">
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {name}
            </h3>
            <p className="text-slate-300 font-semibold text-lg mb-1">
              {position}
            </p>
            <p className="text-slate-400 font-medium">
              {role}
            </p>
          </div>
          
          <div className="flex flex-row gap-4 pt-4 w-full items-center justify-center">
            {email && (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
                className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Send email to ${name}`}
                role="button"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open LinkedIn profile for ${name}`}
                role="link"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AESSTeamCard;

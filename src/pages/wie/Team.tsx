import WIETeamCard from "./WIETeamCard";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Varsha from "../../assets/team/wie/Varsha.png";
import Meenakshi from "../../assets/team/wie/meenakshi.jpg";
import Shriya from "../../assets/team/wie/BUShriya.png";
import Ashwathi from "../../assets/team/wie/Ashwathi.png";
import Poorvi from "../../assets/team/wie/poorvi.png";
import Indrajeeth from "../../assets/team/wie/Indrajeeth.png";
import DarshanImg from "../../assets/team/wie/darshan.png";

const wieTeam = [
  {
    name: "Prof. Varsha V.",
    designation: "WIE ADVISOR",
    image: Varsha,
    email: "varshajaishree7@gmail.com",
  },
  {
    name: "Meenakshi S.",
    designation: "CHAIRMAN",
    image: Meenakshi,
    email: "meenakshi042004@gmail.com",
  },
  {
    name: "Shriya.B.U.",
    designation: "VICE CHAIR",
    image: Shriya,
    email: "shriyabu@gmail.com",
  },
  {
    name: "Ashwathi B Nair",
    designation: "SECRETARY",
    image: Ashwathi,
    email: "ashwathibnair2007@gmail.com",
  },
  {
    name: "Poorvi Hattimattur",
    designation: "TREASURER",
    image: Poorvi,
    email: "hattimatturpoorvi@gmail.com",
  },
  {
    name: "Darshan Chikle",
    designation: "WEBMASTER",
    image: DarshanImg,
    email: "chikle5050@gmail.com",
  },
  {
    name: "Indrajeeth V S.",
    designation: "CREATIVE HEAD",
    image: Indrajeeth,
    email: "indrajeethvs10@gmail.com",
  },
];

const Team = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-purple-50">
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
            <span className="text-purple-600 text-xs sm:text-sm font-medium leading-tight">Our Team</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2 leading-tight">
            Meet the Core Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Core team members lead initiatives, coordinate events and mentor participants. Contact us to get involved.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 [&>*:last-child:nth-child(3n+1)]:md:col-start-2">
          {wieTeam.map((member, idx) => (
            <WIETeamCard
              key={member.name}
              name={member.name}
              designation={member.designation}
              image={member.image}
              email={member.email}
              linkedin={""}
              delay={0.08 * idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

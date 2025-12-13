import TeamCard from "../../components/TeamCard";
import Varsha from "../../assets/team/Varsha-WIE.png";
import Meenakshi from "../../assets/team/meenakshi.jpg";
import Shriya from "../../assets/team/Shriya-WIE (1).png";
import Ashwathi from "../../assets/team/Ashwathi-WIE.png";
import Poorvi from "../../assets/team/poorvi-WIE (1).png";
import Indrajeeth from "../../assets/team/Indrajeeth-WIE.png";
import DarshanImg from "../../assets/team/Darshan Chikle-WIE.jpg";

const wieTeam = [
  {
    name: "Prof. Varsha V.",
    designation: "ADVISOR WIE ",
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
    name: "Shriya BU.",
    designation: "VICE CHAIR",
    image: Shriya,
    email: "shriyabu@gmail.com",
  },
  {
    name: "Ashwathi B Nair",
    designation: " SECRETARY",
    image: Ashwathi,
    email: "ashwathibnair2007@gmail.com",
  },
  {
    name: "Poorvi Hatimatur",
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
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 mb-4">
            <span className="text-purple-600 text-xs sm:text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            MEET THE CORE TEAM
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Core team members lead initiatives, coordinate events and mentor participants. Contact us to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wieTeam.map((member, idx) => (
            <TeamCard
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

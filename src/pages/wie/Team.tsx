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
    designation: "Student Branch Counsellor- WIE",
    image: Varsha,
    email: "varshajaishree7@gmail.com",
  },
  {
    name: "Meenakshi S.",
    designation: "WIE CHAIR",
    image: Meenakshi,
    email: "meenakshi042004@gmail.com",
  },
  {
    name: "Shriya BU.",
    designation: "WIE VICE CHAIR",
    image: Shriya,
    email: "shriyabu@gmail.com",
  },
  {
    name: "Ashwathi B Nair",
    designation: "WIE SECRETARY",
    image: Ashwathi,
    email: "ashwathibnair2007@gmail.com",
  },
  {
    name: "Poorvi Hatimatur",
    designation: "WIE TREASURER",
    image: Poorvi,
    email: "hattimatturpoorvi@gmail.com",
  },
  {
    name: "Darshan Chikle",
    designation: "WIE WEBMASTER",
    image: DarshanImg,
    email: "chikle5050@gmail.com",
  },
  {
    name: "Indrajeeth V S.",
    designation: "WIE CREATIVE LEAD",
    image: Indrajeeth,
    email: "indrajeethvs10@gmail.com",
  },
];

const Team = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Meet The Core Team</h2>
      <p className="text-sm text-muted-foreground">Core team members lead initiatives, coordinate events and mentor participants. Contact us to get involved.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
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
  );
};

export default Team;

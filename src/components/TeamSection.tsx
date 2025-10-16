import TeamCard from "./TeamCard";
import rajaRam from "@/assets/team/raja-ram.jpeg";
import gowrish from "@/assets/team/gowrish.jpg";
import ullas from "@/assets/team/ullas.jpg";
import sanjana from "@/assets/team/sanjana.jpeg";
import yashas from "@/assets/team/yashas.jpeg";
import samuel from "@/assets/team/samuel.jpg";
import meenakshi from "@/assets/team/meenakshi.jpg";
import shreya from "@/assets/team/shreya.jpg";
import varun from "@/assets/team/varun.jpg";
import pranitha from "@/assets/team/pranitha.jpg";
import amith from "@/assets/team/amith.jpg";
import srushti from "@/assets/team/srushti.jpg";
import hansika from "@/assets/team/hansika.jpeg";
import sindhu from "@/assets/team/sindhu.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Raja Ram",
      designation: "Branch Counsellor",
      image: rajaRam,
    },
    {
      name: "Gowrish H B",
      designation: "Chairman",
      image: gowrish,
    },
    {
      name: "R Ullas",
      designation: "Vice Chairman",
      image: ullas,
    },
    {
      name: "Sanjana Sangamesh Biradar",
      designation: "Secretary",
      image: sanjana,
    },
    // {
    //   name: "Yashas Navale",
    //   designation: "Treasurer",
    //   image: yashas,
    // },
    {
      name: "Samuel Lazar",
      designation: "Webmaster",
      image: samuel,
    },
    {
      name: "Meenakshi S",
      designation: "Women in Engineering Representative",
      image: meenakshi,
    },
    {
      name: "Shreya S Tavarkhed",
      designation: "Treasurer",
      image: shreya,
    },
    {
      name: "Varun Kumar B H",
      designation: "Jr Webmaster",
      image: varun,
    },
    {
      name: "Pranitha Vinaya Chandrika K",
      designation: "Creative Head",
      image: pranitha,
    },
    {
      name: "Amith H P",
      designation: "PR Head",
      image: amith,
    },
    {
      name: "Srushti T",
      designation: "Membership Development Chair",
      image: srushti,
    },
    {
      name: "Hansika Muralidhar",
      designation: "Jr Creative Lead",
      image: hansika,
    },
    {
      name: "Sindhu S",
      designation: "Quality Assurance Lead",
      image: sindhu,
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Core Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders driving innovation and excellence in our IEEE student community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

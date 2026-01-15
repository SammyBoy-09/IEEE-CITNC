import { useEffect } from "react";
import TeamCard from "./TeamCard";
import TeamCarousel from "./TeamCarousel";
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
    name: "Dr. R. Rajaramakrishna",
    designation: "Branch Counsellor",
    image: rajaRam
    ,
    email: "r.rajaramakrishna@gmail.com"
  },
  {
    name: "Gowrish H B",
    designation: "Chairman",
    image: gowrish
    ,
    email: "gowrishhb5@gmail.com",
    linkedin: "https://www.linkedin.com/in/gowrishhb5/",
    phone: "+91 6361184577"
  },
  {
    name: "R Ullas",
    designation: "Vice Chairman",
    image: ullas
    ,
    email: "acharullas08@gmail.com"
  },
  {
    name: "Shreya S Tavarkhed",
    designation: "Treasurer",
    image: shreya
    ,
    email: "shreyatavarkhed@gmail.com"
  },
  {
    name: "Samuel Lazar",
    designation: "Webmaster",
    image: samuel
    ,
    email: "samuel272lazar@gmail.com",
    linkedin: "https://www.linkedin.com/in/samuel-lazar/"
  },
  {
    name: "Sanjana S B",
    designation: "Secretary",
    image: sanjana
    ,
    email: "sbsanjana10@gmail.com"
  },
  {
    name: "Meenakshi S",
    designation: "Women in Engineering Chair",
    image: meenakshi
    ,
    email: "meenakshi042004@gmail.com",
    linkedin: "https://www.linkedin.com/in/meenakshi-s-dev/"
  },
  {
    name: "Pranitha Vinaya Chandrika K",
    designation: "Creative Head",
    image: pranitha
    ,
    email: "pranitha24.k@gmail.com"
  },
  {
    name: "Amith H P",
    designation: "PR Head",
    image: amith
    ,
    email: "amithhp06@gmail.com",
    linkedin: "https://www.linkedin.com/in/amith-h-p-742477334/",
    phone: "+91 8660975303"
  },
  {
    name: "Varun Kumar B H",
    designation: "Jr Webmaster",
    image: varun
    ,
    email: "varunkumarbh143@gmail.com",
    linkedin: "https://www.linkedin.com/in/varun-kumar-b2539b351/",
    phone: "+91 7019221487"
  },
  {
    name: "Hansika Muralidhar",
    designation: "Jr Creative Head",
    image: hansika
    ,
    email: "Hansika.Muralidhar@gmail.com"
  },
  {
    name: "Sindhu S",
    designation: "Joint Secretary",
    image: sindhu
    ,
    email: "sindhusgowda369@gmail.com"
  },
  {
    name: "Srushti T",
    designation: "Membership Development Chair",
    image: srushti
    ,
    email: "srushtit39@gmail.com"
  }
];

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IEEE Student Branch CITNC",
    "url": window.location.origin,
    "member": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.designation,
      "email": member.email,
      "image": `${window.location.origin}${member.image}`,
      ...(member.linkedin && { "sameAs": member.linkedin }),
      ...(member.phone && { "telephone": member.phone }),
      "worksFor": {
        "@type": "Organization",
        "name": "IEEE Student Branch CITNC"
      }
    }))
  };

  useEffect(() => {
    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'team-structured-data';
    
    // Remove existing script if present
    const existing = document.getElementById('team-structured-data');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('team-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile Carousel */}
        <TeamCarousel members={teamMembers} />

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight">
              Meet The Core Team
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-5 sm:mb-6" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
              Dedicated leaders driving innovation and excellence in our IEEE student branch
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 md:gap-12 justify-items-center">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                designation={member.designation}
                image={member.image}
                email={member.email}
                linkedin={member.linkedin}
                phone={member.phone}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

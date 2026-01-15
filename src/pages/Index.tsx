import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import EventSchedule from "@/components/EventSchedule";
import TeamSection from "@/components/TeamSection";
import AffinityGroups from "@/components/AffinityGroups";
import Contact from "@/components/Contact";
import DecorativeAnimations from "@/components/DecorativeAnimations";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IEEE Student Branch CITNC | Cambridge Institute of Technology North Campus</title>
        <meta name="description" content="Join the IEEE Student Branch at Cambridge Institute of Technology North Campus. Explore technical events, workshops, Women in Engineering (WIE), and networking opportunities for engineering students in Bangalore." />
        <link rel="canonical" href="https://ieee.citnc.co.in/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <DecorativeAnimations />
        <Header />
        <Hero />
        <About />
        <EventSchedule />
        <TeamSection />
        <AffinityGroups />
        <Benefits />
        <Contact />
        
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © 2025 IEEE Student Branch, Cambridge Institute of Technology North Campus. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;

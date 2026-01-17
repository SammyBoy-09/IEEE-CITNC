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
            © {new Date().getFullYear()} IEEE Student Branch, Cambridge Institute of Technology North Campus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

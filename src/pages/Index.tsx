import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import EventSchedule from "@/components/EventSchedule";
import TeamSection from "@/components/TeamSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <EventSchedule />
      <TeamSection />
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
  );
};

export default Index;

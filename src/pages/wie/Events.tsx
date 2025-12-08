import { Laptop, Briefcase, Users, Globe, Zap, Calendar } from "lucide-react";
import { Card } from "../../components/ui/card";

const eventCards = [
  {
    title: "Technical Workshops & Hands-on Sessions",
    icon: Laptop,
    desc: "Hands-on sessions and practical workshops to build technical skills and project experience.",
  },
  {
    title: "Professional Development Events",
    icon: Briefcase,
    desc: "Career guidance, resume clinics, industry talks and networking opportunities.",
  },
  {
    title: "Women Empowerment & Awareness Programs",
    icon: Users,
    desc: "Panels, mentorship circles and awareness initiatives that celebrate and support women in engineering.",
  },
  {
    title: "Social Impact & Outreach Activities",
    icon: Globe,
    desc: "Community service projects and outreach to inspire the next generation of engineers.",
  },
  {
    title: "Competitions & Hackathons",
    icon: Zap,
    desc: "Team challenges, hackathons and competitions to showcase innovation and problem-solving.",
  },
  {
    title: "Networking & Collaboration",
    icon: Users,
    desc: "Events and mixers to foster collaboration, build professional networks, and create peer support.",
  },
  {
    title: "Annual Flagship Events",
    icon: Calendar,
    desc: "Major yearly conferences, summits and flagship events highlighting WIE achievements and initiatives.",
  },
];

const Events = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Upcoming WIE Events</h2>
          <p className="text-muted-foreground mt-2">All events listed below are upcoming — stay tuned for dates and registration details.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCards.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.title} className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Upcoming</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;

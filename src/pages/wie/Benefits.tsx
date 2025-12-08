import { Card } from "../../components/ui/card";
import { Users, Award, BookOpen, Globe, Megaphone, Tag, Mail, Link as LinkIcon, Calendar, Gift } from "lucide-react";

const benefits = [
  { title: "Networking", text: "Connect with over 200,000 fellow engineers and technologists globally through the IEEE Collabratec platform.", icon: Users },
  { title: "Leadership development", text: "Participate in leadership summits and workshops, and gain experience through local WIE Affinity Group officer roles.", icon: Megaphone },
  { title: "Career support", text: "Get support for member grade advancement to Senior Member and Fellow.", icon: BookOpen },
  { title: "Recognition", text: "Get recognition for professional identity and outstanding achievements through awards.", icon: Award },
  { title: "Volunteering", text: "Take on volunteer opportunities to contribute to the WIE mission, such as mentoring or officer roles.", icon: Globe },
  { title: "Publications", text: "Receive the IEEE Women in Engineering Magazine (bi-annually) and the WIE Newsletter.", icon: BookOpen },
  { title: "Forums", text: "Engage in community forums on topics like leadership, entrepreneurship, and AI.", icon: LinkIcon },
  { title: "IEEE resources", text: "Gain access to a wide range of IEEE resources, including IEEE Spectrum articles, the Member Directory, and other society memberships.", icon: Tag },
  { title: "Discounts", text: "Get discounted registration fees for the annual IEEE WIE International Leadership Conference and other WIE events.", icon: Gift },
  { title: "Scholarships and awards", text: "Apply for WIE scholarships and travel grants.", icon: Award },
  { title: "Contests", text: "Participate in exclusive WIE contests.", icon: Calendar },
  { title: "Mentoring", text: "Join the IEEE Mentoring Program and participate in programs like STAR to mentor younger students.", icon: Mail },
];

const Benefits = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Benefits of Joining WIE</h2>
          <p className="text-muted-foreground mt-2">Membership benefits and opportunities available to IEEE WIE members.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <Card key={b.title} className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-purple-50 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{b.text}</p>
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

export default Benefits;

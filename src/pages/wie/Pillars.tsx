import { Users, Lightbulb, Wrench, Globe } from "lucide-react";

const pillars = [
  {
    id: 1,
    title: "Inspire",
    icon: Users,
    content: (
      <>
        <p className="text-sm mb-3">Igniting interest and curiosity in STEM among young girls is the foundation for long-term diversity and inclusion in engineering fields.</p>

        <p className="text-sm font-semibold">Key initiative:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>STAR Program:</strong> A global outreach effort designed to introduce girls to science, technology, engineering, and mathematics (STEM) through hands-on activities, mentorship, and real-life engineering applications.
          </li>
        </ul>

        <p className="mt-3 text-sm"><strong>Goal:</strong> To spark early motivation, nurture creativity, and build confidence among young girls to choose STEM as a future career.</p>
      </>
    ),
  },
  {
    id: 2,
    title: "Engage",
    icon: Lightbulb,
    content: (
      <>
        <p className="text-sm mb-3">Engagement is crucial to maintaining interest and building a sense of belonging within the STEM community.</p>

        <p className="text-sm font-semibold">Major initiative:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>Global Leadership Conferences & Workshops:</strong> Large-scale international events that connect students, professionals, and leaders to share ideas, learn new skills, and stay updated on innovations.
          </li>
        </ul>

        <p className="mt-3 text-sm"><strong>Goal:</strong> To foster active participation, strengthen community bonds, and create a global network of young women engaged in STEM activities.</p>
      </>
    ),
  },
  {
    id: 3,
    title: "Encourage",
    icon: Wrench,
    content: (
      <>
        <p className="text-sm mb-3">Encouragement plays a key role in uplifting women already pursuing STEM fields by providing role models, recognition, and supportive platforms.</p>

        <p className="text-sm font-semibold">Main initiative:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>Showcasing Women Leaders in STEM:</strong> Campaigns, interviews, and digital showcases that highlight achievements of women professionals, breaking stereotypes and inspiring upcoming generations.
          </li>
        </ul>

        <p className="mt-3 text-sm"><strong>Goal:</strong> To create a culture of support where women feel valued, seen, and motivated to advance in their STEM journeys.</p>
      </>
    ),
  },
  {
    id: 4,
    title: "Empower",
    icon: Globe,
    content: (
      <>
        <p className="text-sm mb-3">Empowerment focuses on enabling women to thrive in STEM through growth opportunities, resources, and supportive environments.</p>

        <p className="text-sm font-semibold">Major initiative:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>Professional Development Programs:</strong> Skill-building workshops, technical training, leadership courses, and networking events that enhance career readiness and confidence.
          </li>
        </ul>

        <p className="mt-3 text-sm"><strong>Goal:</strong> To ensure that women not only enter STEM fields but also grow, lead, and excel with long-term career success.</p>
      </>
    ),
  },
];

const Pillars = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight">
            CORE PILLARS OF WIE
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <article key={p.id} className="relative rounded-2xl p-6 bg-white shadow-md border border-purple-100 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">{p.title}</h3>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {p.content}
                </div>
              </div>

              <div className="mt-6">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded" />
              </div>
            </article>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;

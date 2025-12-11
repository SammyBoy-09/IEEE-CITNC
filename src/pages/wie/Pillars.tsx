import { Users, Lightbulb, Wrench, Globe } from "lucide-react";

const pillars = [
  {
    id: 1,
    title: "Inspire",
    icon: Users,
    content: (
      <>
        <p className="text-sm mb-3">Igniting interest and curiosity in STEM among young girls is the foundation for long-term diversity and inclusion in engineering fields.</p>

        <p className="text-sm font-semibold">Key initiatives include:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>STAR Program:</strong> A global outreach effort designed to introduce girls to science, technology, engineering, and mathematics (STEM) through hands-on activities, mentorship, and real-life engineering applications.
          </li>
          <li>
            <strong>Manga Story Contest:</strong> A creative initiative that blends storytelling with engineering concepts, inspiring young girls by presenting STEM through relatable characters and engaging narratives.
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

        <p className="text-sm font-semibold">Major initiatives include:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>Global Leadership Conferences & Workshops:</strong> Large-scale international events that connect students, professionals, and leaders to share ideas, learn new skills, and stay updated on innovations.
          </li>
          <li>
            <strong>Seminars and Technical Sessions:</strong> Regular knowledge-sharing forums where participants gain exposure to cutting-edge technologies and industry trends.
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

        <p className="text-sm font-semibold">Main initiatives include:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>Showcasing Women Leaders in STEM:</strong> Campaigns, interviews, and digital showcases that highlight achievements of women professionals, breaking stereotypes and inspiring upcoming generations.
          </li>
          <li>
            <strong>Participation Through WIE Affinity Groups:</strong> Encouraging women to take part in panel discussions, competitions, hackathons, technical talks, and leadership roles within IEEE Women in Engineering (WIE).
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

        <p className="text-sm font-semibold">Major initiatives include:</p>
        <ul className="list-disc ml-5 mt-2 text-sm space-y-2">
          <li>
            <strong>Professional Development Programs:</strong> Skill-building workshops, technical training, leadership courses, and networking events that enhance career readiness and confidence.
          </li>
          <li>
            <strong>Grants, Scholarships & Funding Support:</strong> Financial assistance to help women pursue engineering degrees, research projects, certifications, and participation in conferences.
          </li>
        </ul>

        <p className="mt-3 text-sm"><strong>Goal:</strong> To ensure that women not only enter STEM fields but also grow, lead, and excel with long-term career success.</p>
      </>
    ),
  },
];

const Pillars = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800">Our Core Pillars</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <article key={p.id} className="relative rounded-2xl p-6 bg-white shadow-sm border border-sky-100 h-full">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold text-sky-700 mb-3">{p.title}</h3>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {p.content}
                </div>
              </div>

              <div className="mt-6">
                <div className="w-12 h-1 bg-sky-600 rounded" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Pillars;

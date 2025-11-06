import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Random Learner Academy team to build joyful learning experiences for a global community.",
};

const roles = [
  {
    title: "Learning Experience Strategist",
    location: "Remote · GMT-5 to GMT+3",
    type: "Full-time",
    description:
      "Design cohort journeys, synthesize learner insights, and collaborate with mentors to build transformative programs.",
    responsibilities: [
      "Lead program retrospectives and translate insights into experiments.",
      "Prototype new curriculum formats across product, design, and leadership tracks.",
      "Partner with community hosts to localize experiences for different regions.",
    ],
  },
  {
    title: "Community Producer",
    location: "Barcelona or Remote EU",
    type: "Full-time",
    description:
      "Curate events, storytelling experiences, and community rituals that help learners stay motivated and connected.",
    responsibilities: [
      "Design monthly salons, summits, and digital gatherings.",
      "Collaborate with alumni to showcase projects and host peer mentoring.",
      "Launch new city chapters with playbooks and training.",
    ],
  },
  {
    title: "Senior Engineer · Learning Tools",
    location: "Remote · Global",
    type: "Contract",
    description:
      "Build tools that power our labs, from peer feedback platforms to progress dashboards and audio-first learning.",
    responsibilities: [
      "Ship experiments quickly using modern web technologies.",
      "Collaborate with designers and mentors to prototype learning interfaces.",
      "Ensure accessibility, performance, and privacy across tools.",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Join our team
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Build the future of community-powered learning
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We are educators, technologists, storytellers, and community builders
          helping people unlock their potential. If you love crafting playful,
          purposeful learning experiences, we’d love to meet you.
        </p>
      </header>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-slate-900">Open roles</h2>
        <div className="mt-6 space-y-6">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {role.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    {role.location} · {role.type}
                  </p>
                </div>
                <a
                  href="mailto:careers@randomlearner.academy?subject=Random%20Learner%20Application"
                  className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  Apply now
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-600">{role.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-indigo-50 px-8 py-10 shadow-sm shadow-slate-200/70">
        <h2 className="text-2xl font-semibold text-slate-900">
          Our hiring commitments
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>• Transparent hiring process with feedback loops at every stage.</li>
          <li>• Equitable compensation regardless of geography.</li>
          <li>• Remote-first with community hubs for deeper collaboration.</li>
          <li>• Annual learning stipend and time for personal projects.</li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          Don’t see a role that fits? Send your story to{" "}
          <a
            href="mailto:careers@randomlearner.academy"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            careers@randomlearner.academy
          </a>{" "}
          with work you’re proud of—we open new roles frequently.
        </p>
      </section>
    </div>
  );
}

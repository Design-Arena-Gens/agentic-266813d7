import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Toolkits",
  description:
    "Download facilitator guides, templates, and playbooks created by the Random Learner Academy team.",
};

const bundles = [
  {
    title: "Mentorship Accelerator Kit",
    contents: [
      "Session planning guide",
      "Feedback frameworks",
      "Goal tracking dashboards",
    ],
    format: "Notion · Figma · Google Sheets",
  },
  {
    title: "Innovation Sprint Pack",
    contents: [
      "Challenge brief templates",
      "Team charter canvas",
      "Demo day storytelling cards",
    ],
    format: "Miro · PDF · Keynote",
  },
  {
    title: "Career Design Playbook",
    contents: [
      "Personal OS canvas",
      "Discovery interview scripts",
      "Progress review rituals",
    ],
    format: "Notion · Loom walkthroughs",
  },
  {
    title: "Creative Story Studio",
    contents: [
      "Story arc mind maps",
      "Visual identity moodboards",
      "Audience feedback loops",
    ],
    format: "Figma · Airtable · Worksheets",
  },
];

export default function ToolkitsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Toolkits & playbooks
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Facilitate powerful learning experiences
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Download ready-to-use resources crafted by Random Learner mentors.
          Remix them for classrooms, community labs, or self-guided exploration.
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {bundles.map((bundle) => (
          <article
            key={bundle.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {bundle.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {bundle.contents.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
              Formats: {bundle.format}
            </p>
            <a
              href="#"
              className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Download pack →
            </a>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-100 via-emerald-100 to-sky-100 px-8 py-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-900">
          Looking for custom facilitation support?
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Our learning designers can tailor workshops and toolkits for your
          school, nonprofit, or company.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Start a conversation
        </a>
      </section>
    </div>
  );
}

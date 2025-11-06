import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Hub Archive",
  description:
    "Explore the Random Learner Academy archive of essays, sessions, toolkits, and community spotlights.",
};

const archive = [
  {
    year: "2024",
    items: [
      "Designing climate storytelling labs for youth cohorts",
      "Frameworks for inclusive peer feedback in distributed teams",
      "Open-source toolkit: Rapid prototyping with AI copilots",
    ],
  },
  {
    year: "2023",
    items: [
      "From classroom to community studio: The Random Learner experiment",
      "Learning circles that drive long-term motivation",
      "Toolkit: Impact measurement dashboard templates",
    ],
  },
  {
    year: "2022",
    items: [
      "Productizing learning: How we co-created micro-sprint kits",
      "Sourcing mentors from emerging ecosystems",
      "Toolkit: Story-driven portfolios for early-career designers",
    ],
  },
];

export default function LearningHubArchivePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header>
        <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Archive
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Curated resources from past seasons
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Browse highlights from previous dispatches, workshops, and research.
          New drops are added monthly—subscribe to get them first.
        </p>
      </header>

      <section className="mt-12 space-y-6">
        {archive.map((section) => (
          <article
            key={section.year}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {section.year} Highlights
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {section.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100 px-8 py-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-900">
          Looking for something specific?
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Email our librarian at{" "}
          <a
            href="mailto:library@randomlearner.academy"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            library@randomlearner.academy
          </a>{" "}
          and we’ll share bespoke recommendations.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          <Link
            href="/content"
            className="rounded-full bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700"
          >
            Back to learning hub
          </Link>
          <Link
            href="/content/toolkits"
            className="rounded-full border border-slate-300 px-5 py-3 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Explore toolkits
          </Link>
        </div>
      </section>
    </div>
  );
}

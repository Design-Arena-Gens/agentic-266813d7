import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Hub",
  description:
    "Curated articles, playbooks, toolkits, and recommended reads from Random Learner mentors and alumni.",
};

const articles = [
  {
    title: "Crafting human-centered AI products",
    readingTime: "12 min read",
    category: "AI & Ethics",
    summary:
      "Frameworks for evaluating bias, inclusivity, and experience design when building assistive AI for education.",
  },
  {
    title: "Story-driven data dashboards that persuade",
    readingTime: "9 min read",
    category: "Data Storytelling",
    summary:
      "Combine visual narrative arcs with annotated snapshots to help stakeholders connect with the data.",
  },
  {
    title: "From idea to MVP with learning sprints",
    readingTime: "7 min read",
    category: "Product Strategy",
    summary:
      "How our learners shipped 48 prototypes in 30 days by pairing no-code tools with accountability pods.",
  },
];

const toolkits = [
  {
    name: "Mentor session prep kit",
    description:
      "A set of worksheets to structure mentor conversations, define success metrics, and collect actionable feedback.",
    format: "Miro board · Notion template",
  },
  {
    name: "Impact storytelling canvas",
    description:
      "Design narratives that connect community challenges to measurable outcomes with aligned calls to action.",
    format: "Airtable base · PDF poster",
  },
  {
    name: "Career playbook for emerging leaders",
    description:
      "Navigate growth conversations, set OS for high-trust teams, and plan your next role with clarity.",
    format: "Notion doc · Audio walk-through",
  },
];

const podcasts = [
  {
    title: "Learning with purpose",
    guest: "Dr. Aneela Khan · Behavioural Scientist",
    summary:
      "Designing habit loops that sustain curiosity and help adult learners stay consistent with stretching goals.",
  },
  {
    title: "Building inclusive tech communities",
    guest: "Malik Adeyemi · Founder, DevCommons",
    summary:
      "Stories from grassroots organizations empowering youth to launch climate and civic-tech ideas.",
  },
  {
    title: "The future of creative work",
    guest: "Sasha Monteiro · Design Leader, Ripple Labs",
    summary:
      "Mapping skills for the next decade of design and the role of community-based mentorship.",
  },
];

export default function LearningHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Learning hub
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Ideas, playbooks, and inspiration for curious learners
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Tap into curated insights from Random Learner mentors, alumni, and
          collaborators. Explore deep dives, podcast conversations, and hands-on
          toolkits that you can remix for your own learning journey.
        </p>
      </header>

      <section className="mt-14">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Fresh from the library
          </h2>
          <a
            href="/content/archive"
            className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            View archive
          </a>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {article.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {article.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{article.summary}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{article.readingTime}</span>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500"
                  aria-label={`Continue reading ${article.title}`}
                >
                  Continue →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
          <h2 className="text-2xl font-semibold text-slate-900">Toolkits</h2>
          <p className="mt-2 text-sm text-slate-600">
            Adaptable resources crafted by mentors to guide workshops, classroom
            sessions, or self-paced study.
          </p>
          <div className="mt-6 space-y-4">
            {toolkits.map((toolkit) => (
              <div
                key={toolkit.name}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {toolkit.name}
                </p>
                <p className="mt-2 text-sm text-slate-600">{toolkit.description}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-indigo-600">
                  {toolkit.format}
                </p>
              </div>
            ))}
          </div>
          <a
            href="/content/toolkits"
            className="mt-6 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all toolkits →
          </a>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="text-lg font-semibold">Mentor Office Hours</h3>
            <p className="mt-3 text-sm text-slate-200">
              Join weekly live sessions to jam on career pivots, upcoming
              projects, or navigating tough learning challenges.
            </p>
            <a
              href="/events"
              className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Reserve a slot
            </a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <h3 className="text-lg font-semibold text-slate-900">
              Random Learner Radio
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Conversations with educators, technologists, and creators who are
              reimagining how we learn.
            </p>
            <ul className="mt-4 space-y-4">
              {podcasts.map((episode) => (
                <li key={episode.title} className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {episode.title}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {episode.guest}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">{episode.summary}</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wide text-indigo-600 hover:text-indigo-500"
                  >
                    Listen now →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100 px-8 py-12 shadow-lg">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            Subscribe to the Random Learner dispatch
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Receive curated resources, early invites to sprints, and stories
            from our global community—delivered twice a month.
          </p>
        </div>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="dispatch-email" className="sr-only">
            Email
          </label>
          <input
            id="dispatch-email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-slate-200 transition focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Join the list
          </button>
        </form>
      </section>
    </div>
  );
}

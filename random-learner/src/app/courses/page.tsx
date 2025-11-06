import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse cohort-based programs, accelerated sprints, and on-demand mentor sessions at Random Learner Academy.",
};

const cohorts = [
  {
    title: "Full-Stack Builder Lab",
    duration: "12 weeks · Hybrid",
    level: "Intermediate",
    description:
      "Design, build, and ship production-ready web apps with modern stacks, DevOps, and product practices.",
    outcomes: [
      "Launch a live full-stack project with CI/CD",
      "Practice interview-style architecture critiques",
      "Join alumni working at early-stage startups",
    ],
  },
  {
    title: "Human-Centered AI Studio",
    duration: "10 weeks · Remote",
    level: "Advanced",
    description:
      "Prototype ethical AI experiences, evaluate models, and integrate responsible AI principles into customer journeys.",
    outcomes: [
      "Ship an AI-powered product concept with research insights",
      "Master prompt design and evaluation frameworks",
      "Earn Responsible AI micro-credential",
    ],
  },
  {
    title: "Creative Technologist Residency",
    duration: "14 weeks · Hybrid",
    level: "Intermediate",
    description:
      "Blend storytelling, interaction design, and speculative design with emerging tools to craft immersive experiences.",
    outcomes: [
      "Publish a digital experience portfolio",
      "Participate in a global demo day",
      "Collaborate with filmmakers, writers, and engineers",
    ],
  },
];

const sprints = [
  {
    title: "Data Storytelling Foundations",
    duration: "4 weeks",
    focus: "Narrative & Analytics",
    description:
      "Translate complex data into persuasive visuals and stories paired with stakeholder-ready narratives.",
  },
  {
    title: "No-Code MVP Launch",
    duration: "3 weeks",
    focus: "Entrepreneurship",
    description:
      "Validate product ideas fast using modern no-code platforms, customer discovery, and experiment design.",
  },
  {
    title: "Design Systems Ops",
    duration: "4 weeks",
    focus: "Product Design",
    description:
      "Build scalable component libraries, governance workflows, and documentation across teams.",
  },
  {
    title: "Leadership in Tech",
    duration: "5 weeks",
    focus: "Leadership",
    description:
      "Lead high-trust teams, navigate ambiguity, and design career ladders with mentoring support.",
  },
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Programs & Pathways
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Learn in sprints, cohorts, or personalized tracks
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Choose a structured cohort for depth, stack focused sprints to target
          skills, or blend both with mentor guidance. Every path earns an
          industry-recognized credential.
        </p>
      </div>

      <section className="mt-16 space-y-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Cohort-based experiences
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Small groups, live mentor reviews, and real-world product briefs
              that help you master end-to-end execution.
            </p>
          </div>
          <a
            href="/admissions"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            View admissions criteria
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cohorts.map((cohort) => (
            <article
              key={cohort.title}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  <span>{cohort.duration}</span>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
                    {cohort.level}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {cohort.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{cohort.description}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {cohort.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-900 px-8 py-12 text-white shadow-xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">
              Need a personalized track for your team?
            </h2>
            <p className="mt-4 text-sm text-slate-200">
              We craft custom learning blueprints for schools, startups, and
              nonprofits. Blend our curriculum with your use cases, choose your
              mentors, and set goals tied to your outcomes.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule a discovery session
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Tailored experiences
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li>• Flexible weekday/weekend schedules</li>
              <li>• Mentors sourced from your industry</li>
              <li>• Contextual capstone projects</li>
              <li>• Progress dashboards and analytics</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-slate-900">
          Micro-sprints to stack skills
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Stack up to six sprints for a specialization badge. Each sprint mixes
          async tutorials, live workshops, and applied lab kits.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {sprints.map((sprint) => (
            <article
              key={sprint.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:border-indigo-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span>{sprint.duration}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  {sprint.focus}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {sprint.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{sprint.description}</p>
              <a
                href="/admissions"
                className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Join the waitlist →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

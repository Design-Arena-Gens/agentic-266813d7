import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Understand the Random Learner Academy admissions process, scholarship options, and cohort timelines.",
};

const steps = [
  {
    title: "01 · Discover",
    description:
      "Attend an info session or book a discovery call to align on goals, timelines, and program fit.",
  },
  {
    title: "02 · Apply",
    description:
      "Submit a short application that highlights your motivation, recent work, and learning goals.",
  },
  {
    title: "03 · Collaborate",
    description:
      "Complete a collaborative challenge with an alumni buddy to experience our learning culture.",
  },
  {
    title: "04 · Launch",
    description:
      "Secure your seat, meet your mentor squad, and receive pre-program prep resources.",
  },
];

const tuition = [
  {
    program: "Cohort-based programs",
    fee: "$1,950",
    plan: "Pay in full or over 4 installments",
  },
  {
    program: "Learning sprints",
    fee: "$290",
    plan: "Pay per sprint or bundle three and save 15%",
  },
  {
    program: "Mentor on-demand",
    fee: "$120",
    plan: "Per session with bulk session discounts",
  },
];

const scholarships = [
  {
    name: "Community Builders Scholarship",
    support: "50% tuition support",
    focus: "Educators, organizers, youth leaders building local learning communities.",
  },
  {
    name: "Emerging Technologists Fund",
    support: "Full tuition",
    focus: "Learners working on climate, civic tech, or accessibility innovations.",
  },
  {
    name: "Creative Futures Grant",
    support: "$800 stipend",
    focus: "Artists and storytellers designing immersive or narrative-driven experiences.",
  },
];

export default function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Admissions guide
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          We’re here to champion your curiosity
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Our admissions process celebrates potential, community spirit, and
          commitment—not résumés. Every application receives thoughtful mentor
          feedback and guidance.
        </p>
      </header>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              {step.title}
            </p>
            <p className="mt-3 text-sm text-slate-600">{step.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 px-8 py-12 text-white shadow-xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">
              Need help with the application?
            </h2>
            <p className="mt-4 text-sm text-slate-200">
              Join a live prep session with our admissions coaches. We’ll walk
              you through the process, share examples of successful submissions,
              and answer questions about scholarships.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule support
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Upcoming deadlines
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li>Summer Cohorts · Applications close June 28, 2024</li>
              <li>Fall Cohorts · Priority deadline August 30, 2024</li>
              <li>Scholarship decisions released two weeks post deadline</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.4fr,0.6fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <h2 className="text-2xl font-semibold text-slate-900">
            Tuition & flexible plans
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Pay in full, set up installments, or opt into income-friendly plans
            tailored to your circumstances. We believe finances should never be
            a barrier to learning.
          </p>
          <div className="mt-6 space-y-3">
            {tuition.map((item) => (
              <div
                key={item.program}
                className="flex flex-col justify-between gap-2 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 text-sm text-slate-600 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-semibold text-slate-900">{item.program}</p>
                  <p className="text-xs text-slate-500">{item.plan}</p>
                </div>
                <p className="text-lg font-semibold text-emerald-600">{item.fee}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <h3 className="text-lg font-semibold text-slate-900">Eligibility</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Curiosity and a commitment to community collaboration.</li>
            <li>• 6–10 hours per week dedicated to learning and practice.</li>
            <li>• Willingness to share progress and support peers.</li>
          </ul>
          <a
            href="/faq"
            className="mt-6 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Explore admissions FAQs →
          </a>
        </aside>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-indigo-50 px-8 py-10 shadow-sm shadow-slate-200/70">
        <h2 className="text-2xl font-semibold text-slate-900">
          Scholarships & access funds
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          We allocate 30% of every cohort to scholarship recipients, with extra
          support for caregivers, activists, and underrepresented founders.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {scholarships.map((scholarship) => (
            <div key={scholarship.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">
                {scholarship.name}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-600">
                {scholarship.support}
              </p>
              <p className="mt-3 text-sm text-slate-600">{scholarship.focus}</p>
            </div>
          ))}
        </div>
        <a
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Apply for financial support
        </a>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about Random Learner Academy programs, admissions, and community.",
};

const faqs = [
  {
    question: "Who is Random Learner Academy for?",
    answer:
      "Our learners are students, early-career professionals, educators, and founders who value curiosity, collaboration, and building things that matter. You don’t need a traditional background—just a willingness to explore and share.",
  },
  {
    question: "How much time should I commit weekly?",
    answer:
      "Cohort-based programs require 6–10 hours a week, including live workshops, asynchronous labs, and community circles. Learning sprints need about 4–6 hours, and mentor sessions can be scheduled flexibly.",
  },
  {
    question: "Do you offer scholarships or income-based pricing?",
    answer:
      "Yes. We allocate 30% of cohort seats for scholarships and provide income-adjusted plans for those who need it. When you apply, indicate your interest and we’ll reach out with options.",
  },
  {
    question: "Can my company sponsor my enrollment?",
    answer:
      "Definitely. We provide employer sponsorship letters, impact reports, and offer team learning packages. Email partners@randomlearner.academy to get started.",
  },
  {
    question: "What happens after the program ends?",
    answer:
      "You join our alumni guilds, keep access to resource libraries, receive invites to closed-door salons, and can continue mentorship through our on-demand sessions.",
  },
  {
    question: "Do you offer certificates?",
    answer:
      "Every cohort and sprint includes a milestone-based credential. We also issue specializations when you stack programs aligned to a pathway.",
  },
  {
    question: "Is the content self-paced or live?",
    answer:
      "We blend both. Core frameworks, templates, and tutorials are on-demand. You apply them through live sessions, community co-working, and mentor feedback loops.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Frequently asked questions
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Everything you’ve been curious about
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Can’t find your answer? Send us a note at{" "}
          <a
            href="mailto:hello@randomlearner.academy"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            hello@randomlearner.academy
          </a>{" "}
          and we’ll respond within a day.
        </p>
      </header>

      <section className="mt-12 space-y-6">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {faq.question}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-100 via-emerald-100 to-sky-100 px-8 py-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-900">
          Need a personalized answer?
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Book a 15-minute call with our admissions coaches or drop into open
          office hours to get a feel for our learning community.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href="/contact"
            className="rounded-full bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700"
          >
            Talk to us
          </a>
          <a
            href="/events"
            className="rounded-full border border-slate-300 px-5 py-3 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Join an open house
          </a>
        </div>
      </section>
    </div>
  );
}

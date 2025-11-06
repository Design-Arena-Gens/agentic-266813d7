import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Review Random Learner Academy policies, learner expectations, and community standards.",
};

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header>
        <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Policies & community standards
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          How we keep Random Learner safe, inclusive, and joyful
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Our policies are designed to protect learners, mentors, and partners
          while creating space for meaningful experimentation. They evolve with
          feedback from our community.
        </p>
      </header>

      <section className="mt-12 space-y-6 text-sm text-slate-600">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
          <h2 className="text-lg font-semibold text-slate-900">
            Code of Conduct
          </h2>
          <p className="mt-2">
            We foster spaces rooted in respect, generosity, and accountability.
            Harassment, discrimination, and harmful behavior have zero tolerance.
          </p>
          <p className="mt-2">
            Report concerns to{" "}
            <a
              href="mailto:safety@randomlearner.academy"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              safety@randomlearner.academy
            </a>{" "}
            for confidential support.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
          <h2 className="text-lg font-semibold text-slate-900">
            Privacy & Data
          </h2>
          <p className="mt-2">
            We collect limited personal data to run cohorts, share updates, and
            improve the learning experience. Data is never sold, and we honor
            deletion requests within 72 hours.
          </p>
          <p className="mt-2">
            We use secure infrastructure compliant with GDPR. Third-party tools
            are vetted for accessibility and privacy requirements.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
          <h2 className="text-lg font-semibold text-slate-900">
            Refund & Deferral Policy
          </h2>
          <p className="mt-2">
            We offer full refunds within 14 days of cohort start if the program
            is not the right fit. Learners may defer to a future cohort or
            switch pathways when seats are available.
          </p>
          <p className="mt-2">
            Scholarship recipients can pause learning with prior notice. We
            provide additional support for emergencies or accessibility
            requests.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
          <h2 className="text-lg font-semibold text-slate-900">Accessibility</h2>
          <p className="mt-2">
            We design inclusive experiences with captions, transcripts, flexible
            scheduling, and asynchronous alternatives. Tell us what you need—we
            will always do our best to accommodate.
          </p>
        </article>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100 px-8 py-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-900">
          Questions or feedback?
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Reach our policy team at{" "}
          <a
            href="mailto:policy@randomlearner.academy"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            policy@randomlearner.academy
          </a>
          . We respond within two business days.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Random Learner Academy for admissions, partnerships, media, and community collaborations.",
};

const contactChannels = [
  {
    title: "Admissions & Enrollment",
    email: "admissions@randomlearner.academy",
    response: "We reply within 24 hours on weekdays.",
    description:
      "For program questions, tuition assistance, scholarships, and cohort placements.",
  },
  {
    title: "Partnerships & Hiring",
    email: "partners@randomlearner.academy",
    response: "Average response time 2 business days.",
    description:
      "Collaborate on hackathons, invest in talent pipelines, or hire from our graduate network.",
  },
  {
    title: "Press & Media",
    email: "press@randomlearner.academy",
    response: "Media team responds within 48 hours.",
    description:
      "Request interviews, guest appearances, or insights on future-ready learning.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Say hello
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Let’s design your learning journey together
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Share your goals, receive a personalized roadmap, and get matched with
          a mentor within 48 hours. We’re here to support learners, educators,
          and partners globally.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
          <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
          <form className="mt-6 space-y-5 text-sm text-slate-700">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs font-semibold uppercase text-slate-500">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jamie Rivera"
                  className="mt-2 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-200 transition focus:ring-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-semibold uppercase text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jamie@company.com"
                  className="mt-2 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-200 transition focus:ring-2"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="interest" className="text-xs font-semibold uppercase text-slate-500">
                  Interest area
                </label>
                <select
                  id="interest"
                  className="mt-2 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-200 transition focus:ring-2"
                >
                  <option value="">Select an option</option>
                  <option value="programs">Cohort programs</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="media">Press & media</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="timeline" className="text-xs font-semibold uppercase text-slate-500">
                  Timeline
                </label>
                <select
                  id="timeline"
                  className="mt-2 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-200 transition focus:ring-2"
                >
                  <option value="">Choose</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-3 months">1–3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs font-semibold uppercase text-slate-500">
                Tell us about your goals
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="I’m exploring product design roles and want to build a portfolio around climate impact..."
                className="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-200 transition focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:w-auto"
            >
              Send message
            </button>
            <p className="text-xs text-slate-400">
              By submitting, you agree to our privacy policy and to receive
              occasional community updates.
            </p>
          </form>
        </section>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Campus & community hours
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We host weekly open houses and onboarding sessions every Thursday
              at 6pm GMT. Join virtually or visit our learning studio in Lagos
              and Barcelona.
            </p>
            <a
              href="/events"
              className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              View upcoming sessions →
            </a>
          </div>
          {contactChannels.map((channel) => (
            <div
              key={channel.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {channel.title}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-2 block text-sm font-semibold text-slate-900"
              >
                {channel.email}
              </a>
              <p className="mt-1 text-xs text-slate-500">{channel.response}</p>
              <p className="mt-3 text-sm text-slate-600">{channel.description}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

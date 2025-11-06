export default function Home() {
  return (
    <div className="relative overflow-hidden pb-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-br from-indigo-500/20 via-blue-200/20 to-sky-100/60 blur-3xl" />

      <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-16 md:flex-row md:pt-24">
        <div className="flex-1">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-lg shadow-slate-200/50 backdrop-blur">
            Inspired Learning Paths · Live Mentorship
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Unlock your curiosity with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Random Learner Academy
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Future-ready programs curated by industry mentors, a vibrant
            community of explorers, and hands-on learning sprints that help you
            build an edge in technology, design, and leadership.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/courses"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-700"
            >
              Explore Programs
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Book a Discovery Call
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-200/60 backdrop-blur">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Learners
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-slate-900">
                4.8k+
              </dd>
              <p className="mt-1 text-xs text-slate-500">
                from 37 countries building skills together.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-200/60 backdrop-blur">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Mentors
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-slate-900">
                120+
              </dd>
              <p className="mt-1 text-xs text-slate-500">
                industry leaders guiding every cohort.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-200/60 backdrop-blur sm:col-span-1">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Outcomes
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-slate-900">
                92%
              </dd>
              <p className="mt-1 text-xs text-slate-500">
                of alumni land dream roles within 6 months.
              </p>
            </div>
          </dl>
        </div>
        <div className="flex-1">
          <div className="relative rounded-[2.5rem] border border-slate-200/60 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm">
            <div className="absolute -top-12 left-10 hidden h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/60 to-sky-400/60 blur-3xl md:block" />
            <div className="absolute -bottom-14 right-14 hidden h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/40 to-sky-300/60 blur-3xl md:block" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-slate-200/80">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Cohort Spotlight
                </h2>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  Product Design Lab — June 2024
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Learners prototyped ideas for accessible learning using AI
                  collaboration tools and community feedback loops.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-slate-200/80">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Weekly Rhythm
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Studio labs with live mentor feedback</li>
                  <li>• Peer feedback circles & accountability pods</li>
                  <li>• Applied projects that map to portfolio artefacts</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-slate-200/80">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Upcoming Sprint
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Build a climate data dashboard with open APIs and ship to
                  production in under 21 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Three pathways to accelerate your learning
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pick a guided journey, mix and match sprints, or co-build your own
            learning roadmap with our mentors.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Guided Cohorts",
              description:
                "Live weekly mentor sessions, capstone reviews, and peer accountability to help you ship portfolio-ready work.",
              highlights: ["Live workshops", "Studio critiques", "Career playbooks"],
            },
            {
              title: "Learning Sprints",
              description:
                "Four-week challenges to master a specific skill with expert playbooks, templates, and feedback loops.",
              highlights: ["Hands-on projects", "Applied labs", "Micro-credentials"],
            },
            {
              title: "Mentor On-Demand",
              description:
                "One-on-one office hours tailored to your goals, from switching careers to leveling up in your current role.",
              highlights: ["Personal roadmap", "Interview prep", "Portfolio deep-dives"],
            },
          ].map((pathway) => (
            <article
              key={pathway.title}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {pathway.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{pathway.description}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {pathway.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[2fr,3fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              A complete learning ecosystem built for momentum
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Random Learner keeps you invested with real-world challenges,
              community support, and access to mentors who care about your
              growth long after the cohort ends.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow shadow-slate-200/70">
                <p className="text-sm font-semibold text-slate-900">
                  Community-powered learning
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Join curated interest guilds, collaborate on open source
                  projects, and gather for global meetups.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow shadow-slate-200/70">
                <p className="text-sm font-semibold text-slate-900">
                  Layered support system
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Success coaches, industry mentors, and alumni advisors help
                  you personalize your journey every step of the way.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow shadow-slate-200/70">
                <p className="text-sm font-semibold text-slate-900">
                  Outcomes that last
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Build a portfolio of applied projects, earn micro-credentials,
                  and leverage our career network for top opportunities.
                </p>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Career Labs",
                description:
                  "Quarterly sessions with hiring partners, technical recruiters, and alumni trailblazers.",
              },
              {
                title: "Innovation Week",
                description:
                  "Global teams hack on community challenges, pitch to mentors, and ship impact-first solutions.",
              },
              {
                title: "Mentor Office Hours",
                description:
                  "Book 1:1 time with practitioners from top tech, design, and research teams.",
              },
              {
                title: "Resource Hub",
                description:
                  "Templates, playbooks, toolkits, and recorded workshops available on-demand.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Upcoming immersive experiences
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Reserve your spot early—each program is designed for small cohort
              learning.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "AI Literacy for Creative Leaders",
                  date: "Starting July 8, 2024 · 5 weeks",
                  description:
                    "Experiment with prompt engineering, ethical frameworks, and product experiments guided by researchers.",
                },
                {
                  title: "Data Storytelling Studio",
                  date: "Starting August 12, 2024 · 4 weeks",
                  description:
                    "Learn to translate complex data into persuasive narratives using visual storytelling, dashboards, and writing.",
                },
                {
                  title: "Global Youth Changemakers Summit",
                  date: "September 21, 2024 · Hybrid",
                  description:
                    "Connect with social impact leaders, prototype solutions, and pitch to a global jury.",
                },
              ].map((event) => (
                <article
                  key={event.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {event.title}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-indigo-600">
                    {event.date}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{event.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <h3 className="text-2xl font-semibold text-slate-900">
              Alumni stories
            </h3>
            <div className="mt-6 space-y-6">
              {[
                {
                  name: "Mayra Chen",
                  role: "Product Strategist, Helio Labs",
                  quote:
                    "The mentor feedback loops and studio critiques helped me transition from UX to product strategy in under 4 months.",
                },
                {
                  name: "Omar Siddiqui",
                  role: "Founder, SolarStack",
                  quote:
                    "Random Learner gave me the frameworks, collaborators, and confidence to ship my first climate-tech MVP.",
                },
                {
                  name: "Grace Anya",
                  role: "Design Lead, Lightwave Media",
                  quote:
                    "The community accountability pods kept me motivated long after the cohort. I still jam with them weekly.",
                },
              ].map((alumni) => (
                <figure
                  key={alumni.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50/40 p-5"
                >
                  <blockquote className="text-sm text-slate-600">
                    “{alumni.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                    {alumni.name}
                    <span className="ml-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                      {alumni.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 px-8 py-12 text-white shadow-xl">
          <div className="absolute -top-20 -right-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to design your own learning journey?
            </h2>
            <p className="mt-4 text-base text-slate-200">
              We pair you with a mentor, build your personal roadmap, and invite
              you to a global community of doers. Start with a free strategy
              session tailored to your goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Book a call
              </a>
              <a
                href="/admissions"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View admissions guide
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

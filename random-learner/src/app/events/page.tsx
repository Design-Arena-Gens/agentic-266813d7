import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Random Learner Academy events, workshops, open houses, and community gatherings around the world.",
};

const upcomingEvents = [
  {
    title: "Global Open House",
    date: "May 30 · Virtual & Lagos Studio",
    description:
      "Meet mentors, tour our learning studio, and join lightning talks from alumni building impactful projects.",
    cta: "Save your seat",
  },
  {
    title: "Learning Design Jam",
    date: "June 15 · Barcelona Hub",
    description:
      "Co-create playful learning experiences for youth with designers, educators, and technologists.",
    cta: "Join the jam",
  },
  {
    title: "Mentor Roundtable: Career Pivots",
    date: "July 4 · Online",
    description:
      "Hear how alumni navigated career transitions into product, design, and data roles with mentor-backed support.",
    cta: "Grab a spot",
  },
];

const communityChapters = [
  {
    city: "Nairobi",
    leaders: "Led by Wanjiku Mwangi & Gideon Otieno",
    focus: "Community impact labs and climate innovation sprints.",
  },
  {
    city: "São Paulo",
    leaders: "Led by Luna Freitas",
    focus: "Storytelling studios for creatives exploring tech-enabled narratives.",
  },
  {
    city: "Jakarta",
    leaders: "Led by Harun Iskandar",
    focus: "Youth entrepreneurship and civic-tech challenges.",
  },
  {
    city: "Barcelona",
    leaders: "Led by Jana Nováková & team",
    focus: "Immersive design residencies and artist-in-tech meetups.",
  },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Upcoming events
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          Gatherings, workshops, and meetups for lifelong learners
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Join the Random Learner community online or in one of our local
          chapters. Learn together, share ideas, and collaborate on projects
          that make a difference.
        </p>
      </header>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {upcomingEvents.map((event) => (
          <article
            key={event.title}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {event.date}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">
                {event.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{event.description}</p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {event.cta} →
            </a>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 px-8 py-12 text-white shadow-xl">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Host an event with us</h2>
            <p className="mt-4 text-sm text-slate-200">
              We partner with schools, creative hubs, libraries, and companies
              around the world. Pitch your idea, and we’ll co-design the
              experience—from curriculum to logistics.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Propose a collaboration
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              What we co-create
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li>• Impact hackathons & design jams</li>
              <li>• Community storytelling nights</li>
              <li>• Mentor office hours & speed mentoring</li>
              <li>• Youth & educator bootcamps</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          Local chapters & circles
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Plug into a Random Learner circle near you or start one in your city.
          Each chapter organizes monthly learning salons and project showcases.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {communityChapters.map((chapter) => (
            <article
              key={chapter.city}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {chapter.city}
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {chapter.leaders}
              </p>
              <p className="mt-3 text-sm text-slate-600">{chapter.focus}</p>
              <a
                href="/contact"
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-indigo-600 hover:text-indigo-500"
              >
                Connect with the hosts →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

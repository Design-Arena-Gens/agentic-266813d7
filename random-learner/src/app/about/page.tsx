import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Random Learner Academy’s mission, values, team, and global learning community.",
};

const values = [
  {
    title: "Curiosity over credentials",
    description:
      "We design experiences that reward experimentation, reflection, and stretching beyond comfort zones.",
  },
  {
    title: "Community-first collaboration",
    description:
      "Learning is social. We cultivate circles that celebrate every milestone and champion collective wins.",
  },
  {
    title: "Learning with purpose",
    description:
      "We encourage learners to align their projects with real-world impact, community needs, and personal joy.",
  },
];

const team = [
  {
    name: "Aria Mensah",
    role: "Founder & Learning Architect",
    bio: "Former design leader at FutureLab. Aria pioneered community-first curriculum models for emerging markets.",
  },
  {
    name: "Leo Fernandez",
    role: "Director of Programs",
    bio: "Previously led innovation at Horizon Schools. Leo guides cohorts and helps mentors translate industry practice into classroom magic.",
  },
  {
    name: "Myra Patel",
    role: "Head of Community",
    bio: "Community-builder who has launched global chapters across 12 countries and co-creates our accountability circles.",
  },
  {
    name: "Sasha Kim",
    role: "Learning Experience Designer",
    bio: "Brings theatre and systems thinking together to craft immersive simulations for leadership and storytelling programs.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          About Random Learner
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-slate-900">
          We champion everyday explorers who want to change the future
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Random Learner Academy started as a small circle of educators,
          technologists, and artists remixing how we learn. Today we host a
          global network of learners across 37 countries building meaningful
          projects together.
        </p>
      </header>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {value.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{value.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100 px-8 py-12 shadow-lg">
        <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              What makes Random Learner different
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              We blend cohort-based learning, open-source resources, and
              purpose-driven projects that respond to the needs of our
              communities. Learning is joyful, collaborative, and tied to
              real-world outcomes.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>• Mentors who stay with you beyond graduation.</li>
              <li>• Alumni guilds focused on climate, health, civic tech, and creative futures.</li>
              <li>• Annual summit bringing together learners, partners, and community leaders.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/60 p-6 text-sm text-slate-600">
            <p>
              “Random Learner helped me discover my inner maker. The mix of
              accountability pods and playful studios meant I always felt
              supported. I still collaborate with my cohort on open source
              projects today.”
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              — Felix Rivers, Alumni · Climate-tech Founder
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          Meet the team
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          We are educators, designers, technologists, storytellers, and
          community organizers devoted to building accessible learning pathways.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {member.role}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Our impact so far
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Together with our partners and alumni, we’ve co-created projects
              that reach communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <p className="text-3xl font-semibold text-slate-900">4.8k+</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Active learners
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <p className="text-3xl font-semibold text-slate-900">37</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Countries represented
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <p className="text-3xl font-semibold text-slate-900">320+</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Portfolio projects shipped
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <p className="text-3xl font-semibold text-slate-900">92%</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Graduate outcomes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

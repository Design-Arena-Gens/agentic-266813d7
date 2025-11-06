import Link from "next/link";

const quickLinks = [
  { label: "Programs", href: "/courses" },
  { label: "Learning Hub", href: "/content" },
  { label: "Admissions", href: "/admissions" },
  { label: "Events", href: "/events" },
];

const supportLinks = [
  { label: "Support", href: "/contact" },
  { label: "FAQs", href: "/faq" },
  { label: "Policies", href: "/policies" },
  { label: "Careers", href: "/careers" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg text-white shadow-lg shadow-slate-900/20">
              RL
            </span>
            <span className="text-lg font-semibold text-slate-900">
              Random Learner Academy
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Empowering curious minds with immersive learning experiences, live
            mentorship, and a community-first approach to future-ready skills.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Support
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {supportLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Stay Updated
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Subscribe to our monthly bulletin for exclusive webinars, free
            resources, and community stories.
          </p>
          <form className="mt-4 flex items-center gap-2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none ring-slate-200 transition focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Random Learner Academy. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/policies" className="hover:text-slate-900">
              Privacy
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/policies" className="hover:text-slate-900">
              Terms
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/contact" className="hover:text-slate-900">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

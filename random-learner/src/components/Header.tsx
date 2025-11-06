"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/content", label: "Learning Hub" },
  { href: "/admissions", label: "Admissions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-gradient-to-r from-slate-50 via-white to-slate-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg text-white shadow-lg shadow-slate-900/20">
            RL
          </span>
          <span className="text-lg font-semibold text-slate-900">
            Random Learner Academy
          </span>
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu className="h-5 w-5" />
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition-colors hover:bg-slate-900/5 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 md:block"
        >
          Enroll Now
        </Link>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 hover:bg-slate-900/5"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

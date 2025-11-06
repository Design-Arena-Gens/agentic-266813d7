import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Random Learner Academy",
    template: "%s | Random Learner Academy",
  },
  description:
    "Random Learner Academy empowers lifelong learners with immersive courses, mentorship, and community programs designed to ignite curiosity and future-ready skills.",
  openGraph: {
    title: "Random Learner Academy",
    description:
      "Explore flexible courses, mentorship, and resources designed to help every learner thrive.",
    url: "https://agentic-266813d7.vercel.app",
    siteName: "Random Learner Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Learner Academy",
    description:
      "Personalized, community-powered learning experiences for the next generation of innovators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Internship() {
  const [menuOpen, setMenuOpen] = useState(false);

  const faqs = [
    {
      question: "Who can apply for the internship?",
      answer:
        "Students and beginners who want to learn modern technologies and gain practical experience can apply.",
    },
    {
      question: "Is prior experience required?",
      answer:
        "No. Beginners who are willing to learn and work on practical projects are welcome.",
    },
    {
      question: "What will I learn?",
      answer:
        "You can gain practical experience in AI, machine learning, frontend, backend and business development.",
    },
    {
      question: "Will I work on real projects?",
      answer:
        "The program is designed around practical learning and project-based development.",
    },
  ];

  const benefits = [
    {
      icon: "💻",
      title: "Practical Projects",
      text: "Learn by building real-world style projects.",
    },
    {
      icon: "🧠",
      title: "Modern Skills",
      text: "Explore AI, ML and modern development technologies.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      text: "Build skills and experience for your professional journey.",
    },
    {
      icon: "📁",
      title: "Portfolio",
      text: "Create projects that can strengthen your portfolio.",
    },
  ];

  const areas = [
    "Agentic AI",
    "Machine Learning",
    "Frontend Development",
    "Backend Development",
    "Business Development",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      <nav className="relative flex items-center justify-between border-b border-gray-800 px-6 py-5 md:px-12">

        <a href="/" className="text-2xl font-bold">
          Nexariza<span className="text-[#2563EB]">AI</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="hover:text-[#2563EB]">
            Home
          </a>

          <a href="/about" className="hover:text-[#2563EB]">
            About
          </a>

          <a href="/services" className="hover:text-[#2563EB]">
            Services
          </a>

          <a href="/internship" className="text-[#2563EB]">
            Internship
          </a>

          <a href="/contact" className="hover:text-[#2563EB]">
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <a
          href="/contact"
          className="hidden rounded-lg bg-[#2563EB] px-5 py-2 font-semibold transition hover:bg-blue-700 md:block"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-700 px-3 py-2 text-xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full z-50 w-full border-b border-gray-800 bg-[#0a0a0a] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>

              <a
                href="/internship"
                onClick={() => setMenuOpen(false)}
                className="text-[#2563EB]"
              >
                Internship
              </a>

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#F59E0B]">
            NEXARIZA AI INTERNSHIP
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold md:text-6xl">
            Learn.{" "}
            <span className="text-[#2563EB]">Build.</span>{" "}
            Grow.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Build practical skills, work on projects and develop the experience
            you need for your technology career.
          </p>

          <motion.a
            href="#join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block rounded-lg bg-[#2563EB] px-8 py-3 font-semibold hover:bg-blue-700"
          >
            How to Join
          </motion.a>
        </motion.div>

      </section>

      {/* Program Benefits */}
      <section className="px-6 py-20 md:px-12">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#F59E0B]">
              PROGRAM BENEFITS
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Why Join Our Internship?
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="rounded-xl border border-gray-800 bg-[#111111] p-7 text-center transition hover:border-[#2563EB]"
              >
                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </section>

      {/* Learning Areas */}
      <section className="border-y border-gray-800 bg-[#111111] px-6 py-20 md:px-12">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#F59E0B]">
              LEARNING AREAS
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Choose Your Learning Path
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-gray-800 p-6 text-center transition hover:border-[#F59E0B]"
              >
                <h3 className="font-semibold">
                  {area}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  Practical learning and project-based experience.
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </section>

      {/* How to Join */}
      <section
        id="join"
        className="px-6 py-20 md:px-12"
      >

        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#F59E0B]">
              HOW TO JOIN
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Start Your Journey
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              ["01", "Apply", "Submit your internship application."],
              ["02", "Learn", "Learn technologies and complete practical tasks."],
              ["03", "Build", "Create projects and grow your portfolio."],
            ].map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-gray-800 bg-[#111111] p-7"
              >
                <span className="text-3xl font-bold text-[#2563EB]">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="border-y border-gray-800 bg-[#111111] px-6 py-20 md:px-12">

        <div className="mx-auto max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#F59E0B]">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mt-10 space-y-4">

            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-xl border border-gray-800 bg-[#0a0a0a] p-6"
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-2xl border border-gray-800 bg-[#111111] p-10 text-center md:p-14"
        >

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Start Learning?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Take the next step toward building your technology career with
            practical experience.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block rounded-lg bg-[#2563EB] px-8 py-3 font-semibold hover:bg-blue-700"
          >
            Apply Now
          </motion.a>

        </motion.div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-500">
        <p>
          © 2026 Nexariza AI. Built during @NexarizaAI internship.
        </p>
      </footer>

    </main>
  );
}
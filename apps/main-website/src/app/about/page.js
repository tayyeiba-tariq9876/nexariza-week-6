"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      <nav className="relative flex items-center justify-between border-b border-gray-800 px-6 py-5 md:px-12">
        <a href="/" className="text-2xl font-bold">
          Nexariza<span className="text-[#2563EB]">AI</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="hover:text-[#2563EB]">Home</a>
          <a href="/about" className="text-[#2563EB]">About</a>
          <a href="/services" className="hover:text-[#2563EB]">Services</a>
          <a href="/internship" className="hover:text-[#2563EB]">Internship</a>
          <a href="/contact" className="hover:text-[#2563EB]">Contact</a>
        </div>

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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full z-50 w-full border-b border-gray-800 bg-[#0a0a0a] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-[#2563EB]"
              >
                About
              </a>
              <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="/internship" onClick={() => setMenuOpen(false)}>Internship</a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#F59E0B]">ABOUT NEXARIZA AI</p>

          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold md:text-6xl">
            Building the Future with{" "}
            <span className="text-[#2563EB]">
              Artificial Intelligence
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Nexariza AI is focused on creating innovative technology solutions,
            empowering talent and transforming ideas into intelligent digital
            experiences.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-gray-800 bg-[#111111] p-8"
          >
            <div className="mb-5 text-4xl">🎯</div>

            <h2 className="text-3xl font-bold text-[#2563EB]">
              Our Mission
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Our mission is to develop practical and intelligent technology
              solutions while helping students and professionals gain
              real-world experience in modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-gray-800 bg-[#111111] p-8"
          >
            <div className="mb-5 text-4xl">🚀</div>

            <h2 className="text-3xl font-bold text-[#F59E0B]">
              Our Vision
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Our vision is to create a future where artificial intelligence
              and innovative software solutions help businesses and people
              achieve more.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-[#111111] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

          {[
            ["50+", "Projects", "text-[#2563EB]"],
            ["20+", "AI Solutions", "text-[#F59E0B]"],
            ["100+", "Learners", "text-[#2563EB]"],
            ["24/7", "Innovation", "text-[#F59E0B]"],
          ].map(([number, label, color], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className={`text-4xl font-bold ${color}`}>
                {number}
              </h3>
              <p className="mt-2 text-gray-400">{label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#F59E0B]">OUR TEAM</p>

            <h2 className="mt-3 text-4xl font-bold">
              People Behind Innovation
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              A team passionate about artificial intelligence, software
              development, business growth and continuous learning.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                short: "AI",
                title: "AI & ML Team",
                description:
                  "Building intelligent solutions using modern AI and machine learning technologies.",
                color: "bg-[#2563EB]",
                textColor: "",
              },
              {
                short: "DEV",
                title: "Development Team",
                description:
                  "Creating modern, scalable and responsive digital experiences.",
                color: "bg-[#F59E0B]",
                textColor: "text-black",
              },
              {
                short: "BD",
                title: "Business Team",
                description:
                  "Connecting technology with business opportunities and growth.",
                color: "bg-[#2563EB]",
                textColor: "",
              },
            ].map((team, index) => (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-xl border border-gray-800 bg-[#111111] p-7 text-center"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold ${team.color} ${team.textColor}`}
                >
                  {team.short}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {team.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {team.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-2xl border border-gray-800 bg-[#111111] p-10 text-center md:p-14"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Build the Future?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Explore our services and discover how Nexariza AI is creating
            innovative digital solutions.
          </p>

          <a
            href="/services"
            className="mt-8 inline-block rounded-lg bg-[#2563EB] px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Explore Services
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-500">
        <p>© 2026 Nexariza AI. Built during @NexarizaAI internship.</p>
      </footer>

    </main>
  );
}
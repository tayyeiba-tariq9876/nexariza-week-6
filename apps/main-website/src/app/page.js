"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      <nav className="relative flex items-center justify-between border-b border-gray-800 px-6 py-5 md:px-12">
        <a href="/" className="text-2xl font-bold">
          Nexariza<span className="text-[#2563EB]">AI</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="hover:text-[#2563EB]">
            Home
          </a>

          <a href="#services" className="hover:text-[#2563EB]">
            Services
          </a>

          <a href="#about" className="hover:text-[#2563EB]">
            About
          </a>

          <a href="#internship" className="hover:text-[#2563EB]">
            Internship
          </a>

          <a href="#contact" className="hover:text-[#2563EB]">
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <a
          href="/contact"
          className="hidden rounded-lg bg-[#2563EB] px-5 py-2 font-semibold transition hover:bg-blue-700 md:block"
        >
          Get Started
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full z-50 w-full border-b border-gray-800 bg-[#0a0a0a] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">

              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#services" onClick={closeMenu}>
                Services
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#internship" onClick={closeMenu}>
                Internship
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

              <a
                href="/contact"
                onClick={closeMenu}
                className="rounded-lg bg-[#2563EB] px-5 py-3 text-center font-semibold"
              >
                Get Started
              </a>

            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[#F59E0B]"
        >
          AI • Innovation • Future
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
        >
          Build the Future with{" "}
          <span className="text-[#2563EB]">Nexariza AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-gray-400"
        >
          We build intelligent digital solutions using Artificial
          Intelligence, Machine Learning and modern software technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="rounded-lg bg-[#2563EB] px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Explore Services
          </a>

          <a
            href="/internship"
            className="rounded-lg border border-[#F59E0B] px-7 py-3 font-semibold text-[#F59E0B] transition hover:-translate-y-1 hover:bg-[#F59E0B] hover:text-black"
          >
            Join Internship
          </a>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-6 border-y border-gray-800 px-6 py-12 md:grid-cols-4 md:px-12">
        {[
          ["50+", "Projects", "text-[#2563EB]"],
          ["20+", "AI Solutions", "text-[#F59E0B]"],
          ["100+", "Students", "text-[#2563EB]"],
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
            <h3 className={`text-3xl font-bold ${color}`}>{number}</h3>
            <p className="mt-2 text-gray-400">{label}</p>
          </motion.div>
        ))}
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#F59E0B]">WHAT WE DO</p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Our Services
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Agentic AI",
              "Machine Learning",
              "Backend Development",
              "Frontend Development",
              "Business Development",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-xl border border-gray-800 bg-[#111111] p-6 hover:border-[#2563EB]"
              >
                <h3 className="text-xl font-semibold">{service}</h3>

                <p className="mt-3 text-sm text-gray-400">
                  Modern and scalable solutions designed for real-world
                  business needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#111111] px-6 py-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[#F59E0B]">ABOUT NEXARIZA AI</p>

          <h2 className="mt-2 text-4xl font-bold">
            Innovation That Creates Impact
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Nexariza AI focuses on building innovative technology solutions
            and developing future-ready talent through practical learning,
            AI innovation and modern software development.
          </p>
        </motion.div>
      </section>

      {/* Internship */}
      <section id="internship" className="px-6 py-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-2xl border border-gray-800 bg-[#111111] p-8 text-center md:p-12"
        >
          <p className="text-[#F59E0B]">NEXARIZA AI INTERNSHIP</p>

          <h2 className="mt-3 text-4xl font-bold">
            Learn. Build. Grow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Gain practical experience by working on real-world projects,
            learning modern technologies and building your professional
            portfolio.
          </p>

          <a
            href="/internship"
            className="mt-8 inline-block rounded-lg bg-[#2563EB] px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Apply Now
          </a>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#111111] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#F59E0B]">TESTIMONIALS</p>

            <h2 className="mt-2 text-4xl font-bold">
              What People Say
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Amazing learning experience and great practical exposure.",
              "The internship helped me understand real-world development.",
              "A great environment for learning modern technologies.",
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-gray-800 p-6"
              >
                <p className="text-gray-400">
                  “{testimonial}”
                </p>

                <p className="mt-4 font-semibold text-[#F59E0B]">
                  Nexariza AI Intern
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[#F59E0B]">GET IN TOUCH</p>

          <h2 className="mt-2 text-4xl font-bold">
            Let’s Build Something Amazing
          </h2>

          <p className="mt-5 text-gray-400">
            Have an idea or want to work with us? Get in touch with Nexariza AI.
          </p>

          <form className="mx-auto mt-10 grid max-w-2xl gap-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 outline-none focus:border-[#2563EB]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 outline-none focus:border-[#2563EB]"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 outline-none focus:border-[#2563EB]"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
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
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      <nav className="relative flex items-center justify-between border-b border-gray-800 px-6 py-5 md:px-12">

        <a href="/" className="text-2xl font-bold">
          Nexariza<span className="text-[#2563EB]">AI</span>
        </a>

        {/* Desktop Navigation */}
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

          <a href="/internship" className="hover:text-[#2563EB]">
            Internship
          </a>

          <a href="/contact" className="text-[#2563EB]">
            Contact
          </a>
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
            className="absolute left-0 top-full z-50 w-full border-b border-gray-800 bg-[#0a0a0a] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">

              <a href="/" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="/about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </a>

              <a href="/internship" onClick={() => setMenuOpen(false)}>
                Internship
              </a>

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-[#2563EB]"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#F59E0B]">
            GET IN TOUCH
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold md:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-[#2563EB]">
              Amazing
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project idea, business inquiry or want to learn more about
            Nexariza AI? We&apos;d love to hear from you.
          </p>
        </motion.div>

      </section>

      {/* Contact Content */}
      <section className="px-6 pb-20 md:px-12">

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-800 bg-[#111111] p-8 md:p-10"
          >

            <p className="text-[#F59E0B]">
              CONTACT INFORMATION
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Let&apos;s Talk
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Connect with the Nexariza AI team to discuss projects,
              collaborations, internships and business opportunities.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <div className="text-2xl">📧</div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Contact us through our official channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🌐</div>

                <div>
                  <h3 className="font-semibold">
                    Website
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Explore our digital solutions and services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">💼</div>

                <div>
                  <h3 className="font-semibold">
                    Business
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Let&apos;s discuss your next technology project.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-800 bg-[#111111] p-8 md:p-10"
          >

            <p className="text-[#F59E0B]">
              SEND A MESSAGE
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Contact Us
            </h2>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#2563EB] px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-20 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >

          <div className="mb-8 text-center">
            <p className="text-[#F59E0B]">
              OUR LOCATION
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Find Us
            </h2>
          </div>

          <div className="flex h-80 items-center justify-center rounded-2xl border border-gray-800 bg-[#111111]">

            <div className="text-center">

              <div className="text-5xl">
                📍
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Nexariza AI
              </h3>

              <p className="mt-2 text-gray-400">
                Official location map will be added here.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-12">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-2xl border border-gray-800 bg-[#111111] p-10 text-center md:p-14"
        >

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Work Together?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Let&apos;s turn your ideas into innovative digital solutions.
          </p>

          <a
            href="/services"
            className="mt-8 inline-block rounded-lg bg-[#2563EB] px-8 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Explore Services
          </a>

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
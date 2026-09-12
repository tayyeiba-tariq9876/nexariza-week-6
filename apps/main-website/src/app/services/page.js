"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Agentic AI",
      icon: "🤖",
      description:
        "Build intelligent AI agents that can understand tasks, make decisions and automate complex workflows.",
      features: ["AI Agents", "Automation", "LLM Solutions"],
    },
    {
      title: "Machine Learning",
      icon: "🧠",
      description:
        "Develop intelligent machine learning solutions that transform data into useful insights and predictions.",
      features: ["Predictive Models", "Data Analysis", "AI Models"],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description:
        "Create secure, scalable and reliable backend systems that power modern digital applications.",
      features: ["APIs", "Databases", "Server Solutions"],
    },
    {
      title: "Frontend Development",
      icon: "💻",
      description:
        "Design responsive and modern user interfaces that provide smooth experiences across all devices.",
      features: ["Next.js", "React", "Responsive UI"],
    },
    {
      title: "Business Development",
      icon: "📈",
      description:
        "Connect technology with business opportunities through strategic planning, partnerships and growth.",
      features: ["Strategy", "Partnerships", "Growth"],
    },
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
          <a href="/" className="hover:text-[#2563EB]">Home</a>
          <a href="/about" className="hover:text-[#2563EB]">About</a>
          <a href="/services" className="text-[#2563EB]">Services</a>
          <a href="/internship" className="hover:text-[#2563EB]">Internship</a>
          <a href="/contact" className="hover:text-[#2563EB]">Contact</a>
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full z-50 w-full border-b border-gray-800 bg-[#0a0a0a] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              <a
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-[#2563EB]"
              >
                Services
              </a>
              <a href="/internship" onClick={() => setMenuOpen(false)}>
                Internship
              </a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>
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
          <p className="text-[#F59E0B]">WHAT WE DO</p>

          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold md:text-6xl">
            Technology Services for the{" "}
            <span className="text-[#2563EB]">Future</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            From artificial intelligence to modern web development, Nexariza AI
            provides innovative technology solutions designed to create real
            business impact.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group rounded-2xl border border-gray-800 bg-[#111111] p-7 hover:border-[#2563EB] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="text-5xl">{service.icon}</div>

              <h2 className="mt-6 text-2xl font-bold group-hover:text-[#2563EB]">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-7 inline-block font-semibold text-[#F59E0B] transition hover:text-white"
              >
                Learn More →
              </a>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Process */}
      <section className="border-y border-gray-800 bg-[#111111] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#F59E0B]">OUR PROCESS</p>

            <h2 className="mt-3 text-4xl font-bold">
              From Idea to Innovation
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Discover", "Understand the problem and define the goals."],
              ["02", "Plan", "Create a clear technology and development strategy."],
              ["03", "Build", "Develop and test the solution using modern tools."],
              ["04", "Launch", "Deploy, improve and scale the final product."],
            ].map(([number, title, description], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-gray-800 p-6"
              >
                <span className="text-3xl font-bold text-[#2563EB]">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-gray-400">{description}</p>
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
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Let&apos;s work together to transform your idea into an innovative
            digital solution.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-[#2563EB] px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Start a Conversation
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
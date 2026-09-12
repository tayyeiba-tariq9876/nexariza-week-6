
          "use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Main Website",
    description:
      "Explore the complete Nexariza AI website with services, about, internship and contact sections.",
    button: "Open Main Website",
    href: "/about",
    color: "blue",
  },
  {
    title: "Intern Dashboard",
    description:
      "Access the Nexariza AI intern portal dashboard with tasks, progress, leaderboard and profile sections.",
    button: "Open Dashboard",
    href: "https://nexariza-week-6-intern-dashboard.vercel.app/",
    color: "gold",
  },
  {
    title: "Chat Widget",
    description:
      "Explore the Nexariza AI embeddable chat widget with quick replies and interactive messaging.",
    button: "Open Chat Widget",
    href: "https://nexariza-week-6-chat-widget.vercel.app/",
    color: "blue",
  },
  {
    title: "Campaign Pages",
    description:
      "View the complete Nexariza AI campaign funnel including internship, certificate and course pages.",
    button: "Open Campaign Pages",
    href: "https://nexariza-compaign-pages.netlify.app/",
    color: "gold",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            Nexariza<span className="text-[#2563EB]">AI</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="/" className="hover:text-[#2563EB]">
              Home
            </a>

            <a href="/services" className="hover:text-[#2563EB]">
              Services
            </a>

            <a href="/about" className="hover:text-[#2563EB]">
              About
            </a>

            <a href="/internship" className="hover:text-[#2563EB]">
              Internship
            </a>

            <a href="/contact" className="hover:text-[#2563EB]">
              Contact
            </a>
          </div>

          <a
            href="/contact"
            className="rounded-lg bg-[#2563EB] px-5 py-2 font-semibold transition hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center md:px-12 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[#F59E0B]"
        >
          NEXARIZA AI • FULL PRODUCT SUITE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-5xl font-bold leading-tight md:text-7xl"
        >
          Nexariza AI{" "}
          <span className="text-[#2563EB]">Product Suite</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400"
        >
          A complete frontend product suite combining the Nexariza AI website,
          intern dashboard, chat widget and campaign pages into one cohesive
          experience.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#products"
          className="mt-8 inline-block rounded-lg bg-[#2563EB] px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
        >
          Explore Product Suite
        </motion.a>
      </section>

      {/* Product Suite */}
      <section
        id="products"
        className="border-y border-gray-800 px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[#F59E0B]">OUR PRODUCTS</p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Everything in One Suite
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              One central entry point for all major Nexariza AI frontend
              projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-gray-800 bg-[#111111] p-8 transition hover:border-[#2563EB]"
              >
                <div
                  className={`mb-5 h-2 w-16 rounded-full ${
                    product.color === "blue"
                      ? "bg-[#2563EB]"
                      : "bg-[#F59E0B]"
                  }`}
                />

                <h3 className="text-2xl font-bold">{product.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {product.description}
                </p>

                <a
                  href={product.href}
                  target={
                    product.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    product.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`mt-7 inline-block rounded-lg px-6 py-3 font-semibold transition ${
                    product.color === "blue"
                      ? "bg-[#2563EB] hover:bg-blue-700"
                      : "bg-[#F59E0B] text-black hover:bg-yellow-500"
                  }`}
                >
                  {product.button}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="bg-[#111111] px-6 py-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-[#F59E0B]">CONSISTENT DESIGN SYSTEM</p>

          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            One Brand. One Experience.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            The product suite follows a consistent Nexariza AI visual language
            using shared colors, typography, spacing and reusable UI
            components.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="rounded-lg border border-gray-700 px-5 py-3 text-gray-300">
              #0A0A0A
            </span>

            <span className="rounded-lg border border-[#2563EB] px-5 py-3 text-[#2563EB]">
              #2563EB
            </span>

            <span className="rounded-lg border border-[#F59E0B] px-5 py-3 text-[#F59E0B]">
              #F59E0B
            </span>

            <span className="rounded-lg border border-gray-700 px-5 py-3 text-gray-300">
              Reusable UI
            </span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-gray-400">
            © 2026 Nexariza AI. Full Product Suite.
          </p>

          <div className="flex gap-6">
            <a href="/about" className="text-gray-400 hover:text-white">
              About
            </a>

            <a href="/services" className="text-gray-400 hover:text-white">
              Services
            </a>

            <a href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
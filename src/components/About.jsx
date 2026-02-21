// components/About.jsx
import { motion } from 'framer-motion'

const highlights = [
  {
    year: '2022 – Present',
    text: 'Freelance & Personal Projects — Building production-grade MERN applications, Razorpay/Stripe integrations, performance optimization, modern auth flows',
  },
  {
    year: '2021 – 2022',
    text: 'Deep dive into React & Node.js — Transformed passion into full-stack development expertise',
  },
  {
    year: '2020',
    text: 'Discovered web development — Fell in love with creating interactive and user-centered digital experiences',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className={`
        relative py-20 sm:py-24 lg:py-32 
        px-5 sm:px-8 lg:px-12 xl:px-16
        bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950
        overflow-hidden
      `}
    >
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 sm:w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-violet-600/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="mb-16 sm:mb-20 lg:mb-24 text-center"
        >
          <h2
            className={`
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold tracking-tight
              bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 
              bg-clip-text text-transparent
            `}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left – Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-8 space-y-7 sm:space-y-8 md:space-y-9 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300"
          >
            <p>
              I'm a <span className="font-semibold text-white">passionate Full-Stack MERN Developer</span> focused on crafting fast, scalable, and delightful web applications.
            </p>

            <p>
              I work daily with <strong className="text-indigo-300">React, Next.js, TypeScript, Node.js, Express, MongoDB, Tailwind</strong>, and love building clean, maintainable codebases — from beautiful pixel-perfect UIs to secure, performant APIs and payment integrations (Razorpay, Stripe mindset).
            </p>

            <p>
              Deeply care about <span className="font-medium text-slate-200">performance</span>, <span className="font-medium text-slate-200">accessibility</span>, <span className="font-medium text-slate-200">developer experience</span>, and <span className="font-medium text-slate-200">exceptional UX</span>. Whether it's reducing bundle size, implementing proper hydration, lazy-loading, or creating intuitive flows — I aim to deliver real value.
            </p>

            <p className="pt-3 text-lg sm:text-xl font-medium text-slate-200">
              Currently seeking full-time opportunities in <strong className="text-white">India</strong> — remote, hybrid or on-site. Excited to join a product-oriented team where I can grow, learn fast, and ship meaningful features.
            </p>

            {/* Personal touch */}
            <div className="pt-6 border-t border-slate-700/50 text-slate-400 italic text-base sm:text-lg">
              <p>
                Outside of code: black coffee addict • sci-fi & tech enthusiast • occasional guitarist • forever learning.
              </p>
            </div>
          </motion.div>

          {/* Right – Timeline / Journey */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 lg:sticky lg:top-24 space-y-10 lg:space-y-12"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center lg:text-left">
              My Journey
            </h3>

            <div className="space-y-10 sm:space-y-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.25 }}
                  className={`
                    relative pl-10 sm:pl-12 
                    border-l-2 border-indigo-500/30 
                    lg:border-l border-l-0 lg:border-l-2
                    bg-gradient-to-r from-slate-900/40 to-transparent lg:from-transparent lg:to-transparent
                    p-5 sm:p-6 lg:p-0 rounded-xl lg:rounded-none
                    border border-slate-700/40 lg:border-0
                  `}
                >
                  {/* Dot */}
                  <div className="absolute -left-2.5 top-6 w-5 h-5 rounded-full bg-indigo-600 shadow-lg shadow-indigo-900/40 hidden lg:block" />

                  <p className="text-indigo-400/90 font-medium text-sm sm:text-base uppercase tracking-wide mb-2">
                    {item.year}
                  </p>

                  <p className="text-slate-300 text-base sm:text-lg">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
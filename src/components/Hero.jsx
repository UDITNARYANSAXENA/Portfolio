// components/Hero.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, MousePointerClick } from 'lucide-react'
import resume from '../asset/Udit CV.pdf' // adjust path
import photo from '../asset/main profile (1).png' // adjust path

const taglines = [
  "Full Stack MERN Developer",
  "Crafting Performant & Immersive Web Experiences",
  "Clean Code • Exceptional UX • Scalable Architecture",
  "Turning Ideas into Production-Ready Products",
]

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [])

  const whatsappLink = `https://wa.me/917505266931?text=${encodeURIComponent(
    "Hi Udit! I came across your portfolio and would like to discuss a potential opportunity. Are you available for a quick chat?"
  )}`

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/30 to-violet-950/20">
      {/* Background Glow Orbs - more dynamic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-violet-700/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left – Content – takes more space on lg */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 leading-tight"
          >
            Hey, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Udit
            </span>
          </motion.h1>

          {/* Cycling Tagline with fade */}
          <div className="min-h-[4rem] mb-6">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-200"
            >
              {taglines[currentTagline]}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            I build high-performance, user-centric web applications using modern JavaScript ecosystems. 
            Passionate about clean code, intuitive interfaces, and delivering real business value.
          </motion.p>

          {/* CTA Buttons – glass + shine effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 hover:from-emerald-500 hover:to-teal-500 backdrop-blur-md border border-emerald-400/20 text-white font-semibold rounded-2xl shadow-xl shadow-emerald-900/30 hover:shadow-emerald-700/50 transition-all duration-400 flex items-center justify-center gap-3 text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z..." />
                </svg>
                Chat on WhatsApp
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </a>

            <a
              href={resume}
              download="Udit_Narayan_Saxena_CV.pdf"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600/80 to-violet-600/80 hover:from-indigo-500 hover:to-violet-500 backdrop-blur-md border border-violet-400/20 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-900/30 hover:shadow-indigo-700/50 transition-all duration-400 flex items-center justify-center gap-3 text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <Download size={24} />
                Download CV
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </a>
          </motion.div>

          {/* Social Icons – subtle neon hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center lg:justify-start gap-10"
          >
            <a
              href="https://github.com/UDITNARYANSAXENA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
            >
              <Github size={36} strokeWidth={1.6} />
            </a>
            <a
              href="https://linkedin.com/in/udit-narayan-saxena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]"
            >
              <Linkedin size={36} strokeWidth={1.6} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right – Profile – glassmorphic card with neon rim */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative group w-72 sm:w-80 lg:w-[380px]">
            {/* Rotating subtle outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-24px] rounded-full border border-dashed border-violet-500/20"
            />

            {/* Glass card with tilt & inner glow */}
            <motion.div
              whileHover={{ scale: 1.06, rotateX: 10, rotateY: -10, boxShadow: "0 0 100px rgba(99,102,241,0.4)" }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-950/60 backdrop-blur-xl"
            >
              <img
                src={photo}
                alt="Udit Narayan Saxena - Full Stack Developer"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
              />
              {/* Bottom fade + neon line */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-70" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint – floating with bounce */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1.6, duration: 1.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 text-sm gap-2 pointer-events-none"
      >
        <MousePointerClick size={24} className="animate-bounce" />
        <span className="tracking-wide">Scroll to discover more</span>
      </motion.div>
    </section>
  )
}
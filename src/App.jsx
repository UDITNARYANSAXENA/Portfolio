// App.jsx — Modern 2025/2026 Portfolio Style
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ProfessionalProjects from './components/Academic' // renamed → AcademicProjects ?
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Academic Work', id: 'academic-projects' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
]

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950 text-slate-100 selection:bg-violet-600/30 selection:text-white">
      {/* ─── Enhanced Navbar ──────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-900/70 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo – more premium feel */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('hero')}
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-xl shadow-indigo-600/40 transition-all group-hover:scale-110 group-hover:rotate-6">
                  U
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-200 via-white to-violet-200 bg-clip-text text-transparent">
                Udit
              </span>
            </motion.button>

            {/* Desktop Nav – cleaner, pill-like hover */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2.5 text-base font-medium text-slate-300 hover:text-white transition-all group"
                >
                  {item.name}
                  <span className="absolute inset-x-3 bottom-1.5 h-0.5 scale-x-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-full transition-transform group-hover:scale-x-100 origin-center duration-300" />
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu – glass-like, slide from top */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden bg-slate-900/90 backdrop-blur-2xl border-b border-slate-700/60 shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-3">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, delay: idx * 0.07 }}
                    onClick={() => scrollToSection(item.id)}
                    className="py-4 px-6 text-left text-xl font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 active:scale-98"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Main Content ─────────────────────────────────────────────────── */}
      <main className="relative pt-20 sm:pt-24">
        <div id="hero" className="scroll-mt-20">
          <Hero />
        </div>
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
        <div id="experience" className="scroll-mt-20">
          <Experience />
        </div>
        <div id="academic-projects" className="scroll-mt-20">
          <ProfessionalProjects />
        </div>
        <div id="projects" className="scroll-mt-20">
          <Projects />
        </div>
        <div id="education" className="scroll-mt-20">
          <Education />
        </div>
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
      </main>

      {/* ─── Modern Footer ────────────────────────────────────────────────── */}
      <footer className="mt-24 border-t border-slate-800/60 bg-gradient-to-t from-slate-950 to-slate-900/80 py-12 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Udit Narayan Saxena</p>
        <p className="mt-2">Made with passion & code • Delhi, India</p>
      </footer>

      {/* Optional: subtle background noise / particles if you add later */}
    </div>
  )
}

export default App
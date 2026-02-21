// App.jsx — Next-level 2025/2026 Portfolio Style
import { useState, useEffect } from 'react'
import { Menu, X, ArrowUp, Code2 } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ProfessionalProjects from './components/Academic' // consider renaming file → AcademicProjects.jsx
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

const navItems = [
  { name: 'About',      id: 'about' },
  { name: 'Skills',     id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Academic Projects',   id: 'academic-projects' },
  { name: 'Professional Projects',   id: 'professional-projects' },
  { name: 'Education',  id: 'education' },
  { name: 'Contact',    id: 'contact' },
]

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ─── Scroll Progress Bar ──────────────────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* ─── Navbar ───────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 180 }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-700/60 shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('hero')}
              className="group relative flex items-center gap-3 focus:outline-none"
            >
              <div className="relative">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 flex items-center justify-center font-bold text-white shadow-xl shadow-indigo-700/40 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
                  U
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-500/30 blur-xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="hidden sm:inline text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-200 via-white to-violet-200 bg-clip-text text-transparent">
                Udit
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-9 xl:gap-12">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -3.5 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => scrollTo(item.id)}
                  className="relative px-2 py-2 text-base font-medium text-slate-300 hover:text-white transition-colors group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.button>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/70 shadow-2xl"
            >
              <div className="px-5 py-10 flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => scrollTo(item.id)}
                    className="py-4 px-6 text-left text-xl font-medium text-slate-200 hover:text-white hover:bg-slate-800/40 rounded-xl transition-all duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Main Content ─────────────────────────────────────────────────────── */}
      <main className="relative pt-20 sm:pt-24 lg:pt-28">
        {[
          { id: 'hero',      Component: Hero },
          { id: 'about',     Component: About },
          { id: 'skills',    Component: Skills },
          { id: 'experience',Component: Experience },
          { id: 'academic-projects', Component: ProfessionalProjects },
          { id: 'projects',  Component: Projects },
          { id: 'education', Component: Education },
          { id: 'contact',   Component: Contact },
        ].map(({ id, Component }, i) => (
          <motion.div
            key={id}
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="scroll-mt-24 lg:scroll-mt-28"
          >
            <Component />
          </motion.div>
        ))}
      </main>

      {/* ─── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="mt-32 border-t border-slate-800/60 bg-gradient-to-t from-slate-950 to-slate-900/90 py-12 md:py-16 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Udit Narayan Saxena</p>
        <p className="mt-2 flex items-center justify-center gap-1.5">
          Made with passion, code <Code2 size={16} className="text-indigo-400" /> & <span className="text-red-500">♥</span> • India 🇮🇳
        </p>
        <p className="mt-3 text-xs opacity-70">
          React • Tailwind • Framer Motion • Vercel
        </p>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={scrollToTop}
            className="
              fixed bottom-6 right-6 z-50
              p-4 rounded-full bg-gradient-to-br from-indigo-600 to-violet-700
              text-white shadow-2xl shadow-indigo-900/50
              hover:from-indigo-500 hover:to-violet-600
              hover:scale-110 active:scale-95
              transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60
            "
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
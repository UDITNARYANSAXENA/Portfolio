// App.jsx
import { useState, useEffect } from 'react'
import { Menu, X, ArrowUp, Code2, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import PersonalProjects from './components/Academic'   // assuming this is your main projects section
import ProfessionalProjects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

const navItems = [
  { name: 'About',              id: 'about' },
  { name: 'Skills',             id: 'skills' },
  { name: 'Experience',         id: 'experience' },
  { name: 'Personal Projects',  id: 'projects' },
  { name: 'Professional Work',  id: 'professional-projects' },
  { name: 'Education',          id: 'education' },
  { name: 'Contact',            id: 'contact' },
]

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Theme logic
  const [isDark, setIsDark] = useState(() => {
    // 1. localStorage has priority
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
    // 2. system preference as fallback
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Apply / remove 'dark' class + save preference
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Navbar shadow / blur when scrolled
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
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 180 }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-gray-200/70 dark:border-slate-700/70 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('hero')}
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-700/40 transition group-hover:scale-110 group-hover:rotate-6">
                  U
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-500/20 blur-xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="hidden sm:inline text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                Udit
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
              {navItems.map(item => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(item.id)}
                  className="relative text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-violet-600 transition-all group-hover:w-full" />
                </motion.button>
              ))}
            </nav>

            {/* Theme toggle + Mobile menu button */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={22} className="text-yellow-400" />
                ) : (
                  <Moon size={22} className="text-indigo-600" />
                )}
              </button>

              <button
                className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 shadow-2xl"
            >
              <div className="px-6 py-10 flex flex-col gap-3">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => scrollTo(item.id)}
                    className="py-4 px-6 text-left text-xl font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main content */}
      <main className="pt-10 sm:pt-14 lg:pt-18">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><PersonalProjects /></section>
        <section id="professional-projects"><ProfessionalProjects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm py-12 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Udit Narayan Saxena</p>
        <p className="mt-2 flex items-center justify-center gap-2">
          Built with passion, <Code2 size={16} className="text-indigo-500" /> & <span className="text-red-500">♥</span> in India
        </p>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-xl hover:brightness-110 transition-all"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
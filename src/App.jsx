import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('light')
  const [mobileMenu, setMobileMenu] = useState(false)

  // ----- Theme Controller -----
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const init = saved || (prefersDark ? 'dark' : 'light')
    setTheme(init)
    document.documentElement.classList.toggle('dark', init === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // ----- Smooth Scroll -----
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenu(false)
  }

  const nav = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="fixed inset-x-0 top-0 z-50 glass backdrop-blur-xl"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.08 }}
            className="text-2xl md:text-3xl gradient-text cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Udit
          </motion.h1>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {nav.map((i) => (
              <motion.li key={i} whileHover={{ y: -2 }}>
                <button onClick={() => scrollTo(i.toLowerCase())} className="nav-link">
                  {i}
                </button>
              </motion.li>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-lg"
            >
              <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
          </ul>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 dark:bg-black/20"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="md:hidden glass border-t border-white/20"
          >
            <ul className="py-4 px-6 space-y-3">
              {nav.map((i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(i.toLowerCase())}
                    className="block w-full text-left py-2 text-lg font-medium hover:text-blue-500"
                  >
                    {i}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.header>

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Udit Narayan Saxena. All rights reserved.
      </footer>
    </>
  )
}

export default App
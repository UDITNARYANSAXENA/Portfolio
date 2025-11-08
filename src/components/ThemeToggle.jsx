import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  // Load saved / system theme
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const init = saved || (prefersDark ? 'dark' : 'light')
    setTheme(init)
    document.documentElement.classList.toggle('dark', init === 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-yellow-600 dark:text-yellow-300 shadow-md"
      aria-label="Toggle theme"
    >
      <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  )
}
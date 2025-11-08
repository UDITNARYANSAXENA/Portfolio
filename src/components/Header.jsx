import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50 glass backdrop-blur-lg border-b border-white/20"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }}>
          <h1 className="text-2xl md:text-3xl gradient-text">Udit Narayan Saxena</h1>
        </motion.div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="md:hidden glass border-t border-white/20"
        >
          <ul className="flex flex-col py-4 px-6 space-y-3">
            {nav.map((i) => (
              <li key={i}>
                <button onClick={() => scrollTo(i)} className="w-full text-left py-2 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400">
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
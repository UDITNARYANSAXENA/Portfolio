import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div classNameName="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="gradient-text">Udit Narayan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack MERN Developer
          </p>
          <p className="text-lg mb-8 max-w-xl text-gray-700 dark:text-gray-300">
            Crafting scalable web apps with modern tech. Passionate about performance, UX, and clean code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:udit9407@gmail.com"
              className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition flex items-center gap-2"
            >
              <Mail size={20} /> Hire Me
            </a>

            <a
              href="/resume.pdf"
              download="Udit_Narayan_Resume.pdf"
              className="px-7 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-xl transition flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </a>

            <a
              href="https://portfolio-ljss.vercel.app"
              target="_blank"
              rel="noopener"
              className="px-7 py-3.5 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-2"
            >
              Live Portfolio <ExternalLink size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10">
            <a href="https://github.com/UDITNARYANSAXENA" target="_blank" rel="noopener" className="hover:text-blue-500 transition">
              <Github size={30} />
            </a>
            <a href="https://linkedin.com/in/udit-narayan-saxena" target="_blank" rel="noopener" className="hover:text-blue-500 transition">
              <Linkedin size={30} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
            <img src="/profile.jpg" alt="Udit" className="w-full h-full object-cover" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-12 border-4 border-dashed border-blue-500/30 rounded-full"
          />
        </motion.div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  )
}
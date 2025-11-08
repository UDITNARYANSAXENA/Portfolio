import { motion } from 'framer-motion'
import { Github, Linkedin, Download } from 'lucide-react'
import resume from '../asset/Udit CV.pdf' // Make sure path is correct
import photo from '../asset/main profile (1).png' // Make sure path is correct

export default function Hero() {
  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/917505266931?text=${encodeURIComponent(
    "Hi Udit! I came across your portfolio and would like to discuss a potential opportunity. Are you available for a quick chat?"
  )}`

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left: Text & Buttons */}
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
            {/* Hire Me → WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-xl transition flex items-center gap-2 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="inline-block"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.57 6.57 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-3.416c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.778-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.133.034-.248-.015-.347-.05-.1-.445-.765-.61-.996-.16-.232-.326-.215-.446-.11-.114.1-.198.232-.296.346-.1.114-.133.198-.182.33-.05.133-.232.232-.33.099-.1-.133-.445-.765-.612-.996-.16-.232-.326-.215-.446-.11l-.59.59c-.114.114-.198.232-.148.365.05.133.232.232.33.099.1-.133.445-.765.612-.996.16-.232.326-.215.446-.11.114.1.198.232.296.346.1.114.133.198.182.33.05.133.232.232.33.099.1-.133.445-.765.612-.996.16-.232.326-.215.446-.11z"/>
              </svg>
              Hire Me
            </a>

            {/* Download Resume */}
            <a
              href={resume}
              download="Udit_Narayan_Resume.pdf"
              className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition flex items-center gap-2 font-medium"
            >
              <Download size={20} /> Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/UDITNARYANSAXENA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Github size={30} />
            </a>
            <a
              href="https://linkedin.com/in/udit-narayan-saxena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
            <img src={photo} alt="Udit Narayan" className="w-full h-full object-cover" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-12 border-4 border-dashed border-blue-500/30 rounded-full"
          />
        </motion.div>
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  )
}
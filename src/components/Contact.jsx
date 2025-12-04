import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 gradient-text"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl inline-block"
        >
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <a href="mailto:udit9407@gmail.com" className="flex items-center gap-3 hover:text-blue-500">
              <Mail /> udit9407@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <Phone /> +91-7505266931
            </div>
            <div className="flex items-center gap-3">
              <MapPin /> Noida, UP, India
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/UDITNARYANSAXENA" target="_blank"><Github size={28} /></a>
            <a href="https://linkedin.com/in/udit-narayan-saxena" target="_blank"><Linkedin size={28} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

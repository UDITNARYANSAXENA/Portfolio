// components/Contact.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Github, Linkedin, Send, 
  CheckCircle, AlertCircle, Loader2, MessageCircle 
} from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/mblnkjqd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const whatsappLink = `https://wa.me/917505266931?text=${encodeURIComponent(
    "Hi Udit! I came across your portfolio and would like to discuss..."
  )}`

  return (
    <section
      id="contact"
      className="
        relative py-20 sm:py-28 lg:py-40
        px-5 sm:px-8 lg:px-12 xl:px-16
        bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950
        overflow-hidden
      "
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-600/7 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-violet-600/6 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.1 }}
          className="
            text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight
            text-center mb-20 bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500
            bg-clip-text text-transparent
          "
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 mt-8 lg:mt-12">
          {/* Left – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="
              lg:col-span-5
              bg-gradient-to-br from-slate-900/80 to-slate-950/80
              backdrop-blur-2xl border border-slate-700/50
              rounded-2xl lg:rounded-3xl p-8 lg:p-10
              shadow-2xl shadow-black/50
              hover:shadow-indigo-900/30 transition-all duration-500
            "
          >
            <h3 className="text-3xl font-bold text-white mb-10 text-center lg:text-left">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:udit9407@gmail.com"
                className="
                  group flex items-center gap-5 p-5 rounded-2xl
                  hover:bg-white/5 transition-all duration-300
                "
              >
                <div className="p-4 rounded-2xl bg-indigo-600/25 text-indigo-300 group-hover:bg-indigo-600/40 transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-0.5">Email</p>
                  <p className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors">
                    udit9407@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917505266931"
                className="
                  group flex items-center gap-5 p-5 rounded-2xl
                  hover:bg-white/5 transition-all duration-300
                "
              >
                <div className="p-4 rounded-2xl bg-indigo-600/25 text-indigo-300">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-0.5">Phone</p>
                  <p className="text-lg font-medium text-white">+91 75052 66931</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 p-5 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="p-4 rounded-2xl bg-indigo-600/25 text-indigo-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-0.5">Location</p>
                  <p className="text-lg font-medium text-white">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Socials + WhatsApp */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 px-6 py-3 rounded-xl
                  bg-gradient-to-r from-green-600/90 to-emerald-600/90
                  hover:from-green-500 hover:to-emerald-500
                  text-white font-medium shadow-lg shadow-green-900/30
                  hover:shadow-green-700/40 transition-all duration-300
                "
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>

              <div className="flex gap-10 mt-6 lg:mt-0">
                <a
                  href="https://github.com/UDITNARYANSAXENA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-slate-300 hover:text-white
                    hover:scale-125 hover:rotate-6 transition-all duration-300
                    hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
                  "
                >
                  <Github size={40} strokeWidth={1.4} />
                </a>
                <a
                  href="https://www.linkedin.com/in/udit-narayan-saxena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-slate-300 hover:text-white
                    hover:scale-125 hover:-rotate-6 transition-all duration-300
                    hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
                  "
                >
                  <Linkedin size={40} strokeWidth={1.4} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="
              lg:col-span-7
              bg-gradient-to-br from-slate-900/80 to-slate-950/80
              backdrop-blur-2xl border border-slate-700/50
              rounded-2xl lg:rounded-3xl p-8 lg:p-10
              shadow-2xl shadow-black/50
            "
          >
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    peer w-full px-6 pt-8 pb-4 bg-slate-950/30 border border-slate-600/60
                    rounded-xl focus:outline-none focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20
                    transition-all text-white text-lg placeholder-transparent
                  "
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="
                    absolute left-6 top-2.5 text-sm text-slate-400 font-medium
                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                    peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-300
                    transition-all pointer-events-none
                  "
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    peer w-full px-6 pt-8 pb-4 bg-slate-950/30 border border-slate-600/60
                    rounded-xl focus:outline-none focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20
                    transition-all text-white text-lg placeholder-transparent
                  "
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="
                    absolute left-6 top-2.5 text-sm text-slate-400 font-medium
                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                    peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-300
                    transition-all pointer-events-none
                  "
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="
                    peer w-full px-6 pt-8 pb-4 bg-slate-950/30 border border-slate-600/60
                    rounded-xl focus:outline-none focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20
                    transition-all text-white text-lg placeholder-transparent resize-none
                  "
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="
                    absolute left-6 top-2.5 text-sm text-slate-400 font-medium
                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                    peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-300
                    transition-all pointer-events-none
                  "
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`
                  relative w-full py-4 px-8 rounded-xl overflow-hidden
                  bg-gradient-to-r from-indigo-600 to-violet-600
                  hover:from-indigo-500 hover:to-violet-500
                  text-white font-semibold text-lg
                  shadow-xl shadow-indigo-900/40 hover:shadow-indigo-700/50
                  transition-all duration-400 flex items-center justify-center gap-3
                  disabled:opacity-60 disabled:cursor-not-allowed group
                `}
              >
                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                {status === 'sending' ? (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="
                      flex items-center justify-center gap-3
                      bg-green-900/30 text-green-300 py-4 px-6 rounded-xl
                      border border-green-700/40 font-medium text-lg
                    "
                  >
                    <CheckCircle size={26} />
                    Message sent successfully! I'll reply soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="
                      flex items-center justify-center gap-3
                      bg-red-900/30 text-red-300 py-4 px-6 rounded-xl
                      border border-red-700/40 font-medium text-lg
                    "
                  >
                    <AlertCircle size={26} />
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
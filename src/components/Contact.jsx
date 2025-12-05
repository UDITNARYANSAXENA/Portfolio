import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('') // "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const formData = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mblnkjqd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-10 rounded-2xl h-fit"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Contact Details</h3>

            <div className="space-y-6 text-lg">
              <a href="mailto:udit9407@gmail.com" className="flex items-center gap-4 hover:text-blue-500 transition">
                <Mail className="w-6 h-6" />
                <span>udit9407@gmail.com</span>
              </a>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <span>+91-7505266931</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <span>Noida, UP, India</span>
              </div>
            </div>

            <div className="flex justify-center gap-8 mt-10">
              <a
                href="https://github.com/UDITNARYANSAXENA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/udit-narayan-saxena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </motion.div>

          {/* Formspree Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center font-medium">
                  Oops! Something went wrong. Try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
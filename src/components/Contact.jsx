// components/Contact.tsx (or app/contact/Contact.tsx)
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm("mblnkjqd")  // Your real Formspree form ID

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass p-8 rounded-2xl h-fit shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Let's connect
            </h3>

            <div className="space-y-6 text-left">
              <a
                href="mailto:udit9407@gmail.com"
                className="flex items-center gap-4 hover:text-blue-500 transition-colors group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">udit9407@gmail.com</span>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+91-7505266931</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">Noida, UP, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10 justify-center lg:justify-start">
              <a
                href="https://github.com/UDITNARYANSAXENA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 rounded-full transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/udit-narayan-saxena"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 rounded-full transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Send me a message
            </h3>

            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <p className="text-xl font-medium text-green-600 dark:text-green-400">
                  Thank you! Your message has been sent successfully.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-700 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-all placeholder-gray-500"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-700 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-all placeholder-gray-500"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-700 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-all placeholder-gray-500 resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-800 disabled:to-blue-900 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  {state.submitting ? (
                    <>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={22} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

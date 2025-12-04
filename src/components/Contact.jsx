import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mblnkjqd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-center gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-2xl h-fit"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
            
            <div className="space-y-5 text-left">
              <a href="mailto:udit9407@gmail.com" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>udit9407@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91-7505266931</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Noida, UP, India</span>
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              <a href="https://github.com/UDITNARYANSAXENA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/udit-narayan-saxena" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Linkedin size={32} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Replace with your actual Formspree endpoint */}
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
              >
                {formStatus === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <p className="text-green-500 text-center font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-500 text-center font-medium">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

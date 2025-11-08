import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          Results-oriented <strong>MERN Stack Developer</strong> with a strong foundation in full-stack web application development. 
          Skilled in building scalable and responsive apps using <strong>React, Node.js, and MongoDB</strong>. 
          Adept at designing RESTful APIs, integrating payment gateways (Razorpay), and optimizing frontend performance. 
          Looking to contribute to a growth-driven software team in <em>Any location within India</em>.
        </motion.p>
      </div>
    </section>
  )
}
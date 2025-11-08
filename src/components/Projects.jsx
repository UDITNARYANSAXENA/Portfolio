import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: "Job Portal (Joblio)",
    tech: "React, Redux, Supabase, FastAPI",
    desc: "Recruiter-candidate portal with drag-and-drop job management and analytics dashboard.",
    github: "https://github.com/UDITNARYANSAXENA/Job-Portal",
    demo: "https://joblio.udit.dev"
  },
  {
    name: "Food Delivery App",
    tech: "MERN, Socket.io, Razorpay",
    desc: "Real-time order tracking with WebSockets. Integrated Razorpay for 50+ daily transactions.",
    github: "https://github.com/UDITNARYANSAXENA/Food-delivery",
    demo: "https://food.udit.dev"
  },
  {
    name: "Doctor Appointment System (Prescripto)",
    tech: "MERN, Razorpay, JWT",
    desc: "Role-based platform for doctors, patients, and admins with automated SMS/email notifications.",
    github: "https://github.com/UDITNARYANSAXENA/Doctor",
    demo: "https://prescripto.udit.dev"
  },
  {
    name: "Student Assignment Platform",
    tech: "React, Node.js, MongoDB",
    desc: "Assignment submission & grading system with role-based access. Deployed on Vercel + Render.",
    github: "https://github.com/UDITNARYANSAXENA/teacher-student",
    demo: "https://assignment.udit.dev"
  },
  {
    name: "Moonlight Vision Software Technologies",
    tech: "MERN, Cloudinary",
    desc: "Property listing with image uploads, filters, and inquiry forms. Fully responsive.",
    github: "https://github.com/UDITNARYANSAXENA/MoonlightVision",
    demo: "https://moonlight.udit.dev"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Key Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{p.tech}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>

              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
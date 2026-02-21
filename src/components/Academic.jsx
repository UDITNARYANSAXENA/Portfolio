// components/PersonalProjects.jsx
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const personalProjects = [
  {
    name: "Joblio – Job Portal",
    tech: ["React", "Redux", "Supabase", "FastAPI", "Tailwind"],
    desc: "Full-featured job platform connecting recruiters and candidates with application tracking, analytics, and secure auth flows.",
    github: "https://github.com/UDITNARYANSAXENA/Job-Portal",
    demo: "https://job-portal-mauve-five.vercel.app/",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Prescripto – Doctor Appointment",
    tech: ["MERN", "Razorpay", "JWT", "Socket.io"],
    desc: "Role-based doctor appointment booking system with payment integration, notifications, and appointment management.",
    github: "https://github.com/UDITNARYANSAXENA/Doctor",
    demo: "https://doctor-nu-five.vercel.app/",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "EduConnect – Student–Teacher Platform",
    tech: ["React", "Node.js", "MongoDB", "JWT Auth"],
    desc: "Secure academic interaction platform with role-based access, messaging, and resource sharing between students and teachers.",
    github: "https://github.com/UDITNARYANSAXENA/teacher-student",
    demo: "https://teacher-student-wheat.vercel.app/",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export default function PersonalProjects() {
  return (
    <section
      id="projects"
      className="
        relative py-20 sm:py-28 lg:py-36
        px-5 sm:px-8 lg:px-12 xl:px-16
        bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950
        overflow-hidden
      "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1 }}
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold tracking-tight text-center mb-16 md:mb-20
            bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500
            bg-clip-text text-transparent
          "
        >
          Personal Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 lg:gap-12">
          {personalProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="
                group relative
                bg-gradient-to-b from-slate-900/70 to-slate-950/80
                backdrop-blur-xl border border-slate-700/40
                rounded-2xl overflow-hidden shadow-xl shadow-black/40
                hover:shadow-2xl hover:shadow-indigo-900/30
                transition-all duration-500
              "
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-7 min-h-[4.5rem] text-base md:text-lg">
                  {project.desc}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 px-5 py-2.5
                      bg-slate-800 hover:bg-slate-700
                      text-white font-medium rounded-lg
                      transition-all duration-300 border border-slate-600
                    "
                  >
                    <Github size={18} />
                    Source
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 px-5 py-2.5
                      bg-gradient-to-r from-indigo-600/90 to-violet-600/90
                      hover:from-indigo-500 hover:to-violet-500
                      text-white font-medium rounded-lg
                      transition-all duration-300 shadow-md shadow-indigo-900/30
                      hover:shadow-lg hover:shadow-indigo-700/40
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
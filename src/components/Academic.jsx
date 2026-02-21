// components/PersonalProjects.jsx
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import joblio from "../asset/Joblio.png"
import prescripto from "../asset/Doctor.png"
import educonnect from "../asset/Student.png"
import evently from "../asset/Evently.png"
import gallery from "../asset/Gallery.png"
import moonlight from "../asset/moonlight.png"

const personalProjects = [
  {
    name: "Joblio – Job Portal",
    tech: ["React", "Redux", "Supabase", "FastAPI", "Tailwind"],
    desc: "Full-featured job platform connecting recruiters and candidates with application tracking, analytics dashboard, secure authentication, and real-time notifications.",
    github: "https://github.com/UDITNARYANSAXENA/Job-Portal",
    demo: "https://job-portal-mauve-five.vercel.app/",
    image: joblio,
  },
  {
    name: "Prescripto – Doctor Appointment",
    tech: ["MERN", "Razorpay", "JWT", "Socket.io"],
    desc: "Role-based doctor appointment booking system with secure payment integration (Razorpay), automated notifications, admin panel, and appointment management.",
    github: "https://github.com/UDITNARYANSAXENA/Doctor",
    demo: "https://doctor-nu-five.vercel.app/",
    image: prescripto,
  },
  {
    name: "EduConnect – Student–Teacher Platform",
    tech: ["React", "Node.js", "MongoDB", "JWT Auth"],
    desc: "Secure platform for academic interaction with role-based access (student/teacher), private messaging, resource sharing, and assignment management.",
    github: "https://github.com/UDITNARYANSAXENA/teacher-student",
    demo: "https://teacher-student-wheat.vercel.app/",
    image: educonnect,
  },
  {
    name: "Evently – Task & Event Manager",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    desc: "Modern task and event management application with calendar view, reminders, team collaboration features, and clean responsive UI.",
    github: "https://github.com/UDITNARYANSAXENA/Task-Maneger",
    demo: "https://task-maneger-chi.vercel.app/",
    image: evently,
  },
  {
    name: "Gallery – Event Photo Gallery",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    desc: "Beautiful event photo gallery platform with upload, categorization, search, and responsive masonry layout for showcasing memories.",
    github: "https://github.com/UDITNARYANSAXENA/Gallery",
    demo: "https://gallery-zwt9.vercel.app/",
    image: gallery,
  },
  {
    name: "Moonlight Vision – Freelance Website",
    tech: ["React", "Tailwind", "Framer Motion", "Node.js"],
    desc: "Professional freelance portfolio/website for Moonlight Vision with smooth animations, modern design, contact form, and responsive layout.",
    github: "https://github.com/UDITNARYANSAXENA/MoonlightVision",
    demo: "https://www.moonlightvision.in/",
    image: moonlight,
  },
]

export default function PersonalProjects() {
  return (
    <section
      id="projects"
      className="
        relative py-20 sm:py-28 lg:py-40
        px-5 sm:px-8 lg:px-12 xl:px-16
        bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950
        overflow-hidden
      "
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-600/6 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.1 }}
          className="
            text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight
            text-center mb-16 lg:mb-24
            bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500
            bg-clip-text text-transparent
          "
        >
          Personal Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {personalProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.12 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="
                group relative
                bg-gradient-to-br from-slate-900/80 to-slate-950/90
                backdrop-blur-xl border border-slate-700/50
                rounded-2xl lg:rounded-3xl overflow-hidden
                shadow-2xl shadow-black/50
                hover:shadow-indigo-900/40 hover:border-indigo-500/30
                transition-all duration-500
              "
            >
              {/* Image + overlay */}
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-1000
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                {/* Title reveal on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3.5 py-1.5 text-xs font-medium rounded-full
                        bg-indigo-950/70 border border-indigo-500/30 text-indigo-200
                        group-hover:bg-indigo-900/70 group-hover:border-indigo-400/40
                        transition-all duration-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-7 lg:mb-8 text-base lg:text-lg line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2.5 px-6 py-3
                      bg-slate-800/80 hover:bg-slate-700/80
                      border border-slate-600 hover:border-slate-500
                      text-white font-medium rounded-xl
                      transition-all duration-300 shadow-md hover:shadow-lg
                    "
                  >
                    <Github size={20} />
                    Source Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2.5 px-6 py-3
                      bg-gradient-to-r from-indigo-600/90 to-violet-600/90
                      hover:from-indigo-500 hover:to-violet-500
                      text-white font-medium rounded-xl
                      shadow-lg shadow-indigo-900/40 hover:shadow-indigo-700/50
                      transition-all duration-300
                    "
                  >
                    <ExternalLink size={20} />
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
// components/ProfessionalProjects.jsx
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import dhruvi from "../asset/dhruvi.png"
import siri from "../asset/siri.png"

const professionalProjects = [
  {
    name: "Dhruvi Incense India",
    tech: ["MERN Stack", "Razorpay", "Admin Dashboard", "Inventory Mgmt"],
    desc: "Full-featured e-commerce platform with product catalog, secure payments, order tracking, and analytics dashboard for business owners.",
    demo: "https://dhruviincenseindia.com/",
    image: dhruvi, // replace with real screenshot
  },
  {
    name: "Siriamrutha Food",
    tech: ["React", "Node.js", "Tailwind", "Responsive Design"],
    desc: "High-performance business website for a premium sweets brand — fast loading, elegant design, mobile-first approach.",
    demo: "https://sriamruthasweets.com/",
    image: siri, // replace
  },
]

export default function ProfessionalProjects() {
  return (
    <section
      id="professional-projects"
      className="
        relative py-20 sm:py-28 lg:py-36
        px-5 sm:px-8 lg:px-12 xl:px-16
        bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950
        overflow-hidden
      "
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl"></div>
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
          Professional Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-7 md:gap-9 lg:gap-12">
          {professionalProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="
                group relative
                bg-gradient-to-b from-slate-900/70 to-slate-950/80
                backdrop-blur-xl border border-slate-700/40
                rounded-2xl overflow-hidden shadow-xl shadow-black/40
                hover:shadow-2xl hover:shadow-indigo-900/30
                transition-all duration-500
              "
            >
              {/* Project thumbnail */}
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

                <div className="flex gap-5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 px-5 py-2.5
                      bg-gradient-to-r from-emerald-600/90 to-teal-600/90
                      hover:from-emerald-500 hover:to-teal-500
                      text-white font-medium rounded-lg
                      transition-all duration-300 shadow-md shadow-emerald-900/30
                      hover:shadow-lg hover:shadow-emerald-700/40
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
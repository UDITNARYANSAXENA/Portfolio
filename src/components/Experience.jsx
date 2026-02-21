// components/Experience.jsx
import { motion } from 'framer-motion'
import { Briefcase, Calendar, Building2, MapPin } from 'lucide-react'

const experiences = [
  {
    role: "Web Developer",
    company: "Easrise Legal Papers India",
    period: "Sep 2025 – Present",
    location: "Noida, India",
    points: [
      "Designed and developed responsive client management platforms using React.js, Tailwind CSS, and Node.js",
      "Integrated secure RESTful APIs and optimized MongoDB queries → improved response time & scalability",
      "Built a library of reusable components → reduced development time by ~25% across projects",
      "Collaborated with legal & business teams to translate requirements into intuitive user interfaces"
    ]
  },
  {
    role: "Web Developer Intern",
    company: "PSS Technoservices",
    period: "Aug 2025 – Sep 2025",
    location: "Noida, India",
    points: [
      "Developed admin dashboards with real-time data visualization using React + Redux Toolkit",
      "Optimized state management & memoization patterns → significantly reduced unnecessary re-renders",
      "Set up GitHub Actions CI/CD pipelines → automated testing & deployment workflows"
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Oasis Infobyte",
    period: "Aug 2023 – Sep 2023",
    location: "Remote",
    points: [
      "Built responsive admin panels and interactive data dashboards with React.js",
      "Implemented efficient state handling → improved application performance & developer experience",
      "Learned modern frontend best practices and contributed to team code reviews"
    ]
  },
  {
    role: "Web Developer Trainee",
    company: "CRIS (Centre for Railway Information Systems)",
    period: "Sep 2023 – Nov 2023",
    location: "Delhi, India",
    points: [
      "Worked on internal tools and dashboards using React ecosystem",
      "Gained hands-on experience with enterprise-level code structure & documentation",
      "Assisted in debugging and performance tuning of web applications"
    ]
  }
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative py-20 sm:py-28 lg:py-36
        px-5 sm:px-8 lg:px-12 xl:px-16
        bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950
        overflow-hidden
      "
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
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
          Professional Experience
        </motion.h2>

        <div className="relative mt-12 md:mt-16">
          {/* Vertical timeline line – only visible on lg+ */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-transparent hidden lg:block transform -translate-x-1/2 pointer-events-none" />

          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.role + exp.period}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot – desktop only */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 border-4 border-slate-950 shadow-lg shadow-indigo-900/50 hidden lg:block z-10" />

                  {/* Experience Card */}
                  <div
                    className={`
                      w-full lg:w-5/12
                      bg-gradient-to-b from-slate-900/70 to-slate-950/80
                      backdrop-blur-xl border border-slate-700/40
                      rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-9
                      shadow-xl shadow-black/40
                      hover:shadow-2xl hover:shadow-indigo-900/30
                      transition-all duration-500 hover:-translate-y-3
                      ${isEven ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}
                    `}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2.5 text-indigo-400 font-medium">
                          <Building2 size={20} className="flex-shrink-0" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-slate-400 text-sm md:text-base whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-2 opacity-80">
                            <MapPin size={18} />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3.5 text-slate-300 text-base md:text-lg">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3.5">
                          <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex-shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spacer for alignment on desktop */}
                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.2 }}
          className="text-center mt-20 md:mt-24 text-slate-400 italic text-lg"
        >
          <p>Always excited to tackle complex challenges and build impactful solutions with talented teams.</p>
        </motion.div>
      </div>
    </section>
  )
}
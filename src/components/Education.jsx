// components/Education.jsx - Updated for light/dark
import { motion } from 'framer-motion'
import { GraduationCap, Award, School, Trophy, Calendar, Star } from 'lucide-react'

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Rajkiya Engineering College, Sonbhadra",
    period: "2021 – 2025",
    cgpa: "",
    icon: <GraduationCap className="w-10 h-10" />,
    highlights: [
      "Qualified – TCS Ninja Recruitment Drive (2025)",
      "Finalist – Smart India Hackathon 2023 (College-level internal round: 6th rank among 30+ teams)",
      "Focused on full-stack development, DSA, system design & cloud technologies"
    ]
  },
  {
    degree: "Intermediate (XII) – PCM",
    institution: "Saraswati Vidya Mandir, Etah (CBSE)",
    period: "2020 – 2021",
    percentage: "86.5%",
    icon: <Award className="w-10 h-10" />,
    highlights: [
      "Strong performance in Physics, Chemistry & Mathematics",
      "Ranked among top 5% in district (CBSE Board)",
      "Served as Chief Justice in college-level mock parliament / student council"
    ]
  },
  {
    degree: "High School (X)",
    institution: "Saraswati Vidya Mandir, Etah (CBSE)",
    period: "2018 – 2019",
    percentage: "91.6%",
    icon: <School className="w-10 h-10" />,
    highlights: [
      "Outstanding academic performance across all subjects",
      "Won General Knowledge (G.K.) competition at regional level",
      "Represented school in multiple inter-school competitions"
    ]
  }
]

export default function Education() {
  return (
    <section
      id="education"
      className="relative section-padding bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-950 overflow-hidden"
    >
      {/* Background glows – softer & larger */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-indigo-600/6 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 right-10 w-[700px] h-[700px] bg-violet-600/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 container-tight">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-center mb-20 gradient-text"
        >
          Education & Achievements
        </motion.h2>

        <div className="relative mt-8 md:mt-12 lg:mt-16">
          {/* Timeline line – desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/30 via-indigo-500/10 to-transparent hidden lg:block transform -translate-x-1/2 pointer-events-none" />

          <div className="space-y-20 lg:space-y-28">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 border-4 border-white dark:border-slate-950 shadow-xl shadow-indigo-900/50 hidden lg:block z-10" />

                <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
                  {/* LEFT – Main education info */}
                  <div
                    className={`
                      lg:justify-self-end lg:max-w-xl glass-strong p-7 md:p-9 lg:p-10
                      hover:shadow-indigo-900/30 hover:-translate-y-2
                      transition-all duration-500
                    `}
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600/40 to-violet-600/30 text-gray-900 dark:text-white shadow-lg flex-shrink-0">
                        {edu.icon}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                          {edu.degree}
                        </h3>

                        <p className="text-xl font-medium text-indigo-700 dark:text-indigo-300 mb-4">
                          {edu.institution}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-slate-300 mb-6">
                          <div className="flex items-center gap-2.5 bg-gray-200/50 dark:bg-slate-800/50 px-4 py-1.5 rounded-full">
                            <Calendar size={18} className="text-indigo-600 dark:text-indigo-400" />
                            <span className="font-medium">{edu.period}</span>
                          </div>

                          {edu.percentage && (
                            <div className="bg-emerald-200/50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-1.5 rounded-full font-semibold">
                              {edu.percentage}
                            </div>
                          )}
                          {edu.cgpa && (
                            <div className="bg-blue-200/50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full font-semibold">
                              {edu.cgpa}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT – Achievements */}
                  <div
                    className={`
                      lg:justify-self-start lg:max-w-xl glass-strong p-7 md:p-9 lg:p-10
                      hover:shadow-indigo-900/30 hover:-translate-y-2
                      transition-all duration-500
                    `}
                  >
                    <h4 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-6 flex items-center gap-3">
                      <Star size={24} className="text-yellow-600 dark:text-yellow-400" />
                      Key Achievements
                    </h4>

                    <ul className="space-y-4">
                      {edu.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.15 }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="mt-1.5 flex-shrink-0">
                            {(highlight.includes("Finalist") ||
                              highlight.includes("Qualified") ||
                              highlight.includes("Won") ||
                              highlight.includes("Chief Justice")) ? (
                              <Trophy size={22} className="text-yellow-600 dark:text-yellow-400" />
                            ) : (
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                            )}
                          </div>
                          <span className="text-gray-800 dark:text-slate-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors leading-relaxed text-[1.05rem]">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          transition={{ delay: 1.1, duration: 1.3 }}
          className="text-center mt-24 text-gray-600 dark:text-slate-400 italic text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          A strong academic foundation strengthened by competitive achievements, leadership roles, and deep hands-on experience in full-stack development.
        </motion.p>
      </div>
    </section>
  )
}
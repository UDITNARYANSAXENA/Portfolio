import { motion } from 'framer-motion'
import { GraduationCap, Award, School } from 'lucide-react'

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Rajkiya Engineering College, Sonbhadra",
    period: "2021 – 2025",
    icon: <GraduationCap className="w-6 h-6" />,
    highlights: [
      "Finalist — Smart India Hackathon 2023 (Top 6/30+ teams)",
      "Qualified — TCS Ninja Recruitment Drive"
    ]
  },
  {
    degree: "Intermediate (12th) - PCM",
    institution: "Saraswati Vidya Mandir , Etah",
    period: "2020 – 2021",
    percentage: "86.4%",
    icon: <Award className="w-6 h-6" />,
    highlights: [
      "Scored 86.4% In PCM",
      "Top 5% in district (CBSE Board)"
    ]
  },
  {
    degree: "High School (10th)",
    institution: "Saraswati Vidya Mandir , Etah",
    period: "2018 – 2019",
    percentage: "91.6%",
    icon: <School className="w-6 h-6" />,
    highlights: [
      "Represent School in Various Competitions",
      "Scored 91.6% (CBSE Board)"
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Education Journey
        </motion.h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {edu.period}
                      {edu.percentage && (
                        <span className="ml-3 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                          {edu.percentage}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {edu.highlights && (
                  <ul className="mt-4 md:mt-0 text-sm text-gray-600 dark:text-gray-300 space-y-1.5">
                    {edu.highlights.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
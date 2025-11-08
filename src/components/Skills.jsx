import { motion } from 'framer-motion'
import { Globe, Server, Database, Terminal } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="skill-icon" />,
    skills: ["React.js", "Redux", "Tailwind", "Framer Motion", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    icon: <Server className="skill-icon" />,
    skills: ["Node.js", "Express", "REST APIs", "JWT", "Socket.io", "Razorpay"]
  },
  {
    title: "Databases",
    icon: <Database className="skill-icon" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"]
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="skill-icon" />,
    skills: ["Git", "GitHub", "Vercel", "Railway", "Postman", "CI/CD"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                {cat.icon}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill, idx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
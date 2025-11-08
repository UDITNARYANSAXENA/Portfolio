import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Web Developer",
    company: "Easrise Legal Papers India",
    period: "Sep 2025 – Present",
    points: [
      "Designed and developed responsive web platforms using React.js and Node.js for client management.",
      "Integrated secure REST APIs and optimized MongoDB queries, improving scalability and response time.",
      "Built reusable React components, accelerating delivery speed by 25%."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "PSS Technoservices, Noida",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Developed admin dashboards and data visualization modules using React.js and Redux Toolkit.",
      "Reduced API latency and improved app performance through optimized state management.",
      "Implemented CI/CD pipelines using GitHub Actions to streamline deployment."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Experience
        </motion.h2>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 glass p-6 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {exp.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
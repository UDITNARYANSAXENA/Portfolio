// components/Skills.jsx
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Globe,
  GitBranch,
  Terminal,
  Cpu,
  Layers,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe className="w-10 h-10" />,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    skills: [
      { name: 'React.js + Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Redux / Zustand / Jotai', level: 83 },
      { name: 'HTML5 • CSS3 • Animations', level: 94 },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-10 h-10" />,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    skills: [
      { name: 'Node.js + Express', level: 90 },
      { name: 'REST & GraphQL', level: 88 },
      { name: 'JWT • OAuth • Auth0', level: 89 },
      { name: 'WebSockets • Socket.io', level: 82 },
      { name: 'Razorpay / Payment Flows', level: 92 },
      { name: 'API Security & Rate Limiting', level: 86 },
    ],
  },
  {
    title: 'Database & ORM',
    icon: <Database className="w-10 h-10" />,
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Prisma ORM', level: 88 },
      { name: 'Mongoose', level: 85 },
      { name: 'Supabase / Firebase', level: 83 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <Terminal className="w-10 h-10" />,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    skills: [
      { name: 'Git • GitHub • GitLab', level: 95 },
      { name: 'Vercel • Netlify', level: 94 },
      { name: 'Railway • Render • Fly.io', level: 86 },
      { name: 'Docker & Containers', level: 72 },
      { name: 'Postman • Thunder Client', level: 92 },
      { name: 'CI/CD Basics', level: 82 },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative py-20 sm:py-28 lg:py-36
        px-5 sm:px-8 lg:px-12 xl:px-16
        bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950
        overflow-hidden
      "
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-40 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-[600px] h-[600px] bg-purple-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1 }}
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold tracking-tight text-center mb-16 md:mb-20
            bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500
            bg-clip-text text-transparent
          "
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: catIdx * 0.14 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="
                group relative
                bg-gradient-to-b from-slate-900/70 to-slate-950/80
                backdrop-blur-xl border border-slate-700/40
                rounded-2xl md:rounded-3xl p-6 md:p-8
                shadow-xl shadow-black/40
                hover:shadow-2xl hover:shadow-indigo-900/30
                transition-all duration-500
              "
            >
              {/* Subtle gradient overlay on hover */}
              <div
                className={`
                  absolute inset-0 rounded-2xl md:rounded-3xl
                  bg-gradient-to-br ${category.gradient}
                  opacity-0 group-hover:opacity-10
                  transition-opacity duration-700 pointer-events-none
                `}
              />

              {/* Card header */}
              <div className="flex items-center gap-4 mb-7 md:mb-9">
                <div
                  className={`
                    p-3.5 rounded-2xl bg-gradient-to-br ${category.gradient}
                    bg-opacity-20 text-white shadow-lg
                  `}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5 md:space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: catIdx * 0.12 + skillIdx * 0.08 }}
                    className="flex items-center justify-between group/skill"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${category.gradient}`}
                      />
                      <span className="text-slate-200 font-medium text-base md:text-lg group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {/* Progress ring */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        {/* BG track */}
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="rgba(255,255,255,0.07)"
                          strokeWidth="10"
                        />
                        {/* Animated progress */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke={`url(#progressGrad-${catIdx}-${skillIdx})`}
                          strokeWidth="10"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: '0 264' }}
                          whileInView={{ strokeDasharray: `${(skill.level / 100) * 264} 264` }}
                          transition={{ duration: 1.6, delay: catIdx * 0.18 + skillIdx * 0.1, ease: 'easeOut' }}
                        />
                        <defs>
                          <linearGradient
                            id={`progressGrad-${catIdx}-${skillIdx}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor={category.gradient.split(' ')[0].replace('from-', '')} />
                            <stop offset="100%" stopColor={category.gradient.split(' ')[2]?.replace('to-', '') || category.gradient.split(' ')[1].replace('via-', '')} />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="absolute inset-0 flex items-center justify-center text-sm md:text-base font-bold text-slate-300">
                        {skill.level}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-center text-slate-500 mt-16 md:mt-20 text-sm md:text-base"
        >
          Percentages reflect self-assessed proficiency and real-world production usage
        </motion.p>
      </div>
    </section>
  )
}
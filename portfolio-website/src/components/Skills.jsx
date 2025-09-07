import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level:45 },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 88 },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, level: 92 }
    ]
  },
  {
    title: "Backend Development",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, level: 87 },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 82 },
      { name: "SQL", icon: <FaDatabase className="text-blue-400" />, level: 78 }
    ]
  },
  {
    title: "Tools & Workflow",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 85 },
      { name: "GitHub", icon: <FaGitAlt className="text-gray-300" />, level: 88 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering the full spectrum of modern web development technologies to build scalable, performant applications
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="text-center mb-10">
                <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-2xl">
                      {/* Icon */}
                      <div className="text-4xl mb-4 flex justify-center">
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <p className="text-white font-semibold text-center mb-3">
                        {skill.name}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      
                      {/* Proficiency Level */}
                      <div className="text-center">
                        <motion.span
                          className="text-gray-400 text-sm font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1 }}
                          viewport={{ once: true }}
                        >
                          {skill.level >= 85 ? "Expert" : skill.level >= 70 ? "Advanced" : "Intermediate"}
                        </motion.span>
                      </div>

                      {/* Hover effect overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h4 className="text-2xl font-bold text-white mb-4">Always Learning</h4>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              best practices, and emerging technologies to stay at the forefront of web development. 
              <span className="text-blue-400 font-semibold"> Currently diving deeper into TypeScript, Docker, and AWS cloud services.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaUsers, FaComments, FaMicrophone, FaCog } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiPython, SiTailwindcss, SiExpress } from "react-icons/si";

const projects = [
  {
    title: "Real-time Chat Application",
    description: "A full-stack messaging platform with real-time communication, user authentication, and modern UI. Features include message history, user presence indicators, and responsive design.",
    longDescription: "Built a comprehensive chat application that handles real-time messaging between multiple users. Implemented secure user authentication, message persistence, and optimized for performance with efficient WebSocket connections.",
    technologies: [
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> }
    ],
    features: [
      "Real-time messaging with Socket.io",
      "JWT-based authentication",
      "Message history & persistence", 
      "User online/offline status",
      "Responsive mobile design"
    ],
    category: "Full Stack",
    icon: <FaComments />,
    gradient: "from-blue-500 to-purple-600",
    status: "Completed",
    githubUrl: "https://github.com/Aditya05016/real-time-chatApp",
    liveUrl: null // or your live URL if available
  },
  {
    title: "Team Productivity Tracker",
    description: "A comprehensive dashboard for tracking team performance, project progress, and productivity metrics. Includes data visualization, reporting features, and team collaboration tools.",
    longDescription: "Developed a productivity management system that helps teams track tasks, analyze performance metrics, and improve workflow efficiency. Features interactive charts, deadline management, and progress analytics.",
    technologies: [
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
    ],
    features: [
      "Interactive productivity dashboards",
      "Task & deadline management",
      "Performance analytics & reporting",
      "Team collaboration features",
      "Data visualization with charts"
    ],
    category: "Full Stack",
    icon: <FaUsers />,
    gradient: "from-green-500 to-teal-600",
    status: "Completed",
    githubUrl: "https://github.com/Aditya05016/team-productivity-project",
    liveUrl: "https://team-productivity-project.vercel.app"
  },
  {
    title: "Multilingual Speech Recognition System",
    description: "A research-based speech-to-text application supporting multiple languages with high accuracy. Integrates transformer models and advanced ML techniques for natural language processing and real-time transcription.",
    longDescription: "Developed as part of academic research, this intelligent speech recognition system processes multiple languages with real-time transcription capabilities. Implemented using state-of-the-art transformer models and MFCC feature extraction for improved accuracy.",
    technologies: [
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "TensorFlow", icon: <SiPython className="text-orange-400" /> },
      { name: "Transformers", icon: <SiPython className="text-blue-400" /> },
      { name: "Librosa", icon: <SiPython className="text-green-400" /> },
      { name: "NumPy", icon: <SiPython className="text-blue-300" /> }
    ],
    features: [
      "Multi-language speech recognition",
      "Real-time transcription with transformers",
      "MFCC feature extraction",
      "High accuracy ML processing",
      "Research paper implementation"
    ],
    category: "AI/ML Research",
    icon: <FaMicrophone />,
    gradient: "from-purple-500 to-pink-600",
    status: "Completed",
    githubUrl: "https://github.com/Aditya05016/multillingual-speech-recognition-system",
    liveUrl: null
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my full-stack development skills through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-gray-600 transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:flex items-center">
                {/* Content Side */}
                <div className="lg:flex-1 p-8 lg:p-12">
                  {/* Project Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white text-2xl`}>
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          {project.status}
                        </span>
                      </div>
                      <span className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 rounded-lg border border-gray-600"
                        >
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-white text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.githubUrl ? (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300"
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-gray-400 rounded-lg border border-gray-600 cursor-not-allowed"
                        disabled
                      >
                        <FaGithub />
                        <span>Code (Private)</span>
                      </motion.button>
                    )}
                    
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300`}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Features Side */}
                <div className="lg:flex-1 p-8 lg:p-12 bg-gray-800/30">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <FaCog className="text-blue-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Additional Info */}
                  <div className="mt-8 p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
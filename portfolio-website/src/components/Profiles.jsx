import { motion } from "framer-motion";
import { Github, Linkedin, Code, Award, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: <Github className="w-8 h-8" />,
    description: "Project repositories",
    url: "https://github.com/Aditya05016",
    color: "from-gray-600 to-gray-800",
    hoverColor: "hover:from-gray-500 hover:to-gray-700",
    stats: "15+ repositories"
  },
  {
    name: "LinkedIn", 
    icon: <Linkedin className="w-8 h-8" />,
    description: "Professional network & career updates",
    url: "https://www.linkedin.com/in/adish3/",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:from-blue-500 hover:to-blue-700",
    stats: "Professional profile"
  },
  {
    name: "LeetCode",
    icon: <Award className="w-8 h-8" />,
    description: "Algorithm challenges & competitive programming",
    url: "https://leetcode.com/u/Aditya32002/",
    color: "from-orange-600 to-red-600",
    hoverColor: "hover:from-orange-500 hover:to-red-500",
    stats: "150+ problems solved"
  },
  {
    name: "GeeksforGeeks",
    icon: <Code className="w-8 h-8" />,
    description: "Data structures & algorithms practice",
    url: "https://www.geeksforgeeks.org/user/sharmaji1haa5/?_gl=1*1n06idv*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwt-_FBhBzEiwA7QEqyFs69sct7jg-15zOJQxWZmELdcG-odFksbgt6y9Nqg-odLItC6_f2xoC5hsQAvD_BwE",
    color: "from-green-600 to-emerald-600",
    hoverColor: "hover:from-green-500 hover:to-emerald-500",
    stats: "Active contributor"
  }
];

export default function ProfileLinks() {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Connect & Explore
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow my coding journey across different platforms and connect with me professionally
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`block p-8 rounded-2xl bg-gradient-to-br ${profile.color} ${profile.hoverColor} shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-gray-400`}
              >
                {/* Icon & External Link */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-white">
                    {profile.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {profile.name}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="pt-4 border-t border-white/20">
                  <span className="text-white/60 text-xs font-medium uppercase tracking-wide">
                    {profile.stats}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
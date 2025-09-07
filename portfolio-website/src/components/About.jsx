import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "200+", label: "Problems Solved", platform: "LeetCode & GFG" },
    { number: "15+", label: "Projects Built", platform: "Full Stack Apps" },
    { number: "2+", label: "Years Coding", platform: "Continuous Learning" },
    { number: "10+", label: "Technologies", platform: "Mastered" }
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">My Story</h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I started coding two years ago and quickly fell in love with building things from scratch. 
              What began as simple HTML pages has grown into creating <span className="text-blue-400 font-semibold">full-stack applications</span> 
              that people actually use.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy solving problems - whether it's figuring out why something isn't working or 
              building a new feature from the ground up. Each project teaches me something new, 
              and I like that challenge.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not working on projects, I spend time on <span className="text-green-400 font-semibold">LeetCode</span> solving 
              coding problems. It helps me think better and write cleaner code. I've solved over 200 problems so far.
            </p>

            <div className="pt-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always learning something new in tech. Right now I'm getting better at React and exploring 
                backend development. The goal is to build things that work well and help people.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-8">What I've Done</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.platform}</div>
                </motion.div>
              ))}
            </div>

            {/* Simple Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20"
            >
              <h4 className="text-xl font-semibold text-blue-400 mb-3">How I Work</h4>
              <p className="text-gray-300">
                I like to keep things simple and make sure they work well. Good code should be easy to understand 
                and easy to change later. I focus on building things that are <span className="text-blue-400">useful</span> and 
                <span className="text-purple-400"> reliable</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600">
            <h4 className="text-2xl font-semibold text-purple-400 mb-4">What's Next</h4>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm working on improving my skills with <span className="text-blue-400 font-semibold">cloud services</span> and 
              learning more about <span className="text-purple-400 font-semibold">system design</span>. 
              Always excited to work on new projects and tackle interesting problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
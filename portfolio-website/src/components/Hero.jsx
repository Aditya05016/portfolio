import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white text-center relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-xl"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">
          Full Stack Developer
        </span>
      </motion.div>

      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Aditya Sharma
        </span>
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 max-w-3xl mb-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I enjoy building <span className="text-blue-400 font-semibold">web applications</span> and 
        solving coding problems. Always learning something new in tech.
      </motion.p>

      <motion.p
        className="text-lg text-gray-400 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Ready to contribute with React • Node.js • Database expertise • <span className="text-blue-400">Seeking opportunities</span>
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
        <p className="text-xs text-gray-500 mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  );
}
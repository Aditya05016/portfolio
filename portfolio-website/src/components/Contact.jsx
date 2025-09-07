import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Calendar, Send, Briefcase } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert. You can integrate with a form service later
    alert("Thank you for reaching out! I'm excited about potential opportunities and will get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "adityaa00098@gmail.com",
      action: "mailto:adityaa00098@gmail.com",
      description: "Best way to reach me for opportunities"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location", 
      value: "Nalagarh, Himachal Pradesh, India",
      description: "Open to remote & relocation"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "Seeking",
      value: "Full-time opportunities",
      description: "Entry-level to Mid-level positions"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster"
    }
  ];

  return (
    <section id="contact" className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
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
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm actively seeking new opportunities to grow my career and contribute to innovative teams. Let's discuss how I can add value to your organization.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Open to Opportunities</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                I'm a <span className="text-green-400 font-semibold">passionate full-stack developer</span> looking to join a dynamic team where I can contribute my skills, learn from experienced professionals, and grow my career. I'm excited about opportunities in startups, tech companies, or any organization building innovative solutions.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 max-w-2xl mx-auto mb-12">
                <p className="text-blue-300">
                  <strong>Currently seeking:</strong> Full-time positions in web development, software engineering, or related technical roles.
                </p>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 font-medium">{info.value}</p>
                    )}
                    <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-white mb-6">Ready to Connect?</h4>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you have a job opportunity, want to discuss collaboration, or just connect professionally, I'd love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="mailto:adityaa00098@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/adish3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 text-lg"
                >
                  <Briefcase className="w-5 h-5" />
                  LinkedIn
                </motion.a>
              </div>
              
              <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-xl max-w-2xl mx-auto">
                <p className="text-green-300">
                  <strong>Looking forward to hearing from you!</strong> I'm always excited to explore new opportunities and connect with amazing people in the tech industry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
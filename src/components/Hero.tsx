import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Cpu,
  Github,
  Globe,
  Linkedin,
  Mail,
} from "lucide-react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              background: [
                "linear-gradient(to right,#2e73f8 0%,#4683f9 50%,#5f94fa 100%)",
              ],
            }}
            className="absolute -inset-1 blur-lg opacity-30"
          />
          <h1 className="text'7xl font-bold mb-4 relative">
            Hello, I`m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
              Angel Amaya
            </span>
          </h1>
          <p className="text-2xl mb-6 text-blue-200">Full Stack Developer</p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span>API Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span>Backend Development</span>
            </div>
          </div>

          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer from Honduras with expertise in
            building modern web applications. Specialized in creating responsive
            and user-friendly interfaces with React and developing robust
            backend solutions.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Github className="w-7 h-7" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:angelnataren16@gmail.com"
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Mail className="w-7 h-7" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ opacity }}
        className="absolute bottom-8 z-20"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>

      <motion.div
        style={{ opacity: useTransform(scrollY, [0, 300], [0, 0.5]) }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"
      />
    </div>
  );
};

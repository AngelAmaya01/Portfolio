import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-500" },
      { name: "React", level: 85, color: "from-cyan-400 to-cyan-500" },
      { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-500" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-500" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80, color: "from-green-400 to-green-500" },
      { name: "Python", level: 75, color: "from-blue-500 to-yellow-500" },
      { name: "SQL", level: 85, color: "from-blue-400 to-purple-500" },
      { name: "MongoDB", level: 82, color: "from-green-500 to-green-600" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 88, color: "from-orange-500 to-red-500" },
      { name: "AWS", level: 70, color: "from-orange-400 to-yellow-500" },
      { name: "Docker", level: 75, color: "from-blue-400 to-blue-500" },
      { name: "REST APIs", level: 85, color: "from-purple-400 to-purple-500" },
    ],
  },
];

export const Skills = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section style={{ scale }} className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Skills & Expertise
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6 mx-auto flex items-center justify-center"
              >
                <h3 className="text-2xl font-bold text-white">
                  {category.category[0]}
                </h3>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.category}
              </h3>
              <div className="space-y-8">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + index * 0.1,
                    }}
                    className="relative group"
                  >
                    <div className="flex justify-between text-white mb-3">
                      <span className="font-medium text-lg">{skill.name}</span>
                      <span className="text-gray-400 group-hover:text-white transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600 group-hover:border-gray-500 transition-colors">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + index * 0.1,
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative group-hover:shadow-lg transition-all duration-300`}
                      >
                        <motion.div
                          animate={{
                            x: ["0%", "100%"],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

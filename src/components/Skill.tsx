import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiCloudflare,
} from "react-icons/si";
import {
  FaServer,
  FaLayerGroup,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaCode
} from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { CiDatabase } from "react-icons/ci";
import { useLanguage } from "./LanguageToggle";

const skills = [
  {
    category: "Backend",
    icon: <FaServer className="w-8 h-8" />,
    items: [
      { name: "C# - .NET", icon: <TbBrandCSharp  className="w-6 h-6" />, color: "text-purple-400" },
      { name: "Java", icon: <SiJavascript className="w-6 h-6" />, color: "text-red-400" },
      { name: "JavaScript/TypeScript - Node.js", icon: <SiNodedotjs className="w-6 h-6" />, color: "text-green-400" },
      { name: "Python", icon: <SiPython className="w-6 h-6" />, color: "text-yellow-400" },
    ],
  },
  {
    category: "Frontend",
    icon: <FaDesktop className="w-8 h-8" />,
    items: [
      { name: "HTML", icon: <SiHtml5 className="w-6 h-6" />, color: "text-orange-400" },
      { name: "CSS", icon: <SiCss3 className="w-6 h-6" />, color: "text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" />, color: "text-cyan-400" },
      { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6" />, color: "text-purple-400" },
    ],
  },
  {
    category: "Frameworks",
    icon: <FaCode className="w-8 h-8" />,
    items: [
      { name: "React", icon: <SiReact className="w-6 h-6" />, color: "text-cyan-400" },
      { name: "React Native", icon: <FaMobile className="w-6 h-6" />, color: "text-cyan-400" },
    ],
  },
  {
    category: "Bases de datos",
    icon: <CiDatabase  className="w-8 h-8" />,
    items: [
      { name: "SQL Server", icon: <DiMsqlServer className="w-6 h-6" />, color: "text-red-400" },
      { name: "MySQL", icon: <SiMysql className="w-6 h-6" />, color: "text-blue-400" },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" />, color: "text-green-400" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" />, color: "text-blue-400" },
    ],
  },
  {
    category: "Arquitecturas",
    icon: <FaLayerGroup className="w-8 h-8" />,
    items: [
      { name: "Monolítica", icon: <FaServer className="w-6 h-6" />, color: "text-gray-400" },
      { name: "Cliente-Servidor", icon: <FaDesktop className="w-6 h-6" />, color: "text-blue-400" },
      { name: "Arquitectura en Capas", icon: <FaLayerGroup className="w-6 h-6" />, color: "text-purple-400" },
      { name: "Serverless", icon: <FaCloud className="w-6 h-6" />, color: "text-cyan-400" },
      { name: "SPA / PWA", icon: <FaMobile className="w-6 h-6" />, color: "text-green-400" },
    ],
  },
  {
    category: "DevOps",
    icon: <FaCloud className="w-8 h-8" />,
    items: [
      { name: "Git", icon: <SiGit className="w-6 h-6" />, color: "text-orange-400" },
      { name: "GitHub", icon: <SiGithub className="w-6 h-6" />, color: "text-gray-900 dark:text-white" },
      { name: "Docker", icon: <SiDocker className="w-6 h-6" />, color: "text-blue-400" },
      { name: "Cloudflare", icon: <SiCloudflare className="w-6 h-6" />, color: "text-orange-400" },
      { name: "Vercel", icon: <SiVercel className="w-6 h-6" />, color: "text-gray-900 dark:text-white" },
      { name: "Firebase", icon: <SiFirebase className="w-6 h-6" />, color: "text-yellow-400" },
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
  const { t } = useLanguage();

  return (
    <motion.section style={{ scale }} className="py-20 bg-gray-100 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          {t('skillsAndExperience')}
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 mx-auto flex items-center justify-center text-white"
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
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
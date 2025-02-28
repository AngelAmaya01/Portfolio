import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management and secure payment processing.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with real-time data visualization and reporting.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "TypeScript", "D3.js", "Firebase"],
  },
  {
    title: "AI Task Manager",
    description:
      "Smart task management system with AI-powered prioritization and scheduling features.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
  },
];

export const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section style={{ y }} className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <ExternalLink className="w-6 h-6 text-white" />
          </motion.a>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

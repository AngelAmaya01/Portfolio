import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Smartphone, ShoppingCart } from "lucide-react";
import { ReactElement } from "react";
import { useLanguage } from "./LanguageToggle";

// Definición de tipos para los proyectos
interface Project {
  title: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  link?: string;
  status: "live" | "development" | "completed";
  icon?: ReactElement;
}

// Lista de proyectos
const projects: Project[] = [
  {
    title: "VIStudio — E-commerce Full-Stack",
    descriptionKey: "viStudioDesc",
    image:
      "https://www.vistudiohn.com/logo-vistudio.png",
    tags: ["React 19", "Node.js", "Express.js", "MySQL", "Socket.io", "JWT", "Cloudinary", "Tailwind CSS"],
    link: "https://www.vistudiohn.com/",
    status: "live",
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
  },
  {
    title: "AquaSystemWeb",
    descriptionKey: "aquaSystemWebDesc",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["React", "JavaScript", "Tailwind CSS", "MySQL"],
    link: "https://admin.emasar.org/",
    status: "live",
  },
  {
    title: "AquaSystemApp",
    descriptionKey: "aquaSystemAppDesc",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
    tags: ["React Native", "TypeScript", "Tailwind CSS", "Firebase"],
    status: "completed",
    icon: <Smartphone className="w-6 h-6 text-white" />,
  },
];

// Componente principal de proyectos
export const Projects = (): ReactElement => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const { t } = useLanguage();

  return (
    <motion.section style={{ y }} className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          {t('featuredProjects')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Props para el componente ProjectCard
interface ProjectCardProps {
  project: Project;
  index: number;
}

// Componente ProjectCard
const ProjectCard = ({ project, index }: ProjectCardProps): ReactElement => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useLanguage();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
            {t('statusLive')}
          </span>
        );
      case "completed":
        return (
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
            {t('statusCompleted')}
          </span>
        );
      case "development":
        return (
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
            {t('statusDevelopment')}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 group flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </motion.a>
          )}
          {project.icon && !project.link && (
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              {project.icon}
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4">
          {getStatusBadge(project.status)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm flex-1">{t(project.descriptionKey)}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-0.5 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs border border-blue-200 dark:border-blue-500/20 hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
          >
            {t('viewProject')} <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {project.status === "completed" && !project.link && (
          <p className="text-gray-500 italic text-sm">{t('mobileAppStore')}</p>
        )}
      </div>
    </motion.div>
  );
};

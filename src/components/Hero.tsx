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
import { useLanguage } from "./LanguageToggle";

// ** Animaciones y constantes fuera del componente para optimizar el rendimiento **
// Estas constantes no necesitan redefinirse en cada render.
const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const iconVariants = {
  hover: { scale: 1.1, y: -5 },
  tap: { scale: 0.9 },
};

const scrollButtonAnimation = {
  y: [0, 10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "reverse",
  },
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useLanguage();

  // ** Funciones para manejar eventos **
  const handleEmailClick = () => {
    window.location.href = "mailto:angelnataren16@gmail.com";
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo con efecto parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero Background: a futuristic digital landscape"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Contenido principal del Hero */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6"
      >
        {/* Título y subtítulo con animación */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          {/* Efecto de texto brillante */}
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              {t('hello')}{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                Angel Amaya
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-6 text-blue-200">{t('fullStackDev')}</p>
          </div>

          {/* Iconos de habilidades */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base">{t('webDev')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base">{t('apiIntegration')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base">{t('backendDev')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span className="text-sm sm:text-base">{t('tiManagement')}</span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            {t('heroDescription')}
          </p>
        </motion.div>

        {/* Botones de redes sociales */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Botón de GitHub */}
          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
            href="https://github.com/AngelAmaya01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="Visit GitHub Profile"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>

          {/* Botón de LinkedIn */}
          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
            href="https://www.linkedin.com/in/angel-amaya-6084411ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="Visit LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>

          {/* Botón de Correo Electrónico */}
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
            onClick={handleEmailClick}
            className="p-3 sm:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.button>
        </div>
      </motion.div>

      {/* Botón de scroll hacia abajo */}
      <motion.button
        animate={scrollButtonAnimation.transition}
        style={{ opacity }}
        className="absolute bottom-6 sm:bottom-8 z-20 cursor-pointer"
        onClick={scrollDown}
        aria-label="Scroll down to explore"
      >
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </motion.button>

      {/* Degradado para mejorar la visibilidad del botón */}
      <motion.div
        style={{ opacity: useTransform(scrollY, [0, 300], [0, 0.5]) }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"
      />
    </div>
  );
};

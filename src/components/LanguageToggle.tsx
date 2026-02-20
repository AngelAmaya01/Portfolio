import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguageContextType {
  language: 'es' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Traducciones
const translations = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
    hello: 'Hola, soy',
    fullStackDev: 'Desarrollador Full Stack & Jefe de TI',
    webDev: 'Desarrollo Web',
    apiIntegration: 'Integración de APIs',
    backendDev: 'Desarrollo Backend',
    tiManagement: 'Gestión TI',
    heroDescription: 'Ingeniero en Sistemas de Honduras con experiencia liderando áreas de TI, construyendo plataformas e-commerce full-stack y desarrollando sistemas empresariales. Especializado en React, Node.js, administración de servidores y seguridad informática.',
    aboutMe: 'Sobre Mí',
    featuredProjects: 'Proyectos Destacados',
    skillsAndExperience: 'Habilidades y Experiencia',
    contactMe: 'Contáctame',
    // About section
    personalInfo: 'Información Personal',
    professionalExperience: 'Experiencia Profesional',
    certifications: 'Certificaciones',
    location: 'Santa Rosa de Copán, Honduras',
    experience: '3+ años de experiencia',
    degree: 'Ingeniería en Sistemas - UNAH',
    aboutDescription: 'Ingeniero en Sistemas proactivo y adaptable, con experiencia en desarrollo full-stack, liderazgo de área TI, administración de servidores y bases de datos. Me apasiona crear soluciones tecnológicas que impacten positivamente a las organizaciones, desde aplicaciones web hasta infraestructura en la nube.',
    // Projects
    aquaSystemWebDesc: 'Sistema web administrativo para la gestión de servicios de agua potable. Permite a los abonados visualizar comunicados en tiempo real, verificar saldo, enviar reportes y ver los días de suministro. Desarrollado con React, JavaScript y Tailwind CSS.',
    aquaSystemAppDesc: 'Aplicación móvil complementaria del sistema AquaSys. Permite a los usuarios consultar estado de cuenta, recibir notificaciones push y reportar incidencias. Desarrollada con React Native y Firebase.',
    viStudioDesc: 'Plataforma e-commerce full-stack especializada en productos de sublimación y pantallas LED, con configurador interactivo de paneles LED en tiempo real. Incluye autenticación JWT/OAuth, carrito de compras, notificaciones en tiempo real con Socket.io, y dashboard administrativo con analíticas.',
    viewProject: 'Ver proyecto',
    mobileAppStore: 'App móvil - Próximamente en Play Store',
    statusLive: '🟢 En vivo',
    statusCompleted: '✅ Completado',
    statusDevelopment: '🚧 En desarrollo',
    // Experience
    practicaBachillerato: 'Práctica Profesional Bachillerato',
    comlesul: 'Cooperativa COMLESUL | Mapulaca, Lempira',
    practicaBachilleratoDesc: 'Participé en el desarrollo de la página web de la cooperativa, mantenimiento preventivo de equipos y resolución de problemas de conectividad para mejorar la estabilidad de la red.',
    aquasysRole: 'Desarrollador de Software AQUASYS',
    emasarCompany: 'EMASAR Aguas de Santa Rosa | Santa Rosa Copán',
    aquasysDesc: 'Colaboré en el desarrollo de una aplicación web administrativa y una aplicación móvil para mejorar la interacción entre la empresa y sus abonados. Las herramientas permiten visualizar comunicados, verificar saldo, enviar reportes y ver días de suministro de agua.',
    practicaUniversidad: 'Práctica Profesional Universidad',
    practicaUniversidadDesc: 'Participé activamente en el desarrollo de la página web y la aplicación móvil, mejorando mi capacidad para diseñar e implementar soluciones tecnológicas. También realicé mantenimiento de equipos, reparación y configuración de redes.',
    jefeTI: 'Jefe Área TI',
    jefeTIDesc: 'A cargo de la gestión integral del área de informática: administración y respaldo de bases de datos, gestión de redes y videovigilancia, supervisión del sistema EMASAR, administración de servidores, soporte técnico, y asegurar la continuidad operativa de todos los sistemas tecnológicos.',
    viStudioRole: 'Desarrollador Full-Stack',
    viStudioCompany: 'ViStudio | Puerto Cortés',
    viStudioExpDesc: 'Diseño y desarrollo integral de plataforma e-commerce con React 19, Node.js, Express.js y MySQL. Implementé autenticación JWT/OAuth, carrito de compras, notificaciones en tiempo real con Socket.io, generación de PDFs, Cloudinary para imágenes, y seguridad a nivel producción.',
    credifacRole: 'Jefe Área TI',
    credifacCompany: 'CREDIFAC (Microfinanciera) | Santa Rosa Copán',
    credifacDesc: 'Implementación de infraestructura en Claro Cloud, configuración de certificados SSL, administración de bases de datos MySQL, implementación de VPN con Tailscale, desarrollo de scripts Python para migración de datos desde SQL Server, deploy y administración del sistema Laravel/PHP, y desarrollo de nuevo sistema para empresa inmobiliaria Inmoci.',
    // Skills categories
    backend: 'Backend',
    frontend: 'Frontend',
    frameworks: 'Frameworks',
    databases: 'Bases de datos',
    architectures: 'Arquitecturas',
    devops: 'DevOps & Cloud',
    infrastructure: 'Infraestructura',
    // Architecture types
    monolithic: 'Monolítica',
    clientServer: 'Cliente-Servidor',
    layered: 'Arquitectura en Capas',
    serverless: 'Serverless',
    spaPwa: 'SPA / PWA'
  },
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    downloadCV: 'Download CV',
    hello: 'Hello, I am',
    fullStackDev: 'Full Stack Developer & IT Manager',
    webDev: 'Web Development',
    apiIntegration: 'API Integration',
    backendDev: 'Backend Development',
    tiManagement: 'IT Management',
    heroDescription: 'Systems Engineer from Honduras experienced in leading IT departments, building full-stack e-commerce platforms and enterprise systems. Specialized in React, Node.js, server administration and information security.',
    aboutMe: 'About Me',
    featuredProjects: 'Featured Projects',
    skillsAndExperience: 'Skills and Experience',
    contactMe: 'Contact Me',
    // About section
    personalInfo: 'Personal Information',
    professionalExperience: 'Professional Experience',
    certifications: 'Certifications',
    location: 'Santa Rosa de Copán, Honduras',
    experience: '3+ years of experience',
    degree: 'Systems Engineering - UNAH',
    aboutDescription: 'Proactive and adaptable Systems Engineer with experience in full-stack development, IT leadership, server and database administration. I am passionate about creating technological solutions that positively impact organizations, from web applications to cloud infrastructure.',
    // Projects
    aquaSystemWebDesc: 'Administrative web system for water service management. Allows subscribers to view real-time announcements, check balance, send reports and see supply days. Built with React, JavaScript and Tailwind CSS.',
    aquaSystemAppDesc: 'Complementary mobile application for the AquaSys system. Allows users to check account status, receive push notifications and report incidents. Built with React Native and Firebase.',
    viStudioDesc: 'Full-stack e-commerce platform specialized in sublimation products and LED displays, with a real-time interactive LED panel configurator. Includes JWT/OAuth authentication, shopping cart, real-time notifications with Socket.io, and administrative dashboard with analytics.',
    viewProject: 'View project',
    mobileAppStore: 'Mobile App - Coming soon to Play Store',
    statusLive: '🟢 Live',
    statusCompleted: '✅ Completed',
    statusDevelopment: '🚧 In development',
    // Experience
    practicaBachillerato: 'High School Professional Internship',
    comlesul: 'COMLESUL Cooperative | Mapulaca, Lempira',
    practicaBachilleratoDesc: 'Participated in the development of the cooperative\'s website, performed preventive equipment maintenance and resolved connectivity issues to improve network stability.',
    aquasysRole: 'AQUASYS Software Developer',
    emasarCompany: 'EMASAR Aguas de Santa Rosa | Santa Rosa Copán',
    aquasysDesc: 'Collaborated in developing an administrative web application and mobile app to improve company-subscriber interaction. The tools allow viewing announcements, checking balance, submitting reports and seeing water supply days.',
    practicaUniversidad: 'University Professional Internship',
    practicaUniversidadDesc: 'Actively participated in the development of the website and mobile application, significantly improving my ability to design and implement technological solutions. Also performed equipment maintenance, repair and network configuration.',
    jefeTI: 'IT Department Head',
    jefeTIDesc: 'In charge of the comprehensive management of the IT department: database administration and backup, network and video surveillance management, EMASAR system supervision, server administration, technical support, and ensuring operational continuity of all technological systems.',
    viStudioRole: 'Full-Stack Developer',
    viStudioCompany: 'ViStudio | Puerto Cortés',
    viStudioExpDesc: 'Designed and developed a full-stack e-commerce platform with React 19, Node.js, Express.js and MySQL. Implemented JWT/OAuth authentication, shopping cart, real-time notifications with Socket.io, PDF generation, Cloudinary for images, and production-level security.',
    credifacRole: 'IT Department Head',
    credifacCompany: 'CREDIFAC (Microfinance) | Santa Rosa Copán',
    credifacDesc: 'Implemented Claro Cloud infrastructure, SSL certificate configuration, MySQL database administration, VPN implementation with Tailscale, Python scripts for data migration from SQL Server, Laravel/PHP system deployment and administration, and new system development for real estate company Inocci.',
    // Skills categories
    backend: 'Backend',
    frontend: 'Frontend',
    frameworks: 'Frameworks',
    databases: 'Databases',
    architectures: 'Architectures',
    devops: 'DevOps & Cloud',
    infrastructure: 'Infrastructure',
    // Architecture types
    monolithic: 'Monolithic',
    clientServer: 'Client-Server',
    layered: 'Layered Architecture',
    serverless: 'Serverless',
    spaPwa: 'SPA / PWA'
  }
};

// Context para el idioma
import { createContext, useContext, ReactNode } from 'react';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'es' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as 'es' | 'en') || 'es';
    }
    return 'es';
  });

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-40 p-2 md:p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-1 md:gap-2 touch-manipulation"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <Globe className="w-4 h-4 md:w-5 md:h-5" />
      <span className="text-xs md:text-sm font-medium hidden sm:block">
        {language.toUpperCase()}
      </span>
    </motion.button>
  );
};

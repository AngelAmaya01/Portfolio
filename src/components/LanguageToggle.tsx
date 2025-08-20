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
    fullStackDev: 'Desarrollador Full Stack',
    webDev: 'Desarrollo Web',
    apiIntegration: 'Integración de APIs',
    backendDev: 'Desarrollo Backend',
    heroDescription: 'Desarrollador full-stack apasionado de Honduras con experiencia en la construcción de aplicaciones web modernas. Especializado en crear interfaces responsivas y amigables con React y desarrollar soluciones backend robustas.',
    aboutMe: 'Sobre Mí',
    featuredProjects: 'Proyectos Destacados',
    skillsAndExperience: 'Habilidades y Experiencia',
    contactMe: 'Contáctame',
    // About section
    personalInfo: 'Información Personal',
    professionalExperience: 'Experiencia Profesional',
    certifications: 'Certificaciones',
    location: 'Santa Rosa de Copán, Honduras',
    experience: '1+ años de experiencia',
    degree: 'Ingeniería en Sistemas',
    aboutDescription: 'Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. Me especializo en el desarrollo de aplicaciones web y móviles, con un enfoque en la experiencia del usuario y la eficiencia del código. Mi objetivo es transformar ideas complejas en aplicaciones funcionales y atractivas.',
    // Projects
    aquaSystemWebDesc: 'Sistema web completo para la gestión de servicios de agua potable. Incluye administración de usuarios, facturación, reportes y control de pagos. Desarrollado con React, TypeScript y MySQL.',
    aquaSystemAppDesc: 'Aplicación móvil complementaria del sistema web, permitiendo a los usuarios consultar su estado de cuenta, realizar pagos y recibir notificaciones. Desarrollada con React Native.',
    viewProject: 'Ver proyecto',
    mobileAppStore: 'App móvil - Próximamente en Play Store',
    statusLive: '🟢 En vivo',
    statusCompleted: '✅ Completado',
    statusDevelopment: '🚧 En desarrollo',
    // Experience
    webDeveloper: 'Desarrollador Web',
    mobileAppDeveloper: 'Desarrollador de Apps Móviles',
    emasar: 'EMASAR',
    webDevDesc: 'Desarrollo y mantenimiento del sistema web AquaSystemWeb para la gestión de servicios de agua potable, incluyendo administración de usuarios, facturación y reportes.',
    mobileDevDesc: 'Desarrollo de AquaSystemApp, aplicación móvil complementaria que permite a los usuarios consultar su estado de cuenta y realizar pagos.',
    // Skills categories
    backend: 'Backend',
    frontend: 'Frontend',
    frameworks: 'Frameworks',
    databases: 'Bases de datos',
    architectures: 'Arquitecturas',
    devops: 'DevOps',
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
    fullStackDev: 'Full Stack Developer',
    webDev: 'Web Development',
    apiIntegration: 'API Integration',
    backendDev: 'Backend Development',
    heroDescription: 'Passionate full-stack developer from Honduras with experience building modern web applications. Specialized in creating responsive and user-friendly interfaces with React and developing robust backend solutions.',
    aboutMe: 'About Me',
    featuredProjects: 'Featured Projects',
    skillsAndExperience: 'Skills and Experience',
    contactMe: 'Contact Me',
    // About section
    personalInfo: 'Personal Information',
    professionalExperience: 'Professional Experience',
    certifications: 'Certifications',
    location: 'Santa Rosa de Copán, Honduras',
    experience: '1+ years of experience',
    degree: 'Systems Engineering',
    aboutDescription: 'I am a developer passionate about creating innovative technological solutions. I specialize in web and mobile application development, with a focus on user experience and code efficiency. My goal is to transform complex ideas into functional and attractive applications.',
    // Projects
    aquaSystemWebDesc: 'Complete web system for water service management. Includes user administration, billing, reports and payment control. Developed with React, TypeScript and MySQL.',
    aquaSystemAppDesc: 'Complementary mobile application to the web system, allowing users to check their account status, make payments and receive notifications. Developed with React Native.',
    viewProject: 'View project',
    mobileAppStore: 'Mobile App - Coming soon to Play Store',
    statusLive: '🟢 Live',
    statusCompleted: '✅ Completed',
    statusDevelopment: '🚧 In development',
    // Experience
    webDeveloper: 'Web Developer',
    mobileAppDeveloper: 'Mobile App Developer',
    emasar: 'EMASAR',
    webDevDesc: 'Development and maintenance of the AquaSystemWeb web system for water service management, including user administration, billing and reports.',
    mobileDevDesc: 'Development of AquaSystemApp, a complementary mobile application that allows users to check their account status and make payments.',
    // Skills categories
    backend: 'Backend',
    frontend: 'Frontend',
    frameworks: 'Frameworks',
    databases: 'Databases',
    architectures: 'Architectures',
    devops: 'DevOps',
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
      className="fixed bottom-8 left-8 z-40 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
    >
      <Globe className="w-5 h-5" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </motion.button>
  );
};
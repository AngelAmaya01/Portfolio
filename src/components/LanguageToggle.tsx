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
    contactMe: 'Contáctame'
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
    contactMe: 'Contact Me'
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
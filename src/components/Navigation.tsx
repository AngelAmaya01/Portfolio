import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Sobre mí', href: '#about', icon: User },
    { name: 'Proyectos', href: '#projects', icon: Briefcase },
    { name: 'Habilidades', href: '#skills', icon: Code },
    { name: 'Contacto', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const downloadCV = () => {
    // Crear un CV temporal en formato de texto
    const cvContent = `
ANGEL AMAYA - FULL STACK DEVELOPER

Contacto:
Email: angelnataren16@gmail.com
Teléfono: +504 98288917
Ubicación: Santa Rosa de Copán, Honduras

Habilidades Técnicas:
Backend: C# .NET, Java, JavaScript/TypeScript Node.js, Python
Frontend: HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap
Frameworks: React, React Native
Bases de datos: SQL Server, MySQL, MongoDB, PostgreSQL
DevOps: Git, GitHub, Docker, Cloudflare, Vercel, Firebase

Proyectos Destacados:
1. AquaSystemWeb - Sistema web para gestión de servicios de agua potable
2. AquaSystemApp - Aplicación móvil complementaria

Arquitecturas:
- Monolítica
- Cliente-Servidor
- Arquitectura en Capas
- Serverless
- SPA / PWA
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Angel_Amaya_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              Angel<span className="text-blue-400">A</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </motion.button>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Download CV */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors w-full text-left"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={downloadCV}
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors w-full text-left"
                >
                  <Download className="w-5 h-5" />
                  Descargar CV
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
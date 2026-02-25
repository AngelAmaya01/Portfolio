import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useLanguage } from './LanguageToggle';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const scrollProgress = useScrollProgress();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navItems = [
    { name: t('home'), href: '#home', icon: Home },
    { name: t('about'), href: '#about', icon: User },
    { name: t('projects'), href: '#projects', icon: Briefcase },
    { name: t('skills'), href: '#skills', icon: Code },
    { name: t('contact'), href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const downloadCV = () => {
    const a = document.createElement("a");
    a.href = "/CV - Angel Amaya.pdf";
    a.download = "Angel_Amaya_CV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setIsOpen(false); // Cerrar menú después de descargar
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
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              Angel<span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">A</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-medium text-sm xl:text-base"
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
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Download CV */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="flex items-center gap-2 px-3 xl:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium text-sm xl:text-base"
              >
                <Download className="w-4 h-4" />
                <span className="hidden xl:block">{t('downloadCV')}</span>
                <span className="xl:hidden">CV</span>
              </motion.button>
            </div>

            {/* Tablet/Mobile Menu Buttons */}
            <div className="lg:hidden flex items-center gap-1 sm:gap-2">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </motion.button>

              {/* Download CV Button - Solo en tablet */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="hidden md:flex lg:hidden items-center gap-1 px-2 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0, y: -10 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="origin-top lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700/50 shadow-xl"
            >
              <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
                <div className="space-y-3 sm:space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-full text-left font-medium py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-base sm:text-lg">{item.name}</span>
                    </motion.button>
                  ))}
                  
                  {/* Download CV en menú móvil */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-2 border-t border-gray-200 dark:border-gray-700"
                  >
                    <motion.button
                      whileHover={{ x: 10 }}
                      onClick={downloadCV}
                      className="flex items-center gap-3 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left font-medium py-2 px-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10"
                    >
                      <Download className="w-5 h-5 flex-shrink-0" />
                      <span className="text-base sm:text-lg">{t('downloadCV')}</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
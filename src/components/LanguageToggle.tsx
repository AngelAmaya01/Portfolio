import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

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
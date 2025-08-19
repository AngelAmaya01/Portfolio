import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Por defecto siempre oscuro para este portfolio
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Siempre empezar en modo oscuro
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor = '#111827'; // gray-900
      } else {
        document.documentElement.classList.remove('dark');
        document.body.style.backgroundColor = '#ffffff'; // white
      }
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};
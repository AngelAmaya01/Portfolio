import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Verificar preferencia del sistema
    if (typeof window !== 'undefined') {
      const saved = Cookies.get('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Cookies.set('theme', isDark ? 'dark' : 'light', { expires: 365 });
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};
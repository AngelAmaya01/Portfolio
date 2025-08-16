import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = Cookies.get('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    Cookies.set('theme', isDark ? 'dark' : 'light', { expires: 365 });
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from './LanguageToggle';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/AngelAmaya01',
    icon: Github,
    color: 'hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/angel-amaya-6084411ab/',
    icon: Linkedin,
    color: 'hover:text-blue-400',
  },
  {
    label: 'Email',
    href: 'mailto:angelnataren16@gmail.com',
    icon: Mail,
    color: 'hover:text-red-400',
  },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-700/50 relative overflow-hidden">
      {/* Gradiente decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Col 1 — Identidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Angel<span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">A</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t('footerDesc')}
            </p>
          </motion.div>

          {/* Col 2 — Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('followMe')}
            </h4>
            <div className="flex gap-4 mb-6">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-gray-800 rounded-xl text-gray-400 ${social.color} transition-all duration-200 border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="https://github.com/AngelAmaya01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400/50 text-sm transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              {t('viewAllProjects')}
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © {year} Angel Amaya. {t('footerRights')}
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Honduras
          </p>
        </div>
      </div>
    </footer>
  );
};

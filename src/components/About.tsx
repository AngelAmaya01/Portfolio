import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Award, Briefcase } from 'lucide-react';
import { useLanguage } from './LanguageToggle';

const experiences = [
  {
    titleKey: 'credifacRole',
    companyKey: 'credifacCompany',
    period: 'Ago 2025 - Actualidad',
    descriptionKey: 'credifacDesc',
    technologies: ['Claro Cloud', 'Laravel/PHP', 'MySQL', 'Python', 'Tailscale VPN', 'SSL', 'SQL Server'],
    current: true,
  },
  {
    titleKey: 'viStudioRole',
    companyKey: 'viStudioCompany',
    period: 'Ene 2026 - Feb 2026',
    descriptionKey: 'viStudioExpDesc',
    technologies: ['React 19', 'Node.js', 'Express.js', 'MySQL', 'Socket.io', 'JWT', 'Cloudinary'],
    current: false,
  },
  {
    titleKey: 'jefeTI',
    companyKey: 'emasarCompany',
    period: 'Feb 2025 - Jul 2025',
    descriptionKey: 'jefeTIDesc',
    technologies: ['SQL Server', 'MySQL', 'Redes', 'Videovigilancia', 'Servidores', 'Soporte TI'],
    current: false,
  },
  {
    titleKey: 'practicaUniversidad',
    companyKey: 'emasarCompany',
    period: 'Feb 2025 - Jun 2025',
    descriptionKey: 'practicaUniversidadDesc',
    technologies: ['React', 'React Native', 'JavaScript', 'Tailwind CSS', 'Redes'],
    current: false,
  },
  {
    titleKey: 'aquasysRole',
    companyKey: 'emasarCompany',
    period: 'May 2024 - Mar 2025',
    descriptionKey: 'aquasysDesc',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'MySQL', 'React Native', 'Firebase'],
    current: false,
  },
  {
    titleKey: 'practicaBachillerato',
    companyKey: 'comlesul',
    period: 'Sep 2019',
    descriptionKey: 'practicaBachilleratoDesc',
    technologies: ['HTML', 'CSS', 'Redes', 'Soporte Técnico'],
    current: false,
  },
];

const certifications = [
  {
    name: 'Python Aplicado a la IA',
    issuer: 'SoloLearn',
    date: 'Nov 2024',
    icon: '🐍',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    name: 'Microsoft Excel Intermedio',
    issuer: 'INFOP Honduras',
    date: 'Oct 2018',
    icon: '📊',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Atención al Cliente',
    issuer: 'INFOP Honduras',
    date: 'Nov 2021',
    icon: '🤝',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Ingeniería en Sistemas',
    issuer: 'UNAH - CUROC',
    date: 'Jul 2025',
    icon: '🎓',
    color: 'from-purple-500 to-purple-600',
  },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          {t('aboutMe')}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Personal Info + Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('personalInfo')}</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t('location')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t('experience')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t('degree')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Desarrollador de sistemas @ CREDIFAC</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                {t('aboutDescription')}
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-500" />
                {t('certifications')}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shrink-0`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t('professionalExperience')}</h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative pl-16"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${exp.current ? 'bg-green-500 ring-2 ring-green-400/50' : 'bg-blue-500'}`}></div>

                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{t(exp.titleKey)}</h4>
                          <div className="flex items-center gap-2 shrink-0">
                            {exp.current && (
                              <span className="px-2 py-0.5 bg-green-500/20 text-green-500 text-xs rounded-full border border-green-500/30">
                                Actual
                              </span>
                            )}
                            <span className="text-blue-500 text-xs font-medium">{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{t(exp.companyKey)}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{t(exp.descriptionKey)}</p>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-0.5 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs border border-blue-200 dark:border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

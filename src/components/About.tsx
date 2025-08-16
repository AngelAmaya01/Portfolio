import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Desarrollador Full Stack',
    company: 'EMASAR',
    period: '2023 - Presente',
    description: 'Desarrollo y mantenimiento del sistema web AquaSystemWeb para la gestión de servicios de agua potable, incluyendo administración de usuarios, facturación y reportes.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'MySQL']
  },
  {
    title: 'Desarrollador de Aplicaciones Móviles',
    company: 'Freelance',
    period: '2023 - Presente',
    description: 'Desarrollo de AquaSystemApp, aplicación móvil complementaria que permite a los usuarios consultar su estado de cuenta y realizar pagos.',
    technologies: ['React Native', 'TypeScript', 'Firebase']
  }
];

const certifications = [
  {
    name: 'React Developer',
    issuer: 'Meta',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    name: 'JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    date: '2022',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=100&h=100'
  }
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-800 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Sobre Mí
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Información Personal</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Santa Rosa de Copán, Honduras</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">2+ años de experiencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Ingeniería en Sistemas</span>
                </div>
              </div>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Soy un desarrollador full-stack apasionado por crear soluciones tecnológicas innovadoras. 
                Me especializo en el desarrollo de aplicaciones web y móviles, con un enfoque en la 
                experiencia del usuario y la eficiencia del código. Mi objetivo es transformar ideas 
                complejas en aplicaciones funcionales y atractivas.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-400" />
                Certificaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
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
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-8">Experiencia Profesional</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="relative pl-16"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                      
                      <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                          <span className="text-blue-400 text-sm font-medium">{exp.period}</span>
                        </div>
                        <p className="text-blue-300 font-medium mb-3">{exp.company}</p>
                        <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
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
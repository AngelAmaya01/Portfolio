import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Mejores Prácticas en React 2024',
    excerpt: 'Descubre las últimas tendencias y mejores prácticas para desarrollar aplicaciones React modernas y eficientes.',
    date: '15 Enero 2024',
    readTime: '5 min',
    tags: ['React', 'JavaScript', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Arquitectura de Microservicios con Node.js',
    excerpt: 'Aprende cómo diseñar y implementar una arquitectura de microservicios escalable usando Node.js y Docker.',
    date: '8 Enero 2024',
    readTime: '8 min',
    tags: ['Node.js', 'Microservicios', 'Backend'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Optimización de Bases de Datos MySQL',
    excerpt: 'Técnicas avanzadas para optimizar el rendimiento de tus consultas MySQL y mejorar la velocidad de tu aplicación.',
    date: '2 Enero 2024',
    readTime: '6 min',
    tags: ['MySQL', 'Database', 'Performance'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80'
  }
];

export const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Blog & Artículos
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            Ver todos los artículos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
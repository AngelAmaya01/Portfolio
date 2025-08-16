import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    position: 'Gerente de Operaciones',
    company: 'EMASAR',
    text: 'Angel desarrolló un sistema excepcional para nuestra empresa. Su atención al detalle y capacidad para entender nuestras necesidades específicas fue impresionante. El sistema ha mejorado significativamente nuestra eficiencia operativa.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Director de Tecnología',
    company: 'TechSolutions',
    text: 'Trabajar con Angel fue una experiencia fantástica. Su conocimiento técnico y profesionalismo son destacables. Entregó el proyecto a tiempo y superó nuestras expectativas en términos de calidad y funcionalidad.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Ana Martínez',
    position: 'Propietaria',
    company: 'Startup Local',
    text: 'Angel transformó nuestra idea en una aplicación funcional y atractiva. Su capacidad para comunicar conceptos técnicos complejos de manera simple fue invaluable. Definitivamente lo recomendaría.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Testimonios
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400/30" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500/30"
                />
                <div>
                  <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-400 text-sm">{testimonial.position}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
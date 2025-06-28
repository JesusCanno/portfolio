import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML + CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'PHP', level: 85 },
    { name: 'MySQL + SQL', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Laravel', level: 80 },
    { name: 'Bootstrap', level: 85 },
    { name: 'WordPress', level: 80 },
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Desarrollo Full Stack',
      description: 'Experiencia en desarrollo web con HTML, CSS, JavaScript, PHP, Angular, Laravel y más.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Diseño UI/UX',
      description: 'Capacidad para crear interfaces atractivas y funcionales.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Optimización y Resolución',
      description: 'Optimización de procesos, resolución de problemas y soporte técnico.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Trabajo en Equipo',
      description: 'Colaboración, comunicación y adaptación en entornos ágiles.'
    },
  ];

  const languages = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recién titulado en el Grado Superior de Desarrollo de Aplicaciones Web. Gran interés en incorporarme al mercado laboral para aplicar y seguir desarrollando los conocimientos adquiridos durante mi formación académica. Me considero una persona trabajadora, comunicativa, comprometida y con gran capacidad de adaptación y aprendizaje, con el objetivo de alcanzar los retos y metas propuestos por la empresa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Perfil Profesional
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                • Trabajador, comunicativo y comprometido.
              </p>
              <p>
                • Capacidad de adaptación y aprendizaje continuo.
              </p>
              <p>
                • Orientado a la resolución de problemas y optimización de procesos.
              </p>
              <p>
                • Experiencia en soporte técnico y trato con clientes.
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5" /> Idiomas
              </h4>
              <ul className="flex flex-wrap gap-4">
                {languages.map(lang => (
                  <li key={lang.name} className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 text-sm font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {lang.name} <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({lang.level})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Permisos
              </h4>
              <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 text-sm font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" /> Permiso de conducción B
              </span>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Habilidades Técnicas
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      id: 1,
      type: 'work',
      title: 'Becario en Becompliance SL',
      company: 'Becompliance SL',
      period: '24/03/2025 - 10/06/2025',
      location: 'Madrid',
      description: (
        <ul className="list-disc ml-5">
          <li>Mantenimiento canal denuncia
            <ul className="list-disc ml-5 text-sm">
              <li>Mejoras mediante PHP y Angular</li>
            </ul>
          </li>
          <li>Soporte técnico
            <ul className="list-disc ml-5 text-sm">
              <li>Incidencias de clientes usando SQL</li>
            </ul>
          </li>
          <li>Desarrollo de webs con WordPress
            <ul className="list-disc ml-5 text-sm">
              <li>Páginas web con WordPress, HTML y CSS</li>
            </ul>
          </li>
        </ul>
      ),
      technologies: ['PHP', 'Angular', 'SQL', 'WordPress', 'HTML', 'CSS'],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'work',
      title: 'Becario en Telenex Servicios Informáticos',
      company: 'Telenex Servicios Informáticos',
      period: '21/03/2023 - 07/06/2023',
      location: 'Madrid',
      description: (
        <ul className="list-disc ml-5">
          <li>Ventas cara al público</li>
          <li>Reparación e instalación de equipos</li>
          <li>Soporte técnico</li>
          <li>Asesoramiento</li>
        </ul>
      ),
      technologies: ['Soporte', 'Reparación', 'Atención al cliente'],
      icon: <Briefcase className="w-5 h-5" />
    },
  ];

  const education = [
    {
      id: 1,
      type: 'education',
      title: 'Grado Superior Desarrollo Aplicaciones Web',
      company: 'IES Palomeras Vallecas',
      period: '2023 - 2025',
      description: 'Aprendizaje de tecnologías como Java, JavaScript, Laravel, PHP, bases de datos, CSS, Bootstrap.',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'education',
      title: 'Grado Medio Microinformática y Redes',
      company: 'IES Palomeras Vallecas',
      period: '2021 - 2023',
      description: 'Montaje y mantenimiento de equipos, sistemas informáticos, ciberseguridad y HTML.',
      icon: <GraduationCap className="w-5 h-5" />
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500';
      case 'education':
        return 'bg-green-500';
      case 'certification':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'work':
        return 'Experiencia';
      case 'education':
        return 'Formación';
      case 'certification':
        return 'Certificación';
      default:
        return 'Otro';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia & Formación
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mi trayectoria profesional y formación académica
          </p>
        </motion.div>
        {/* Experiencia */}
        <div className="relative mb-20">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 z-10">
                  <div className={`w-4 h-4 rounded-full ${getTypeColor(item.type)} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                    <div className="text-white flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(item.type)}`}>
                        {getTypeText(item.type)}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                      <span className="text-xs text-gray-400 ml-2">{item.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {item.company}
                    </p>
                    <div className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Formación */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 z-10">
                  <div className={`w-4 h-4 rounded-full ${getTypeColor(item.type)} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                    <div className="text-white flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(item.type)}`}>
                        {getTypeText(item.type)}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {item.company}
                    </p>
                    <div className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
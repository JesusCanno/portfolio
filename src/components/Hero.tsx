import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Zap, Code, Palette, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Partículas flotantes
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-gradient"></div>
      
      {/* Efecto de partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Círculos flotantes animados */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Efecto de mouse follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Disponible para proyectos</span>
        </motion.div>

        {/* Título principal con efectos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="text-white">Jesús Cano Arranz</span>
          </h1>
        </motion.div>

        {/* Subtítulo con animación de escritura */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl lg:text-5xl text-white/90 mb-8 font-light"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Desarrollador Full Stack
          </motion.span>
        </motion.h2>

        {/* Descripción con efectos */}
        {/* (Eliminado para evitar duplicidad con Sobre mí) */}

        {/* Iconos flotantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { icon: <Code className="w-8 h-8" />, color: "from-blue-400 to-cyan-400" },
            { icon: <Palette className="w-8 h-8" />, color: "from-purple-400 to-pink-400" },
            { icon: <Zap className="w-8 h-8" />, color: "from-yellow-400 to-orange-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-lg`}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.1, rotate: 360 }}
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Botones CTA con efectos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-xl shadow-2xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Ver Proyectos
            </span>
          </motion.button>
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            href="/CV JESÚS_CANO_ARRANZ.pdf"
            download
            className="group relative px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-xl backdrop-blur-md overflow-hidden flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Descargar CV
          </motion.a>
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group relative px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-xl backdrop-blur-md overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Contactar</span>
          </motion.a>
        </motion.div>

        {/* Enlaces sociales con efectos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: <Github size={28} />, href: "https://github.com/JesusCanno", label: "GitHub" },
            { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/jesús-cano-arranz-daw/", label: "LinkedIn" },
            { icon: <Mail size={28} />, href: "mailto:cano.arranz.jesus@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Indicador de scroll animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2 font-medium">Scroll</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Efecto de ondas en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent">
        <motion.div
          className="w-full h-full"
          style={{
            background: "url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'><path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff' opacity='.1'/></svg>')",
            backgroundSize: '1200px 120px',
            backgroundRepeat: 'repeat-x',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '-1200px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Hero; 
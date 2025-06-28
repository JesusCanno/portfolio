# 🚀 Portfolio Profesional - React & TypeScript

Un portfolio moderno, minimalista y completamente responsivo construido con React, TypeScript, TailwindCSS y Framer Motion. Diseñado para impresionar a reclutadores y mostrar tus habilidades como desarrollador frontend.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional inspirada en los mejores portfolios de 2025
- 🌙 **Modo Oscuro/Claro**: Toggle funcional con persistencia en localStorage
- 📱 **100% Responsivo**: Optimizado para móvil, tablet y escritorio
- ⚡ **Performance**: Optimizado para Lighthouse 90+
- 🎭 **Animaciones Suaves**: Microanimaciones con Framer Motion
- ♿ **Accesible**: Navegación por teclado y etiquetas ARIA
- 📧 **Formulario de Contacto**: Integrado con Formspree (configurable)
- 🔍 **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Vite** - Build tool

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ (recomendado Node.js 20+)
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tuusuario/portfolio.git
   cd portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## 🎨 Personalización

### 1. Información Personal

Edita los siguientes archivos para personalizar tu información:

#### `src/components/Hero.tsx`
```tsx
// Cambia tu nombre y descripción
<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
  Tu Nombre
</span>

// Actualiza los enlaces de redes sociales
href="https://github.com/tuusuario"
href="https://linkedin.com/in/tuusuario"
href="mailto:tu@email.com"
```

#### `src/components/About.tsx`
```tsx
// Personaliza tu historia y habilidades
const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  // ... añade tus habilidades
];
```

#### `src/components/Projects.tsx`
```tsx
// Añade tus proyectos reales
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción de tu proyecto',
    image: 'url-de-tu-imagen',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/tuusuario/tu-proyecto',
    live: 'https://tu-proyecto.com',
    category: 'frontend'
  },
  // ... más proyectos
];
```

#### `src/components/Experience.tsx`
```tsx
// Actualiza tu experiencia laboral y educación
const experience = [
  {
    id: 1,
    type: 'work',
    title: 'Tu Cargo',
    company: 'Tu Empresa',
    period: '2023 - Presente',
    description: 'Tu descripción',
    technologies: ['React', 'TypeScript'],
  },
  // ... más experiencia
];
```

#### `src/components/Contact.tsx`
```tsx
// Actualiza tu información de contacto
const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'tu@email.com',
    link: 'mailto:tu@email.com'
  },
  // ... más información
];
```

### 2. Configurar Formspree

Para que el formulario de contacto funcione:

1. Ve a [Formspree](https://formspree.io) y crea una cuenta
2. Crea un nuevo formulario
3. Copia tu Form ID
4. Reemplaza `'tu-formspree-id'` en `src/components/Contact.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/TU-FORMSPREE-ID-REAL', {
  // ... resto del código
});
```

### 3. Colores y Tema

Los colores principales están definidos en las clases de Tailwind. Puedes personalizarlos editando `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
        },
        // ... más colores personalizados
      },
    },
  },
};
```

### 4. Imágenes de Proyectos

Reemplaza las URLs de Unsplash con imágenes de tus proyectos reales:

```tsx
image: 'https://images.unsplash.com/...' // ← Cambia por tu imagen
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sobre mí
│   ├── Projects.tsx    # Proyectos
│   ├── Experience.tsx  # Experiencia y educación
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Footer
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🌐 Deploy

### GitHub Pages

1. **Instala gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Añade scripts al package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Vercel (Recomendado)

1. **Conecta tu repositorio a Vercel**
2. **Configura el build command**: `npm run build`
3. **Configura el output directory**: `dist`
4. **Deploy automático en cada push**

### Netlify

1. **Conecta tu repositorio a Netlify**
2. **Configura el build command**: `npm run build`
3. **Configura el publish directory**: `dist`

## 🔧 Configuración Avanzada

### Optimización de Performance

- Las imágenes se cargan de forma lazy
- Los componentes usan `React.memo` cuando es necesario
- Las animaciones están optimizadas para 60fps

### SEO

Añade meta tags en `index.html`:

```html
<meta name="description" content="Tu descripción personal">
<meta name="keywords" content="React, TypeScript, Frontend, Developer">
<meta property="og:title" content="Tu Nombre - Frontend Developer">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="url-de-tu-foto">
```

### Analytics

Para añadir Google Analytics:

1. Crea una cuenta en Google Analytics
2. Añade el script en `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [TailwindCSS](https://tailwindcss.com/) por el framework de CSS
- [Lucide](https://lucide.dev/) por los iconos
- [Unsplash](https://unsplash.com/) por las imágenes de ejemplo

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:

- 📧 Email: tu@email.com
- 💬 GitHub Issues: [Crear un issue](https://github.com/tuusuario/portfolio/issues)
- 📖 Documentación: [Wiki del proyecto](https://github.com/tuusuario/portfolio/wiki)

---

⭐ **¡No olvides darle una estrella al repositorio si te gustó!**

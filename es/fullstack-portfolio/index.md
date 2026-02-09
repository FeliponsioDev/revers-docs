# 🌐 Portafolio de Desarrollador Full-Stack

Un portafolio web moderno y minimalista diseñado para desarrolladores full-stack. Este proyecto está construido con **Astro** y **Tailwind CSS**, ofreciendo una experiencia visual impresionante y un rendimiento optimizado.

## 🚀 Características Principales

- **Diseño Moderno y Minimalista**: Interfaz limpia y profesional con una paleta de colores basada en tonos azules oscuros.
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio.
- **Modo Oscuro Predeterminado**: Diseñado para una experiencia visual cómoda en entornos oscuros.
- **SEO Optimizado**: Metadatos, estructura semántica y rendimiento optimizado para motores de búsqueda.
- **Filtrado Dinámico de Proyectos**: Filtra proyectos por categorías con animaciones suaves.
- **Animaciones Sutiles**: Mejora la experiencia del usuario sin distracciones.
- **Rendimiento Optimizado**: Carga rápida y experiencia fluida gracias a Astro y Tailwind CSS.

---

## 📋 Estructura de la Web

(todo el contenido de la web solo es una representacion y una guia de lo que podrias poner)

### 1. **Página de Inicio**

- Introducción del desarrollador o estudio.
- Llamados a la acción claros para explorar proyectos o contactar.
- Vista previa de proyectos destacados.
- Sección "Sobre Nosotros" resumida.

### 2. **Proyectos**

- Galería de proyectos con filtrado dinámico por categorías.
- Tarjetas de proyecto con descripciones, tecnologías utilizadas y enlaces a demos o repositorios.
- Efectos de hover para mejorar la interacción.

### 3. **Sobre Nosotros**

- Biografía detallada del desarrollador o equipo.
- Habilidades y tecnologías destacadas.
- Experiencia laboral y educación.

### 4. **Contacto**

- Formulario de contacto funcional con validación.
- Información de contacto directa (email, redes sociales, etc.).
- Horarios de oficina y ubicación.

### 5. **Pie de Página**

- Enlaces rápidos a secciones clave.
- Redes sociales.
- Información de derechos de autor y enlaces a políticas.

---

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework web para sitios estáticos y rápidos.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario para estilos rápidos y consistentes.
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)**: Integración de iconos SVG.
- **TypeScript**: Tipado estático para un desarrollo más seguro y escalable.

---

## 🔧 Instalación y Uso

### Prerrequisitos

- **Node.js** (versión 16 o superior).
- **npm** o **yarn** como gestor de paquetes.

### Instalación

1. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

2. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

3. Abre tu navegador en `http://localhost:3000`.

### Construcción para Producción

Para generar una versión optimizada para producción:

```bash
npm run build
# o
yarn build
```

Los archivos generados estarán en la carpeta `dist/`.

---

## 🖼️ Cómo Funciona

### Filtrado de Proyectos

- Los proyectos se cargan dinámicamente desde un archivo de datos (`src/data/projects.ts`).
- Cada proyecto tiene categorías y tecnologías asociadas.
- Los botones de filtro permiten mostrar proyectos específicos sin recargar la página.

### Formulario de Contacto

- El formulario valida los campos antes de enviar.
- Simula el envío de datos con un mensaje de éxito o error.

### Animaciones

- Las animaciones están implementadas con Tailwind CSS y keyframes personalizados.
- Ejemplo: Los proyectos tienen un efecto `fadeIn` al filtrarse.

---

## 📂 Estructura del Proyecto

```
FullStack-portfolio-website/
├── src/
│   ├── components/       # Componentes reutilizables (Header, Footer, etc.)
│   ├── data/             # Datos estáticos (proyectos, habilidades, etc.)
│   ├── layouts/          # Plantillas de diseño (Layout principal)
│   ├── pages/            # Páginas principales (Inicio, Proyectos, Contacto, etc.)
│   ├── styles/           # Estilos globales y personalizados
│   └── env.d.ts          # Tipos de TypeScript para Astro
├── public/               # Archivos estáticos (imágenes, favicon, etc.)
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.mjs   # Configuración de Tailwind CSS
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias y scripts
```

---

## 🌟 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un problema o tienes una idea para mejorar este proyecto, no dudes en contactarnos

## 📬 Cómo Usar la API de FormPress

Este proyecto utiliza [FormPress](https://formpress.dev/) para gestionar los formularios de contacto. A continuación, se explica cómo configurarlo:

1. **Crear una Cuenta en FormPress**  
   Regístrate en [FormPress](https://formpress.dev/) y crea un nuevo formulario. Obtendrás un `FORM-ID` único.

2. **Actualizar el Formulario**  
   En el archivo `src/pages/contacto.astro`, reemplaza `YOUR-FORM-ID` con el `FORM-ID` proporcionado por FormPress:

   ```html
   <form
     action="https://formpress.dev/submit/YOUR-FORM-ID"
     method="POST"
   ></form>
   ```

3. **Configurar Notificaciones**  
   En el panel de FormPress, configura las notificaciones por correo electrónico o integraciones con herramientas como Slack o Zapier.

4. **Probar el Formulario**  
   Inicia el servidor de desarrollo y prueba el formulario de contacto para asegurarte de que los datos se envían correctamente.

5. **Verificar Envíos**  
   Accede al panel de FormPress para revisar los envíos realizados desde el formulario.

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## 🌐 Demo en Vivo

Puedes ver una versión en vivo de este portafolio en: [https://johndoe.dev](https://johndoe.dev)

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
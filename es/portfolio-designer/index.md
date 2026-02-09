# Portafolio de Diseñador Gráfico - Revers Studio

Este proyecto es un portafolio profesional diseñado para mostrar el trabajo de un diseñador gráfico. Está construido con **Astro**, **React**, y **TailwindCSS**, y está optimizado para un rendimiento rápido y una experiencia de usuario fluida. El portafolio incluye secciones como proyectos destacados, habilidades, experiencia, y un formulario de contacto funcional.

## Características Principales

- **Diseño Responsivo**: Totalmente optimizado para dispositivos móviles, tabletas y escritorios.
- **Modo Oscuro**: Soporte completo para modo oscuro con transiciones suaves.
- **Animaciones**: Animaciones personalizadas para una experiencia interactiva.
- **Optimización de Imágenes**: Uso de `astro/assets` para optimizar imágenes.
- **Formulario de Contacto**: Formulario funcional con validación y envío a través de Formpress.
- **Carrusel de Proyectos**: Carrusel interactivo para mostrar proyectos destacados.
- **Carga Diferida**: Imágenes y componentes cargados de forma diferida para mejorar el rendimiento.
- **SEO Optimizado**: Metadatos y estructura optimizados para motores de búsqueda.

## Tecnologías Utilizadas

- **Astro**: Framework principal para la construcción del sitio.
- **React**: Para componentes interactivos como el carrusel y el formulario de contacto.
- **TailwindCSS**: Para estilos rápidos y consistentes.
- **Framer Motion**: Para animaciones fluidas.
- **Swiper**: Para el carrusel de proyectos.
- **Formpress**: Para la gestión del formulario de contacto.
- **astro-compress**: Para optimización de HTML, CSS, JS y SVG.

## Estructura del Proyecto

```
portfolio-designer-website/
├── src/
│   ├── components/         # Componentes reutilizables (React y Astro)
│   ├── layouts/            # Layouts principales del sitio
│   ├── pages/              # Páginas del sitio
│   ├── styles/             # Archivos CSS personalizados
│   └── env.d.ts            # Tipos de entorno para Astro
├── public/                 # Archivos estáticos (imágenes, favicon, etc.)
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.js      # Configuración de TailwindCSS
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Dependencias y scripts del proyecto
├── .gitignore              # Archivos y carpetas ignorados por Git
└── README.md               # Documentación del proyecto
```

## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Instalar Dependencias**
   Asegúrate de tener Node.js instalado. Luego, ejecuta:

   ```bash
   npm install
   ```

2. **Configurar Variables de Entorno**
   Crea un archivo `.env` en la raíz del proyecto y agrega las variables necesarias, como el ID de Formpress.

3. **Ejecutar el Proyecto en Desarrollo**

   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:3000`.

4. **Construir para Producción**

   ```bash
   npm run build
   ```

   Los archivos estáticos se generarán en la carpeta `dist/`.

5. **Previsualizar la Build**
   ```bash
   npm run preview
   ```

## Configuración del Formulario de Contacto (Formpress)

Este proyecto utiliza [Formpress](https://formpress.dev/) para gestionar los envíos del formulario de contacto.  
**Sigue estos pasos para configurarlo correctamente:**

1. **Crea una cuenta y formulario en Formpress**

   - Regístrate en [Formpress](https://formpress.dev/) y crea un nuevo formulario.
   - Obtén tu `FORM-ID` único desde el panel de Formpress.

2. **Actualiza el ID en el código**

   - Abre el archivo `src/components/react/ContactForm.jsx`.
   - Busca la línea donde aparece la URL de Formpress:
     ```js
     const response = await fetch("https://formpress.org/api/forms/TU_ID_DE_FORMPRESS/submit", {
     ```
   - Reemplaza `TU_ID_DE_FORMPRESS` por tu `FORM-ID` real, por ejemplo:
     ```js
     const response = await fetch("https://formpress.org/api/forms/abcdef123456/submit", {
     ```

3. **Personaliza los campos y mensajes**

   - Puedes modificar los campos del formulario (`name`, `email`, `subject`, `message`) según tus necesidades.
   - Los mensajes de éxito y error se pueden personalizar en el mismo archivo.

4. **Configura notificaciones y respuestas automáticas**

   - Desde el panel de Formpress, puedes configurar notificaciones por email, respuestas automáticas y otras integraciones (Slack, Zapier, etc).

5. **Prueba el formulario**
   - Ejecuta el proyecto en modo desarrollo (`npm run dev`) y realiza un envío de prueba desde la página de contacto.
   - Verifica que los envíos lleguen correctamente a tu panel de Formpress.

## Cambiar enlaces de redes sociales y contacto

- Los enlaces de redes sociales y datos de contacto se encuentran en:
  - `src/pages/contact.astro` (para la sección de contacto)
  - `src/components/react/MobileMenu.jsx` (para el menú móvil)
  - `src/components/Navigation.astro` (para el menú principal)
- Modifica los valores de los atributos `href` para personalizar tus redes sociales, email, teléfono, etc.

## Despliegue

Este proyecto está optimizado para ser desplegado en plataformas como **Vercel**, **Netlify**, o **Render**. Sigue las instrucciones específicas de tu plataforma de despliegue para subir los archivos generados en la carpeta `dist/`.

🌟 Contribuciones
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

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
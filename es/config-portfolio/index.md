# Revers Studio - Template de Portafolio para Configuradores de Servidores de Minecraft

Este proyecto es un **template profesional de portafolio** para personas que ofrecen servicios de configuración de servidores de Minecraft. Está pensado para que configuradores puedan mostrar sus servicios, paquetes, características y facilitar el contacto con potenciales clientes, tanto por formulario como por Discord.

## 🌟 ¿Qué Puedes Mostrar con Este Template?

- **Paquetes de Configuración**: Presenta tus servicios y precios de configuración de servidores.
- **Características y Servicios**: Expón todo lo que puedes configurar: mods, complementos (plugins), mundos, permisos, optimización, etc.
- **Contacto Directo**: Formulario integrado y botón de contacto por Discord.
- **Diseño Moderno y Adaptable**: Interfaz profesional, responsiva y fácil de personalizar.
- **Soporte Técnico**: Sección para destacar tu acompañamiento y asesoría.

## 🚀 ¿Cómo Usar Este Template?

1. **Personaliza la Información**: Cambia textos, imágenes y enlaces para adaptarlos a tu marca y servicios.
2. **Agrega tus Paquetes y Servicios**: Modifica los archivos de paquetes y características para mostrar tus opciones.
3. **Configura el Formulario de Contacto**: Usa tu propio ID de FormPress o cualquier otro servicio.
4. **Comparte tu Discord**: Actualiza el enlace de Discord para que los clientes te contacten fácilmente.
5. **Despliega tu Portafolio**: Sube el sitio a tu hosting favorito o usa servicios como Vercel, Netlify, etc.

## 📂 Estructura del Proyecto

```text
/
├── public/                # Archivos públicos (favicon, imágenes, etc.)
├── src/
│   ├── components/        # Componentes reutilizables (Navbar, Hero, etc.)
│   ├── layouts/           # Plantillas de diseño (Layout principal)
│   ├── pages/             # Páginas del sitio web (Inicio, Paquetes, Contacto, etc.)
│   └── styles/            # Estilos globales y personalizados
├── .vscode/               # Configuración para Visual Studio Code
├── .astro/                # Archivos generados por Astro
├── package.json           # Dependencias y scripts del proyecto
└── tailwind.config.mjs    # Configuración de Tailwind CSS
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework moderno para sitios web rápidos.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utilidades CSS para un diseño ágil y responsivo.
- **[AOS](https://michalsnik.github.io/aos/)**: Animaciones al hacer scroll.
- **[Inter Font](https://fonts.google.com/specimen/Inter)**: Tipografía moderna y legible.

## 🧑‍💻 Instalación y Uso

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

3. Accede al proyecto en tu navegador en `http://localhost:4321`.

## 📬 Configura el Formulario de Contacto

Este template utiliza [FormPress](https://formpress.dev/) para el formulario de contacto. Puedes cambiar el ID en `src/pages/contacto.astro`:

```html
<form action="https://formpress.dev/submit/YOUR-FORM-ID" method="POST"></form>
```

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
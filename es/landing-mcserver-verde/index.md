# Revers Studio - Plantilla Web Profesional para Servidores Minecraft

**Versión:** 1.0  
**Propietario:** Revers Studio (reversstudio.com)  
**Autor:** Feliponsio  
**Framework:** Astro + Tailwind CSS

---

## 📖 Introducción

¡Bienvenido a **Revers Studio**! Esta es una plantilla web de alto rendimiento diseñada específicamente para servidores de Minecraft. Ofrece un sitio profesional, rápido y totalmente personalizable con:

- ✅ Página de inicio atractiva con información del servidor
- ✅ Sección de Guía con comandos y mecánicas del juego
- ✅ Página de Reglas clara y estructurada
- ✅ Formulario de aplicación para Staff integrado con Discord
- ✅ Páginas de Privacidad y Términos de Servicio
- ✅ Diseño totalmente responsivo (funciona en móvil, tablet y escritorio)
- ✅ Animaciones suaves y modernas

Este documento te guiará paso a paso para personalizar la plantilla con tu información.

---

## 🚀 Instalación Inicial

### Requisitos
- Node.js versión 18 o superior instalado en tu computadora
- Un editor de texto (recomendamos Visual Studio Code)

### Pasos de Instalación

1. **Abre una terminal/consola** en la carpeta del proyecto
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Abre tu navegador** e ingresa a: `http://localhost:3000`

¡Ahora verás tu sitio web funcionando en vivo!

---

## ⚙️ Guía de Configuración

### 1. Cambiar el Nombre del Servidor y Logo

**Archivo a editar:** `src/components/Navbar.astro`

Busca esta línea (aproximadamente línea 10):
```html
<span class="text-2xl font-bold text-white">Revers Studio</span>
```

Reemplaza `Revers Studio` con el nombre de tu servidor:
```html
<span class="text-2xl font-bold text-white">Mi Servidor Minecraft</span>
```

### 2. Configurar la IP del Servidor Minecraft

**Archivo a editar:** `src/components/ServerCard.tsx`

Busca la sección que dice `const SERVER_IP = ` (alrededor de línea 5):
```tsx
const SERVER_IP = "play.reversstudio.com";
```

Cambia `play.reversstudio.com` por la IP/dominio de tu servidor:
```tsx
const SERVER_IP = "mi-servidor.com";
// o si usas una IP directa:
const SERVER_IP = "192.168.1.1:25565";
```

**¿Cómo aparecerán los jugadores online?**
El componente intenta conectarse automáticamente a la IP que ingreses. Si tu servidor está online, mostrará el número de jugadores conectados. Si está offline, mostrará "Servidor offline".

### 3. Cambiar Nombre y Descripción en Página de Inicio

**Archivo a editar:** `src/pages/index.astro`

Busca la sección del Hero (línea ~15):
```html
<span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
  Revers Studio
</span>
```

Reemplaza con tu nombre de servidor.

Luego busca la descripción (línea ~21):
```html
<p class="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
  Una experiencia única de Minecraft con una comunidad increíble. ¡Únete ahora y comienza tu aventura!
</p>
```

Personaliza el texto según tu servidor.

### 4. Actualizar Enlaces de la Tienda (Tebex)

**Archivo a editar:** `src/components/Footer.astro`

Busca esta línea (alrededor de línea 40):
```html
<a href="https://tebex.io/reversstudio" target="_blank">
```

Reemplaza la URL con la de tu tienda Tebex:
```html
<a href="https://tebex.io/tu-servidor" target="_blank">
```

### 5. Actualizar Enlaces de Discord

**Archivo a editar:** `src/components/Footer.astro`

Busca esta línea (alrededor de línea 38):
```html
<a href="https://discord.gg/reversstudio" target="_blank">
```

Reemplaza con tu enlace de invitación a Discord:
```html
<a href="https://discord.gg/tu-codigo" target="_blank">
```

**¿Cómo obtener tu enlace de Discord?**
1. Abre tu servidor Discord
2. Ve a Configuración del Servidor → Invitaciones
3. Crea una invitación permanente
4. Copia el enlace (ej: `https://discord.gg/abc123def`)

---

## 🔗 Integración de Discord

### Configurar el Webhook para Formulario de Staff

El formulario de aplicación a Staff en `/staff` envía información directamente a Discord.

#### Paso 1: Crear el Webhook

1. **Ve a tu servidor Discord**
2. **Selecciona el canal** donde quieres recibir las aplicaciones (recomendamos crear uno específico: `#aplicaciones-staff`)
3. **Haz clic derecho en el canal** → "Editar canal"
4. **Ve a "Integraciones"** → "Webhooks"
5. **Crea un nuevo Webhook** y dale un nombre (ej: "Aplicaciones Staff")
6. **Copia la URL del Webhook** (será algo como: `https://discord.com/api/webhooks/123456789/abcdefg`)

#### Paso 2: Configurar la URL en v0

1. **En el panel de v0**, ve a **"Vars"** (Variables de Entorno)
2. **Añade una nueva variable:**
   - Nombre: `PUBLIC_DISCORD_WEBHOOK_URL`
   - Valor: La URL que copiaste del webhook
3. **Guarda los cambios**

¡Ahora las aplicaciones aparecerán en tu canal de Discord!

### Configurar Contador de Miembros Discord

En la página de inicio, aparece un contador que muestra los miembros activos de Discord.

**Archivo a editar:** `src/components/ServerCard.tsx`

Busca la sección de Discord (alrededor de línea 60):
```tsx
const DISCORD_GUILD_ID = "123456789";
```

Reemplaza `123456789` con el ID de tu servidor Discord.

**¿Cómo obtener el ID del servidor?**
1. En Discord, habilita "Modo de Desarrollador" (Configuración de Usuario → Avanzado → Modo de Desarrollador)
2. Haz clic derecho en tu servidor → "Copiar ID del servidor"

---

## 📝 Editar Contenido de Guía y Reglas

### Página de Guía (`/guia`)

**Archivo a editar:** `src/pages/guia.astro`

La página contiene acordeones con secciones de:
- Protecciones
- Economía
- Comandos

Encuentra cada sección y personaliza el contenido según tu servidor.

**Ejemplo:** Para cambiar un comando, busca:
```html
<div>
  <strong>/spawn</strong> - Teleportarse al spawn del servidor
</div>
```

Y personaliza según tus comandos reales.

### Página de Reglas (`/reglas`)

**Archivo a editar:** `src/pages/reglas.astro`

Las reglas están organizadas en dos secciones:
- **Normativa de Minecraft**
- **Normativa de Discord**

Cada sección es un contenedor limpio. Simplemente reemplaza el contenido con tus reglas.

---

## 🎨 Personalización Visual (Colores y Estilos)

Si quieres cambiar los colores de la plantilla:

**Archivo a editar:** `tailwind.config.mjs`

Aquí puedes modificar la paleta de colores. El color principal es el verde (`green-500`). Si quieres cambiar a otro color, busca todas las referencias a `green` y reemplázalas.

---

## 🌐 Lanzamiento (Deploy)

### Opción 1: Desplegar en Vercel (Recomendado)

1. **Sube tu proyecto a GitHub**
2. **Ve a [Vercel.com](https://vercel.com)** y haz login
3. **Importa tu repositorio GitHub**
4. **Vercel detectará que es un proyecto Astro y lo configurará automáticamente**
5. **Haz clic en "Deploy"**

¡Tu sitio estará online en minutos!

### Opción 2: Generar Archivos para Hosting Tradicional

Si usas otro hosting (no Vercel):

1. **Abre terminal en la carpeta del proyecto**
2. **Ejecuta:**
   ```bash
   npm run build
   ```
3. **Se creará una carpeta `dist/`** con todos los archivos HTML/CSS/JS
4. **Sube el contenido de la carpeta `dist/`** a tu hosting (vía FTP o panel de control)

---

## 🛠️ Estructura del Proyecto

```
/src
├── pages/              # Páginas principales (Astro)
│   ├── index.astro    # Página de inicio
│   ├── guia.astro     # Guía del servidor
│   ├── reglas.astro   # Reglas
│   ├── staff.astro    # Formulario de Staff
│   ├── privacidad.astro
│   └── terminos.astro
├── components/         # Componentes reutilizables
│   ├── Navbar.astro   # Barra de navegación
│   ├── Footer.astro   # Pie de página
│   ├── ServerCard.tsx # Card del estado del servidor
│   ├── FAQ.tsx        # Preguntas frecuentes
│   └── StaffApplicationForm.tsx # Formulario de aplicación
├── layouts/           # Layouts base
│   └── BaseLayout.astro # Layout principal
└── styles/            # Estilos CSS
    └── globals.css    # Estilos globales
```

---

## 🎯 Próximos Pasos Recomendados

1. ✅ Cambiar el nombre del servidor (Navbar)
2. ✅ Configurar la IP de Minecraft
3. ✅ Configurar el Webhook de Discord
4. ✅ Actualizar los enlaces de Tebex y Discord
5. ✅ Personalizar el contenido de Guía y Reglas
6. ✅ Desplegar en Vercel o tu hosting

---

## 🆘 Solución de Problemas

**P: El contador de jugadores online no aparece**
R: Verifica que la IP del servidor sea correcta y que el servidor esté online.

**P: El formulario de Staff no envía mensajes a Discord**
R: Revisa que la URL del Webhook está correctamente guardada en las Variables de Entorno.

**P: El sitio se ve lento**
R: Ejecuta `npm run build` para crear una versión optimizada para producción.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>

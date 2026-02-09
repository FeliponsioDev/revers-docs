# Landing MCServer Morda

<!-- Aquí va la documentación en español de Landing MCServer Morda -->
# Revers Studio - Plantilla Web Profesional para Servidores Minecraft

---

## 📖 Documentación en Español

### 🚀 Introducción

Landing MC Server es una plantilla de sitio web optimizada para servidores de Minecraft. Ofrece una experiencia moderna con:

- **Diseño Responsivo**: Compatible con todos los dispositivos
- **Integración con Discord**: Conecta tu comunidad de Discord
- **Sistema de Estado**: Muestra el estado del servidor en tiempo real
- **Panel de Staff**: Sistema de solicitudes para personal
- **Guías y Reglas**: Secciones personalizables para tu comunidad
- **UI Moderna**: Construida con Tailwind CSS y componentes Radix UI

### 🛠️ Instalación Inicial

#### Requisitos Previos

- Node.js 20.x o superior
- npm o yarn
- Git

#### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/landing-mcserver-morda.git
   cd landing-mcserver-morda
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   ```
   http://localhost:4321
   ```

### ⚙️ Guía de Configuración

#### Configuración Básica

1. **Editar configuración del servidor**
   
   Abre el archivo `src/config.json` y modifica los valores:

   ```json
   {
     "server": {
       "name": "Nombre de tu Servidor",
       "ip": "play.tuservidor.com"
     },
     "discord": {
       "webhookUrl": "TU_WEBHOOK_URL",
       "inviteLink": "https://discord.gg/tu-invite"
     },
     "staff": {
       "applicationTitle": "Solicitud de Staff",
       "applicationDescription": "Únete a nuestro equipo"
     }
   }
   ```

2. **Personalizar contenido**
   
   - **Página principal**: Edita `src/pages/index.astro`
   - **Reglas**: Modifica `src/pages/rules.astro`
   - **Guía**: Edita `src/pages/guide.astro`
   - **Staff**: Configura `src/pages/staff.astro`

### 🎮 Configuración de Integración con Discord

#### 1. Obtener Webhook de Discord

1. Ve a tu servidor de Discord
2. Configuración del servidor → Integraciones → Webhooks
3. Crea un nuevo webhook
4. Copia la URL del webhook

#### 2. Configurar Webhook

1. Abre `src/config.json`
2. Reemplaza `YOUR_DISCORD_WEBHOOK_URL_HERE` con tu URL
3. Asegúrate de que el canal destino tenga permisos para recibir mensajes

#### 3. Personalizar Mensajes

Los mensajes de Discord se configuran en los componentes React ubicados en `src/components/react/`. Puedes personalizar:

- Formatos de mensajes
- Embeds personalizados
- Notificaciones automáticas

### 📝 Editar Contenido de Reglas y Guía

#### Reglas del Servidor

Edita `src/pages/rules.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Reglas del Servidor">
  <!-- Tus reglas personalizadas -->
  <section>
    <h2>Reglas Generales</h2>
    <ul>
      <li>Tu regla 1</li>
      <li>Tu regla 2</li>
    </ul>
  </section>
</Layout>
```

#### Guía del Jugador

Edita `src/pages/guide.astro` para incluir:

- Tutorial de inicio
- Comandos básicos
- Guía de rangos
- Economía del servidor
- Secciones personalizadas

### 🎨 Personalización Visual (Colores y Estilos)

#### Colores Principales

Los colores se configuran en `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        }
      }
    }
  }
}
```

#### Componentes UI

Los componentes están en `src/components/ui/` y utilizan:

- **Tailwind CSS**: Para estilos
- **Radix UI**: Para componentes accesibles
- **Lucide React**: Para iconos

#### Personalización Avanzada

1. **Modificar tema**: Edita `src/styles/global.css`
2. **Agregar componentes**: Crea en `src/components/`
3. **Animaciones**: Usa `tailwindcss-animate`

### 🚀 Lanzamiento (Deploy)

#### Vercel (Recomendado)

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Desplegar**
   ```bash
   vercel --prod
   ```

3. **Variables de entorno**
   - Configura en el dashboard de Vercel
   - Agrega `DISCORD_WEBHOOK_URL`

#### Netlify

1. **Conectar repositorio**
2. **Configurar build command**: `npm run build`
3. **Publish directory**: `dist`

#### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4321
CMD ["npm", "run", "preview"]
```

### 📁 Estructura del Proyecto

```
landing-mcserver-morda/
├── public/                 # Assets estáticos
│   ├── favicon.svg
│   └── placeholder-logo.svg
├── src/
│   ├── assets/            # Imágenes y recursos
│   ├── components/        # Componentes React/Astro
│   │   ├── ui/           # Componentes UI reutilizables
│   │   └── react/        # Componentes React interactivos
│   ├── layouts/          # Layouts de Astro
│   ├── lib/              # Utilidades y helpers
│   ├── pages/            # Páginas del sitio
│   │   ├── api/          # Endpoints API
│   │   ├── index.astro   # Página principal
│   │   ├── rules.astro   # Reglas
│   │   ├── guide.astro   # Guía
│   │   └── staff.astro   # Staff
│   ├── styles/           # Estilos CSS
│   └── config.json       # Configuración principal
├── astro.config.mjs      # Configuración de Astro
├── package.json          # Dependencias
├── tailwind.config.ts    # Configuración de Tailwind
└── README.md            # Este archivo
```

### 🔮 Próximos Pasos Recomendados

1. **Configurar Dominio Personalizado**
   - Añade tu dominio en el proveedor de hosting
   - Configura DNS apuntando a tu sitio

2. **Optimización SEO**
   - Editar meta tags en `src/layouts/Layout.astro`
   - Añadir sitemap.xml
   - Configurar robots.txt

3. **Analytics**
   - Integrar Google Analytics
   - Configurar eventos personalizados

4. **Monetización**
   - Añadir tienda de items
   - Sistema de donaciones
   - Rangos VIP

5. **Funcionalidades Adicionales**
   - Sistema de votación
   - API de estadísticas
   - Chat integrado

### 🔧 Solución de Problemas

#### Problemas Comunes

**Error: "Node.js version not supported"**
```bash
# Actualizar Node.js a versión 20.x
nvm install 20
nvm use 20
```

**Error: "Port already in use"**
```bash
# Matar proceso en puerto 4321
npx kill-port 4321
```

**Error: "Dependencies not found"**
```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
```

**Discord Webhook no funciona**
1. Verifica la URL del webhook
2. Confirma permisos del canal
3. Revisa la configuración en `src/config.json`

**Build falla en producción**
1. Revisa variables de entorno
2. Verifica configuración de Astro
3. Limpia caché: `npm run build -- --clean`

#### Soporte Técnico

- **Documentación oficial**: [Astro Docs](https://docs.astro.build/)
- **Issues del proyecto**: [GitHub Issues](https://github.com/tu-usuario/landing-mcserver-morda/issues)
- **Comunidad Discord**: [Tu servidor de soporte](https://discord.gg/tu-invite)

---

## 💬 Soporte

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Desarrollado con 💙 por [Revers Studio](https://reversstudio.com)**

</div>
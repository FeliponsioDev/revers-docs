
# Minecraft Support Chatbot

Un chatbot interactivo diseñado para proporcionar soporte a los jugadores de un servidor de Minecraft. Este proyecto está construido con **Astro**, **React** y **TailwindCSS**, ofreciendo una experiencia moderna y personalizable.

**Creado por FeliponsioDev**

---

## Tecnologías Usadas

- **Astro**: Framework para construir sitios web rápidos y modernos.
- **React**: Biblioteca para construir interfaces de usuario interactivas.
- **TailwindCSS**: Framework de CSS para estilos rápidos y consistentes.
- **TypeScript**: Lenguaje tipado para mejorar la calidad del código.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones web modernas.

---

## Características

- **Interfaz de usuario moderna**: Diseño responsivo y atractivo con soporte para modo oscuro.
- **Respuestas predefinidas**: El chatbot responde a preguntas comunes relacionadas con:
  - Conexión al servidor.
  - Problemas de rendimiento.
  - Reglas del servidor.
  - Comandos útiles.
  - Economía y tiendas.
  - Eventos y minijuegos.
  - Problemas técnicos.
- **Botones de acceso rápido**: Preguntas frecuentes accesibles con un solo clic.
- **Historial de chat**: Guarda y carga conversaciones previas.
- **Soporte en Discord**: Enlace directo al servidor de Discord para asistencia personalizada.
- **Personalización**: Configura fácilmente las respuestas del chatbot en el archivo `chatbot.ts`.

---

## Estructura del Proyecto

```
chatbot-website/
├── src/
│   ├── components/         # Componentes reutilizables de React
│   │   ├── ChatInterface.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── QuickActionButtons.tsx
│   │   └── ui/             # Componentes de interfaz de usuario
│   │       ├── Button.tsx
│   │       └── input.tsx
│   ├── layouts/            # Layouts de la aplicación
│   │   └── Layout.astro
│   ├── lib/                # Lógica y utilidades
│   │   ├── chatbot.ts
│   │   └── utils.ts
│   ├── pages/              # Páginas principales
│   │   └── index.astro
│   └── env.d.ts            # Tipos de entorno
├── public/                 # Archivos estáticos
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de TailwindCSS
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Dependencias y scripts
└── README.md               # Documentación del proyecto
```

---

## Requisitos

- **Node.js**: Versión 18 o superior.
- **NPM**: Incluido con Node.js.
- **Astro**: Framework utilizado para el desarrollo.

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/FeliponsioDev/chatbot-website.git
   cd chatbot-website
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:3000`.

---

## Configuración

### Configurar las preguntas y respuestas del chatbot

El archivo `src/lib/chatbot.ts` contiene la lógica para procesar las preguntas del usuario y devolver respuestas. Puedes personalizar las respuestas editando este archivo.

Ejemplo:
```typescript
// filepath: src/lib/chatbot.ts
export function processUserMessage(message: string): string {
  const input = message.toLowerCase();
  let response = "";

  if (input.includes("conect") || input.includes("ip")) {
    response = "Para conectarte al servidor, sigue estos pasos...";
  }
  // Añade más condiciones para personalizar las respuestas
  return response;
}
```

### Personalizar el diseño

El diseño está basado en **TailwindCSS**. Puedes modificar los estilos globales en el archivo `src/layouts/Layout.astro` o en la configuración de Tailwind en `tailwind.config.mjs`.

### Configurar el entorno

Si necesitas variables de entorno, agrégalas en un archivo `.env` en la raíz del proyecto.

Ejemplo:
```
PUBLIC_SITE_URL=https://tu-sitio.com
```

---

## Uso

1. **Interfaz principal**: La página principal muestra el chatbot con un área de mensajes y un campo de entrada.
2. **Enviar preguntas**: Escribe tu pregunta en el campo de entrada y presiona el botón de enviar.
3. **Botones rápidos**: Usa los botones de acceso rápido para preguntas frecuentes.
4. **Historial**: Accede al historial de conversaciones desde el botón "Historial".

---

## Despliegue

Para construir el proyecto para producción:
```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`. Puedes desplegarlos en cualquier servicio de hosting estático como **Vercel**, **Netlify** o **GitHub Pages**.

---

## Contribuir

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Envía tus cambios:
   ```bash
   git push origin nueva-funcionalidad
   ```
5. Abre un Pull Request.

---

## Seguridad

Consulta el archivo [SECURITY.md](./SECURITY.md) para más detalles sobre cómo reportar vulnerabilidades.

---

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
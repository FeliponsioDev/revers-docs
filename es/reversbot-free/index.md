# Bot de Discord para Servidor de Minecraft

Este proyecto es un bot de Discord diseñado para comunidades de Minecraft. Permite mostrar información útil, reglas, IPs, enlaces y soporte a los usuarios mediante comandos.

## Características principales

- Comandos `/guia`, `/reglas`, `/ip`, `/discord`, `/soporte`, `/tienda`.
- Respuestas con mensajes enriquecidos (embeds) y datos configurables.
- Fácil de extender y mantener gracias a su estructura modular.

## Estructura del proyecto

```
bot-template-mc/
├── src/
│   ├── commands/        # Comandos individuales del bot
│   ├── config/          # Configuración sensible (token, IPs, etc.)
│   └── index.js         # Archivo principal del bot
├── package.json         # Dependencias y scripts
├── .gitignore           # Archivos a ignorar en git
├── LICENSE              # Licencia del proyecto
└── README.md            # Este archivo
```

## Instalación y configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/FeliponsioDev/bot-template-mc
cd bot-template-mc
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura el bot

Copia el archivo de ejemplo de configuración y edítalo:

```bash
cp src/config/config.json src/config/config.json
```

Edita `src/config/config.json` y coloca tu token de bot de Discord y los datos de tu servidor.

> **Nota:** ¡No subas tu `config.json` a GitHub! Ya está en el `.gitignore`.

### 4. Inicia el bot localmente

```bash
node src/index.js
```

## ¿Cómo funciona el archivo config.json?

El archivo `src/config/config.json` es fundamental para el funcionamiento del bot. Aquí se almacenan todos los datos sensibles y configurables, como el token del bot, las IPs de los servidores, enlaces y los IDs de canales de Discord.

Si este archivo no se cuentra creado puedes hacer una carpeta llamada `config` y crear el archivo `config.json`.

### Ejemplo de config.json:

```json
{
  "token": "AQUI_TU_TOKEN_DEL_BOT",
  "ip_java": "play.tuserver.com",
  "ip_bedrock": "bedrock.tuserver.com",
  "puerto_bedrock": 19132,
  "discord_invite": "https://discord.gg/yourinvitecode",
  "tienda_url": "https://store.tuserver.com",
  "canal_ayuda": "ID_CANAL_AYUDA",
  "canal_tickets": "ID_CANAL_TICKETS"
}
```

### Explicación de los campos:

- `token`: El token de tu bot de Discord (¡nunca lo compartas ni subas a GitHub!).
- `ip_java`: IP de tu servidor de Minecraft Java.
- `ip_bedrock`: IP de tu servidor de Minecraft Bedrock.
- `puerto_bedrock`: Puerto de tu servidor Bedrock (por defecto 19132).
- `discord_invite`: Enlace de invitación a tu servidor de Discord.
- `tienda_url`: Enlace a la tienda de tu servidor (si tienes).
- `canal_ayuda`: ID del canal de Discord donde los usuarios pueden pedir ayuda.
- `canal_tickets`: ID del canal de Discord para crear tickets de soporte.

Este archivo permite que el bot sea fácilmente configurable y adaptable a cualquier comunidad sin necesidad de modificar el código fuente.

## Despliegue en la nube

### Render.com

1. Crea una cuenta en [Render](https://render.com/).
2. Crea un nuevo servicio de tipo "Web Service" y conecta tu repositorio.
3. En "Start Command" pon:
   ```
   node src/index.js
   ```
4. En "Environment" agrega una variable `NODE_VERSION` (ej: `18` o la que uses).
5. Sube tu `config.json` manualmente desde el dashboard de Render (no lo subas a git).
6. ¡Listo! El bot se ejecutará automáticamente.

### Vercel/Netlify

> **Importante:** Vercel y Netlify están pensados para apps web (HTTP), no para bots de Discord que requieren procesos persistentes. No son recomendados para bots, pero puedes usar [Railway](https://railway.app/) o [Render](https://render.com/) para bots.

Si aún así quieres intentarlo:

- Usa un adaptador como [vercel-node-server](https://github.com/TooTallNate/vercel-node-server) para mantener el proceso vivo (no recomendado para producción).
- Sube tu código y configura el comando de inicio igual que en Render.

## Agregar nuevos comandos

1. Crea un archivo `.js` en `src/commands/` siguiendo el formato de los existentes.
2. El bot los cargará automáticamente al iniciar.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## 💬 Soporte

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Desarrollado con 💙 por [Revers Studio](https://reversstudio.com)**

</div>
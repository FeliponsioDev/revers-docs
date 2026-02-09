<div align="center">

# 🎮 Discord Bot Premium para Minecraft

**Bot profesional con sincronización de rangos, moderación avanzada y comandos interactivos**

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue?style=for-the-badge&logo=discord)
![License](https://img.shields.io/badge/License-Revers%20Studio-red?style=for-the-badge)

Desarrollado por **[Revers Studio](https://reversstudio.com)** - FeliponsioDev

</div>

---

## Características Principales

- **Comandos Slash Modernos** - Sistema modular con respuestas instantáneas
- **Estado del Servidor en Tiempo Real** - Monitorea si tu servidor de Minecraft está online
- **Sincronización de Rangos** - Conecta LuckPerms con roles de Discord
- **Sistema de Sugerencias con Votación** - Los usuarios pueden sugerir ideas
- **Guía Interactiva** - Menú desplegable con ayuda organizada por categorías
- **Reglas con Menú** - Alterna entre reglas de Discord y Minecraft
- **Moderación Completa** - Mute, ban temporal, advertencias, clear, kick
- **Sistema de Advertencias** - Mute automático al alcanzar el límite configurado
- **Mensajes de Bienvenida** - Recibe nuevos miembros automáticamente
- **Rol Muted Automático** - El bot crea el rol si no existe

---

## 📋 Requisitos Previos

Antes de empezar, necesitas:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- Una cuenta en **Discord**
- Un **servidor de Discord** donde agregar el bot

> **¿Qué es Node.js?** Es el programa que permite ejecutar el bot. Instálalo como cualquier otro programa siguiendo el asistente.

---

## 🚀 Instalación Rápida

### 1️⃣ Crear tu Bot en Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Haz clic en **"New Application"** y ponle un nombre
3. En el menú izquierdo, entra a **"Bot"**
4. Haz clic en **"Reset Token"** o **"View Token"** y **copia el token** (guárdalo, lo necesitarás)
5. Activa estos **Privileged Gateway Intents**:
   - ✅ **Presence Intent** (opcional)
   - ✅ **Server Members Intent**
   - ✅ **Message Content Intent**
6. Ve a **"OAuth2" > "URL Generator"**
7. En **Scopes**, marca: `bot` y `applications.commands`
8. En **Bot Permissions**, marca **Administrator** (o los permisos que necesites)
9. Copia la URL generada, ábrela en tu navegador e invita el bot a tu servidor

### 2️⃣ Descargar el Bot

- Descarga el proyecto (ZIP) y descomprímelo en una carpeta
- O si usas GitHub: clona el repositorio

### 3️⃣ Instalar Node.js (si no lo tienes)

- Descárgalo desde [nodejs.org](https://nodejs.org/) (versión 18 o superior)
- Ejecuta el instalador y sigue los pasos

### 4️⃣ Instalar las Dependencias

Abre una **terminal** o **símbolo del sistema** (CMD) en la carpeta del bot:

- **Windows**: Escribe `cmd` en la barra de búsqueda o haz clic derecho en la carpeta > "Abrir en Terminal"
- **Mac/Linux**: Abre "Terminal"

Luego ejecuta:

```
npm install
```

> **¿Qué hace esto?** Descarga las librerías necesarias para que el bot funcione.

### 5️⃣ Configurar el Bot

Abre el archivo **`config.json`** con un editor de texto (Bloc de notas, Notepad++, VS Code, etc.) y edita la sección **"discord"**:

```json
"discord": {
  "token": "PEGA_AQUI_TU_TOKEN_DEL_PASO_1",
  "clientId": "ID_DE_TU_APLICACION",
  "guildId": "ID_DE_TU_SERVIDOR_DISCORD"
}
```

**¿Dónde encontrar estos datos?**

| Dato         | Dónde encontrarlo                                               |
| ------------ | --------------------------------------------------------------- |
| **token**    | Developer Portal > Tu aplicación > Bot > Reset Token            |
| **clientId** | Developer Portal > Tu aplicación > Application ID (copiar)      |
| **guildId**  | Discord > Clic derecho en el icono de tu servidor > "Copiar ID" |

> **Modo Desarrollador**: Para ver "Copiar ID" en Discord, activa el Modo Desarrollador en **Ajustes de Usuario > Avanzado > Modo Desarrollador**.

### 6️⃣ Iniciar el Bot

En la misma terminal, ejecuta:

```
npm start
```

Si todo está bien, verás: ✅ **Bot conectado como: TuBot#1234**

---

## ⚙️ Configuración

Todos los ajustes se hacen en el archivo **`config.json`**.

### Información del Bot

```json
"bot_settings": {
  "nombre": "Tu Servidor Minecraft",
  "logoURL": "https://i.imgur.com/tulogo.png"
}
```

- **nombre**: Nombre que aparecerá en los mensajes del bot
- **logoURL**: URL de una imagen (por ejemplo, sube tu logo a [imgur.com](https://imgur.com) y usa el enlace)

### Servidor de Minecraft

```json
"minecraft": {
  "serverIP": "mc.tuservidor.com",
  "serverPort": 25565,
  "version": "1.20.4"
}
```

### Enlaces

```json
"links": {
  "tienda": "https://tuservidor.tebex.io",
  "discord": "https://discord.gg/tuinvite",
  "website": "https://tuservidor.com"
}
```

### Canales de Discord

Pon los IDs de los canales donde quieres que ocurran cosas:

| Canal           | Para qué sirve                                         |
| --------------- | ------------------------------------------------------ |
| **bienvenida**  | Aquí se envían los mensajes cuando entra alguien nuevo |
| **sugerencias** | Aquí se publican las sugerencias de los usuarios       |

**Cómo obtener el ID de un canal**: Clic derecho en el canal > "Copiar ID"

```json
"channels": {
  "bienvenida": "123456789012345678",
  "sugerencias": "234567890123456789"
}
```

### Sistema de Advertencias (opcional)

```json
"warnings": {
  "limit": 3,
  "mute_duration_minutes": 1440
}
```

- **limit**: Número de advertencias antes de mutear automáticamente (por defecto 3)
- **mute_duration_minutes**: Minutos de mute cuando se alcanza el límite (1440 = 24 horas)

### Reglas (opcional)

Puedes personalizar las reglas que muestra el comando `/reglas`:

```json
"reglas": {
  "discord": [
    "Respeta a todos los miembros",
    "No spam",
    "Usa los canales correctos"
  ],
  "minecraft": [
    "No hacks",
    "No grief",
    "Respeta a otros jugadores"
  ]
}
```

---

## 📋 Comandos Disponibles

### Información (todos los usuarios)

| Comando               | Descripción                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| `/help`               | Muestra todos los comandos del bot                                      |
| `/server`             | Estado del servidor de Minecraft (online/offline, jugadores)            |
| `/ip`                 | Muestra la IP para conectarte                                           |
| `/tienda`             | Enlace a la tienda                                                      |
| `/reglas`             | Reglas del servidor (menú Discord/Minecraft)                            |
| `/guia`               | Guía interactiva con categorías                                         |
| `/sugerir <idea>`     | Envía una sugerencia (se publica en el canal configurado)               |
| `/vincular <nick>`    | Vincula tu cuenta de Minecraft con Discord (requiere LuckPerms + MySQL) |
| `/userinfo [usuario]` | Información de un usuario de Discord                                    |

### Moderación (requiere permisos)

| Comando                                     | Descripción                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------- |
| `/mute <usuario> [horas] [razón]`           | Silencia a un usuario (por defecto 24h). Crea el rol Muted si no existe |
| `/unmute <usuario>`                         | Quita el mute a un usuario                                              |
| `/warn add <usuario> <razón>`               | Da una advertencia                                                      |
| `/warn ver <usuario>`                       | Ver advertencias de un usuario                                          |
| `/warn clear <usuario>`                     | Borra todas las advertencias                                            |
| `/clear <cantidad>`                         | Borra mensajes (1-100)                                                  |
| `/kick <usuario>`                           | Expulsa a un usuario                                                    |
| `/ban <usuario> [razón] [días] [horas_ban]` | Banea (permanente o temporal con `horas_ban`)                           |
| `/unban <usuario>`                          | Quita el baneo a un usuario                                             |

---

## 🔗 Sincronización de Rangos (Opcional)

Para que `/vincular` funcione y sincronice rangos de LuckPerms con Discord:

### Requisitos

- Servidor de Minecraft con **LuckPerms**
- Base de datos **MySQL** (la misma que usa LuckPerms)

### Configuración en config.json

1. **MySQL** (usa los mismos datos que LuckPerms):

```json
"mysql_connection": {
  "host": "localhost",
  "port": 3306,
  "user": "tu_usuario",
  "password": "tu_contraseña",
  "database": "minecraft_db"
}
```

2. **Mapeo de roles** - Relaciona grupos de LuckPerms con roles de Discord:

```json
"role_mapping": {
  "vip": "ID_ROL_VIP_EN_DISCORD",
  "admin": "ID_ROL_ADMIN_EN_DISCORD"
}
```

Para obtener el ID de un rol: Ajustes del servidor > Roles > Clic derecho en el rol > "Copiar ID"

3. **Importante**: El rol del bot debe estar **por encima** de los roles que asigna.

---

## 🌐 Despliegue Online (24/7)

Para que el bot esté encendido todo el tiempo:

### Railway (Recomendado - Gratis)

1. Regístrate en [railway.app](https://railway.app) con GitHub
2. Sube el proyecto a GitHub
3. En Railway: **New Project > Deploy from GitHub**
4. Selecciona el repositorio
5. Añade las variables de entorno: `DISCORD_TOKEN`, `CLIENT_ID`, `GUILD_ID` (o configura `config.json`)
6. Deploy

✅ **500 horas gratis al mes**

### Render (Gratis)

1. Ve a [render.com](https://render.com)
2. New > Web Service > Conecta GitHub
3. Build: `npm install`, Start: `npm start`
4. Añade variables de entorno
5. Deploy

⚠️ Se duerme tras 15 min de inactividad (plan gratis)

### VPS

Proveedores: [Contabo](https://contabo.com), [DigitalOcean](https://digitalocean.com), [Hetzner](https://hetzner.com)

En Ubuntu/Debian, después de instalar Node.js:

```
npm install
npm install -g pm2
pm2 start index.js --name discord-bot
pm2 save
pm2 startup
```

---

## 🛠️ Solución de Problemas

### ❌ El bot no se conecta

- Revisa que el **token** en `config.json` sea correcto
- En Developer Portal > Bot, activa **Server Members Intent** y **Message Content Intent**

### ❌ Los comandos no aparecen al escribir /

- **guildId** debe ser el ID de tu **servidor**, no el de la aplicación
- Reinvita el bot con permisos de comandos:  
  `https://discord.com/api/oauth2/authorize?client_id=TU_CLIENT_ID&permissions=8&scope=bot%20applications.commands`
- Reinicia Discord (Ctrl+R)

### ❌ /server muestra "offline"

- Revisa la IP y puerto en `config.json`
- En `server.properties` de Minecraft: `enable-query=true` y `query.port=25565`

### ❌ /vincular no funciona

- Verifica MySQL en `config.json` (mismos datos que LuckPerms)
- El bot necesita el permiso "Gestionar roles"
- El rol del bot debe estar **por encima** de los roles que asigna

### ❌ Los mensajes de bienvenida no se envían

- Comprueba que `channels.bienvenida` tenga un ID de canal válido
- El bot debe tener permiso para enviar mensajes en ese canal

### ❌ Comando muestra "No disponible"

Algunos comandos (/sugerir, /vincular, /server) requieren configuración. Si no está lista, mostrarán "Comando no disponible". Revisa que los datos en `config.json` no tengan valores de ejemplo (como "tuservidor", "ID_DEL_CANAL", etc.).

---

## 📂 Estructura del Proyecto

```
Bot-dc-premium/
├── src/
│   ├── commands/
│   │   ├── info/       (help, ip, reglas, server, sugerir, tienda, userinfo, vincular, guia)
│   │   └── moderation/ (ban, clear, kick, mute, unban, unmute, warn)
│   ├── events/         (bienvenida, comandos, canal creado)
│   └── utils/          (config, base de datos, mutes, advertencias)
├── data/               (warnings.json, mutes.json - se crean automáticamente)
├── config.json         ← Aquí configuras todo
├── index.js            (archivo principal)
└── package.json        (dependencias)
```

---

## 📜 Licencia

**Licencia Revers Studio - Uso Comercial Restringido**

### ✅ Permitido

- Usar el bot en tu servidor de Discord
- Modificar el código para uso personal
- Estudiar el código

### ❌ NO Permitido

- Revender el bot o versiones modificadas
- Distribuir el código como propio
- Uso comercial sin autorización

**Contacto:** soporte@reversstudio.com

---

## 💬 Soporte

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Desarrollado con 💙 por [Revers Studio](https://reversstudio.com)**

</div>

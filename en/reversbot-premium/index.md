<div align="center">

# 🎮 Premium Discord Bot for Minecraft

**Professional bot with rank synchronization, advanced moderation, and interactive commands**

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue?style=for-the-badge&logo=discord)
![License](https://img.shields.io/badge/License-Revers%20Studio-red?style=for-the-badge)

Developed by **[Revers Studio](https://reversstudio.com)** - FeliponsioDev

</div>

---

## Main Features

- **Modern Slash Commands** - Modular system with instant responses
- **Real-time Server Status** - Monitors if your Minecraft server is online
- **Rank Synchronization** - Connects LuckPerms with Discord roles
- **Suggestion System with Voting** - Users can submit ideas
- **Interactive Guide** - Dropdown menu with help organized by categories
- **Rules with Menu** - Toggle between Discord and Minecraft rules
- **Complete Moderation** - Mute, temp ban, warnings, clear, kick
- **Warning System** - Auto-mute when configured limit is reached
- **Welcome Messages** - Automatically greet new members
- **Automatic Muted Role** - Bot creates the role if it doesn't exist

---

## 📋 Prerequisites

Before you start, you need:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- A **Discord** account
- A **Discord server** where you'll add the bot

> **What is Node.js?** It's the program that allows you to run the bot. Install it like any other program following the wizard.

---

## 🚀 Quick Installation

### 1️⃣ Create your Bot on Discord

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"** and give it a name
3. In the left menu, go to **"Bot"**
4. Click **"Reset Token"** or **"View Token"** and **copy the token** (save it, you'll need it)
5. Enable these **Privileged Gateway Intents**:
   - ✅ **Presence Intent** (optional)
   - ✅ **Server Members Intent**
   - ✅ **Message Content Intent**
6. Go to **"OAuth2" > "URL Generator"**
7. In **Scopes**, check: `bot` and `applications.commands`
8. In **Bot Permissions**, check **Administrator** (or the permissions you need)
9. Copy the generated URL, open it in your browser and invite the bot to your server

### 2️⃣ Download the Bot

- Download the project (ZIP) and extract it to a folder
- Or if you use GitHub: clone the repository

### 3️⃣ Install Node.js (if you don't have it)

- Download it from [nodejs.org](https://nodejs.org/) (version 18 or higher)
- Run the installer and follow the steps

### 4️⃣ Install Dependencies

Open a **terminal** or **command prompt** (CMD) in the bot folder:

- **Windows**: Type `cmd` in the search bar or right-click the folder > "Open in Terminal"
- **Mac/Linux**: Open "Terminal"

Then run:

```
npm install
```

> **What does this do?** Downloads the necessary libraries for the bot to work.

### 5️⃣ Configure the Bot

Open the **`config.json`** file with a text editor (Notepad, Notepad++, VS Code, etc.) and edit the **"discord"** section:

```json
"discord": {
  "token": "PASTE_YOUR_TOKEN_FROM_STEP_1_HERE",
  "clientId": "YOUR_APPLICATION_ID",
  "guildId": "YOUR_DISCORD_SERVER_ID"
}
```

**Where to find this data?**

| Data         | Where to find it                                                 |
| ------------ | ---------------------------------------------------------------- |
| **token**    | Developer Portal > Your application > Bot > Reset Token           |
| **clientId** | Developer Portal > Your application > Application ID (copy)        |
| **guildId**  | Discord > Right-click on your server icon > "Copy ID"             |

> **Developer Mode**: To see "Copy ID" in Discord, enable Developer Mode in **User Settings > Advanced > Developer Mode**.

### 6️⃣ Start the Bot

In the same terminal, run:

```
npm start
```

If everything is correct, you'll see: ✅ **Bot connected as: YourBot#1234**

---

## ⚙️ Configuration

All settings are made in the **`config.json`** file.

### Bot Information

```json
"bot_settings": {
  "nombre": "Your Minecraft Server",
  "logoURL": "https://i.imgur.com/yourlogo.png"
}
```

- **nombre**: Name that will appear in bot messages
- **logoURL**: URL of an image (for example, upload your logo to [imgur.com](https://imgur.com) and use the link)

### Minecraft Server

```json
"minecraft": {
  "serverIP": "mc.yourserver.com",
  "serverPort": 25565,
  "version": "1.20.4"
}
```

### Links

```json
"links": {
  "tienda": "https://yourserver.tebex.io",
  "discord": "https://discord.gg/yourinvite",
  "website": "https://yourserver.com"
}
```

### Discord Channels

Put the IDs of channels where you want things to happen:

| Channel        | Purpose                                                    |
| -------------- | ---------------------------------------------------------- |
| **bienvenida** | Welcome messages are sent here when someone new joins      |
| **sugerencias**| User suggestions are published here                        |

**How to get a channel ID**: Right-click on the channel > "Copy ID"

```json
"channels": {
  "bienvenida": "123456789012345678",
  "sugerencias": "234567890123456789"
}
```

### Warning System (optional)

```json
"warnings": {
  "limit": 3,
  "mute_duration_minutes": 1440
}
```

- **limit**: Number of warnings before auto-mute (default 3)
- **mute_duration_minutes**: Minutes of mute when limit is reached (1440 = 24 hours)

### Rules (optional)

You can customize the rules shown by the `/reglas` command:

```json
"reglas": {
  "discord": [
    "Respect all members",
    "No spam",
    "Use the correct channels"
  ],
  "minecraft": [
    "No hacks",
    "No grief",
    "Respect other players"
  ]
}
```

---

## 📋 Available Commands

### Information (all users)

| Command               | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `/help`               | Shows all bot commands                                         |
| `/server`             | Minecraft server status (online/offline, players)              |
| `/ip`                 | Shows the IP to connect                                        |
| `/tienda`             | Store link                                                     |
| `/reglas`             | Server rules (Discord/Minecraft menu)                          |
| `/guia`               | Interactive guide with categories                              |
| `/sugerir <idea>`     | Send a suggestion (published in the configured channel)        |
| `/vincular <nick>`    | Link your Minecraft account with Discord (requires LuckPerms + MySQL) |
| `/userinfo [usuario]` | Discord user information                                       |

### Moderation (requires permissions)

| Command                                     | Description                                                    |
| ------------------------------------------- | -------------------------------------------------------------- |
| `/mute <user> [hours] [reason]`             | Mute a user (default 24h). Creates Muted role if it doesn't exist |
| `/unmute <user>`                            | Unmute a user                                                  |
| `/warn add <user> <reason>`                 | Give a warning                                                 |
| `/warn ver <user>`                          | View a user's warnings                                         |
| `/warn clear <user>`                        | Clear all warnings                                             |
| `/clear <amount>`                           | Delete messages (1-100)                                        |
| `/kick <user>`                              | Kick a user                                                    |
| `/ban <user> [reason] [days] [ban_hours]`   | Ban (permanent or temporary with `ban_hours`)                  |
| `/unban <user>`                             | Unban a user                                                   |

---

## 🔗 Rank Synchronization (Optional)

For `/vincular` to work and sync LuckPerms ranks with Discord:

### Requirements

- Minecraft server with **LuckPerms**
- **MySQL** database (the same one used by LuckPerms)

### Configuration in config.json

1. **MySQL** (use the same data as LuckPerms):

```json
"mysql_connection": {
  "host": "localhost",
  "port": 3306,
  "user": "your_user",
  "password": "your_password",
  "database": "minecraft_db"
}
```

2. **Role mapping** - Relate LuckPerms groups with Discord roles:

```json
"role_mapping": {
  "vip": "VIP_ROLE_ID_IN_DISCORD",
  "admin": "ADMIN_ROLE_ID_IN_DISCORD"
}
```

To get a role ID: Server Settings > Roles > Right-click on role > "Copy ID"

3. **Important**: The bot's role must be **above** the roles it assigns.

---

## 🌐 Online Deployment (24/7)

To keep the bot running all the time:

### Railway (Recommended - Free)

1. Register at [railway.app](https://railway.app) with GitHub
2. Upload the project to GitHub
3. In Railway: **New Project > Deploy from GitHub**
4. Select the repository
5. Add environment variables: `DISCORD_TOKEN`, `CLIENT_ID`, `GUILD_ID` (or configure `config.json`)
6. Deploy

✅ **500 free hours per month**

### Render (Free)

1. Go to [render.com](https://render.com)
2. New > Web Service > Connect GitHub
3. Build: `npm install`, Start: `npm start`
4. Add environment variables
5. Deploy

⚠️ Sleeps after 15 min of inactivity (free plan)

### VPS

Providers: [Contabo](https://contabo.com), [DigitalOcean](https://digitalocean.com), [Hetzner](https://hetzner.com)

On Ubuntu/Debian, after installing Node.js:

```
npm install
npm install -g pm2
pm2 start index.js --name discord-bot
pm2 save
pm2 startup
```

---

## 🛠️ Troubleshooting

### ❌ Bot doesn't connect

- Check that the **token** in `config.json` is correct
- In Developer Portal > Bot, enable **Server Members Intent** and **Message Content Intent**

### ❌ Commands don't appear when typing /

- **guildId** must be your **server** ID, not the application ID
- Reinvite the bot with command permissions:
  `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands`
- Restart Discord (Ctrl+R)

### ❌ /server shows "offline"

- Check the IP and port in `config.json`
- In Minecraft's `server.properties`: `enable-query=true` and `query.port=25565`

### ❌ /vincular doesn't work

- Verify MySQL in `config.json` (same data as LuckPerms)
- The bot needs "Manage roles" permission
- The bot's role must be **above** the roles it assigns

### ❌ Welcome messages are not sent

- Check that `channels.bienvenida` has a valid channel ID
- The bot must have permission to send messages in that channel

### ❌ Command shows "Not available"

Some commands (/sugerir, /vincular, /server) require configuration. If not ready, they will show "Command not available". Check that data in `config.json` doesn't have example values (like "yourserver", "CHANNEL_ID", etc.).

---

## 📂 Project Structure

```
Bot-dc-premium/
├── src/
│   ├── commands/
│   │   ├── info/       (help, ip, reglas, server, sugerir, tienda, userinfo, vincular, guia)
│   │   └── moderation/ (ban, clear, kick, mute, unban, unmute, warn)
│   ├── events/         (bienvenida, comandos, canal creado)
│   └── utils/          (config, base de datos, mutes, advertencias)
├── data/               (warnings.json, mutes.json - created automatically)
├── config.json         ← You configure everything here
├── index.js            (main file)
└── package.json        (dependencies)
```

---

## 📜 License

**Revers Studio License - Restricted Commercial Use**

### ✅ Allowed

- Use the bot on your Discord server
- Modify the code for personal use
- Study the code

### ❌ NOT Allowed

- Resell the bot or modified versions
- Distribute the code as your own
- Commercial use without authorization

**Contact:** soporte@reversstudio.com

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>

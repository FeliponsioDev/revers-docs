# Discord Bot for Minecraft Server

This project is a Discord bot designed for Minecraft communities. It allows displaying useful information, rules, IPs, links, and support to users through commands.

## Main Features

- Commands `/guia`, `/reglas`, `/ip`, `/discord`, `/soporte`, `/tienda`.
- Responses with rich messages (embeds) and configurable data.
- Easy to extend and maintain thanks to its modular structure.

## Project Structure

```
bot-template-mc/
├── src/
│   ├── commands/        # Individual bot commands
│   ├── config/          # Sensitive configuration (token, IPs, etc.)
│   └── index.js         # Main bot file
├── package.json         # Dependencies and scripts
├── .gitignore           # Files to ignore in git
├── LICENSE              # Project license
└── README.md            # This file
```

## Installation and Configuration

### 1. Clone the repository

```bash
git clone https://github.com/FeliponsioDev/bot-template-mc
cd bot-template-mc
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the bot

Copy the example configuration file and edit it:

```bash
cp src/config/config.json src/config/config.json
```

Edit `src/config/config.json` and put your Discord bot token and your server data.

> **Note:** Don't upload your `config.json` to GitHub! It's already in the `.gitignore`.

### 4. Start the bot locally

```bash
node src/index.js
```

## How does the config.json file work?

The `src/config/config.json` file is fundamental for the bot's operation. All sensitive and configurable data is stored here, such as the bot token, server IPs, links, and Discord channel IDs.

If this file is not created, you can create a folder called `config` and create the `config.json` file.

### Example of config.json:

```json
{
  "token": "HERE_YOUR_BOT_TOKEN",
  "ip_java": "play.yourserver.com",
  "ip_bedrock": "bedrock.yourserver.com",
  "puerto_bedrock": 19132,
  "discord_invite": "https://discord.gg/yourinvitecode",
  "tienda_url": "https://store.yourserver.com",
  "canal_ayuda": "HELP_CHANNEL_ID",
  "canal_tickets": "TICKETS_CHANNEL_ID"
}
```

### Explanation of fields:

- `token`: Your Discord bot token (never share it or upload it to GitHub!).
- `ip_java`: IP of your Minecraft Java server.
- `ip_bedrock`: IP of your Minecraft Bedrock server.
- `puerto_bedrock`: Port of your Bedrock server (default 19132).
- `discord_invite`: Invitation link to your Discord server.
- `tienda_url`: Link to your server's store (if you have one).
- `canal_ayuda`: ID of the Discord channel where users can ask for help.
- `canal_tickets`: ID of the Discord channel for creating support tickets.

This file allows the bot to be easily configurable and adaptable to any community without needing to modify the source code.

## Cloud Deployment

### Render.com

1. Create an account at [Render](https://render.com/).
2. Create a new "Web Service" service and connect your repository.
3. In "Start Command" put:
   ```
   node src/index.js
   ```
4. In "Environment" add a `NODE_VERSION` variable (eg: `18` or the one you use).
5. Upload your `config.json` manually from the Render dashboard (don't upload it to git).
6. Ready! The bot will run automatically.

### Vercel/Netlify

> **Important:** Vercel and Netlify are designed for web apps (HTTP), not for Discord bots that require persistent processes. They are not recommended for bots, but you can use [Railway](https://railway.app/) or [Render](https://render.com/) for bots.

If you still want to try:

- Use an adapter like [vercel-node-server](https://github.com/TooTallNate/vercel-node-server) to keep the process alive (not recommended for production).
- Upload your code and configure the start command the same as in Render.

## Adding New Commands

1. Create a `.js` file in `src/commands/` following the format of existing ones.
2. The bot will load them automatically when starting.

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more details.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>

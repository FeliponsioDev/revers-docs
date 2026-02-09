# Revers Studio - Professional Web Template for Minecraft Servers

**Version:** 1.0  
**Owner:** Revers Studio (reversstudio.com)  
**Author:** Feliponsio  
**Framework:** Astro + Tailwind CSS

---

## 📖 Introduction

Welcome to **Revers Studio**! This is a high-performance web template specifically designed for Minecraft servers. It offers a professional, fast, and fully customizable site with:

- ✅ Attractive homepage with server information
- ✅ Guide section with commands and game mechanics
- ✅ Clear and structured rules page
- ✅ Integrated Staff application form with Discord
- ✅ Privacy and Terms of Service pages
- ✅ Fully responsive design (works on mobile, tablet, and desktop)
- ✅ Smooth and modern animations

This document will guide you step by step to customize the template with your information.

---

## 🚀 Initial Installation

### Requirements
- Node.js version 18 or higher installed on your computer
- A text editor (we recommend Visual Studio Code)

### Installation Steps

1. **Open a terminal/console** in the project folder
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser** and go to: `http://localhost:3000`

Now you'll see your website running live!

---

## ⚙️ Configuration Guide

### 1. Change Server Name and Logo

**File to edit:** `src/components/Navbar.astro`

Look for this line (approximately line 10):
```html
<span class="text-2xl font-bold text-white">Revers Studio</span>
```

Replace `Revers Studio` with your server name:
```html
<span class="text-2xl font-bold text-white">My Minecraft Server</span>
```

### 2. Configure Minecraft Server IP

**File to edit:** `src/components/ServerCard.tsx`

Look for the section that says `const SERVER_IP = ` (around line 5):
```tsx
const SERVER_IP = "play.reversstudio.com";
```

Change `play.reversstudio.com` to your server's IP/domain:
```tsx
const SERVER_IP = "my-server.com";
// or if you use a direct IP:
const SERVER_IP = "192.168.1.1:25565";
```

**How will online players appear?**
The component tries to connect automatically to the IP you enter. If your server is online, it will show the number of connected players. If it's offline, it will show "Server offline".

### 3. Change Name and Description on Homepage

**File to edit:** `src/pages/index.astro`

Look for the Hero section (line ~15):
```html
<span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
  Revers Studio
</span>
```

Replace with your server name.

Then look for the description (line ~21):
```html
<p class="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
  A unique Minecraft experience with an incredible community. Join now and start your adventure!
</p>
```

Customize the text according to your server.

### 4. Update Store Links (Tebex)

**File to edit:** `src/components/Footer.astro`

Look for this line (around line 40):
```html
<a href="https://tebex.io/reversstudio" target="_blank">
```

Replace the URL with your Tebex store:
```html
<a href="https://tebex.io/your-server" target="_blank">
```

### 5. Update Discord Links

**File to edit:** `src/components/Footer.astro`

Look for this line (around line 38):
```html
<a href="https://discord.gg/reversstudio" target="_blank">
```

Replace with your Discord invite link:
```html
<a href="https://discord.gg/your-code" target="_blank">
```

**How to get your Discord link?**
1. Open your Discord server
2. Go to Server Settings → Invites
3. Create a permanent invite
4. Copy the link (eg: `https://discord.gg/abc123def`)

---

## 🔗 Discord Integration

### Configure Webhook for Staff Form

The Staff application form at `/staff` sends information directly to Discord.

#### Step 1: Create the Webhook

1. **Go to your Discord server**
2. **Select the channel** where you want to receive applications (we recommend creating a specific one: `#staff-applications`)
3. **Right-click on the channel** → "Edit Channel"
4. **Go to "Integrations"** → "Webhooks"
5. **Create a new Webhook** and give it a name (eg: "Staff Applications")
6. **Copy the Webhook URL** (it will be something like: `https://discord.com/api/webhooks/123456789/abcdefg`)

#### Step 2: Configure the URL in v0

1. **In the v0 panel**, go to **"Vars"** (Environment Variables)
2. **Add a new variable:**
   - Name: `PUBLIC_DISCORD_WEBHOOK_URL`
   - Value: The URL you copied from the webhook
3. **Save changes**

Now the applications will appear in your Discord channel!

### Configure Discord Member Counter

On the homepage, a counter appears showing active Discord members.

**File to edit:** `src/components/ServerCard.tsx`

Look for the Discord section (around line 60):
```tsx
const DISCORD_GUILD_ID = "123456789";
```

Replace `123456789` with your Discord server ID.

**How to get the server ID?**
1. In Discord, enable "Developer Mode" (User Settings → Advanced → Developer Mode)
2. Right-click on your server → "Copy Server ID"

---

## 📝 Edit Guide and Rules Content

### Guide Page (`/guia`)

**File to edit:** `src/pages/guia.astro`

The page contains accordions with sections for:
- Protections
- Economy
- Commands

Find each section and customize the content according to your server.

**Example:** To change a command, look for:
```html
<div>
  <strong>/spawn</strong> - Teleport to server spawn
</div>
```

And customize according to your actual commands.

### Rules Page (`/reglas`)

**File to edit:** `src/pages/reglas.astro`

The rules are organized in two sections:
- **Minecraft Rules**
- **Discord Rules**

Each section is a clean container. Simply replace the content with your rules.

---

## 🎨 Visual Customization (Colors and Styles)

If you want to change the template colors:

**File to edit:** `tailwind.config.mjs`

Here you can modify the color palette. The main color is green (`green-500`). If you want to change to another color, look for all references to `green` and replace them.

---

## 🌐 Launch (Deploy)

### Option 1: Deploy on Vercel (Recommended)

1. **Upload your project to GitHub**
2. **Go to [Vercel.com](https://vercel.com)** and log in
3. **Import your GitHub repository**
4. **Vercel will detect it's an Astro project and configure it automatically**
5. **Click on "Deploy"**

Your site will be online in minutes!

### Option 2: Generate Files for Traditional Hosting

If you use another hosting (not Vercel):

1. **Open terminal in the project folder**
2. **Run:**
   ```bash
   npm run build
   ```
3. **A `dist/` folder will be created** with all HTML/CSS/JS files
4. **Upload the contents of the `dist/` folder** to your hosting (via FTP or control panel)

---

## 🛠️ Project Structure

```
/src
├── pages/              # Main pages (Astro)
│   ├── index.astro    # Homepage
│   ├── guia.astro     # Server guide
│   ├── reglas.astro   # Rules
│   ├── staff.astro    # Staff form
│   ├── privacidad.astro
│   └── terminos.astro
├── components/         # Reusable components
│   ├── Navbar.astro   # Navigation bar
│   ├── Footer.astro   # Footer
│   ├── ServerCard.tsx # Server status card
│   ├── FAQ.tsx        # Frequently asked questions
│   └── StaffApplicationForm.tsx # Application form
├── layouts/           # Base layouts
│   └── BaseLayout.astro # Main layout
└── styles/            # CSS styles
   └── globals.css    # Global styles
```

---

## 🎯 Recommended Next Steps

1. ✅ Change server name (Navbar)
2. ✅ Configure Minecraft IP
3. ✅ Configure Discord Webhook
4. ✅ Update Tebex and Discord links
5. ✅ Customize Guide and Rules content
6. ✅ Deploy on Vercel or your hosting

---

## 🆘 Troubleshooting

**Q: The online player counter doesn't appear**
A: Verify that the server IP is correct and that the server is online.

**Q: The Staff form doesn't send messages to Discord**
A: Check that the Webhook URL is correctly saved in the Environment Variables.

**Q: The site looks slow**
A: Run `npm run build` to create an optimized version for production.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
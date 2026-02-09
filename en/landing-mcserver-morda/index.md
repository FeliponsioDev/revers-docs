## 📖 English Documentation

### 🚀 Introduction

Landing MC Server is a modern, responsive website template for Minecraft servers. It offers a contemporary experience with:

- **Responsive Design**: Compatible with all devices
- **Discord Integration**: Connect your Discord community
- **Status System**: Real-time server status display
- **Staff Panel**: Staff application system
- **Guides and Rules**: Customizable sections for your community
- **Modern UI**: Built with Tailwind CSS and Radix UI components

### 🛠️ Initial Installation

#### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Git

#### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/landing-mcserver-morda.git
   cd landing-mcserver-morda
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### ⚙️ Configuration Guide

#### Basic Configuration

1. **Edit server configuration**
   
   Open `src/config.json` and modify the values:

   ```json
   {
     "server": {
       "name": "Your Server Name",
       "ip": "play.yourserver.com"
     },
     "discord": {
       "webhookUrl": "YOUR_WEBHOOK_URL",
       "inviteLink": "https://discord.gg/your-invite"
     },
     "staff": {
       "applicationTitle": "Staff Application",
       "applicationDescription": "Join our team"
     }
   }
   ```

2. **Customize content**
   
   - **Homepage**: Edit `src/pages/index.astro`
   - **Rules**: Modify `src/pages/rules.astro`
   - **Guide**: Edit `src/pages/guide.astro`
   - **Staff**: Configure `src/pages/staff.astro`

### 🎮 Discord Integration Setup

#### 1. Get Discord Webhook

1. Go to your Discord server
2. Server Settings → Integrations → Webhooks
3. Create a new webhook
4. Copy the webhook URL

#### 2. Configure Webhook

1. Open `src/config.json`
2. Replace `YOUR_DISCORD_WEBHOOK_URL_HERE` with your URL
3. Ensure the target channel has permissions to receive messages

#### 3. Customize Messages

Discord messages are configured in React components located in `src/components/react/`. You can customize:

- Message formats
- Custom embeds
- Automatic notifications

### 📝 Editing Rules and Guide Content

#### Server Rules

Edit `src/pages/rules.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Server Rules">
  <!-- Your custom rules -->
  <section>
    <h2>General Rules</h2>
    <ul>
      <li>Your rule 1</li>
      <li>Your rule 2</li>
    </ul>
  </section>
</Layout>
```

#### Player Guide

Edit `src/pages/guide.astro` to include:

- Getting started tutorial
- Basic commands
- Rank guide
- Server economy
- Custom sections

### 🎨 Visual Customization (Colors and Styles)

#### Main Colors

Colors are configured in `tailwind.config.ts`:

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

#### UI Components

Components are located in `src/components/ui/` and use:

- **Tailwind CSS**: For styling
- **Radix UI**: For accessible components
- **Lucide React**: For icons

#### Advanced Customization

1. **Modify theme**: Edit `src/styles/global.css`
2. **Add components**: Create in `src/components/`
3. **Animations**: Use `tailwindcss-animate`

### 🚀 Deployment

#### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Environment Variables**
   - Configure in Vercel dashboard
   - Add `DISCORD_WEBHOOK_URL`

#### Netlify

1. **Connect repository**
2. **Configure build command**: `npm run build`
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

### 📁 Project Structure

```
landing-mcserver-morda/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── placeholder-logo.svg
├── src/
│   ├── assets/            # Images and resources
│   ├── components/        # React/Astro components
│   │   ├── ui/           # Reusable UI components
│   │   └── react/        # Interactive React components
│   ├── layouts/          # Astro layouts
│   ├── lib/              # Utilities and helpers
│   ├── pages/            # Site pages
│   │   ├── api/          # API endpoints
│   │   ├── index.astro   # Homepage
│   │   ├── rules.astro   # Rules
│   │   ├── guide.astro   # Guide
│   │   └── staff.astro   # Staff
│   ├── styles/           # CSS styles
│   └── config.json       # Main configuration
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
└── README.md            # This file
```

### 🔮 Recommended Next Steps

1. **Configure Custom Domain**
   - Add your domain in hosting provider
   - Configure DNS pointing to your site

2. **SEO Optimization**
   - Edit meta tags in `src/layouts/Layout.astro`
   - Add sitemap.xml
   - Configure robots.txt

3. **Analytics**
   - Integrate Google Analytics
   - Configure custom events

4. **Monetization**
   - Add item shop
   - Donation system
   - VIP ranks

5. **Additional Features**
   - Voting system
   - Statistics API
   - Integrated chat

### 🔧 Troubleshooting

#### Common Issues

**Error: "Node.js version not supported"**
```bash
# Update Node.js to version 20.x
nvm install 20
nvm use 20
```

**Error: "Port already in use"**
```bash
# Kill process on port 4321
npx kill-port 4321
```

**Error: "Dependencies not found"**
```bash
# Clean cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Discord Webhook not working**
1. Verify webhook URL
2. Confirm channel permissions
3. Check configuration in `src/config.json`

**Build fails in production**
1. Check environment variables
2. Verify Astro configuration
3. Clean cache: `npm run build -- --clean`

#### Technical Support

- **Official documentation**: [Astro Docs](https://docs.astro.build/)
- **Project issues**: [GitHub Issues](https://github.com/your-username/landing-mcserver-morda/issues)
- **Community Discord**: [Your support server](https://discord.gg/your-invite)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Support

If you find this project helpful, please consider giving it a star on GitHub!

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>

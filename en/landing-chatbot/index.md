# Minecraft Support Chatbot

An interactive chatbot designed to provide support to players of a Minecraft server. This project is built with **Astro**, **React**, and **TailwindCSS**, offering a modern and customizable experience.

**Created by FeliponsioDev**

---

## Technologies Used

- **Astro**: Framework for building fast and modern websites.
- **React**: Library for building interactive user interfaces.
- **TailwindCSS**: CSS framework for fast and consistent styling.
- **TypeScript**: Typed language to improve code quality.
- **Vite**: Fast development tool for modern web applications.

---

## Features

- **Modern User Interface**: Responsive and attractive design with dark mode support.
- **Predefined Responses**: The chatbot answers common questions related to:
  - Server connection.
  - Performance issues.
  - Server rules.
  - Useful commands.
  - Economy and shops.
  - Events and minigames.
  - Technical issues.
- **Quick Action Buttons**: Frequently asked questions accessible with a single click.
- **Chat History**: Save and load previous conversations.
- **Discord Support**: Direct link to the Discord server for personalized assistance.
- **Customization**: Easily configure chatbot responses in the `chatbot.ts` file.

---

## Project Structure

```
chatbot-website/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ChatInterface.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── QuickActionButtons.tsx
│   │   └── ui/             # UI components
│   │       ├── Button.tsx
│   │       └── input.tsx
│   ├── layouts/            # Application layouts
│   │   └── Layout.astro
│   ├── lib/                # Logic and utilities
│   │   ├── chatbot.ts
│   │   └── utils.ts
│   ├── pages/              # Main pages
│   │   └── index.astro
│   └── env.d.ts            # Environment types
├── public/                 # Static files
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## Requirements

- **Node.js**: Version 18 or higher.
- **NPM**: Included with Node.js.
- **Astro**: Framework used for development.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/FeliponsioDev/chatbot-website.git
   cd chatbot-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`.

---

## Configuration

### Configure Chatbot Questions and Answers

The file `src/lib/chatbot.ts` contains the logic to process user questions and return responses. You can customize the responses by editing this file.

Example:
```typescript
// filepath: src/lib/chatbot.ts
export function processUserMessage(message: string): string {
  const input = message.toLowerCase();
  let response = "";

  if (input.includes("connect") || input.includes("ip")) {
    response = "To connect to the server, follow these steps...";
  }
  // Add more conditions to customize responses
  return response;
}
```

### Customize the Design

The design is based on **TailwindCSS**. You can modify global styles in the `src/layouts/Layout.astro` file or in the Tailwind configuration in `tailwind.config.mjs`.

### Configure the Environment

If you need environment variables, add them to a `.env` file in the root of the project.

Example:
```
PUBLIC_SITE_URL=https://your-site.com
```

---

## Usage

1. **Main Interface**: The main page displays the chatbot with a message area and an input field.
2. **Send Questions**: Type your question in the input field and press the send button.
3. **Quick Buttons**: Use quick action buttons for frequently asked questions.
4. **History**: Access chat history from the "History" button.

---

## Deployment

To build the project for production:
```bash
npm run build
```

The generated files will be in the `dist/` folder. You can deploy them to any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

---

## Contribute

1. Fork the repository.
2. Create a branch for your feature:
   ```bash
   git checkout -b new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push your changes:
   ```bash
   git push origin new-feature
   ```
5. Open a Pull Request.

---

## Security

Refer to the [SECURITY.md](./SECURITY.md) file for more details on how to report vulnerabilities.

---

## License

This project is licensed under the MIT license. Refer to the [LICENSE](./LICENSE) file for more details.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
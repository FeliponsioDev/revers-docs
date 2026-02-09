# 🌐 Full-Stack Developer Portfolio

A modern and minimalist portfolio web designed for full-stack developers. This project is built with **Astro** and **Tailwind CSS**, offering an impressive visual experience and optimized performance.

## 🚀 Main Features

- **Modern and Minimalist Design**: Clean and professional interface with a color palette based on dark blue tones.
- **Fully Responsive**: Optimized for mobile devices, tablets, and desktop.
- **Default Dark Mode**: Designed for a comfortable visual experience in dark environments.
- **SEO Optimized**: Metadata, semantic structure, and performance optimized for search engines.
- **Dynamic Project Filtering**: Filter projects by categories with smooth animations.
- **Subtle Animations**: Enhances user experience without distractions.
- **Optimized Performance**: Fast loading and smooth experience thanks to Astro and Tailwind CSS.

---

## 📋 Website Structure

(all website content is just a representation and a guide of what you could put)

### 1. **Home Page**

- Developer or studio introduction.
- Clear calls to action to explore projects or contact.
- Preview of featured projects.
- Summarized "About Us" section.

### 2. **Projects**

- Project gallery with dynamic filtering by categories.
- Project cards with descriptions, technologies used, and links to demos or repositories.
- Hover effects to enhance interaction.

### 3. **About Us**

- Detailed biography of the developer or team.
- Featured skills and technologies.
- Work experience and education.

### 4. **Contact**

- Functional contact form with validation.
- Direct contact information (email, social media, etc.).
- Office hours and location.

### 5. **Footer**

- Quick links to key sections.
- Social media.
- Copyright information and policy links.

---

## 🛠️ Technologies Used

- **[Astro](https://astro.build/)**: Web framework for static and fast sites.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility CSS framework for fast and consistent styling.
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)**: SVG icon integration.
- **TypeScript**: Static typing for safer and more scalable development.

---

## 🔧 Installation and Usage

### Prerequisites

- **Node.js** (version 16 or higher).
- **npm** or **yarn** as package manager.

### Installation

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open your browser at `http://localhost:3000`.

### Production Build

To generate an optimized version for production:

```bash
npm run build
# or
yarn build
```

The generated files will be in the `dist/` folder.

---

## 🖼️ How It Works

### Project Filtering

- Projects are loaded dynamically from a data file (`src/data/projects.ts`).
- Each project has associated categories and technologies.
- Filter buttons allow showing specific projects without reloading the page.

### Contact Form

- The form validates fields before sending.
- Simulates data sending with a success or error message.

### Animations

- Animations are implemented with Tailwind CSS and custom keyframes.
- Example: Projects have a `fadeIn` effect when filtered.

---

## 📂 Project Structure

```
FullStack-portfolio-website/
├── src/
│   ├── components/       # Reusable components (Header, Footer, etc.)
│   ├── data/             # Static data (projects, skills, etc.)
│   ├── layouts/          # Design templates (Main Layout)
│   ├── pages/            # Main pages (Home, Projects, Contact, etc.)
│   ├── styles/           # Global and custom styles
│   └── env.d.ts          # TypeScript types for Astro
├── public/               # Static files (images, favicon, etc.)
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

---

## 🌟 Contributions

Contributions are welcome! If you find a problem or have an idea to improve this project, don't hesitate to contact us

## 📬 How to Use FormPress API

This project uses [FormPress](https://formpress.dev/) to manage contact forms. Below is how to configure it:

1. **Create an Account on FormPress**  
   Register at [FormPress](https://formpress.dev/) and create a new form. You'll get a unique `FORM-ID`.

2. **Update the Form**  
   In the `src/pages/contacto.astro` file, replace `YOUR-FORM-ID` with the `FORM-ID` provided by FormPress:

   ```html
   <form
     action="https://formpress.dev/submit/YOUR-FORM-ID"
     method="POST"
   ></form>
   ```

3. **Configure Notifications**  
   In the FormPress panel, configure email notifications or integrations with tools like Slack or Zapier.

4. **Test the Form**  
   Start the development server and test the contact form to ensure data is sent correctly.

5. **Verify Submissions**  
   Access the FormPress panel to review submissions made from the form.

---

## 📄 License

This project is under the [MIT](LICENSE) license.

---

## 🌐 Live Demo

You can see a live version of this portfolio at: [https://johndoe.dev](https://johndoe.dev)

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
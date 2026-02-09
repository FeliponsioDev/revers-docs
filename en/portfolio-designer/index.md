# Graphic Designer Portfolio - Revers Studio

This project is a professional portfolio designed to showcase a graphic designer's work. It's built with **Astro**, **React**, and **TailwindCSS**, and is optimized for fast performance and a smooth user experience. The portfolio includes sections like featured projects, skills, experience, and a functional contact form.

## Main Features

- **Responsive Design**: Fully optimized for mobile devices, tablets, and desktops.
- **Dark Mode**: Complete dark mode support with smooth transitions.
- **Animations**: Custom animations for an interactive experience.
- **Image Optimization**: Use of `astro/assets` to optimize images.
- **Contact Form**: Functional form with validation and submission through Formpress.
- **Project Carousel**: Interactive carousel to showcase featured projects.
- **Lazy Loading**: Images and components loaded lazily to improve performance.
- **SEO Optimized**: Metadata and structure optimized for search engines.

## Technologies Used

- **Astro**: Main framework for building the site.
- **React**: For interactive components like the carousel and contact form.
- **TailwindCSS**: For fast and consistent styling.
- **Framer Motion**: For smooth animations.
- **Swiper**: For the project carousel.
- **Formpress**: For contact form management.
- **astro-compress**: For HTML, CSS, JS and SVG optimization.

## Project Structure

```
portfolio-designer-website/
├── src/
│   ├── components/         # Reusable components (React and Astro)
│   ├── layouts/            # Main site layouts
│   ├── pages/              # Site pages
│   ├── styles/             # Custom CSS files
│   └── env.d.ts            # Environment types for Astro
├── public/                 # Static files (images, favicon, etc.)
├── astro.config.mjs        # Astro configuration
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
├── .gitignore              # Files and folders ignored by Git
└── README.md               # Project documentation
```

## Installation and Configuration

Follow these steps to install and run the project locally:

1. **Install Dependencies**
   Make sure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create a `.env` file in the project root and add necessary variables, like the Formpress ID.

3. **Run the Project in Development**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`.

4. **Build for Production**

   ```bash
   npm run build
   ```

   Static files will be generated in the `dist/` folder.

5. **Preview the Build**
   ```bash
   npm run preview
   ```

## Contact Form Configuration (Formpress)

This project uses [Formpress](https://formpress.dev/) to manage contact form submissions.  
**Follow these steps to configure it correctly:**

1. **Create an account and form on Formpress**

   - Register at [Formpress](https://formpress.dev/) and create a new form.
   - Get your unique `FORM-ID` from the Formpress panel.

2. **Update the ID in the code**

   - Open the `src/components/react/ContactForm.jsx` file.
   - Look for the line where the Formpress URL appears:
     ```js
     const response = await fetch("https://formpress.org/api/forms/YOUR_FORMPRESS_ID/submit", {
     ```
   - Replace `YOUR_FORMPRESS_ID` with your real `FORM-ID`, for example:
     ```js
     const response = await fetch("https://formpress.org/api/forms/abcdef123456/submit", {
     ```

3. **Customize fields and messages**

   - You can modify the form fields (`name`, `email`, `subject`, `message`) according to your needs.
   - Success and error messages can be customized in the same file.

4. **Configure notifications and automatic responses**

   - From the Formpress panel, you can configure email notifications, automatic responses, and other integrations (Slack, Zapier, etc.).

5. **Test the form**

   - Run the project in development mode (`npm run dev`) and make a test submission from the contact page.
   - Verify that submissions arrive correctly to your Formpress panel.

## Change social media and contact links

- Social media links and contact data are found in:
  - `src/pages/contact.astro` (for the contact section)
  - `src/components/react/MobileMenu.jsx` (for the mobile menu)
  - `src/components/Navigation.astro` (for the main menu)
- Modify the values of `href` attributes to customize your social media, email, phone, etc.

## Deployment

This project is optimized to be deployed on platforms like **Vercel**, **Netlify**, or **Render**. Follow the specific instructions of your deployment platform to upload the files generated in the `dist/` folder.

🌟 Contributions
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

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
# Breathe The Wilde


A modern React application with PandaCSS styling, featuring a beautiful holding page with image gallery.

## 🚀 Features

- **React 18** with TypeScript
- **PandaCSS** for modern styling with Vite plugin
- **Vite** for fast development and building
- **Responsive design** that works on all devices
- **GitHub Pages** deployment ready
- **Image gallery** showcasing your content

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development server:**

   ```bash
   pnpm run dev
   ```

3. **Build for production:**

   ```bash
   pnpm run build
   ```

4. **Preview production build:**
   ```bash
   pnpm run preview
   ```

### Additional Commands

- **Generate PandaCSS types** (manual):

  ```bash
  pnpm run prepare
  ```

- **Watch PandaCSS changes** (development):
  ```bash
  pnpm run codegen
  ```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

Client-side navigation is published using query-parameter URLs so direct links and refreshes keep working on GitHub Pages without server-side rewrites.

### Manual Setup

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - deployment will happen automatically

### Repository Settings

Make sure your repository has the following settings:

- **Pages source**: GitHub Actions
- **Branch**: main
- **Permissions**: Allow GitHub Actions to create and approve pull requests

## 📁 Project Structure

```
breathe-the-wilde/
├── public/                 # Static assets
│   ├── IMG-20250727-WA0004.jpg
│   └── IMG-20250727-WA0005.jpg
├── src/                    # Source code
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .github/workflows/      # GitHub Actions
├── styled-system/          # Generated PandaCSS styles
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration with PandaCSS plugin
├── panda.config.ts        # PandaCSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Styling

- Edit `panda.config.ts` to modify design tokens
- Update `src/App.tsx` to change layout and styling
- Add new images to the `public/` directory
- PandaCSS changes are automatically hot-reloaded during development

### Content

- Modify the title and subtitle in `src/App.tsx`
- Update the description text
- Add or remove images from the gallery

## 📱 Responsive Design

The application is fully responsive and includes:

- Mobile-first design approach
- Flexible image gallery layout
- Responsive typography
- Touch-friendly interactions

## 🔧 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **PandaCSS** - Modern CSS-in-JS styling with Vite integration
- **Vite** - Build tool and dev server
- **pnpm** - Fast, disk space efficient package manager
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting platform

## ⚡ Development Experience

- **Hot reloading** for both React components and PandaCSS styles
- **Type-safe styling** with automatic TypeScript generation
- **Fast builds** with Vite and pnpm
- **Automatic deployment** to GitHub Pages

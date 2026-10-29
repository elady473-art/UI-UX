# UI/UX Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations powered by Framer Motion.

##  Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- 🎨 Tailwind CSS for styling
- 🔥 Framer Motion for animations
- 💪 TypeScript for type safety
- ⚡ Vite for fast development and building
- 🎯 SEO optimized
- ♿ Accessibility focused



## 📝 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.tsx** - Name, title, bio
2. **src/components/About.tsx** - About text and skills
3. **src/components/Contact.tsx** - Email and social links
4. **src/data/projects.ts** - Your projects
5. **src/data/caseStudies.ts** - Case study details

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  bg: '#04121d',        // Background
  surface: '#0a2232',   // Cards/surfaces
  sky: '#38d9f5',       // Accent color 1
  green: '#39f0bd',     // Accent color 2
  // ... more colors
}
```

### Fonts

The portfolio uses:
- **Manrope** for headings
- **DM Sans** for body text

Update fonts in `index.html` and `tailwind.config.js`

## 📂 Project Structure

```
react-portfolio/
├── public/              # Static assets
│   └── profile.png      # Your profile photo
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Work.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── CaseStudyModal.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/           # Data files
│   │   ├── projects.ts
│   │   └── caseStudies.ts
│   ├── hooks/          # Custom React hooks
│   │   ├── useScrollReveal.ts
│   │   └── useActiveSection.ts
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the `dist` folder
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Built with:
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)

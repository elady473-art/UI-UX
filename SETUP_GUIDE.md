# 🎨 Complete Setup Guide for Your Portfolio

## ✅ Installation Complete!

Your React + TypeScript + Tailwind CSS portfolio has been successfully set up!

## 🚀 Quick Start

### 1. Start Development Server

```bash
cd react-portfolio
npm run dev
```

Visit **http://localhost:3000** to see your portfolio!

---

## 📸 Adding Your Profile Photo (IMPORTANT!)

### Option 1: Using Online Tool (Recommended)
1. Go to [remove.bg](https://www.remove.bg/)
2. Upload the photo you provided
3. Download the result (PNG with transparent background)
4. Save it as `react-portfolio/public/profile.png`

### Option 2: Manual Editing
1. Open your photo in an image editor (Photoshop, GIMP, Photopea)
2. Remove the background
3. Export as PNG
4. Save to `react-portfolio/public/profile.png`

### Image Requirements:
- Format: PNG (for transparency)
- Recommended size: 600x600 pixels or larger
- Transparent background
- File name: `profile.png`

---

## ✏️ Customization Checklist

### 1. Personal Information

#### Hero Section (`src/components/Hero.tsx`)
- [ ] Update name (currently "Emebet Mesfin")
- [ ] Update title/role
- [ ] Update bio text
- [ ] Update social media links (LinkedIn, GitHub, Behance)

#### About Section (`src/components/About.tsx`)
- [ ] Write your personal bio (4 paragraphs)
- [ ] Update skills in Design category
- [ ] Update skills in Development category
- [ ] Update skills in Tools & Methods category
- [ ] Add your resume PDF to `public/resume.pdf`

#### Contact Section (`src/components/Contact.tsx`)
- [ ] Replace `emebet.mesfin@example.com` with your real email (appears in 2 places)
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL

#### Footer (`src/components/Footer.tsx`)
- [ ] Update social media links

### 2. Projects & Portfolio

#### Update Projects (`src/data/projects.ts`)
Replace the sample projects with your own:
```typescript
{
  id: 'your-project-id',
  category: 'YOUR CATEGORY',
  title: 'Your Project Title',
  description: 'Project description...',
  chips: ['Tag1', 'Tag2', 'Tag3'],
  type: 'standard', // or 'full' for wide layout
  visualType: 'your-project-id',
}
```

#### Update Case Studies (`src/data/caseStudies.ts`)
Write detailed case studies for each project with:
- Kicker (category line)
- Title
- Intro
- Sections (array of [heading, content] pairs)
- Note (optional disclaimer or additional info)

### 3. Visual Customization

#### Colors (`tailwind.config.js`)
Customize your color scheme:
```javascript
colors: {
  bg: '#04121d',        // Main background
  surface: '#0a2232',   // Cards and surfaces
  sky: '#38d9f5',       // Accent color 1
  green: '#39f0bd',     // Accent color 2
  text: '#f0f7ff',      // Main text color
  muted: '#a3b7c7',     // Secondary text
}
```

#### Fonts
Currently using:
- **Manrope** for headings
- **DM Sans** for body text

To change fonts:
1. Update Google Fonts link in `index.html`
2. Update font family in `tailwind.config.js`

---

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── profile.png          ← ADD YOUR PHOTO HERE
│   └── resume.pdf           ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Landing section with photo
│   │   ├── Work.tsx         # Projects section
│   │   ├── ProjectCard.tsx  # Individual project cards
│   │   ├── CaseStudyModal.tsx # Modal for case studies
│   │   ├── About.tsx        # About me section
│   │   ├── Contact.tsx      # Contact section
│   │   └── Footer.tsx       # Footer
│   ├── data/
│   │   ├── projects.ts      ← EDIT YOUR PROJECTS
│   │   └── caseStudies.ts   ← EDIT YOUR CASE STUDIES
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript types
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── tailwind.config.js       ← CUSTOMIZE COLORS
└── package.json
```

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatic settings for Vite)

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to [netlify.com](https://netlify.com)
3. Or connect your GitHub repo for auto-deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run `npm run deploy`

---

## ✨ Features Included

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Intersection Observer for reveal animations
- ✅ Active navigation highlighting
- ✅ Mobile-friendly hamburger menu
- ✅ Case study modal system
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ SEO-friendly structure
- ✅ Accessibility focused
- ✅ Fast performance with Vite

---

## 🎯 Next Steps

1. ✅ Add your profile photo to `public/profile.png`
2. ✅ Update all personal information in components
3. ✅ Add your real projects and case studies
4. ✅ Customize colors to match your brand
5. ✅ Add your resume PDF
6. ✅ Test on different devices
7. ✅ Deploy to hosting platform

---

## 🆘 Need Help?

### Common Issues:

**Q: Photo not showing?**
- Make sure file is named exactly `profile.png`
- Check it's in the `public` folder
- Try refreshing with Ctrl+Shift+R

**Q: Colors not updating?**
- Make sure to edit `tailwind.config.js`
- Restart dev server after changes

**Q: Build errors?**
- Run `npm install` again
- Check for TypeScript errors
- Make sure all required fields are filled

---

## 📚 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server

---

Good luck with your portfolio! 🚀

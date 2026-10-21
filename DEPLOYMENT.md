# 🚀 Deployment Guide

Your portfolio has been pushed to GitHub! Now you can deploy it to the web.

## GitHub Repository
**URL:** https://github.com/elady473-art/UI-UX

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is perfect for React/Vite projects and provides automatic deployments.

#### Steps:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import your repository: `elady473-art/UI-UX`
5. Vercel will auto-detect Vite settings
6. Click **"Deploy"**
7. Your site will be live in ~2 minutes! 🎉

#### Configuration (Auto-detected):
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Your site will be available at: `https://ui-ux-[random].vercel.app`

You can customize the domain in Vercel settings.

---

### Option 2: Netlify

#### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Sign in with your GitHub account
3. Click **"Add new site" → "Import an existing project"**
4. Choose GitHub and select `elady473-art/UI-UX`
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

Your site will be live at: `https://[random-name].netlify.app`

---

### Option 3: GitHub Pages

#### Steps:

1. Install gh-pages package:
```bash
cd react-portfolio
npm install --save-dev gh-pages
```

2. Update `package.json` - add these lines:
```json
{
  "homepage": "https://elady473-art.github.io/UI-UX",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` - add base path:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/UI-UX/',  // Add this line
  server: {
    port: 3000,
    open: true
  }
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to **Pages**
   - Source: Select `gh-pages` branch
   - Click Save

Your site will be at: `https://elady473-art.github.io/UI-UX`

---

## ⚠️ Before Deploying - IMPORTANT!

Make sure you've completed these steps:

### 1. Add Your Profile Photo
- Remove background from your photo using [remove.bg](https://www.remove.bg/)
- Save as `public/profile.png`
- Commit and push:
```bash
cd react-portfolio
git add public/profile.png
git commit -m "Add profile photo"
git push
```

### 2. Update Personal Information
Edit these files with your real information:
- `src/components/Hero.tsx` - Name, bio, social links
- `src/components/About.tsx` - About text, skills
- `src/components/Contact.tsx` - Email address
- `src/data/projects.ts` - Your projects
- `src/data/caseStudies.ts` - Project details

### 3. Commit Your Changes
```bash
cd react-portfolio
git add .
git commit -m "Update personal information and content"
git push
```

---

## 🔄 Automatic Deployments

Once you deploy with Vercel or Netlify:

- Every time you push to GitHub, your site automatically redeploys
- No need to manually rebuild or upload
- Changes go live in 1-2 minutes

---

## 🎯 Recommended Workflow

1. **Local Development:**
   ```bash
   cd react-portfolio
   npm run dev
   ```
   Make changes and test locally at http://localhost:3000

2. **Commit & Push:**
   ```bash
   git add .
   git commit -m "Your changes description"
   git push
   ```

3. **Automatic Deploy:**
   - Vercel/Netlify automatically deploys your changes
   - Watch the deployment progress in their dashboard

---

## 📱 Custom Domain (Optional)

Both Vercel and Netlify support custom domains:

1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. In Vercel/Netlify settings, add your custom domain
3. Update DNS records as instructed
4. Your site will be live at your custom domain!

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads correctly
- [ ] Profile photo displays
- [ ] All navigation links work
- [ ] Case study modals open
- [ ] Figma link works for Adey Coffee project
- [ ] Contact email is correct
- [ ] Social media links work
- [ ] Site is mobile responsive
- [ ] Animations work smoothly

---

## 🆘 Troubleshooting

**Issue: Profile photo not showing**
- Make sure `profile.png` is in the `public` folder
- Check browser console for 404 errors
- Clear browser cache

**Issue: Build fails**
- Check for TypeScript errors: `npm run build`
- Make sure all imports are correct
- Check package.json dependencies

**Issue: Styles not applying**
- Tailwind CSS should auto-build
- Try clearing node_modules and reinstalling: `rm -rf node_modules && npm install`

---

## 🎉 Next Steps

1. Choose your deployment platform (Vercel recommended)
2. Deploy your site
3. Share your portfolio URL!
4. Update your resume with the link
5. Share on LinkedIn

Good luck! 🚀

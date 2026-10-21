# ⚡ Quick Reference Card

## 🔗 Important Links

**GitHub:** https://github.com/elady473-art/UI-UX
**Figma (Adey Coffee):** https://www.figma.com/design/VPoGr6p4NVxmDn2fQbuF4Z/

---

## 🚀 Commands

```bash
# Start dev server
cd react-portfolio && npm run dev

# Build
npm run build

# Git push
git add . && git commit -m "message" && git push
```

---

## ✏️ Files to Edit

| What | File |
|------|------|
| **Name & Bio** | `src/components/Hero.tsx` |
| **Email** | `src/components/Contact.tsx` |
| **About** | `src/components/About.tsx` |
| **Projects** | `src/data/projects.ts` |
| **Case Studies** | `src/data/caseStudies.ts` |
| **Colors** | `tailwind.config.js` |

---

## 📸 Add Profile Photo

1. Remove background: https://www.remove.bg/
2. Save as: `public/profile.png`
3. Push:
```bash
git add public/profile.png
git commit -m "Add profile photo"
git push
```

---

## 🌐 Deploy (Vercel - Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Import `elady473-art/UI-UX`
4. Click Deploy
5. Done! ✨

---

## 🆘 Common Issues

**Photo not showing?**
- File must be named `profile.png`
- Must be in `public/` folder
- Push to git after adding

**Build errors?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Need to restart dev server?**
- Ctrl + C (stop)
- `npm run dev` (start)

---

## ✅ Before Deployment Checklist

- [ ] Profile photo added
- [ ] Email updated
- [ ] Name & bio updated
- [ ] Social links updated
- [ ] Projects added
- [ ] Tested locally
- [ ] Pushed to GitHub
- [ ] Ready to deploy!

---

**Good luck! 🚀**

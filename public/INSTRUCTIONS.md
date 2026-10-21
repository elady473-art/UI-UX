# Setup Instructions

## Adding Your Profile Photo

1. **Remove Background from Photo:**
   - Use a tool like [remove.bg](https://www.remove.bg/) to remove the background from your photo
   - Or use Photoshop, GIMP, or any image editing software
   - Save the image as PNG format to preserve transparency

2. **Add to Project:**
   - Save your photo without background as `profile.png` in this `public` folder
   - The recommended size is at least 600x600 pixels for best quality

## Customizing Your Portfolio

### Update Personal Information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update your name, title, and bio
   - Update social media links (LinkedIn, GitHub, Behance)

2. **About Section** (`src/components/About.tsx`):
   - Write your own about text
   - Update skills in each category
   - Add link to your resume PDF (place resume.pdf in the public folder)

3. **Contact Section** (`src/components/Contact.tsx`):
   - Replace `emebet.mesfin@example.com` with your real email
   - Update LinkedIn, GitHub links with your profiles

4. **Projects** (`src/data/projects.ts`):
   - Add your real projects
   - Update descriptions, categories, and tags

5. **Case Studies** (`src/data/caseStudies.ts`):
   - Write detailed case studies for each project
   - Add sections about your process, challenges, and solutions

### Colors and Styling:

Edit `tailwind.config.js` to change colors to match your brand.

## Running the Project

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit http://localhost:3000 after running `npm run dev`

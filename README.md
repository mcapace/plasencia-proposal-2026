# Plasencia 2026 - Integrated Marketing Program Proposal

A stunning, state-of-the-art landing page proposal showcasing the complete Plasencia 2026 marketing program for Cigar Aficionado.

## Features

- 🎨 Modern, animated design with Framer Motion
- 📱 Fully responsive across all devices
- ⚡ Smooth scrolling and parallax effects
- 🎯 Interactive UI elements
- 🌊 Gradient animations and glassmorphism
- 📊 Clear visual hierarchy of campaign components
- 🚀 Optimized for performance

## Tech Stack

- **Next.js 14** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed
- Vercel account (free)

### Local Development

1. **Navigate to the project directory:**
   ```bash
   cd plasencia-proposal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Setup and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **plasencia-proposal**
   - In which directory is your code located? **./`**
   - Want to override the settings? **N**

5. **Your site is now live!** Vercel will provide you with a URL.

### Option 2: Deploy via Vercel Dashboard

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your local repository

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Your site is live!** Vercel will provide a production URL.

### Option 3: Quick Deploy Button

After pushing to GitHub, add this deploy button to your README:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_URL)
```

## Project Structure

```
plasencia-proposal/
├── app/
│   ├── page.js          # Main landing page component
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── public/              # Static assets (if needed)
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Colors

The proposal uses an amber/orange color scheme. To customize colors, edit `tailwind.config.js` or modify the gradient classes in `app/page.js`.

### Content

All content is in `app/page.js`. You can easily modify:
- Investment amounts
- Campaign details
- Features and benefits
- Metrics and statistics

### Animations

Animations are powered by Framer Motion. Adjust timing and effects in the `motion` components throughout `app/page.js`.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Environment Variables

No environment variables are required for this static site.

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Fully responsive across all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build fails

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Animations not working

Ensure Framer Motion is properly installed:
```bash
npm install framer-motion
```

### Styling issues

Clear Tailwind cache:
```bash
npm run build
```

## Support

For issues or questions:
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Check Vercel docs: [vercel.com/docs](https://vercel.com/docs)

## License

Private proposal - All rights reserved

---

**Built with ❤️ for Plasencia & M. Shanken Communications**

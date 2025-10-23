# 🚀 Quick Deployment Guide

## Step 1: Install Dependencies
```bash
cd plasencia-proposal
npm install
```

## Step 2: Test Locally
```bash
npm run dev
```
Visit: http://localhost:3000

## Step 3: Deploy to Vercel

### Method A: One Command Deploy
```bash
npm install -g vercel
vercel login
vercel
```

### Method B: GitHub + Vercel Dashboard
1. Push to GitHub:
```bash
git init
git add .
git commit -m "Plasencia proposal"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click Deploy

## Done! 🎉

Your proposal is now live at: `your-project.vercel.app`

### Custom Domain (Optional)
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain

---

**Need help?** Check the full README.md

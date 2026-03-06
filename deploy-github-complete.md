# Deploy to GitHub - Complete Guide

## Step 1: Create GitHub Repository
1. Go to https://github.com
2. Click "+" → "New repository"
3. Repository name: `the-pride-holidays`
4. Description: "The Pride Holidays - Domestic Travel Website"
5. Make it **Public**
6. **DO NOT** initialize with README (we have one)
7. Click "Create repository"

## Step 2: Initialize Git Repository
```bash
cd d:\travi
git init
git add .
git commit -m "Initial commit - The Pride Holidays website"
```

## Step 3: Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/the-pride-holidays.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel from GitHub
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `the-pride-holidays` repository
4. Vercel will auto-detect settings
5. Click "Deploy"

## Your Website URLs
- **GitHub**: https://github.com/YOUR_USERNAME/the-pride-holidays
- **Vercel**: https://the-pride-holidays.vercel.app

## Benefits of GitHub + Vercel
- ✅ Automatic deployments on every push
- ✅ Version control for all changes
- ✅ Collaboration with team members
- ✅ Rollback to previous versions
- ✅ Free hosting with custom domain

## Files in Repository
- ✅ index.html - Home page
- ✅ destinations.html - Destinations page
- ✅ services.html - Services page
- ✅ about.html - About page
- ✅ contact.html - Contact page
- ✅ styles.css - All styling
- ✅ script.js - JavaScript functionality
- ✅ assets/ - Images folder
- ✅ vercel.json - Vercel deployment config
- ✅ package.json - Project metadata
- ✅ .gitignore - Git ignore file

## Next Steps
1. Create GitHub repository
2. Push your code
3. Deploy to Vercel
4. Get your website URL
5. Share with customers!

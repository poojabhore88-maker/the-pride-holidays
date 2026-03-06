# Deploy to Vercel (Free Hosting)

## Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

## Step 2: Login to Vercel
```bash
vercel login
```

## Step 3: Deploy Website
```bash
cd d:\travi
vercel --prod
```

## Step 4: Follow Deployment Steps
1. **Link Account**: Connect your GitHub/GitHub account
2. **Project Name**: `the-pride-holidays` (auto-detected)
3. **Framework**: None (static HTML)
4. **Build Settings**: Use existing vercel.json
5. **Deploy**: Click "Deploy"

## Your Website URL
After deployment, you'll get:
**Primary URL**: `https://the-pride-holidays.vercel.app`

## Custom Domain (Optional)
1. In Vercel dashboard → Settings → Domains
2. Add custom domain: `theprideholidays.com`
3. Update DNS settings as instructed

## Benefits of Vercel
- ✅ Free hosting
- ✅ HTTPS security
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ No server maintenance

## Alternative: Drag & Drop
1. Go to https://vercel.com/new
2. Drag your `d:\travi` folder
3. Get instant URL: `https://your-project-name.vercel.app`

## Files Ready for Deployment
- ✅ vercel.json (deployment config)
- ✅ All HTML files
- ✅ CSS and JavaScript
- ✅ Assets folder
- ✅ Proper routing configured

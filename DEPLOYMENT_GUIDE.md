# Deployment Guide - Step 4: Deploy to Vercel

## Prerequisites
- Your portfolio code is ready
- A GitHub account
- A Vercel account (free tier is available)

## Step-by-Step Instructions

### Part 1: Push Your Code to GitHub

1. **Initialize Git Repository** (if not already done)
   ```bash
   git init
   ```

2. **Create a GitHub Repository**
   - Go to [github.com](https://github.com)
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it (e.g., "portfolio-website")
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Add and Commit Your Files**
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

4. **Connect to GitHub and Push**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Part 2: Deploy to Vercel

1. **Sign Up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub" (easiest option)

2. **Import Your Repository**
   - After logging in, you'll see the Vercel dashboard
   - Click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find your portfolio repository and click "Import"

3. **Configure Your Project**
   - **Project Name**: Vercel will auto-fill this (you can change it)
   - **Framework Preset**: Should auto-detect "Next.js" ✅
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: Should be `npm run build` (auto-detected) ✅
   - **Output Directory**: Should be `.next` (auto-detected) ✅
   - **Install Command**: Should be `npm install` (auto-detected) ✅

4. **Environment Variables** (if needed)
   - If you have any API keys or environment variables, add them here
   - For now, you can skip this step

5. **Deploy!**
   - Click the "Deploy" button
   - Vercel will:
     - Install dependencies
     - Build your Next.js application
     - Deploy it to a live URL
   - This usually takes 1-3 minutes

6. **Get Your Live URL**
   - Once deployment is complete, you'll see a success message
   - Your site will be live at: `https://your-project-name.vercel.app`
   - You can also set up a custom domain later

### Part 3: Automatic Updates

**The best part:** Every time you push changes to your GitHub repository, Vercel will automatically rebuild and redeploy your site!

To update your site:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
Vercel will automatically detect the changes and deploy the new version.

## Alternative: Deploy via Vercel CLI

If you prefer using the command line:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your settings
   - Your site will be deployed!

4. **For Production Deployment**
   ```bash
   vercel --prod
   ```

## Troubleshooting

### Build Errors
- Make sure all dependencies are in `package.json`
- Run `npm install` locally to test
- Check the build logs in Vercel dashboard

### Environment Variables
- If you need API keys, add them in Vercel Dashboard → Project → Settings → Environment Variables

### Custom Domain
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

## Next Steps After Deployment

1. ✅ Share your portfolio URL
2. ✅ Update your resume/LinkedIn with the link
3. ✅ Test all links and forms
4. ✅ Set up a custom domain (optional)
5. ✅ Enable analytics (optional, in Vercel dashboard)

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Check build logs in Vercel dashboard if something goes wrong


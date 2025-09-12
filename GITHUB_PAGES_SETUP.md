# GitHub Pages Setup Guide

## 🚀 Quick Setup for GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/ace0611/crm-contact-page`
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** section (in the left sidebar)
4. Under **"Source"**, select **"GitHub Actions"**
5. Click **"Save"**

### Step 2: Push Your Code

```bash
# Add all files
git add .

# Commit changes
git commit -m "Setup GitHub Pages deployment"

# Push to main branch
git push origin main
```

### Step 3: Verify Deployment

1. Go to **"Actions"** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Your site will be available at: `https://ace0611.github.io/crm-contact-page/`

## 🔧 Troubleshooting

### Common Issues:

**❌ "Get Pages site failed"**

- **Solution**: Make sure GitHub Pages is enabled in repository settings
- **Check**: Settings > Pages > Source should be "GitHub Actions"

**❌ "Source not configured"**

- **Solution**: Set source to "GitHub Actions" in Pages settings
- **Check**: Repository Settings > Pages > Source

**❌ "Build failed"**

- **Solution**: Check that all dependencies are in package.json
- **Check**: Run `npm install` locally to verify dependencies

**❌ "404 on site"**

- **Solution**: Verify the repository name matches the base path
- **Check**: Repository name should be `crm-contact-page`

**❌ "Workflow not running"**

- **Solution**: Make sure you pushed to the `main` branch
- **Check**: The workflow triggers on push to `main` or `master`

## 📋 Verification Checklist

- [ ] Repository is public
- [ ] GitHub Pages is enabled (Settings > Pages > Source: GitHub Actions)
- [ ] Code is pushed to `main` branch
- [ ] GitHub Actions workflow is running
- [ ] Build completes successfully
- [ ] Site is accessible at `https://ace0611.github.io/crm-contact-page/`

## 🎯 Expected Result

After successful setup:

- ✅ GitHub Actions workflow runs automatically on every push
- ✅ Site deploys to `https://ace0611.github.io/crm-contact-page/`
- ✅ PWA features work (offline, installable)
- ✅ All functionality works as expected

## 📞 Need Help?

If you're still having issues:

1. Check the GitHub Actions logs for specific error messages
2. Verify all steps in the checklist above
3. Make sure the repository name is exactly `crm-contact-page`
4. Check that the base path in `vite.config.ts` matches your repository name

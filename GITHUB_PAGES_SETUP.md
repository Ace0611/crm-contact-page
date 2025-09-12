# GitHub Pages Setup Guide

## 🚨 CRITICAL: Enable GitHub Pages FIRST!

**The #1 reason deployments fail is that GitHub Pages isn't enabled.** Do this FIRST before anything else.

### Step 1: Enable GitHub Pages (MUST DO FIRST)

1. Go to: `https://github.com/ace0611/crm-contact-page/settings/pages`
2. Under **"Source"**, select **"GitHub Actions"**
3. Click **"Save"**
4. **Wait 2-3 minutes** for GitHub to set up the Pages environment

### Step 2: Choose Your Workflow

I've created 3 workflow options. Try them in this order:

**Option A: Simple Workflow (Recommended)**

- Go to Actions tab
- Enable "Deploy to GitHub Pages (Simple)"
- Disable other workflows

**Option B: Modern Workflow**

- Use the default "Deploy to GitHub Pages" workflow

**Option C: Alternative Workflow**

- Use "Deploy to GitHub Pages (Alternative)"

### Step 3: Push Your Code

```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

### Step 4: Verify Deployment

1. Go to **"Actions"** tab
2. Watch the workflow run
3. Wait for completion (2-3 minutes)
4. Visit: `https://ace0611.github.io/crm-contact-page/`

## 🔧 Troubleshooting

### Common Issues:

**❌ "Get Pages site failed"**

- **Solution**: Enable GitHub Pages in Settings → Pages → Source: GitHub Actions

**❌ "Git failed with exit code 128"**

- **Solution**: This is usually because GitHub Pages isn't enabled
- **Check**: Make sure you completed Step 1 above

**❌ "Permission denied"**

- **Solution**: Repository must be public for free GitHub Pages
- **Check**: Repository Settings → General → Repository visibility

**❌ "404 on site"**

- **Solution**: Verify repository name matches base path
- **Check**: Repository name should be `crm-contact-page`

**❌ "Workflow not running"**

- **Solution**: Make sure you pushed to `main` branch
- **Check**: The workflow triggers on push to `main`

## 📋 Verification Checklist

- [ ] Repository is **public**
- [ ] GitHub Pages is **enabled** (Settings → Pages → Source: GitHub Actions)
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

## 📞 Still Having Issues?

**Most Common Fix**: Enable GitHub Pages first! This fixes 90% of deployment issues.

If you're still having problems, see [GITHUB_PAGES_TROUBLESHOOTING.md](./GITHUB_PAGES_TROUBLESHOOTING.md) for detailed debugging steps.

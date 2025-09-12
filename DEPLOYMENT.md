# Deployment Guide

This guide covers deploying the CRM Contact Page to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ace0611/crm-contact-page)

1. **One-Click Deploy**: Click the button above
2. **Manual Deploy**:
   ```bash
   npm install -g vercel
   vercel
   ```

### 2. Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ace0611/crm-contact-page)

1. **One-Click Deploy**: Click the button above
2. **Manual Deploy**:
   ```bash
   npm run build
   # Upload dist folder to Netlify
   ```

### 3. GitHub Pages

1. **Automatic Deploy**: Push to main branch (GitHub Actions will deploy automatically)
2. **Manual Deploy**:
   ```bash
   npm install
   npm run deploy:github
   ```

## 📋 Platform-Specific Instructions

### Vercel Deployment

**Automatic Deployment:**

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deployments happen on every push to main branch

**Manual Deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Configuration:**

- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite
- Node.js Version: 20.x

### GitHub Pages Deployment

**Using GitHub Actions (Recommended):**

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push code to main branch**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **GitHub Actions will automatically build and deploy**
4. **Site will be available at**: `https://ace0611.github.io/crm-contact-page/`

**Manual Deployment:**

```bash
# Install dependencies
npm install

# Build for GitHub Pages
npm run build:github

# Deploy
npm run deploy:github
```

**Troubleshooting GitHub Pages:**

- **"Get Pages site failed"**: Make sure GitHub Pages is enabled in repository settings
- **"Source not configured"**: Set source to "GitHub Actions" in Pages settings
- **"Build failed"**: Check that all dependencies are in package.json
- **"404 on site"**: Verify the repository name matches the base path in vite.config.ts

**Setup GitHub Pages:**

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. The workflow will automatically deploy on push to main

### Netlify Deployment

**Automatic Deployment:**

1. Connect your GitHub repository to Netlify
2. Netlify will use the `netlify.toml` configuration
3. Deployments happen on every push to main branch

**Manual Deployment:**

```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the dist folder to Netlify dashboard
```

## 🔧 Environment Variables

### Production Environment

```env
NODE_ENV=production
VITE_API_BASE_URL=/src/assets
VITE_CACHE_TTL=300000
VITE_OFFLINE_MODE=true
```

### Development Environment

```env
NODE_ENV=development
VITE_API_BASE_URL=/src/assets
VITE_CACHE_TTL=300000
VITE_OFFLINE_MODE=false
```

## 📱 PWA Configuration

The app is configured as a Progressive Web App with:

- Service Worker for offline functionality
- Web App Manifest for installation
- Cache strategies for optimal performance

### PWA Features:

- **Offline Support**: App works without internet connection
- **Installable**: Can be installed on mobile devices
- **Fast Loading**: Assets are cached for quick access
- **Background Sync**: Data syncs when connection is restored

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails on Vercel/Netlify**:
   - Check Node.js version (should be 20.x)
   - Ensure all dependencies are in package.json
   - Check for TypeScript errors

2. **GitHub Pages Shows 404**:
   - Verify base path is set correctly in vite.config.ts
   - Check that GitHub Actions workflow is enabled
   - Ensure repository is public

3. **PWA Not Working**:
   - Check that service worker is registered
   - Verify manifest.json is accessible
   - Test on HTTPS (required for PWA)

4. **Assets Not Loading**:
   - Check base path configuration
   - Verify asset paths in build output
   - Check for CORS issues

### Debug Commands:

```bash
# Check build locally
npm run build
npm run preview

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint

# Format code
npm run format
```

## 🔄 Continuous Deployment

### GitHub Actions

The repository includes a GitHub Actions workflow that:

- Builds the project on every push
- Deploys to GitHub Pages automatically
- Runs on both main branch pushes and PRs

### Vercel/Netlify

Both platforms support automatic deployments:

- Connect your GitHub repository
- Deployments happen on every push to main
- Preview deployments for pull requests

## 📊 Performance Optimization

### Build Optimizations:

- Code splitting for vendor libraries
- Asset optimization and minification
- Service worker caching strategies
- Lazy loading for better performance

### Monitoring:

- Use Vercel Analytics for performance monitoring
- Monitor Core Web Vitals
- Check PWA scores in Lighthouse

## 🔐 Security Considerations

- All deployments use HTTPS
- Service worker has proper security headers
- No sensitive data in client-side code
- Proper CORS configuration for API calls

## 📞 Support

If you encounter issues with deployment:

1. Check the troubleshooting section above
2. Review the platform-specific documentation
3. Check the GitHub Issues for known problems
4. Create a new issue with deployment details

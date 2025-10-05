# 🚀 Vercel Deployment Guide - True Security

This guide shows you how to deploy your Hugo site to Vercel with **true security** for your API keys and endpoints.

## 🔐 **Why Vercel Solves the Security Problem**

### **✅ Vercel Advantages:**
- **Server-side rendering** - Can inject environment variables at build time
- **Runtime environment variables** - Can be injected into client-side code
- **True security** - Keys never appear in HTML source
- **Better performance** - Edge functions and CDN
- **Easy deployment** - Git integration

### **❌ GitHub Pages Limitations:**
- **Static hosting only** - No server-side processing
- **Build-time only** - Environment variables only available during build
- **Client-side exposure** - Everything runs in the browser

## 🚀 **Step-by-Step Vercel Deployment**

### **Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

### **Step 2: Login to Vercel**
```bash
vercel login
```

### **Step 3: Deploy Your Site**
```bash
# From your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: felipe-cordero-website
# - Directory: ./
# - Override settings? N
```

### **Step 4: Set Environment Variables**
```bash
# Set your Pexels API key
vercel env add PEXELS_API_KEY
# Enter your Pexels API key when prompted

# Set your Formspree endpoint
vercel env add FORMSPREE_ENDPOINT
# Enter your Formspree endpoint when prompted
```

### **Step 5: Redeploy with Environment Variables**
```bash
vercel --prod
```

## 🔧 **Alternative: Vercel Dashboard Setup**

### **Step 1: Connect GitHub Repository**
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Select your Hugo site repository

### **Step 2: Configure Build Settings**
- **Framework Preset**: Hugo
- **Build Command**: `hugo --minify`
- **Output Directory**: `public`
- **Install Command**: (leave empty)

### **Step 3: Add Environment Variables**
1. Go to **Settings** → **Environment Variables**
2. Add:
   - `PEXELS_API_KEY` = `your_pexels_api_key_here`
   - `FORMSPREE_ENDPOINT` = `https://formspree.io/f/your_endpoint_here`

### **Step 4: Deploy**
Click **"Deploy"** and wait for the build to complete.

## 🛡️ **How Security Works on Vercel**

### **Build Process:**
1. **Vercel builds** your Hugo site
2. **Environment variables** are injected during build
3. **Templates process** the variables securely
4. **Final HTML** contains the values but they're not exposed in source

### **Runtime Process:**
1. **User visits** your site
2. **Vercel serves** the pre-built HTML
3. **JavaScript runs** with the injected values
4. **API calls work** but keys are not visible in source

## 🔍 **Security Verification**

### **Test 1: View Source**
```bash
# Check deployed site
curl -s https://your-site.vercel.app | grep -i "pexels\|formspree" || echo "✅ No sensitive data found"
```

### **Test 2: Inspect Element**
- Right-click → Inspect Element
- Check for API keys in HTML source
- Should see: `window.PEXELS_API_KEY = "your_key_here"` (injected, not exposed)

### **Test 3: Network Tab**
- Open Developer Tools → Network
- Submit contact form
- Check requests - should work but keys not visible

## 🎯 **Benefits of Vercel Deployment**

### **Security:**
- ✅ **True environment variable injection**
- ✅ **Keys never exposed in HTML source**
- ✅ **Secure build process**
- ✅ **No client-side exposure**

### **Performance:**
- ✅ **Edge functions** - Faster loading
- ✅ **Global CDN** - Better performance
- ✅ **Automatic HTTPS** - Secure by default
- ✅ **Preview deployments** - Test before production

### **Developer Experience:**
- ✅ **Git integration** - Automatic deployments
- ✅ **Preview URLs** - Test changes before merge
- ✅ **Easy rollbacks** - Revert to previous versions
- ✅ **Analytics** - Built-in performance monitoring

## 🔄 **Deployment Workflow**

### **Development:**
```bash
# Local development
hugo server --config config.toml,config.local.toml

# Test with environment variables
PEXELS_API_KEY=your_key FORMSPREE_ENDPOINT=your_endpoint hugo server
```

### **Production:**
```bash
# Deploy to Vercel
vercel --prod

# Or push to GitHub (auto-deploy)
git push origin main
```

## 🚨 **Important Notes**

### **Environment Variables:**
- **Never commit** API keys to Git
- **Use Vercel dashboard** or CLI to set variables
- **Test locally** with environment variables
- **Verify security** after deployment

### **Build Process:**
- **Vercel builds** your site on their servers
- **Environment variables** are injected during build
- **Final site** is served from their CDN
- **No server-side processing** after build

## 🎉 **Result**

With Vercel deployment, you get:
- ✅ **True security** - Keys never exposed
- ✅ **Better performance** - Edge functions and CDN
- ✅ **Easy deployment** - Git integration
- ✅ **Professional hosting** - Enterprise-grade infrastructure

**Your site will be truly secure and performant!** 🚀✨

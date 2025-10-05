# 🚀 Deployment Guide - Secure API Keys with Serverless Functions

This guide shows you how to securely deploy your Hugo site with Pexels background images and contact forms using Vercel serverless functions.

## 🔐 **Vercel Deployment (Recommended)**

### **Step 1: Add Environment Variables to Vercel**

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add both environment variables:

   **Variable 1:**
   - **Name**: `PEXELS_API_KEY`
   - **Value**: Your actual Pexels API key
   - **Environments**: Production, Preview, Development

   **Variable 2:**
   - **Name**: `FORMSPREE_ENDPOINT`
   - **Value**: Your Formspree endpoint
   - **Environments**: Production, Preview, Development

### **🔒 Security Note:**
The system now uses **serverless functions** for secure API key delivery. This means:
- ✅ **API keys are never exposed** in the HTML source code
- ✅ **Formspree endpoints are never exposed** in the HTML source code
- ✅ **Keys are delivered securely** via `/api/config` serverless function
- ✅ **Local development still works** with `config.local.toml`

### **Step 2: Deploy to Vercel**

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Hugo site
3. The `vercel.json` configuration will handle the build process
4. Your environment variables will be securely available to the serverless functions

### **Step 3: How It Works**

1. **Build Time**: Hugo builds the static site with no sensitive data
2. **Runtime**: JavaScript fetches configuration from `/api/config` serverless function
3. **Security**: API keys are only available server-side, never exposed to the client

---

## 🔐 **Alternative: GitHub Pages with Serverless Functions**

If you prefer to use GitHub Pages, you can still use the serverless function approach:

### **Step 1: Use GitHub Actions with Vercel Functions**

1. Set up GitHub Actions to build and deploy to Vercel
2. Use the same environment variable approach
3. The serverless functions will work the same way

### **Step 2: Netlify Alternative**

For Netlify deployment:

1. Go to your Netlify dashboard
2. **Site settings** → **Environment variables**
3. Add: `PEXELS_API_KEY` = `your_api_key_here`
4. Add: `FORMSPREE_ENDPOINT` = `your_endpoint_here`
5. Redeploy your site

---

## ✅ **Security Checklist**

- [ ] ✅ Pexels API key is in Vercel Environment Variables (not in code)
- [ ] ✅ Formspree endpoint is in Vercel Environment Variables (not in code)
- [ ] ✅ `config.local.toml` is in `.gitignore` (local development only)
- [ ] ✅ No sensitive data in `config.toml` (committed to repo)
- [ ] ✅ Serverless function `/api/config` delivers keys securely
- [ ] ✅ JavaScript fetches configuration at runtime
- [ ] ✅ Fallback gradient works if API key is missing

---

## 🚨 **Important Security Notes**

### **❌ NEVER DO THIS:**
```toml
# config.toml - DON'T PUT SENSITIVE DATA HERE!
[params]
  pexels_api_key = "PexelsApiKey123..."     # ❌ This will be public!
  formspree_endpoint = "https://formspree..." # ❌ This will be public!
```

### **✅ DO THIS INSTEAD:**
```toml
# config.local.toml - Local development only
[params]
  pexels_api_key = "PexelsApiKey123..."     # ✅ This stays local
  formspree_endpoint = "https://formspree..." # ✅ This stays local
```

### **✅ OR USE VERCEL ENVIRONMENT VARIABLES:**
```javascript
// Vercel Environment Variables - Secure
PEXELS_API_KEY=your_api_key_here                    # ✅ Secure
FORMSPREE_ENDPOINT=your_endpoint_here               # ✅ Secure
```

---

## 🔧 **Troubleshooting**

### **API Key Not Working in Production:**

1. **Check Vercel Environment Variables**: Make sure `PEXELS_API_KEY` is set in Vercel dashboard
2. **Check Serverless Function**: Test `/api/config` endpoint directly
3. **Check Logs**: Look at Vercel function logs for any errors
4. **Fallback**: The site will use gradient background if API key fails

### **Local Development:**

1. Keep using `config.local.toml` for local development
2. Make sure `config.local.toml` is in your `.gitignore`
3. The site will work locally with your API key

---

## 🎯 **Quick Start for Vercel**

1. **Add both environment variables to Vercel** (see Step 1 above):
   - `PEXELS_API_KEY` = Your Pexels API key
   - `FORMSPREE_ENDPOINT` = Your Formspree endpoint
2. **Connect your GitHub repository** to Vercel
3. **Deploy automatically** - Vercel will build and deploy
4. **Visit your site** - it should now have random Pexels backgrounds and working contact forms!

Both your API key and Formspree endpoint are now secure! 🔒🎨✨

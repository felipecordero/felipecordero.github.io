# 🔐 Security Setup Guide

This Hugo site uses secure practices for handling sensitive data like API keys and endpoints. Here's how to set it up properly.

## 🎯 **Overview**

The site uses a **dual-configuration approach**:
- **Public config** (`config.toml`): Safe to commit, contains no sensitive data
- **Local config** (`config.local.toml`): Contains sensitive data, never committed
- **Production**: Environment variables injected via GitHub Actions

## 🚀 **Quick Setup**

### **1. Local Development**

Create `config.local.toml` in your project root:

```toml
[params]
  # Get your free Pexels API key from: https://www.pexels.com/api/
  pexels_api_key = "your_pexels_api_key_here"
  
  # Get your Formspree endpoint from: https://formspree.io/
  formspree_endpoint = "https://formspree.io/f/your_endpoint_here"
```

### **2. Production Deployment (GitHub Pages)**

Add these as **GitHub Secrets** in your repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `PEXELS_API_KEY`: Your Pexels API key
   - `FORMSPREE_ENDPOINT`: Your Formspree endpoint URL

## 🔧 **How It Works**

### **Local Development**
```bash
hugo server --config config.toml,config.local.toml
```
- Hugo merges both config files
- Sensitive data comes from `config.local.toml`
- Safe to commit `config.toml` to git

### **Production (GitHub Actions)**
```yaml
env:
  PEXELS_API_KEY: ${{ secrets.PEXELS_API_KEY }}
  FORMSPREE_ENDPOINT: ${{ secrets.FORMSPREE_ENDPOINT }}
```
- Environment variables override config values
- No sensitive data in the built site
- Secure deployment to GitHub Pages

## 🎨 **Features**

### **Random Background Images**
- Fetches random images from Pexels API
- Configurable image types in `config.toml`
- Fallback to gradient if API fails
- Glassmorphism effect on text content

### **Contact Form**
- Uses Formspree for form handling
- Secure endpoint configuration
- Works in both development and production

## 📁 **File Structure**

```
├── config.toml              # Public config (safe to commit)
├── config.local.toml        # Local config (never commit)
├── .gitignore               # Excludes config.local.toml
├── .github/workflows/       # GitHub Actions with secrets
└── themes/careercanvas/     # Theme with security features
```

## 🛡️ **Security Features**

- ✅ **No sensitive data in public files**
- ✅ **Environment variable injection**
- ✅ **GitHub Secrets encryption**
- ✅ **Fallback mechanisms**
- ✅ **Local development support**

## 🔍 **Troubleshooting**

### **Images not loading?**
- Check your Pexels API key
- Verify GitHub Secrets are set
- Check browser console for errors

### **Contact form not working?**
- Verify Formspree endpoint
- Check GitHub Secrets configuration
- Test locally first

### **Local development issues?**
- Ensure `config.local.toml` exists
- Check file permissions
- Verify API keys are valid

## 📚 **Resources**

- [Pexels API Documentation](https://www.pexels.com/api/)
- [Formspree Documentation](https://formspree.io/docs/)
- [Hugo Configuration](https://gohugo.io/getting-started/configuration/)
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

## 🤝 **Contributing**

When contributing to this repository:
1. Never commit `config.local.toml`
2. Don't add sensitive data to `config.toml`
3. Test locally before submitting PRs
4. Follow the security patterns established

---

**Happy coding! 🚀✨**

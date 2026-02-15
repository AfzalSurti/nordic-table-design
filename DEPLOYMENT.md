# Deployment Guide - Nordic Table Design

## 🚀 Quick Deployment Guide

### Frontend Deployment (Vercel)

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (already done ✅)

2. **Go to [Vercel](https://vercel.com)**
   - Sign in with GitHub
   - Click **"Add New Project"**
   - Import your repository: `AfzalSurti/nordic-table-design`

3. **Configure the project:**
   ```
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add:
     ```
     Name: VITE_API_URL
     Value: https://your-backend-url.railway.app
     ```
   - (You'll get the backend URL after deploying backend)

5. **Click "Deploy"** 🎉

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend
cd frontend

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set root directory: ./
# - Framework: Vite
```

---

### Backend Deployment (Railway - Recommended)

#### Why Railway?
- Free tier available
- Easy PostgreSQL/MySQL if needed later
- Automatic HTTPS
- Environment variables built-in
- Perfect for Node.js/Express

#### Deploy to Railway:

1. **Go to [Railway.app](https://railway.app)**
   - Sign in with GitHub
   - Click **"New Project"**
   - Select **"Deploy from GitHub repo"**
   - Choose your repository

2. **Configure deployment:**
   - Select **"backend"** folder as root
   - Railway auto-detects Node.js

3. **Set Environment Variables:**
   ```
   GMAIL_USER=surtiafzal915@gmail.com
   GMAIL_APP_PASSWORD=your_16_char_app_password
   PORT=5000
   FRONTEND_URL=https://your-vercel-app.vercel.app
   NODE_ENV=production
   ```

4. **Deploy** - Railway will:
   - Install dependencies
   - Build TypeScript
   - Start server
   - Give you a public URL: `https://your-app.up.railway.app`

5. **Copy the Railway URL** and update your Vercel environment variable:
   - Go back to Vercel dashboard
   - Settings → Environment Variables
   - Update `VITE_API_URL` to your Railway URL
   - Redeploy frontend

---

### Alternative: Backend on Render

1. **Go to [Render.com](https://render.com)**
   - Sign in with GitHub
   - Click **"New +"** → **"Web Service"**

2. **Configure:**
   ```
   Name: saffran-backend
   Root Directory: backend
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

3. **Add Environment Variables** (same as Railway)

4. **Deploy** - Free tier available

---

## 📝 Pre-Deployment Checklist

### Frontend
- ✅ Build command works: `npm run build`
- ✅ Environment variables configured
- ✅ API URL points to production backend

### Backend
- ✅ Gmail App Password is valid
- ✅ CORS allows your Vercel domain
- ✅ Port configuration is correct
- ✅ TypeScript compiles: `npm run build`

---

## 🔧 Post-Deployment Setup

### 1. Update CORS in Backend

Once you have your Vercel URL, update `.env` on Railway/Render:

```env
FRONTEND_URL=https://saffran-restaurant.vercel.app
```

Or update `backend/server.ts` to allow multiple origins:

```typescript
app.use(cors({
  origin: [
    'http://localhost:8081',
    'https://your-app.vercel.app'
  ],
  credentials: true
}));
```

### 2. Test the Booking System

1. Visit your Vercel URL
2. Go to booking section
3. Fill out form and submit
4. Check email: surtiafzal915@gmail.com

### 3. Custom Domain (Optional)

**On Vercel:**
- Settings → Domains
- Add your custom domain
- Update DNS records

**On Railway/Render:**
- Settings → Custom Domain
- Add domain for API

---

## 🌐 Expected URLs

After deployment:

```
Frontend: https://saffran-restaurant.vercel.app
Backend:  https://saffran-backend.up.railway.app
```

---

## ⚠️ Common Issues

### Issue: CORS Error
**Solution:** Ensure `FRONTEND_URL` in backend matches your Vercel domain

### Issue: Email Not Sending
**Solution:** 
- Check Gmail App Password is correct
- Verify `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set on Railway/Render

### Issue: API Calls Failing
**Solution:**
- Check `VITE_API_URL` on Vercel
- Ensure backend is running (check Railway/Render logs)

### Issue: Build Fails
**Solution:**
- Check Node.js version (use v18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

---

## 💰 Cost Estimate

| Service | Free Tier | Paid |
|---------|-----------|------|
| **Vercel** | ✅ Unlimited (Hobby) | $20/mo (Pro) |
| **Railway** | ✅ $5 free credit/month | Usage-based |
| **Render** | ✅ 750 hours/month | $7/mo (Starter) |

**For your restaurant:** Free tier is sufficient! 🎉

---

## 🔄 Auto-Deployment

Both Vercel and Railway support automatic deployment:

- **Push to GitHub** → Automatic deployment
- **No manual steps needed**
- **Preview deployments** for branches

---

## 📱 Mobile App (Future)

Once deployed, your website is already mobile-responsive!

For a native mobile app later:
- Use React Native
- Point to same backend API
- Reuse all your data/restaurant.ts logic

---

## 🆘 Need Help?

1. Check deployment logs on Vercel/Railway dashboard
2. Use browser DevTools (F12) to check API calls
3. Review backend logs for email sending errors

---

**Ready to deploy? Follow the steps above!** 🚀

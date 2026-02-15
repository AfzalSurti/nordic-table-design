# Quick Deployment Steps

## 🎯 Deploy in 5 Minutes

### Step 1: Deploy Backend First

1. Go to **https://railway.app**
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select: `nordic-table-design`
5. Root directory: **backend**
6. Add environment variables:
   ```
   GMAIL_USER=surtiafzal915@gmail.com
   GMAIL_APP_PASSWORD=(your 16-char password)
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=(leave blank for now)
   ```
7. Click Deploy
8. **Copy your Railway URL**: `https://xxxxx.up.railway.app`

### Step 2: Deploy Frontend

1. Go to **https://vercel.com**
2. Sign in with GitHub
3. Click "Add New Project"
4. Import: `nordic-table-design`
5. Configure:
   - Framework: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Environment Variables:
   ```
   VITE_API_URL=(your Railway URL from Step 1)
   ```
7. Click Deploy

### Step 3: Update Backend CORS

1. Go back to Railway dashboard
2. Click your backend project
3. Variables → Add:
   ```
   FRONTEND_URL=(your Vercel URL)
   ```
   Example: `https://saffran-restaurant.vercel.app`
4. Railway will auto-redeploy

### Step 4: Test! 🎉

1. Visit your Vercel URL
2. Go to "Boka Bord" (Booking)
3. Fill form and submit
4. Check email: surtiafzal915@gmail.com

---

## ✅ That's It!

Your restaurant website is now live on the internet! 🌐

**Costs:** $0 (both services have free tiers)

**Auto-updates:** Every `git push` will redeploy automatically

---

## 🔗 Useful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Railway Dashboard: https://railway.app/dashboard
- Your GitHub Repo: https://github.com/AfzalSurti/nordic-table-design

---

## 📞 Having Issues?

Check the full guide: [DEPLOYMENT.md](DEPLOYMENT.md)

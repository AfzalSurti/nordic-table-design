# Deployment Guide

## Vercel Environment Variables

### Frontend (saffran-peach.vercel.app)

Set these in Vercel Dashboard → Project Settings → Environment Variables:

```bash
VITE_API_URL=https://nordic-table-design.vercel.app
```

### Backend (nordic-table-design.vercel.app)

Set these in Vercel Dashboard → Project Settings → Environment Variables:

```bash
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
FRONTEND_URL=https://saffran-peach.vercel.app
NODE_ENV=production
```

## Getting Gmail App Password

1. Go to [Google Account](https://myaccount.google.com/)
2. Security → 2-Step Verification → App passwords
3. Generate a new app password for "Mail"
4. Copy the 16-character password
5. Add to Vercel environment variables as `GMAIL_APP_PASSWORD`

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Testing CORS

If you get CORS errors:
1. Check that `FRONTEND_URL` in backend matches your frontend domain
2. Ensure both domains are deployed on Vercel
3. Check browser console for specific CORS error messages

## Troubleshooting

### "Failed to fetch" error
- Backend not deployed or URL incorrect
- CORS not configured properly
- Check browser console for specific error

### Double slash in URL (//api)
- Remove trailing slash from API_URL
- Already handled in code with `.replace(/\/$/, '')`

### Email not sending
- Check Gmail App Password is correct
- Verify `GMAIL_USER` and `GMAIL_APP_PASSWORD` in Vercel
- Check backend logs for email transporter errors

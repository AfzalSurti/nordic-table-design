# 🎉 Email Booking System - SETUP COMPLETE!

## What Was Done

Your restaurant booking website now has a fully functional email system that sends booking requests to your Gmail inbox.

### Files Created/Modified:

✅ **Backend Server**
- `backend/server.ts` - Express API with email service
- `backend/package.json` - Backend dependencies
- `backend/tsconfig.json` - TypeScript config
- `backend/.gitignore` - Backend git ignore

✅ **Frontend Integration**
- `src/services/bookingService.ts` - API client service
- `src/components/Booking.tsx` - Updated with actual submission
- `vite.config.ts` - Added API proxy

✅ **Configuration**
- `.env` - Backend configuration (your email is already here!)
- `.env.local` - Frontend API configuration
- `.env.example` - Example configuration template

✅ **Documentation**
- `EMAIL_SETUP.md` - Complete setup guide
- `start.bat` - Quick start script (Windows)

✅ **Dependencies Installed**
- ✓ Backend: Express, Nodemailer, CORS, TypeScript
- ✓ Frontend: Concurrently (run both servers together)

---

## ⚡ NEXT STEP: Add Your Gmail App Password

Edit the `.env` file in the root directory:

```
GMAIL_USER=surtiafzal915@gmail.com
GMAIL_APP_PASSWORD=YOUR_16_CHAR_PASSWORD_HERE
```

### How to Get Your App Password:
1. Go to [Google Account](https://myaccount.google.com/)
2. Click **Security** → **App passwords**
3. Select Mail + Windows Computer
4. Copy the 16-character password
5. Paste it in `.env` file above

---

## 🚀 How to Run

### Option 1: Double-click the batch file (Windows)
```bash
start.bat
```

### Option 2: Use npm commands
```bash
npm run dev:all
```

### Option 3: Manual (separate terminals)
- Terminal 1: `npm run dev` (frontend)
- Terminal 2: `npm run dev:backend` (backend)

---

## 📧 Email Format

When someone books a table, they receive:

### **Email to Restaurant (surtiafzal915@gmail.com)**
```
Subject: New Table Booking - John Doe on Friday, February 15, 2026 at 19:00

Guest Information:
- Name: John Doe
- Email: john@example.com
- Phone: +1-234-567-8900

Reservation Details:
- Date: Friday, February 15, 2026
- Time: 19:00
- Guests: 4

Special Requests:
(customer message here)

Booking received: 2/15/2026 2:45 PM
```

### **Confirmation Email to Customer**
A professional confirmation is sent to the customer's email with booking details.

---

## ✅ Testing Checklist

- [ ] Edit `.env` and add your App Password
- [ ] Run `npm run dev:all` (or `start.bat`)
- [ ] Go to `http://localhost:8080`
- [ ] Fill in test booking form
- [ ] Click "Book a Table"
- [ ] Check your email (surtiafzal915@gmail.com)
- [ ] Verify the booking email arrived

---

## 🛠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| "Connection refused" | Backend not running. Run `npm run dev:backend` |
| "Failed to submit" | Check if App Password in `.env` is correct |
| Email not arriving | Check spam folder, verify 2-step verification enabled |
| Port already in use | Change `PORT` in `.env` to `5001` |

---

## 📱 Form Fields Sent in Email

- ✓ Guest Name
- ✓ Guest Email
- ✓ Guest Phone Number
- ✓ Booking Date (formatted nicely)
- ✓ Booking Time
- ✓ Number of Guests
- ✓ Special Requests/Message
- ✓ Booking Timestamp

---

## 🔒 Security

- App Password stored locally (never exposed to frontend)
- `.env` file is gitignored and never pushed
- All data validated on backend
- CORS enabled for localhost only
- Emails sent via secure Gmail servers

---

## 📞 Your Setup Info

| Item | Value |
|------|-------|
| Restaurant Email | surtiafzal915@gmail.com |
| Frontend URL | http://localhost:8080 |
| Backend URL | http://localhost:5000 |
| API Endpoint | POST /api/send-booking |
| Email Service | Gmail via Nodemailer |

---

## 🎯 What Happens Now

1. User visits website → Scrolls to booking section
2. Fills form (name, email, phone, date, time, guests, message)
3. Clicks "Book a Table"
4. Form validates and sends to backend API
5. Backend validates data
6. Nodemailer sends professional email to your Gmail
7. Also sends confirmation to customer
8. User sees success message
9. You receive booking notification in email ✉️

---

## 🚀 Next: Deploy to Production

When ready to go live:

1. Host backend on server (Heroku, Railway, Render, etc.)
2. Update backend URL in `.env.local`
3. Update CORS in server.ts for your domain
4. Deploy frontend to Vercel/Netlify
5. Update GMAIL_APP_PASSWORD on your server

---

## ❓ Need Help?

- See `EMAIL_SETUP.md` for detailed guide
- Check backend logs for errors
- Open browser F12 console for frontend logs
- Verify Gmail 2-step verification is enabled

---

**Your email booking system is ready to go! 🎉**

Just add the App Password to `.env` and run `npm run dev:all`

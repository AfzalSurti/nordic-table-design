# Email Booking System Setup Guide

## Overview
Your website is now configured to send table booking emails to **surtiafzal915@gmail.com** in a professional HTML format.

## 🔧 Setup Instructions

### Step 1: Configure Gmail App Password
Since you've already set up 2-step verification, you need an **App Password**:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** in the left sidebar
3. Find **App passwords** (it appears only if 2-step verification is enabled)
4. Select **Mail** and **Windows Computer**
5. Google will generate a **16-character password**
6. Copy this password

### Step 2: Add App Password to Backend
The `.env` file in the root directory already has your email configured. You just need to add the App Password:

**File: `.env`**
```
GMAIL_USER=surtiafzal915@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
FRONTEND_URL=http://localhost:8080
PORT=5000
NODE_ENV=development
```

👉 **Replace `xxxx xxxx xxxx xxxx` with the 16-character password** from Google (you can keep or remove the spaces, either works).

### Step 3: Install Dependencies

**For Backend:**
```bash
cd backend
npm install
```

**For Frontend (if not already done):**
```bash
npm install
```

### Step 4: Run Both Servers

**Option 1: Run both together (recommended)**
```bash
npm run dev:all
```

**Option 2: Run separately in different terminals**
- Frontend: `npm run dev`
- Backend: `npm run dev:backend`

You should see:
- Frontend at: `http://localhost:8080`
- Backend at: `http://localhost:5000`

## 📧 What Happens When Someone Books

When a user fills the form and clicks **"Book a Table"**:

### 1. **Email to Restaurant (you@surtiafzal915@gmail.com)**
- **Subject:** `New Table Booking - John Doe on Friday, February 15, 2026 at 19:00`
- **Content includes:**
  - Guest name, email, phone
  - Booking date and time
  - Number of guests
  - Special requests (if provided)
  - Booking timestamp

### 2. **Confirmation Email to Customer**
- An automated confirmation is sent to the customer's email
- Thanks them for the booking
- Confirms you'll contact them soon

## 🛠️ How It Works

```
User fills form in browser
         ↓
Booking component sends data to backend
         ↓
Express API validates data
         ↓
Nodemailer sends emails via Gmail
         ↓
Success message shown to user
```

## 📁 Project Structure

```
nordic-table-design/
├── backend/                    # Backend server
│   ├── server.ts              # Express API
│   ├── package.json           # Backend dependencies
│   └── tsconfig.json          # TypeScript configs
├── src/
│   ├── components/
│   │   └── Booking.tsx        # Updated booking form
│   └── services/
│       └── bookingService.ts  # API service
├── .env                       # Environment variables ⭐ ADD PASSWORD HERE
├── .env.local                 # Frontend API URL
└── vite.config.ts             # Updated with API proxy
```

## ✅ Testing the System

1. Go to `http://localhost:8080`
2. Scroll to **"Book a Table"** section
3. Fill in a test booking:
   - Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
   - Date: Pick a date
   - Time: Pick a time
   - Guests: 4
   - Message: (optional) Any special requests
4. Click **"Book a Table"**
5. You should see a success message
6. Check **surtiafzal915@gmail.com inbox** - you should receive the booking email!

## 🔒 Security Notes

- The App Password is stored locally in `.env` and **never exposed** to the frontend
- The `.env` file is gitignored and not pushed to repositories
- Only the restaurant email receives booking details
- All data is validated on the backend

## 🚀 Deployment

When deploying to production:

1. **Update `.env` on your server** with your App Password and actual URLs
2. **Update `FRONTEND_URL`** in `.env` to your production domain
3. **Update `VITE_API_URL`** to your production API URL (usually same domain)
4. Run: `npm run build` (frontend) and build the backend accordingly

## ❓ Troubleshooting

### "Failed to submit booking"
- Check if backend is running (`npm run dev:backend`)
- Check if `.env` file has the correct App Password
- Open browser console (F12) for more details

### "Email not received"
- Verify the App Password is correctly set in `.env`
- Check Gmail spam folder
- Ensure 2-step verification is still enabled on Gmail
- Check backend logs for errors

### Port 5000 already in use
- Change `PORT` in `.env` to another number like `5001`
- Update `VITE_API_URL` in `.env.local` to match

## 📞 Quick Reference

- **Frontend runs on:** `http://localhost:8080`
- **Backend API runs on:** `http://localhost:5000`
- **API endpoint:** `POST /api/send-booking`
- **Email sent to:** `surtiafzal915@gmail.com`
- **Email service:** Gmail via Nodemailer

---

**Your booking system is now fully functional!** 🎉

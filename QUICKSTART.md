# Urban Hive - Quick Start Guide

## 🚀 How to Run

### Option 1: Direct Browser Access
1. Open `index.html` in your web browser
2. Click "Login" button
3. Use demo credentials below

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
npx serve
```

**Using PHP:**
```bash
php -S localhost:8000
```

## 🔑 Demo Credentials

### Resident Account
```
Email: resident@urbanhive.com
Password: resident123
```
**Features:**
- View dashboard with stats
- Browse notices
- Raise complaints
- Track payments
- Manage visitors

### Manager Account
```
Email: manager@urbanhive.com
Password: manager123
```
**Features:**
- Society overview
- Manage all complaints
- Assign tasks to workers
- Manage residents and workers
- Create notices
- View reports

### Worker Account
```
Email: worker@urbanhive.com
Password: worker123
```
**Features:**
- View assigned tasks
- Mark attendance
- Update task status
- View notifications

## 📱 Testing the Application

### 1. Landing Page
- Open `index.html`
- Explore features section
- Click "Get Started" or "Login"

### 2. Login
- Try all three demo accounts
- Test password visibility toggle
- Use quick-fill demo buttons

### 3. Resident Dashboard
- View statistics cards
- Check latest notices
- Raise a new complaint
- View complaint status

### 4. Manager Dashboard
- View society statistics
- Browse complaints table
- Create a new notice
- Assign complaints to workers

### 5. Worker Dashboard
- Mark attendance
- View assigned tasks
- Start/Complete tasks
- Check task priorities

## 🎨 Customization

### Change Primary Color
Edit `css/styles.css`:
```css
:root {
    --primary: #0ea5e9; /* Change this */
}
```

### Add New Data
Edit `js/data.js`:
```javascript
const data = {
    notices: [...],
    complaints: [...],
    // Add more data
};
```

### Modify User Info
Edit `js/auth.js`:
```javascript
const demoUsers = {
    'your-email@example.com': {
        id: 'U001',
        name: 'Your Name',
        // ... other fields
    }
};
```

## 🐛 Troubleshooting

### Issue: Styles not loading
**Solution:** Make sure you're accessing via a server (not file://)

### Issue: Login not working
**Solution:** Check browser console for errors, ensure JavaScript is enabled

### Issue: Data not persisting
**Solution:** This is expected - data is stored in memory and resets on refresh

### Issue: Sidebar not showing on mobile
**Solution:** Click the menu icon (☰) in the top-left corner

## 📂 File Structure

```
urbanhive-web/
├── index.html                 # Landing page
├── login.html                 # Login page
├── 404.html                   # Error page
├── resident-dashboard.html    # Resident main dashboard
├── manager-dashboard.html     # Manager main dashboard
├── worker-dashboard.html      # Worker main dashboard
├── [role]-[page].html        # Other pages (placeholders)
├── css/
│   └── styles.css            # All CSS styles
├── js/
│   ├── main.js               # Landing page logic
│   ├── auth.js               # Authentication
│   ├── data.js               # Dummy data
│   ├── dashboard.js          # Common dashboard functions
│   ├── resident-dashboard.js # Resident logic
│   ├── manager-dashboard.js  # Manager logic
│   └── worker-dashboard.js   # Worker logic
└── public/
    ├── favicon.ico
    └── robots.txt
```

## ✅ Features Checklist

### Implemented ✓
- [x] Landing page with animations
- [x] Login system with demo accounts
- [x] Resident dashboard with stats
- [x] Manager dashboard with tables
- [x] Worker dashboard with tasks
- [x] Responsive design (mobile/tablet/desktop)
- [x] Modal dialogs
- [x] Form handling
- [x] Session management
- [x] Role-based routing
- [x] Status badges
- [x] Interactive UI elements

### Placeholder Pages
- [ ] Resident: Notices, Complaints, Payments, Visitors (full pages)
- [ ] Manager: Notices, Complaints, Workers, Residents, Reports (full pages)
- [ ] Worker: Tasks, Attendance, Notifications (full pages)

## 🎯 Next Steps

1. **Test all three dashboards** with demo accounts
2. **Try creating** a complaint as resident
3. **Try creating** a notice as manager
4. **Try marking** attendance as worker
5. **Explore** the responsive design on different screen sizes

## 💡 Tips

- Use browser DevTools (F12) to inspect elements
- Check Console for any JavaScript errors
- Test on different browsers (Chrome, Firefox, Safari)
- Try different screen sizes using DevTools device toolbar
- Session data is stored in sessionStorage (cleared on tab close)

## 📞 Support

For issues or questions:
1. Check the README.md for detailed documentation
2. Review the code comments in JS files
3. Inspect browser console for errors

---

**Enjoy exploring Urban Hive!** 🏢✨

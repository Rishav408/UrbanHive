# Urban Hive - Housing Society Management System

A complete vanilla HTML, CSS, and JavaScript implementation of a housing society management platform with role-based dashboards for Residents, Managers, and Workers.

## 🚀 Features

### Landing Page
- Modern, responsive design
- Feature showcase
- Benefits section
- Call-to-action sections

### Authentication
- Role-based login system
- Demo accounts for testing
- Session management

### Resident Portal
- Dashboard with statistics
- View notices
- Raise and track complaints
- Payment management
- Visitor tracking

### Manager Dashboard
- Society overview statistics
- Complaint management
- Worker management
- Resident management
- Create and publish notices
- Reports and analytics

### Worker Portal
- Task management
- Attendance marking
- View assigned tasks
- Update task status
- Notifications

## 📁 Project Structure

```
urbanhive-web/
├── index.html              # Landing page
├── login.html              # Login page
├── resident-dashboard.html # Resident dashboard
├── manager-dashboard.html  # Manager dashboard
├── worker-dashboard.html   # Worker dashboard
├── css/
│   └── styles.css         # All styles
├── js/
│   ├── main.js            # Landing page scripts
│   ├── auth.js            # Authentication logic
│   ├── data.js            # Dummy data
│   ├── dashboard.js       # Common dashboard functions
│   ├── resident-dashboard.js
│   ├── manager-dashboard.js
│   └── worker-dashboard.js
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
└── README.md
```

## 🎯 Demo Accounts

### Resident
- **Email:** resident@urbanhive.com
- **Password:** resident123
- **Access:** View notices, raise complaints, track payments, manage visitors

### Manager
- **Email:** manager@urbanhive.com
- **Password:** manager123
- **Access:** Full society administration, complaint assignment, worker management

### Worker
- **Email:** worker@urbanhive.com
- **Password:** worker123
- **Access:** View and update assigned tasks, mark attendance

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **JavaScript (ES6+)** - Vanilla JavaScript, no frameworks
- **Google Fonts** - Inter & Space Grotesk

## 🎨 Design System

### Colors
- **Primary:** #0ea5e9 (Cyan)
- **Secondary:** #334155 (Slate)
- **Success:** #10b981 (Green)
- **Warning:** #f59e0b (Amber)
- **Destructive:** #ef4444 (Red)
- **Info:** #0284c7 (Blue)

### Typography
- **Sans:** Inter
- **Display:** Space Grotesk

## 🚀 Getting Started

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd urbanhive-web
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Navigate to login**
   - Click "Login" button on landing page
   - Use one of the demo accounts above

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ✨ Key Features

### Authentication
- Session-based authentication using sessionStorage
- Role-based access control
- Automatic redirection based on user role

### Dashboard Features
- Real-time statistics
- Interactive data tables
- Modal dialogs for forms
- Toast notifications
- Responsive sidebar navigation

### Data Management
- In-memory data storage
- CRUD operations for complaints, notices, tasks
- Status tracking and updates

## 🔒 Security Note

This is a **frontend-only prototype** with demo data. In a production environment, you would need:
- Backend API for data persistence
- Proper authentication (JWT, OAuth)
- Database integration
- Input validation and sanitization
- HTTPS encryption

## 📝 Customization

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary: #0ea5e9;
    --secondary: #334155;
    /* ... other colors */
}
```

### Adding New Pages
1. Create HTML file (e.g., `resident-notices.html`)
2. Include required CSS and JS files
3. Add navigation link in sidebar
4. Create corresponding JS file if needed

### Modifying Data
Edit `js/data.js` to change:
- Notices
- Complaints
- Payments
- Visitors
- Tasks
- Workers
- Residents

## 🐛 Known Limitations

- No backend integration
- Data resets on page refresh
- No real-time updates
- Limited form validation
- No file upload functionality
- No email notifications

## 🔮 Future Enhancements

- Backend API integration
- Real-time notifications using WebSockets
- Advanced search and filtering
- Data export (PDF, Excel)
- Multi-language support
- Dark mode toggle
- Mobile app version

## 📄 License

This project is created for educational purposes.

## 👥 Credits

Designed and developed as a complete rewrite from React/TypeScript to vanilla HTML/CSS/JavaScript.

---

**Urban Hive** - Smart Urban Living, Simplified

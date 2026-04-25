# 🏙️ UrbanHive — Housing Society Management System

> **A role-driven, full-stack web application for managing modern residential societies.**  
> UrbanHive unifies the workflows of residents, society managers, and maintenance workers under a single platform — covering everything from complaints and payments to visitor management and amenity bookings.

---

## 📌 Project Overview

Managing a residential society involves dozens of daily interactions that are typically fragmented across WhatsApp groups, paper registers, and phone calls. UrbanHive digitises and streamlines these touchpoints into a cohesive platform.

**Core Idea:** Three distinct roles — **Resident**, **Manager**, and **Worker** — each get a tailored dashboard with the precise controls, views, and workflows they need. No shared inbox, no role confusion.

**Tech Stack:**
| Layer | Technology |
|---|---|
| Frontend | Static HTML · Vanilla CSS · Vanilla JS |
| Backend | Node.js · Express.js |
| Database | MongoDB (via Mongoose) |
| Auth | JWT (JSON Web Tokens) + bcryptjs |
| Hosting Target | Render (backend) + MongoDB Atlas |

---

## 🎭 Roles & Permissions

### 🏠 Resident
The primary end-user of the society. A resident can:
- Submit and track **maintenance complaints**
- Log **payment records** (demo mode — no real gateway)
- Request **visitor pre-approvals**
- Book **community amenities**
- View **notices** and **events** posted by the manager
- Edit their **profile**

### 🏢 Manager
The society administrator. A manager can:
- **Post notices and events** for residents
- **Review and assign complaints** to workers
- **Verify or reject payment submissions**
- **Approve or deny visitor** entry requests
- **Approve amenity booking** requests
- **Manage residents and workers** (create, update accounts)
- View **reports and analytics**

### 🔧 Worker
A maintenance staff member. A worker can:
- View **tasks assigned** to them
- **Update task/complaint status**
- Track their **attendance and salary**
- Manage their **profile**
- Receive **in-app notifications**

---

## 🗂️ Project Structure

```
UrbanHive/
│
├── client/                          # Frontend (Static HTML/CSS/JS)
│   ├── index.html                   # Landing / root redirect
│   └── src/
│       ├── pages/
│       │   ├── login.html           # Unified login for all roles
│       │   ├── manager/
│       │   │   ├── dashboard.html
│       │   │   ├── complaints.html
│       │   │   ├── payments.html
│       │   │   ├── visitors.html
│       │   │   ├── notices.html
│       │   │   ├── residents.html
│       │   │   ├── workers.html
│       │   │   ├── reports.html
│       │   │   └── settings.html
│       │   ├── resident/
│       │   │   ├── dashboard.html
│       │   │   ├── complaints.html
│       │   │   ├── payments.html
│       │   │   ├── visitors.html
│       │   │   ├── notices.html
│       │   │   ├── amenities.html
│       │   │   ├── events.html
│       │   │   └── profile.html
│       │   └── worker/
│       │       ├── dashboard.html
│       │       ├── tasks.html
│       │       ├── attendance.html
│       │       ├── salary.html
│       │       ├── notifications.html
│       │       └── profile.html
│       ├── scripts/
│       │   └── core/                # Shared JS utilities
│       └── styles/
│           ├── main.css
│           ├── base/
│           ├── components/          # buttons.css, cards.css, modals.css, sidebar.css
│           ├── effects/
│           └── layouts/
│
├── server/                          # Backend (Express + MongoDB)
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── index.js                 # Entry point (HTTP server)
│       ├── app.js                   # Express app, CORS, route mounting
│       ├── config/
│       │   └── db.js                # Mongoose connection helper
│       ├── middleware/
│       │   ├── auth.js              # JWT protect + allowRoles guards
│       │   └── error.js             # 404 + global error handler
│       ├── models/
│       │   ├── User.js
│       │   ├── Complaint.js
│       │   ├── Payment.js
│       │   └── Visitor.js
│       ├── controllers/
│       │   ├── authController.js
│       │   ├── usersController.js
│       │   ├── complaintsController.js
│       │   ├── paymentsController.js
│       │   └── visitorsController.js
│       ├── routes/
│       │   ├── index.js             # Central API router
│       │   ├── authRoutes.js
│       │   ├── usersRoutes.js
│       │   ├── complaintsRoutes.js
│       │   ├── paymentsRoutes.js
│       │   └── visitorsRoutes.js
│       └── utils/
│           └── asyncHandler.js      # Try/catch wrapper for controllers
│
├── documents/
│   ├── docs/
│   │   ├── System Design.docx
│   │   ├── UI Wireframe.docx
│   │   ├── UrbanHive Database schema.docx
│   │   ├── 🌆 UrbanHive.docx        # Project brief / concept doc
│   │   └── ppt/                     # Presentation assets
│   ├── phase-plan/
│   │   ├── Phase-Plan.md            # Master 8-phase roadmap
│   │   ├── Phase-1.md               # Data model + API spec (locked)
│   │   └── Phase-2.md               # Auth + backend scaffold (completed)
│   └── checklog/
│       └── Progress-1.md            # Development progress log
│
└── public/                          # Static public assets
```

---

## 🗄️ Data Model (MongoDB Collections)

| Collection | Key Fields | Purpose |
|---|---|---|
| `users` | role, email, flatNo, workerType | Auth + role identity |
| `notices` | title, message, createdBy, targetScope | Manager → Resident broadcasts |
| `complaints` | status, priority, timeline, workerId | Full complaint lifecycle |
| `payments` | amount, mode, status, month | Demo payment submission + verification |
| `visitors` | name, phone, visitDate, status | Resident → Manager → Entry gate flow |
| `events` | title, date, createdBy | Community event posts |
| `amenities` | name, availability | Manager-defined bookable resources |
| `amenityBookings` | amenityId, timeSlot, status | Resident booking requests |
| `notifications` | type, refId, read | In-app notification feed |

**Role field values:** `resident` | `manager` | `worker`

---

## 🌐 REST API Map

### Auth
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me
```

### Users *(Manager only)*
```
GET    /api/users?role=resident|worker
POST   /api/users
PATCH  /api/users/:id
```

### Notices
```
POST   /api/notices           (manager)
GET    /api/notices           (role-filtered)
DELETE /api/notices/:id       (manager)
```

### Complaints
```
POST   /api/complaints        (resident)
GET    /api/complaints        (role-filtered)
PATCH  /api/complaints/:id    (assign / update / close)
```

### Payments *(Demo)*
```
POST   /api/payments                    (resident)
GET    /api/payments                    (role-filtered)
PATCH  /api/payments/:id/verify         (manager)
```

### Visitors
```
POST   /api/visitors          (resident)
GET    /api/visitors          (role-filtered)
PATCH  /api/visitors/:id      (manager: approve / deny / entered)
```

### Events
```
POST   /api/events            (manager)
GET    /api/events            (all)
```

### Amenities & Bookings
```
POST   /api/amenities                       (manager)
GET    /api/amenities                       (all)
POST   /api/amenity-bookings                (resident)
GET    /api/amenity-bookings                (role-filtered)
PATCH  /api/amenity-bookings/:id            (manager: approve / decline)
```

### Notifications
```
GET    /api/notifications                   (current user)
PATCH  /api/notifications/:id/read
```

---

## 🔄 Core Workflows

```
Complaints:
  Resident submits → Manager assigns to Worker → Worker updates progress
  → Manager closes → Resident receives notification

Payments (Demo):
  Resident submits record + mode → Manager approves or rejects
  → Resident sees updated status

Visitors:
  Resident pre-registers guest → Manager approves / denies
  → Entry logged on arrival → Resident notified

Amenities:
  Resident requests time slot → Manager approves / declines
  → Resident sees confirmed booking

Notices / Events:
  Manager posts → All residents view on their dashboard
```

---

## 🚀 Development Roadmap

| Phase | Goal | Status |
|---|---|---|
| Phase-0 | Product definition — roles, features, flows, constraints locked | ✅ Done |
| Phase-1 | Data model + REST API map designed | ✅ Done |
| Phase-2 | Backend scaffold, MongoDB connection, JWT auth, role guards | ✅ Done |
| Phase-3 | Core workflows — complaints, payments, visitors, notices (end-to-end) | 🔄 Next |
| Phase-4 | Secondary modules — events, amenities, profile, in-app notifications | 📅 Planned |
| Phase-5 | UI integration — replace static data with live DB data | 📅 Planned |
| Phase-6 | Security & validation — server-side role checks, input sanitisation, CORS | 📅 Planned |
| Phase-7 | Deployment — Render + MongoDB Atlas, env vars, health checks | 📅 Planned |
| Phase-8 | Polish — audit logs, analytics, real payment gateway (future scope) | 📅 Planned |

---

## ⚙️ Local Setup

### Backend

**1. Configure environment**
```bash
cp server/.env.example server/.env
# Fill in MONGO_URI, JWT_SECRET, PORT, CORS_ORIGIN
```

**2. Install dependencies**
```bash
cd server
npm install
```

**3. (Optional) Seed the database**
```bash
npm run seed          # Base seed data
npm run seed:more     # Extended seed data
npm run seed:append   # Append additional records
```

**4. Start the dev server**
```bash
npm run dev
```
Health check → `http://localhost:5000/health`

---

### Frontend

Serve the `client/` directory with any static file server:

```bash
cd client
python -m http.server 5500
```

Open → `http://localhost:5500/src/pages/login.html`

---

## 🔑 Demo Credentials *(Frontend Login)*

| Role | Email | Password |
|---|---|---|
| Resident | resident@urbanhive.com | resident123 |
| Manager | manager@urbanhive.com | manager123 |
| Worker | worker@urbanhive.com | worker123 |

> These are hard-coded demo credentials for frontend-only navigation. Production login will use the JWT API.

---

## 📐 Architecture Overview

```
┌─────────────────────────────────────────────┐
│              CLIENT (Browser)               │
│  Static HTML + CSS + Vanilla JS             │
│  Role-specific page groups:                 │
│    /pages/resident/  /pages/manager/        │
│    /pages/worker/    login.html             │
└───────────────────┬─────────────────────────┘
                    │ HTTP (fetch/XHR)
                    ▼
┌─────────────────────────────────────────────┐
│         SERVER (Node.js / Express)          │
│                                             │
│  app.js ──► /api router                     │
│              │                              │
│  ┌───────────┼──────────────────────┐       │
│  │  JWT Auth Middleware (protect)   │       │
│  │  Role Guard (allowRoles)         │       │
│  └───────────┼──────────────────────┘       │
│              │                              │
│  Controllers ──► Models (Mongoose)          │
└───────────────────┬─────────────────────────┘
                    │ Mongoose ODM
                    ▼
┌─────────────────────────────────────────────┐
│          MongoDB Atlas (Cloud DB)           │
│  Collections: users · notices · complaints  │
│  payments · visitors · events · amenities   │
│  amenityBookings · notifications            │
└─────────────────────────────────────────────┘
```

---

## 📁 Documents & Resources

| File | Description |
|---|---|
| `documents/docs/🌆 UrbanHive.docx` | Project concept and overview |
| `documents/docs/System Design.docx` | System architecture design document |
| `documents/docs/UI Wireframe.docx` | UI wireframes for all role dashboards |
| `documents/docs/UrbanHive Database schema.docx` | Detailed MongoDB schema reference |
| `documents/docs/ppt/UrbanHive_Presentation.pdf` | Project presentation (PDF) |
| `documents/phase-plan/Phase-Plan.md` | Master 8-phase development roadmap |
| `documents/phase-plan/Phase-1.md` | Full data model + API specification |
| `documents/phase-plan/Phase-2.md` | Phase-2 completion summary |
| `documents/checklog/Progress-1.md` | Development decisions and progress log |

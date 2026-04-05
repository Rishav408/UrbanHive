# Urban Hive - Housing Society Management System

Urban Hive is a society management system with three roles (resident, manager, worker). The project uses a split frontend/backend structure with a Node/Express API and MongoDB (Atlas).

## Status
- Phase-1: Data model + API map locked
- Phase-2: Backend scaffold + JWT auth completed

## Project Structure
```
UrbanHive/
├── client/                 # Frontend (static HTML/CSS/JS)
│   ├── index.html
│   └── src/
├── server/                 # Backend (Express + MongoDB)
│   ├── package.json
│   ├── .env.example
│   └── src/
├── documents/              # Plans + progress logs
│   ├── Phase-Plan.md
│   ├── Phase-1.md
│   ├── Phase-2.md
│   └── checklog/
└── README.md
```

## Demo Accounts (Frontend)
- resident@urbanhive.com / resident123
- manager@urbanhive.com / manager123
- worker@urbanhive.com / worker123

## Backend Setup
1) Create `server/.env` from `server/.env.example`
2) Install deps:
```bash
cd server
npm install
```
3) Start dev server:
```bash
npm run dev
```
Health check: `http://localhost:5000/health`

## Frontend Setup
Run a local server from `client/`:
```bash
cd client
python -m http.server 5500
```
Open: `http://localhost:5500/src/pages/login.html`

## Notes
- Phase-3 will implement core workflows (complaints, payments, visitors, notices).

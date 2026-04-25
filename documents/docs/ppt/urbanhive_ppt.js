const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "UrbanHive — Housing Society Management System";

// ─── APPLE DESIGN SYSTEM ───────────────────────────────────────────────────
const C = {
  black:    "000000",
  white:    "FFFFFF",
  nearBlack:"1D1D1F",   // Apple's off-black
  grey1:    "F5F5F7",   // Apple light bg
  grey2:    "E8E8ED",   // soft divider
  grey3:    "6E6E73",   // Apple caption grey
  grey4:    "3A3A3C",   // Apple body grey
  blue:     "0071E3",   // Apple blue CTA
  blueLight:"E8F0FE",   // tinted bg
  teal:     "32D74B",   // Apple green accent
  accent:   "0077ED",   // darker blue for headline rules
};

const F = {
  display: "SF Pro Display",
  text:    "SF Pro Text",
  mono:    "SF Mono",
  // fallbacks available in PowerPoint:
  h:  "Helvetica Neue",
  b:  "Helvetica Neue",
  t:  "Helvetica Neue",
};

const makeShadow = () => ({ type: "outer", color: "000000", blur: 18, offset: 4, angle: 135, opacity: 0.08 });
const cardShadow = () => ({ type: "outer", color: "000000", blur: 12, offset: 2, angle: 135, opacity: 0.06 });

// ─── HELPER: White card ─────────────────────────────────────────────────────
function card(slide, x, y, w, h) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h,
    fill: { color: C.white },
    line: { color: C.grey2, width: 0.5 },
    rectRadius: 0.14,
    shadow: cardShadow(),
  });
}

// ─── HELPER: Section label (small caps / tracking) ─────────────────────────
function label(slide, text, x, y, w, color = C.grey3) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h: 0.22,
    fontFace: F.h, fontSize: 8.5, color, charSpacing: 2.5,
    bold: false, align: "left", margin: 0,
  });
}

// ─── HELPER: Pill badge ─────────────────────────────────────────────────────
function pill(slide, text, x, y, bgColor = C.blue, txtColor = C.white) {
  const w = text.length * 0.065 + 0.3;
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h: 0.26, fill: { color: bgColor }, line: { color: bgColor }, rectRadius: 0.13,
  });
  slide.addText(text, {
    x: x + 0.02, y: y + 0.02, w, h: 0.22,
    fontFace: F.h, fontSize: 9, color: txtColor, bold: true, align: "center", margin: 0,
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 1 — Title / Hero
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.nearBlack };

  // Subtle dot grid decoration (top right quadrant)
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 5; row++) {
      s.addShape(pres.shapes.OVAL, {
        x: 6.5 + col * 0.45, y: 0.3 + row * 0.45, w: 0.05, h: 0.05,
        fill: { color: "FFFFFF", transparency: 82 },
        line: { color: "FFFFFF", transparency: 82 },
      });
    }
  }

  // Category label
  s.addText("SOFTWARE ENGINEERING PROJECT", {
    x: 0.65, y: 1.6, w: 7, h: 0.25,
    fontFace: F.h, fontSize: 9, color: C.grey3, charSpacing: 3, align: "left", margin: 0,
  });

  // Main title — large Apple-style
  s.addText("UrbanHive", {
    x: 0.65, y: 1.95, w: 8, h: 1.0,
    fontFace: F.h, fontSize: 68, bold: true, color: C.white, align: "left", margin: 0,
    charSpacing: -1.5,
  });

  // Subtitle
  s.addText("Housing Society Management System", {
    x: 0.65, y: 2.98, w: 8, h: 0.45,
    fontFace: F.h, fontSize: 22, bold: false, color: "8A8A8E", align: "left", margin: 0,
  });

  // Thin divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.65, y: 3.55, w: 1.8, h: 0.02,
    fill: { color: C.blue }, line: { color: C.blue },
  });

  // Meta row
  s.addText("MIT World Peace University, Pune  ·  2025–2026  ·  SE & Modelling", {
    x: 0.65, y: 3.72, w: 8, h: 0.25,
    fontFace: F.h, fontSize: 10.5, color: "6E6E73", align: "left", margin: 0,
  });

  // Team names bottom
  const team = ["Kunal Tailor", "Rishav Singh", "Prakash", "Anuj Kudu"];
  const guide = "Guide: Yogesh Kulkarni";
  s.addText(team.join("   ·   ") + "   |   " + guide, {
    x: 0.65, y: 5.1, w: 9, h: 0.25,
    fontFace: F.h, fontSize: 9.5, color: "6E6E73", align: "left", margin: 0,
  });

  // Decorative circle (right side)
  s.addShape(pres.shapes.OVAL, {
    x: 7.8, y: 0.8, w: 2.8, h: 2.8,
    fill: { color: C.blue, transparency: 88 },
    line: { color: C.blue, transparency: 88 },
  });
  s.addShape(pres.shapes.OVAL, {
    x: 8.2, y: 1.2, w: 2.0, h: 2.0,
    fill: { color: C.blue, transparency: 78 },
    line: { color: C.blue, transparency: 78 },
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 2 — The Problem (Real + Technical)
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.grey1 };

  label(s, "Problem Statement", 0.5, 0.32, 4);

  s.addText("Why UrbanHive Exists", {
    x: 0.5, y: 0.58, w: 9, h: 0.55,
    fontFace: F.h, fontSize: 32, bold: true, color: C.nearBlack, margin: 0,
  });

  // 3 real-world problem cards (top row)
  const problems = [
    { icon: "📋", title: "Manual Registers", body: "Complaint books, payment ledgers, and attendance sheets are error-prone and impossible to audit at scale." },
    { icon: "💬", title: "Fragmented Comms", body: "WhatsApp groups and verbal notices leave residents without a structured, role-filtered announcement channel." },
    { icon: "🔒", title: "No Accountability", body: "No complaint ownership, no status trail, no payment transparency — residents are left in the dark." },
  ];

  problems.forEach((p, i) => {
    const x = 0.5 + i * 3.12;
    card(s, x, 1.3, 2.95, 1.85);
    s.addText(p.icon, { x, y: 1.42, w: 2.95, h: 0.4, fontFace: F.h, fontSize: 22, align: "center", margin: 0 });
    s.addText(p.title, { x: x + 0.15, y: 1.84, w: 2.65, h: 0.28, fontFace: F.h, fontSize: 12, bold: true, color: C.nearBlack, align: "left", margin: 0 });
    s.addText(p.body, { x: x + 0.15, y: 2.14, w: 2.65, h: 0.88, fontFace: F.h, fontSize: 9.5, color: C.grey4, align: "left", margin: 0 });
  });

  // Technical gap section
  s.addText("Technical Gaps in Existing Approaches", {
    x: 0.5, y: 3.32, w: 9, h: 0.3,
    fontFace: F.h, fontSize: 13, bold: true, color: C.nearBlack, margin: 0,
  });

  const gaps = [
    "No centralized authentication — shared logins undermine accountability",
    "Role mixing — general apps like Google Sheets don't enforce access boundaries",
    "No workflow state machine — complaints don't move through defined lifecycle states",
    "No API contract — frontend & backend can't be developed or tested independently",
  ];

  gaps.forEach((g, i) => {
    const row = Math.floor(i / 2), col = i % 2;
    const x = 0.5 + col * 4.75, y = 3.75 + row * 0.52;
    s.addShape(pres.shapes.OVAL, { x, y: y + 0.06, w: 0.14, h: 0.14, fill: { color: C.blue }, line: { color: C.blue } });
    s.addText(g, { x: x + 0.22, y, w: 4.3, h: 0.38, fontFace: F.h, fontSize: 10, color: C.grey4, align: "left", margin: 0 });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 3 — Solution Overview / Architecture
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  label(s, "System Architecture", 0.5, 0.32, 5);
  s.addText("Three-Tier, Role-Aware Architecture", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 30, bold: true, color: C.nearBlack, margin: 0,
  });

  // Architecture layers — horizontal flow
  const layers = [
    { label: "Frontend", sub: "Static HTML / CSS / JS", detail: "Role-based routing\nJWT guards\n10+ dashboard pages", color: "E8F0FE", border: C.blue },
    { label: "REST API", sub: "Node.js / Express.js", detail: "RBAC middleware\nJWT verification\nController pattern", color: "F0FFF4", border: "34C759" },
    { label: "Database", sub: "MongoDB Atlas", detail: "15 collections\nMongoose ODM\nSoft-delete pattern", color: "FFF8E6", border: "FF9F0A" },
  ];

  layers.forEach((l, i) => {
    const x = 0.5 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.32, w: 2.85, h: 2.6, fill: { color: l.color }, line: { color: l.border, width: 1.5 }, shadow: cardShadow() });
    s.addText(l.label, { x, y: 1.48, w: 2.85, h: 0.42, fontFace: F.h, fontSize: 18, bold: true, color: C.nearBlack, align: "center", margin: 0 });
    s.addText(l.sub, { x, y: 1.9, w: 2.85, h: 0.28, fontFace: F.h, fontSize: 10.5, color: C.grey3, align: "center", margin: 0, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.3, y: 2.3, w: 2.25, h: 0.02, fill: { color: l.border }, line: { color: l.border } });
    s.addText(l.detail, { x: x + 0.18, y: 2.45, w: 2.5, h: 1.3, fontFace: F.h, fontSize: 9.5, color: C.grey4, align: "center", margin: 0 });

    // Arrow between layers
    if (i < 2) {
      s.addShape(pres.shapes.RECTANGLE, { x: x + 2.92, y: 2.56, w: 0.16, h: 0.02, fill: { color: C.grey3 }, line: { color: C.grey3 } });
      s.addText("⇄", { x: x + 2.87, y: 2.45, w: 0.28, h: 0.25, fontFace: F.h, fontSize: 13, color: C.grey3, align: "center", margin: 0 });
    }
  });

  // Key security note
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9, h: 0.72,
    fill: { color: "1D1D1F" }, line: { color: "1D1D1F" }, shadow: makeShadow(),
  });
  s.addText("🔐  RBAC enforced at two levels — Frontend hides UI elements based on JWT role · Backend independently rejects unauthorized requests on every endpoint", {
    x: 0.65, y: 4.22, w: 8.5, h: 0.48,
    fontFace: F.h, fontSize: 10.5, color: C.white, align: "left", margin: 0,
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 4 — Three User Roles
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.grey1 };

  label(s, "Multi-Role System", 0.5, 0.32, 5);
  s.addText("Three Roles. One Platform.", {
    x: 0.5, y: 0.58, w: 9, h: 0.55,
    fontFace: F.h, fontSize: 32, bold: true, color: C.nearBlack, margin: 0,
  });

  const roles = [
    {
      name: "Resident", emoji: "🏠", color: "0071E3", bg: "E8F0FE",
      items: ["Raise & track complaints", "Submit maintenance payments", "Request visitor approvals", "View notices & events", "Book society amenities"],
    },
    {
      name: "Manager", emoji: "🗂️", color: "34C759", bg: "F0FFF4",
      items: ["Assign complaints to workers", "Verify payment submissions", "Approve visitor requests", "Publish notices", "Monitor worker attendance"],
    },
    {
      name: "Worker", emoji: "🔧", color: "FF9F0A", bg: "FFF8E6",
      items: ["View assigned tasks", "Mark attendance in/out", "Report task completion", "Receive staff-tagged notices", "Update availability"],
    },
  ];

  roles.forEach((r, i) => {
    const x = 0.42 + i * 3.1;
    // Card
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.25, w: 2.9, h: 3.88,
      fill: { color: C.white }, line: { color: r.bg, width: 2 },
      shadow: cardShadow(),
    });
    // Colour top strip
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.25, w: 2.9, h: 0.38,
      fill: { color: r.color }, line: { color: r.color },
    });
    s.addText(r.name, { x: x + 0.08, y: 1.29, w: 2.6, h: 0.3, fontFace: F.h, fontSize: 13, bold: true, color: C.white, margin: 0 });
    s.addText(r.emoji, { x, y: 1.72, w: 2.9, h: 0.45, fontFace: F.h, fontSize: 26, align: "center", margin: 0 });

    r.items.forEach((item, j) => {
      const y = 2.24 + j * 0.52;
      s.addShape(pres.shapes.OVAL, { x: x + 0.2, y: y + 0.1, w: 0.12, h: 0.12, fill: { color: r.color }, line: { color: r.color } });
      s.addText(item, { x: x + 0.38, y, w: 2.35, h: 0.42, fontFace: F.h, fontSize: 9.5, color: C.grey4, align: "left", margin: 0 });
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 5 — Core Modules
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  label(s, "Project Modules", 0.5, 0.32, 5);
  s.addText("Five Core Modules", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 30, bold: true, color: C.nearBlack, margin: 0,
  });

  const mods = [
    { n: "01", title: "Auth & RBAC", phase: "Phase 2 ✓", body: "JWT login, bcrypt hashing, role guards on every protected endpoint. Server-side RBAC independent of frontend." },
    { n: "02", title: "Core Workflows", phase: "Phase 3 →", body: "Complaints lifecycle (Open→Resolved), payment verification, visitor management, and notice board." },
    { n: "03", title: "Secondary Modules", phase: "Phase 4", body: "Event management, amenity booking (with availability checks), profile management, and notification fanout." },
    { n: "04", title: "UI Integration", phase: "Phase 5", body: "Static frontend connected to live API. Centralized API client with JWT injection, error handling, and loading states." },
    { n: "05", title: "Security & Deploy", phase: "Phase 6–7", body: "Input validation (express-validator), CORS hardening, rate limiting, Render deployment with MongoDB Atlas." },
  ];

  mods.forEach((m, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 0.42 + col * 3.1, y = 1.25 + row * 2.1;
    const w = i >= 3 ? 4.65 : 2.9;
    const xAdj = i === 3 ? 0.42 : i === 4 ? 5.15 : x;

    card(s, xAdj, y, w, 1.82);
    s.addText(m.n, { x: xAdj + 0.18, y: y + 0.15, w: 0.45, h: 0.38, fontFace: F.h, fontSize: 18, bold: true, color: C.blue, margin: 0 });
    s.addText(m.title, { x: xAdj + 0.18, y: y + 0.52, w: w - 0.36, h: 0.3, fontFace: F.h, fontSize: 13, bold: true, color: C.nearBlack, margin: 0 });
    pill(s, m.phase, xAdj + 0.18, y + 0.84, m.phase.includes("✓") ? "34C759" : m.phase.includes("→") ? C.blue : C.grey2, m.phase.includes("→") || m.phase.includes("✓") ? C.white : C.grey4);
    s.addText(m.body, { x: xAdj + 0.18, y: y + 1.14, w: w - 0.36, h: 0.58, fontFace: F.h, fontSize: 9, color: C.grey3, align: "left", margin: 0 });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 6 — Incremental Process Model
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.nearBlack };

  label(s, "Software Process Model", 0.5, 0.32, 5, "6E6E73");
  s.addText("Incremental Delivery Model", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 30, bold: true, color: C.white, margin: 0,
  });

  const phases = [
    { n: "P0", name: "Product\nDefinition", done: true },
    { n: "P1", name: "Data Model\n& API Map", done: true },
    { n: "P2", name: "Auth &\nRole Routing", done: true },
    { n: "P3", name: "Core\nWorkflows", done: false, active: true },
    { n: "P4", name: "Secondary\nModules", done: false },
    { n: "P5", name: "UI\nIntegration", done: false },
    { n: "P6", name: "Security &\nValidation", done: false },
    { n: "P7", name: "Deploy", done: false },
    { n: "P8", name: "Polish", done: false },
  ];

  phases.forEach((p, i) => {
    const x = 0.38 + i * 1.06;
    const color = p.done ? "34C759" : p.active ? C.blue : "3A3A3C";
    const textColor = p.done || p.active ? C.white : "6E6E73";

    s.addShape(pres.shapes.OVAL, {
      x, y: 1.35, w: 0.75, h: 0.75,
      fill: { color }, line: { color },
    });
    s.addText(p.n, { x, y: 1.47, w: 0.75, h: 0.5, fontFace: F.h, fontSize: 10, bold: true, color: textColor, align: "center", margin: 0 });
    s.addText(p.name, { x: x - 0.15, y: 2.22, w: 1.05, h: 0.6, fontFace: F.h, fontSize: 7.5, color: textColor, align: "center", margin: 0 });

    if (i < phases.length - 1) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.75, y: 1.72, w: 0.3, h: 0.02,
        fill: { color: "3A3A3C" }, line: { color: "3A3A3C" },
      });
    }
  });

  // vs Waterfall comparison
  s.addText("Why Incremental over Waterfall?", {
    x: 0.5, y: 3.1, w: 9, h: 0.3,
    fontFace: F.h, fontSize: 13, bold: true, color: C.white, margin: 0,
  });

  const comparisons = [
    { criterion: "Early Working Software", inc: "✓  After each phase", wf: "✗  Only at the end" },
    { criterion: "Handles Evolving Requirements", inc: "✓  Later phases absorb changes", wf: "✗  Scope freeze required" },
    { criterion: "User Feedback", inc: "✓  Per increment", wf: "✗  Only post-delivery" },
    { criterion: "Risk Management", inc: "✓  High-risk first", wf: "✗  Risks surface late" },
  ];

  comparisons.forEach((c, i) => {
    const y = 3.5 + i * 0.44;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 3.2, h: 0.36, fill: { color: "2C2C2E" }, line: { color: "2C2C2E" } });
    s.addText(c.criterion, { x: 0.62, y: y + 0.04, w: 3.0, h: 0.28, fontFace: F.h, fontSize: 9, color: "8E8E93", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 3.78, y, w: 3.0, h: 0.36, fill: { color: "1A3A2A" }, line: { color: "1A3A2A" } });
    s.addText(c.inc, { x: 3.9, y: y + 0.04, w: 2.8, h: 0.28, fontFace: F.h, fontSize: 9, color: "34C759", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 6.86, y, w: 2.64, h: 0.36, fill: { color: "3A1A1A" }, line: { color: "3A1A1A" } });
    s.addText(c.wf, { x: 6.98, y: y + 0.04, w: 2.4, h: 0.28, fontFace: F.h, fontSize: 9, color: "FF453A", margin: 0 });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 7 — Tech Stack
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.grey1 };

  label(s, "Technology Stack", 0.5, 0.32, 5);
  s.addText("Tools & Technologies", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 30, bold: true, color: C.nearBlack, margin: 0,
  });

  const techGroups = [
    {
      group: "Frontend", color: C.blue,
      items: ["HTML / CSS / JavaScript (Vanilla)", "Role-aware page routing with JS guards", "JWT decode for conditional rendering"],
    },
    {
      group: "Backend", color: "34C759",
      items: ["Node.js 20+  ·  Express.js", "JWT (jsonwebtoken)  ·  bcrypt", "express-validator  ·  dotenv  ·  nodemon"],
    },
    {
      group: "Database", color: "FF9F0A",
      items: ["MongoDB Atlas (Cloud)", "Mongoose ODM — 15 collections", "Connection pooling  ·  IP allowlisting"],
    },
    {
      group: "Auth & Security", color: "BF5AF2",
      items: ["JWT stateless token auth", "RBAC middleware (server-side)", "CORS config  ·  Rate limiting"],
    },
    {
      group: "DevOps", color: "FF453A",
      items: ["Render cloud hosting", "Environment variables (never in source)", "GET /health endpoint  ·  GitHub"],
    },
  ];

  techGroups.forEach((g, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const baseW = 2.9;
    const rowXStart = row === 1 ? 1.55 : 0.42;
    const x = rowXStart + col * 3.1;
    const y = 1.25 + row * 2.1;

    card(s, x, y, baseW, 1.82);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 1.82, fill: { color: g.color }, line: { color: g.color } });
    s.addText(g.group, { x: x + 0.2, y: y + 0.15, w: baseW - 0.3, h: 0.28, fontFace: F.h, fontSize: 12.5, bold: true, color: C.nearBlack, margin: 0 });
    g.items.forEach((item, j) => {
      s.addText("— " + item, { x: x + 0.2, y: y + 0.52 + j * 0.4, w: baseW - 0.3, h: 0.35, fontFace: F.h, fontSize: 9, color: C.grey4, margin: 0 });
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 8 — Database Design
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  label(s, "Database Design", 0.5, 0.32, 5);
  s.addText("15 MongoDB Collections — 5 Logical Groups", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 28, bold: true, color: C.nearBlack, margin: 0,
  });

  const groups = [
    { name: "Core / Auth", color: C.blue, collections: ["Users", "Roles", "Permissions", "Role_Permissions"] },
    { name: "Resident", color: "34C759", collections: ["Residents", "Flats"] },
    { name: "Operations", color: "FF9F0A", collections: ["Complaints", "Payments", "Visitor_Logs", "Notices"] },
    { name: "Worker", color: "BF5AF2", collections: ["Workers", "Tasks", "Attendance"] },
    { name: "Comms", color: "FF453A", collections: ["Notifications", "Managers"] },
  ];

  groups.forEach((g, i) => {
    const x = 0.42 + i * 1.88;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.35, w: 1.72, h: 0.38, fill: { color: g.color }, line: { color: g.color } });
    s.addText(g.name, { x, y: 1.4, w: 1.72, h: 0.28, fontFace: F.h, fontSize: 9.5, bold: true, color: C.white, align: "center", margin: 0 });

    g.collections.forEach((c, j) => {
      const yy = 1.85 + j * 0.48;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y: yy, w: 1.72, h: 0.38,
        fill: { color: C.white }, line: { color: g.color, width: 0.75 },
        shadow: cardShadow(),
      });
      s.addText(c, { x, y: yy + 0.05, w: 1.72, h: 0.28, fontFace: F.h, fontSize: 8.5, color: C.nearBlack, align: "center", margin: 0 });
    });
  });

  // Key decisions
  s.addText("Key Design Decisions", {
    x: 0.5, y: 4.25, w: 9, h: 0.28,
    fontFace: F.h, fontSize: 12, bold: true, color: C.nearBlack, margin: 0,
  });

  const decisions = [
    "Single Users table for all roles — role-specific data in separate linked collections",
    "Complaint status as ENUM (Open → Assigned → InProgress → Resolved) for state machine integrity",
    "Soft-delete pattern — records are never hard-deleted, preserving a complete audit trail",
  ];
  decisions.forEach((d, i) => {
    s.addShape(pres.shapes.OVAL, { x: 0.5, y: 4.62 + i * 0.3 + 0.08, w: 0.1, h: 0.1, fill: { color: C.blue }, line: { color: C.blue } });
    s.addText(d, { x: 0.68, y: 4.62 + i * 0.3, w: 8.8, h: 0.28, fontFace: F.h, fontSize: 9.5, color: C.grey4, margin: 0 });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 9 — Results & Status
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.nearBlack };

  label(s, "Results", 0.5, 0.32, 5, "6E6E73");
  s.addText("What We've Built", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 30, bold: true, color: C.white, margin: 0,
  });

  // Big stat cards
  const stats = [
    { n: "3", label: "User Roles\nRBAC Enforced" },
    { n: "15", label: "MongoDB\nCollections" },
    { n: "9", label: "Development\nPhases" },
    { n: "10+", label: "Static Frontend\nPages" },
  ];

  stats.forEach((st, i) => {
    const x = 0.42 + i * 2.38;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.25, w: 2.18, h: 1.42, fill: { color: "2C2C2E" }, line: { color: "3A3A3C" }, shadow: makeShadow() });
    s.addText(st.n, { x, y: 1.35, w: 2.18, h: 0.72, fontFace: F.h, fontSize: 48, bold: true, color: C.blue, align: "center", margin: 0 });
    s.addText(st.label, { x, y: 2.1, w: 2.18, h: 0.5, fontFace: F.h, fontSize: 9, color: "8E8E93", align: "center", margin: 0 });
  });

  // Status checklist
  const checks = [
    { text: "Phase-0: Product definition, role matrix, feature lock", done: true },
    { text: "Phase-1: Full MongoDB schema + API endpoint specification", done: true },
    { text: "Phase-2: JWT auth, bcrypt, RBAC middleware, 3 demo accounts", done: true },
    { text: "Phase-3: Core workflows — complaints, payments, visitors, notices", done: false, active: true },
    { text: "GET /health — server + DB connectivity confirmed", done: true },
    { text: "10+ frontend pages with role-based conditional rendering", done: true },
  ];

  checks.forEach((c, i) => {
    const y = 2.9 + i * 0.42;
    const col = c.done ? "34C759" : c.active ? C.blue : "6E6E73";
    const icon = c.done ? "✓" : c.active ? "→" : "○";
    s.addText(icon, { x: 0.5, y, w: 0.3, h: 0.35, fontFace: F.h, fontSize: 11, bold: true, color: col, margin: 0 });
    s.addText(c.text, { x: 0.88, y, w: 8.6, h: 0.35, fontFace: F.h, fontSize: 10, color: c.done ? C.white : c.active ? C.blue : "6E6E73", margin: 0 });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 10 — Challenges
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.grey1 };

  label(s, "Challenges", 0.5, 0.32, 5);
  s.addText("Challenges & How We Solved Them", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 28, bold: true, color: C.nearBlack, margin: 0,
  });

  const challenges = [
    {
      title: "RBAC on Static Frontend",
      problem: "Users could modify localStorage to bypass JS guards.",
      solution: "Server-side RBAC on every endpoint makes frontend bypass irrelevant.",
    },
    {
      title: "JWT Expiry UX",
      problem: "Silent token expiry caused confusing mid-session 401 errors.",
      solution: "Token expiry checked before each API call with auto-redirect to login.",
    },
    {
      title: "CORS Dev vs Production",
      problem: "localhost and Render URLs require different CORS origins.",
      solution: "CORS origin read from environment variables with localhost fallback.",
    },
    {
      title: "Static Frontend Routing",
      problem: "Direct URL navigation bypasses login guards on HTML pages.",
      solution: "Guard check at top of every protected page script — redirects if no token.",
    },
    {
      title: "Phase-3 Scope Size",
      problem: "Four major workflows in one increment was too large.",
      solution: "Subdivided into Sprint 3A (complaints + payments) and 3B (visitors + notices).",
    },
    {
      title: "Mongoose Schema Sync",
      problem: "Schema changes during Phase-1 conflicted with Phase-2 test data.",
      solution: "Schema version policy: all Phase-1 schema changes finalized before Phase-2 begins.",
    },
  ];

  challenges.forEach((c, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.42 + col * 4.75, y = 1.25 + row * 1.48;
    card(s, x, y, 4.55, 1.32);
    s.addText(c.title, { x: x + 0.18, y: y + 0.1, w: 4.2, h: 0.28, fontFace: F.h, fontSize: 11.5, bold: true, color: C.nearBlack, margin: 0 });
    s.addText("⚠  " + c.problem, { x: x + 0.18, y: y + 0.4, w: 4.2, h: 0.32, fontFace: F.h, fontSize: 9, color: "FF9F0A", margin: 0 });
    s.addText("✓  " + c.solution, { x: x + 0.18, y: y + 0.75, w: 4.2, h: 0.42, fontFace: F.h, fontSize: 9, color: "34A853", margin: 0 });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 11 — Future Scope
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  label(s, "Roadmap", 0.5, 0.32, 5);
  s.addText("Future Scope", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 30, bold: true, color: C.nearBlack, margin: 0,
  });

  const future = [
    { icon: "💳", title: "Real Payment Gateway", desc: "Razorpay / Stripe for online maintenance collection with auto-reconciliation." },
    { icon: "🤖", title: "AI Complaint Triage", desc: "LLM classifier to auto-tag Emergency complaints and suggest assignment." },
    { icon: "📱", title: "Mobile App (React Native)", desc: "Native iOS/Android wrapping the same REST API with FCM push notifications." },
    { icon: "🔐", title: "QR Visitor Entry", desc: "QR code generation for pre-approved guests, scanned at gate by security." },
    { icon: "🗳️", title: "Online Voting", desc: "Digital elections for committee roles with tamper-evident vote records." },
    { icon: "🌐", title: "Multi-Society SaaS", desc: "Multiple societies as isolated tenants under one platform." },
    { icon: "🔧", title: "Predictive Maintenance", desc: "AMC schedule tracking for lifts, generators — alert managers before due dates." },
    { icon: "📡", title: "IoT Sensor Integration", desc: "Water tank levels and generator health on Manager Dashboard in real time." },
  ];

  future.forEach((f, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 0.42 + col * 2.38, y = 1.25 + row * 2.02;
    card(s, x, y, 2.18, 1.85);
    s.addText(f.icon, { x, y: y + 0.18, w: 2.18, h: 0.4, fontFace: F.h, fontSize: 22, align: "center", margin: 0 });
    s.addText(f.title, { x: x + 0.1, y: y + 0.62, w: 1.98, h: 0.34, fontFace: F.h, fontSize: 9.5, bold: true, color: C.nearBlack, align: "center", margin: 0 });
    s.addText(f.desc, { x: x + 0.1, y: y + 0.98, w: 1.98, h: 0.76, fontFace: F.h, fontSize: 8, color: C.grey3, align: "center", margin: 0 });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 12 — Team
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.grey1 };

  label(s, "Team", 0.5, 0.32, 5);
  s.addText("Project Team", {
    x: 0.5, y: 0.58, w: 9, h: 0.5,
    fontFace: F.h, fontSize: 30, bold: true, color: C.nearBlack, margin: 0,
  });

  const team = [
    { name: "Kunal Tailor", prn: "1032233258", roll: "38", role: "Lead Engineer & System Architect", color: C.blue,
      work: "Overall architecture, Phase-2 JWT/RBAC, Phase-3 complaint & payment APIs, MongoDB schema, documentation." },
    { name: "Rishav Singh", prn: "1032233012", roll: "34", role: "Backend Developer", color: "34C759",
      work: "Phase-1 API map, Mongoose models, Phase-3 visitor & notice APIs, Phase-6 validation, Render deployment." },
    { name: "Prakash", prn: "1032233277", roll: "40", role: "Frontend Developer", color: "FF9F0A",
      work: "All role dashboards, login/register UI, complaint & payment components, responsive layout, routing guards." },
    { name: "Anuj Kudu", prn: "1032233203", roll: "36", role: "Testing & Documentation", color: "BF5AF2",
      work: "Phase-5 integration testing, bug log, regression tracking, user docs, system design, final presentation." },
  ];

  team.forEach((m, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.42 + col * 4.75, y = 1.25 + row * 2.12;
    card(s, x, y, 4.55, 1.95);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.08, h: 1.95, fill: { color: m.color }, line: { color: m.color } });
    s.addText(m.name, { x: x + 0.22, y: y + 0.12, w: 4.15, h: 0.32, fontFace: F.h, fontSize: 14, bold: true, color: C.nearBlack, margin: 0 });
    s.addText(m.role, { x: x + 0.22, y: y + 0.44, w: 4.15, h: 0.25, fontFace: F.h, fontSize: 10, color: m.color, bold: true, margin: 0 });
    s.addText("PRN: " + m.prn + "   Roll: " + m.roll, { x: x + 0.22, y: y + 0.7, w: 4.15, h: 0.22, fontFace: F.h, fontSize: 8.5, color: C.grey3, margin: 0 });
    s.addText(m.work, { x: x + 0.22, y: y + 0.98, w: 4.15, h: 0.82, fontFace: F.h, fontSize: 9, color: C.grey4, margin: 0 });
  });

  s.addText("Guide: Yogesh Kulkarni  ·  MIT World Peace University, Pune", {
    x: 0.5, y: 5.28, w: 9, h: 0.22,
    fontFace: F.h, fontSize: 9, color: C.grey3, align: "center", margin: 0,
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 13 — Conclusion / Closing
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.nearBlack };

  // Decorative circles
  s.addShape(pres.shapes.OVAL, { x: -0.8, y: -0.8, w: 4, h: 4, fill: { color: C.blue, transparency: 88 }, line: { color: C.blue, transparency: 88 } });
  s.addShape(pres.shapes.OVAL, { x: 8.5, y: 2.5, w: 3, h: 3, fill: { color: "34C759", transparency: 88 }, line: { color: "34C759", transparency: 88 } });

  label(s, "Conclusion", 0.7, 1.0, 5, "6E6E73");

  s.addText("UrbanHive", {
    x: 0.7, y: 1.28, w: 8.6, h: 0.9,
    fontFace: F.h, fontSize: 58, bold: true, color: C.white, align: "left", margin: 0, charSpacing: -1,
  });

  s.addText("Housing Society Management, Digitised.", {
    x: 0.7, y: 2.22, w: 8.6, h: 0.45,
    fontFace: F.h, fontSize: 20, color: "8A8A8E", align: "left", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.82, w: 1.5, h: 0.02, fill: { color: C.blue }, line: { color: C.blue } });

  s.addText("A clean three-tier, role-aware architecture proving that open-source technologies — Node.js, Express, MongoDB, and vanilla JavaScript — are sufficient to build a production-grade, privacy-conscious society management platform.", {
    x: 0.7, y: 3.0, w: 7.8, h: 0.82,
    fontFace: F.h, fontSize: 12, color: "AEAEB2", align: "left", margin: 0,
  });

  s.addText("MIT World Peace University, Pune  ·  2025–2026", {
    x: 0.7, y: 5.1, w: 8.6, h: 0.25,
    fontFace: F.h, fontSize: 9.5, color: "6E6E73", align: "left", margin: 0,
  });
}

// ─── Write file ─────────────────────────────────────────────────────────────
pres.writeFile({ fileName: "UrbanHive_Presentation.pptx" })
  .then(() => console.log("DONE"))
  .catch(e => { console.error(e); process.exit(1); });

 
# 🏥 Healthcare Appointment Manager

A full‑stack web application designed to streamline healthcare appointment scheduling and management for **patients**, **doctors**, and **admins**.

---

## 🚀 Overview
The Healthcare Appointment Manager provides a unified platform for booking, managing, and tracking medical appointments.  
It integrates intelligent features like **LLM‑powered visit summaries**, **Google Calendar sync**, and **automated medication reminders**.

---

## 🧩 Tech Stack
| Layer | Technologies |
|-------|---------------|
| **Frontend** | Next.js (React), CSS Modules |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT‑based role‑based access (patient / doctor / admin) |
| **AI Integration** | OpenAI / Azure OpenAI for pre‑visit and post‑visit summaries |
| **Email Service** | Nodemailer / SendGrid / Mailgun |
| **Calendar Integration** | Google Calendar API with OAuth 2.0 |
| **Background Jobs** | Node‑Cron / Bull for reminders and retries |

---

## ⚙️ Features
- 🔐 **Role‑based authentication** for patients, doctors, and admins  
- 📅 **Appointment booking and management** with conflict prevention  
- 🧠 **LLM integration** for generating pre‑visit and post‑visit summaries  
- 💊 **Medication reminders** and **email retry jobs**  
- 📧 **Automated notifications** via email and calendar invites  
- 🩺 **Doctor leave and availability management**  
- 🧾 **Comprehensive documentation** (API, DB schema, system design)

---

## 🗂️ Project Structure
healthcare-appointment-manager/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── pages/
│   ├── components/
│   └── package.json
│
├── docs/
│   ├── API.md
│   ├── DB_SCHEMA.md
│   ├── SYSTEM_DESIGN.md
│   ├── LLM_PROMPTS.md
│   └── GOOGLE_CALENDAR.md
│
└── .env.example

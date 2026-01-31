# Visa Slot Alert Tracker – The Flying Panda
- **Deployed Link:** [visa-slot-alerts](https://visa-slot-alerts.netlify.app/) <br>


    A mini internal tool built to help teams track visa slot alerts by country, city, and visa type.  
    The project demonstrates clean full-stack architecture, realistic API design, and practical product thinking.

---

## 🧩 Problem Statement

The Flying Panda team needs a simple internal dashboard to manage visa slot alerts.  
Each alert tracks:
- Country and city
- Visa type (Tourist / Business / Student)
- Current status (Active / Booked / Expired)

The tool allows team members to create, view, update, and delete alerts efficiently.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Joi (validation)

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion

### DevOps / Deployment
- Backend: Render
- Frontend: Netlify

---

## 📁 Project Structure
```
  visa-slot-alerts/
├── backend/
│ └── src/
│     ├── controllers/
│     ├── models/
│     ├── routes/
│     ├── middleware/
│     └── config/
├── frontend/
│ └── src/
│     ├── api/
│     ├── components/
│     └── pages/
└── README.md
```

---

## ⚙️ Backend Features

- RESTful APIs
  - `GET /alerts`
  - `POST /alerts`
  - `PUT /alerts/:id` (status only)
  - `DELETE /alerts/:id`
- MongoDB Atlas for data storage
- Joi-based input validation (middleware)
- Custom logger middleware
- Query filters (`country`, `status`)
- Pagination support (`page`, `limit`)
- Centralised error handling

---

## 🎨 Frontend Features

- Responsive UI (mobile + desktop)
- Form to create alerts
- Table view on desktop, card view on mobile
- Status update via dropdown
- Delete alerts with clear destructive action
- Pagination with Next / Previous buttons
- Subtle animations using Framer Motion
- API integration using environment-based URLs

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AnoopPatel582/visa-slot-alerts
cd visa-slot-alerts
```
### 2️⃣ Backend Setup
```
  cd backend
  npm install
```
Create a `.env` file:
```
  PORT=5000
  MONGO_URI=your_mongodb_atlas_connection_string
```
Run backend:
```
  node server.js
```
### 3️⃣ Frontend Setup
```
  cd frontend
  npm install
```
Create `.env` :
```
  VITE_API_URL=http://localhost:5000
```
Run frontend:
```
  npm run dev
```
---

## 🧠 Design Decisions
- MongoDB Atlas chosen for realistic cloud-based persistence.
- Controller-based backend architecture for scalability and clarity.
- Joi validation middleware keeps controllers clean and ensures consistent input validation.
- Status-only updates prevent unintended data modification.
- Pagination added to support future scalability.
- Tailwind CSS + mobile-first design for clean and responsive UI.
- Framer Motion used sparingly to enhance UX without overdesign.

---

## 🔮 What I’d Improve for Production
- Authentication & role-based access control
- Search and sorting on alerts
- Server-side caching
- Rate limiting
- Logging to external monitoring service
- Automated tests (Jest / Supertest)
- CI/CD pipeline

---

## 🤖 AI Usage Disclosure
- AI helped with:
  - Code structure suggestions
  - Validation patterns
  - Pagination logic references
  - README structuring
- I had to think independently about:
  - Data modeling decisions
  - API behavior and status codes
  - UX and responsiveness choices
  - Pagination UX flow
  - Deployment architecture and trade-offs

---

## 👤 Author
- Anoop Patel
- B.Tech Mechanical Engineering, NIT Sikkim

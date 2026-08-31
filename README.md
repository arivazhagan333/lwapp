# Livewire Salem MERN Stack Web Application

A full-stack replica of the official [Livewire Salem](https://livewiresalem.com/) website built using the **MERN (MongoDB, Express, React, Node.js)** stack with Tailwind CSS, Lucide icons, dynamic course curriculum management, and a student lead inquiry CRM dashboard.

---

## 🌟 Key Features

1. **Modern Responsive UI (React + Tailwind CSS)**:
   - Header with dual Salem branch contacts, toll-free number, email, and ISO 29990 certification badge.
   - Categorized Mega-Menu navigation matching the official Livewire catalog:
     - Software Development (Python, Java, Full Stack MERN/MEAN, C/C++, Django)
     - IT Infrastructure Management (Ethical Hacking, CCNA, Linux Server Admin)
     - Electronic Design Automation & Industrial Automation (ETAP, PLC & SCADA, AutoCAD)
     - Special Programs (AI, Machine Learning, Data Science, Power BI, Digital Marketing, Selenium Testing)
   - Interactive Hero Carousel with fast-track enrollment CTAs.
   - Value Pillars & Live Counter Statistics (100k+ Trained Students, 36+ Technologies, 6 Countries, 50+ College MOUs).
   - Dynamic Course Directory with real-time category filtering and search.
   - Course Details Page with module-by-module syllabus breakdown and direct sidebar inquiry.
   - Campus Gallery & Academic Association Milestones.
   - Dual Salem Branch Locations with interactive Google Maps embeds.
   - Floating WhatsApp live chat launcher and global quick inquiry modal.

2. **Backend API (Node.js + Express + MongoDB/Mongoose)**:
   - `GET /api/courses` - Retrieve all courses with category/search/trending filters.
   - `GET /api/courses/:slug` - Retrieve detailed syllabus and career profiles for a course.
   - `POST /api/inquiries` - Submit student inquiry/lead with instant validation.
   - `GET /api/inquiries` - Fetch and filter inquiries for admissions counseling.
   - `PATCH /api/inquiries/:id` - Update inquiry status (`New`, `Contacted`, `Counseling Scheduled`, `Enrolled`, `Closed`).
   - `DELETE /api/inquiries/:id` - Delete lead record.
   - Automatic seeding of Livewire course curriculum on initial launch.
   - Built-in resilient memory fallback mode if MongoDB is not locally running.

3. **Admin Lead CRM Dashboard (`/admin`)**:
   - Filter leads by status and search by student details.
   - Change lead pipeline stage directly with instant database updates.
   - Export student lead submissions to CSV for counselor follow-ups.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- MongoDB (optional - the server runs with built-in memory fallback if MongoDB is not active)

### Installation

1. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend API Server (Port 5000)**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend Development Server (Port 5173)**:
   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to:
   - **Frontend App**: [http://localhost:5173](http://localhost:5173)
   - **Admin Lead Dashboard**: [http://localhost:5173/admin](http://localhost:5173/admin)
   - **Backend API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 📁 Project Structure

```
livewire-mern/
├── backend/
│   ├── src/
│   │   ├── config/db.js           # Database connection & status
│   │   ├── controllers/           # Course & Inquiry business logic
│   │   ├── data/seedCourses.js    # Preloaded Livewire curriculum data
│   │   ├── models/                # Mongoose Course & Inquiry schemas
│   │   ├── routes/                # Express API routes
│   │   └── server.js              # Express app entry point
│   ├── .env                       # Environment configuration
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/            # EnquiryModal, FloatingWhatsApp
│   │   │   └── layout/            # HeaderTop, Navbar, Footer
│   │   ├── pages/                 # Home, About, Courses, CourseDetail, Gallery, Contact, Admin
│   │   ├── services/api.js        # Axios API client
│   │   ├── App.jsx                # Router & Global Layout
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

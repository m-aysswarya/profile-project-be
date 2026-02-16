
# 🚀 Profile Project – Backend API

**Gidy.ai Full-Stack Technical Challenge Submission**

## 🔗 Live API

**Live Backend URL:**
https://profile-project-be.onrender.com/api/profile

**Frontend Application:** 
https://profile-project-pi.vercel.app/

**GitHub Repository:** 
https://github.com/m-aysswarya/profile-project-be

---

# 📌 Project Overview

This is the backend service for the Gidy.ai Profile Page replica.

It provides a RESTful API that manages profile data including:

* Personal Information (Name, Bio, Profile Picture)
* Social Links
* Skills
* Experience
* Certifications
* Theme persistence support (frontend-driven)

The backend is built using Node.js and Express, with MongoDB as the database.

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

---

# 🧩 System Architecture

The backend follows a modular and scalable structure:

```
src/
 ├── config/
 │    └── db.js
 ├── models/
 │    └── Profile.js
 ├── controllers/
 ├── routes/
 ├── middleware/
 └── server.js
```

### Architecture Principles:

* Separation of concerns
* RESTful design
* Clean controller logic
* Schema-based validation using Mongoose
* Environment-based configuration

---

# 📡 API Endpoints

## Profile

### 🔹 Get Profile

```
GET /api/profile
```

Returns the complete profile data.

---

### 🔹 Update Profile

```
PUT /api/profile
```

Updates profile information such as:

* Name
* Bio
* Profile picture
* Social links

---

## Skills

```
POST   /api/profile/skills
PUT    /api/profile/skills/:id
DELETE /api/profile/skills/:id
```

---

## Experience

```
POST   /api/profile/experience
PUT    /api/profile/experience/:id
DELETE /api/profile/experience/:id
```

---

## Certifications (if implemented)

```
POST   /api/profile/certifications
PUT    /api/profile/certifications/:id
DELETE /api/profile/certifications/:id
```

---

# 🗄 Database Schema (Simplified)

```js
Profile {
  name: String,
  bio: String,
  profilePicture: String,
  socialLinks: [
    {
      platform: String,
      url: String
    }
  ],
  skills: [
    {
      name: String,
      level: String
    }
  ],
  experience: [
    {
      role: String,
      companyName: String,
      startDate: Date,
      endDate: Date
    }
  ],
  certifications: [
    {
      title: String,
      issuer: String,
      date: Date
    }
  ]
}
```

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/profile-backend.git
cd profile-backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Environment Variables

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

⚠️ The `.env` file is excluded using `.gitignore` to protect sensitive credentials.

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# 🔐 Security & Best Practices

* Environment variables managed via dotenv
* Sensitive data excluded from version control
* CORS configured for frontend communication
* Structured error handling
* Clean RESTful endpoint design

---

# 🚀 Deployment

Backend is deployed on:

👉 https://profile-project-be.onrender.com/api/profile

Configured using environment variables on the hosting platform (Render).

---

# 📈 Technical Highlights

* Modular architecture
* Scalable schema design
* RESTful API principles
* Clear separation between frontend and backend
* Clean and maintainable codebase

---

# 👩‍💻 Author

**Ayswarya M**
Full-Stack Developer
GitHub: [https://github.com/m-aysswarya](https://github.com/m-aysswarya)

---

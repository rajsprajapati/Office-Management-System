# 🏢 Office Management System

This is a simple Office Management System built with **Node.js**, **Express**, **MongoDB**, and **EJS**. It supports managing employees and departments with full CRUD operations, dynamic location data using CountriesNow API, and authentication for admins.

---

## 📁 Features

- CRUD for Employees and Departments
- Country, State, City dropdown integration (via CountriesNow API)
- Admin login/signup with JWT Authentication
- Server-side pagination, filtering, and search
- Clean EJS-based frontend with responsive CSS
- MongoDB + Mongoose for data modeling

---

## 🚀 Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- EJS
- Axios
- CountriesNow API
- JWT for Authentication
- Method Override (for DELETE/PUT)
- Tailwind / CSS (custom)

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajsprajapati/Office-Management-System.git
   cd office management system

2. **Install dependencies**
    npm install

3. **Create .env file**
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key

4. **Run the app**
    npm start

5. **Hot-reloading when files change**
    npm run dev

6. **Employees Data**
    http://localhost:3500/employees/

7. **Departments Data**
    http://localhost:3500/department/
# 🏢 Office Management System

This is a simple Office Management System built with **Node.js**, **Express**, **MongoDB**, and **EJS**. It supports managing employees and departments with full CRUD operations, dynamic location data using CountriesNow API, and authentication for admins.

---

## 📁 Features

- CRUD for Employees and Departments
- Country dropdown integration (via CountriesNow API)
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
- Method Override (for DELETE/PUT)
- CSS custom

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajsprajapati/Office-Management-System.git
   cd office-management-system

2. **Install dependencies**
    ```bash
    npm install

3. **Create .env file**
    ```bash
    MONGODB_URI=your_mongodb_connection_string

4. **Run the app**
    ```bash
    npm start

5. **Hot-reloading when files change**
    ```bash
    npm run dev

6. **Employees Data**
    ```bash
    http://localhost:3500/employees/

7. **Departments Data**
    ```bash
    http://localhost:3500/department/
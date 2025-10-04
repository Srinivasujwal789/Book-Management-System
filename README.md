# Book Management System

The Book Management System is a **full-stack web application** built using the MERN stack (MongoDB, Express, React, Node.js).  
It allows users to **manage books efficiently**, providing CRUD (Create, Read, Update, Delete) operations, search functionality, user authentication, and a responsive dashboard.

---

## Features

### User Authentication & Roles
- **Admin** can manage books, view all users, and access the dashboard.
- **Regular Users** can view books, add books to their collection, and update their profiles.
- Secure authentication with **JWT tokens** and password hashing.

### Book Management
- **Add, edit, delete, and view books** with details like title, author, genre, and published year.
- **Search and filter books** by title, author, or genre.
- Display books in a **responsive, paginated list**.

### Dashboard & Analytics
- Interactive dashboard shows **total books, categories, and recent activity**.
- Provides charts for visual representation of library stats.

### RESTful API
- Backend built using **Express.js** and **MongoDB**.
- Separate routes for **books, users, and authentication**.
- Supports integration with frontend and other services.

### Frontend
- **React.js** with **Redux** for state management.
- **Tailwind CSS** for modern, responsive styling.
- User-friendly interface with **add/edit forms, tables, and notifications**.

---

## Tech Stack

See [TECHNOLOGIES.md](TECHNOLOGIES.md) for complete stack details.

---

## Installation

### Prerequisites
- Node.js v16+
- MongoDB
- npm or yarn

### Backend
bash
cd server
npm install
npm run dev   # Starts backend at http://localhost:5000

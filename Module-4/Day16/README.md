# Authorization-Based TODO Application

A secure TODO application built with **Node.js, Express, Supabase, and JWT-based Authorization**.

---

## 🚀 Features
- User signup with hashed passwords (bcrypt)
- User login with JWT token (1 hour expiry)
- Protected routes using Authorization middleware
- User-specific TODO CRUD operations
- Ownership validation (users can only manage their own todos)

---

## 📂 Project Structure
# Authorization-Based TODO Application

A secure TODO application built with **Node.js, Express, Supabase, and JWT-based Authorization**.

---

## 🚀 Features
- User signup with hashed passwords (bcrypt)
- User login with JWT token (1 hour expiry)
- Protected routes using Authorization middleware
- User-specific TODO CRUD operations
- Ownership validation (users can only manage their own todos)

---

## 📂 Project Structure
# Authorization-Based TODO Application

A secure TODO application built with **Node.js, Express, Supabase, and JWT-based Authorization**.

---

## 🚀 Features
- User signup with hashed passwords (bcrypt)
- User login with JWT token (1 hour expiry)
- Protected routes using Authorization middleware
- User-specific TODO CRUD operations
- Ownership validation (users can only manage their own todos)

---

## 📂 Project Structure
src/
 ├── config/
 │    └── supabase.js
 ├── middleware/
 │    └── auth.middleware.js
 ├── routes/
 │    ├── auth.routes.js
 │    └── todo.routes.js
 ├── controllers/
 │    ├── auth.controller.js
 │    └── todo.controller.js
 ├── app.js
 └── server.js
.env
.env.example
package.json
README.md


---

## 🗄️ Database Schema (Supabase)

### users table
```sql
create table users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  password text not null,
  created_at timestamp default now()
);

create table todos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  completed boolean default false,
  user_id uuid references users(id) on delete cascade,
  created_at timestamp default now()
);

npm install

SUPABASE_URL=https://gcllmnzbfwgyfssvqdbz.supabase.co
SUPABASE_KEY=sb_publishable_qXEvlnqmomgPDmYahd2m-Q_6OD2a_Vn
JWT_SECRET=9f8a7c6d5e4b3a2c1d0flughuto56873
PORT=5000

node src/server.js

npm start

 API Endpoints
Auth
• 	POST /api/signup → Register new user
• 	POST /api/login → Login and get JWT token
Todos (Protected)
• 	POST /api/todos → Create todo
• 	GET /api/todos → Get all todos for logged-in user
• 	PUT /api/todos/:id → Update todo (only if owned by user)
• 	DELETE /api/todos/:id → Delete todo (only if owned by user)

 Example Usage (Postman)
Signup
 POST http://localhost:5000/api/signup
{
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "password": "123456"
}

Login 
POST http://localhost:5000/api/login
{
  "email": "ravi@gmail.com",
  "password": "123456"
}

Create Todo
POST http://localhost:5000/api/todos
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmNjI0ZDA0Mi1jMmJhLTQ1YzItOWNiMi0xZWExYTFiMzhmMGIiLCJlbWFpbCI6InJhdmlAZ21haWwuY29tIiwiaWF0IjoxNzcwMDMwMjYxLCJleHAiOjE3NzAwMzM4NjF9.xUTRTGodnPSXI4M_FjKvGUmAPRDEsobg0kZI321nfWg
{
  "title": "Finish project"
}

---

This README gives you a **ready-to-use documentation file**. You can copy it into your project root as `README.md`.  

Would you like me to also generate the `.env.example` file content so your repo is complete and easy for others to run.

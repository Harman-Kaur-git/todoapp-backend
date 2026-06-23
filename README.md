# ✅ Todo App

A full-stack **Todo web application** built with **Node.js**, **Express**, **EJS**, and a **RESTful API** secured with **JWT authentication**. No database required — data is stored in **JSON files**. Auth is handled via **User ID + JWT**, keeping the stack lightweight and zero-dependency on any DB.

## 🌍 Live Demo

| App | Link |
|---|---|
| 🚀 Todo App (Backend) | [todoapp-backend-production-19aa.up.railway.app/todo](https://todoapp-backend-production-19aa.up.railway.app/todo) |

---

## 🚀 Features

- 🔐 **JWT Authentication** — Login with User ID, receive a signed JWT, access protected routes
- 🗂️ **JSON File Storage** — No database needed; users and todos stored in local `.json` files
- 📋 **Full CRUD** — Create, Read, Update, Delete todos per user
- 🌐 **RESTful API** — Clean API endpoints for all todo operations
- 🖥️ **EJS Templating** — Server-side rendered views with dynamic content
- 🛡️ **Auth Middleware** — JWT verified on every protected route, user ID extracted from token
- 📦 **MVC Structure** — Organized codebase with controllers, routes, and middleware

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Templating | EJS |
| Auth | JWT (`jsonwebtoken`) |
| Storage | JSON Files (fs module) |

---

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
SESSION_SECRET=my_super_secret_123
PORT=8080
```

### 4. Run the app
---
npm start
```

Visit `http://localhost:8080/todo


---

## 🔒 How Authentication Works


1. User registers → assigned a unique **User ID**, saved in `data/users.json`
2. User logs in with their **User ID** → server looks up the ID in `users.json`
3. On match → server signs a **JWT** containing the `userId` as payload
4. JWT sent to client (cookie or Authorization header)
5. Every protected route passes token through **auth middleware**
6. Middleware verifies JWT → extracts `userId` → attaches to `req.user`
7. Todos in `data/todos.json` are filtered by `userId` so each user sees only their own



---


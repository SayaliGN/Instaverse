# 📸 Instaverse

A full-stack MERN (MongoDB, Express.js, React, Node.js) application where users can share and view posts — like a mini Instagram clone. Built using modern tools like Redux Toolkit and MUI (Material UI v5+).

---

## 🚀 Tech Stack

### 💻 Frontend (`client`)

- React 19+
- Redux Toolkit
- Redux Thunk
- Material UI v7+
- Axios
- Moment.js

### 🌐 Backend (`server`)

- Node.js
- Express.js
- MongoDB
- Mongoose

## 🛠️ Setup Instructions

```bash
git clone https://github.com/SayaliGN/Instaverse
cd instaverse

✅ 2. Setup Frontend

    cd client
    npm install
    npm start

✅ 3. Setup Backend
    cd server
    npm install
    npm start


---

## 🐳 How to Run This Application Using Docker

### ✅ Prerequisites

- **Docker Desktop** installed  
  [👉 Download for Windows (AMD64)](https://docs.docker.com/desktop/install/windows-install/)

---

### ⚙️ Step 1: Build and Start Containers

Open a terminal in the **root folder** (where `docker-compose.yml` exists), and run:

```bash
docker-compose up --build

### 🌐 Step 2: Access the App in Browser

Once containers are running:

Frontend (React UI):
👉 http://localhost:3000

Backend API (Express):
👉 http://localhost:5000/posts

MongoDB: runs in the background on internal port 27017

### 🛑 Step 4: Stopping the App

docker-compose down


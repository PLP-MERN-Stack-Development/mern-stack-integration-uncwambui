# Mern Blog — Setup Instructions

##  Prerequisites
Before running the project, make sure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Git

---

## 🖥️ Backend Setup (Server)
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server/` directory:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/mern_blog
   PORT=5000
   ```

4. Start MongoDB (for local users):
   ```bash
   mongod
   ```

5. Run the backend server:
   ```bash
   npm run dev
   ```

The server should now be running on **http://localhost:5000**.

---

## Frontend Setup (Client)
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `client/` directory:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. Start the client:
   ```bash
   npm run dev
   ```

The frontend should now be available at **http://localhost:5173**.

---

##  Testing the App
- Visit **http://localhost:5173** to view the React app.
- The home page displays demo posts seeded from `server.js`.
- Navigate between pages using the Navbar links.

---

##  Common Issues
- **MongoDB connection refused:** Ensure `mongod` is running locally or update your `.env` with a MongoDB Atlas URI.
- **CORS error:** Ensure your backend has `app.use(cors({ origin: 'http://localhost:5173' }))` configured.
- **500 Internal Server Error:** Check that your `.env` variables match correctly and that the MongoDB URI is valid.

---

##  Submission Reminder
- Commit and push your changes frequently.
- Include screenshots in your README.md.
- Include `.env.example` in both `client` and `server` folders.
- Ensure your repository contains both **client** and **server** code before submission.

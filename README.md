# GlowLife Blog — MERN Stack Integration Assignment

##  Project Overview
GlowLife is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** blog application that demonstrates seamless front-end and back-end integration.  
Users can view, create, and manage blog posts while interacting with a dynamic and visually appealing interface built using React and Tailwind CSS.

---

##  Features
- Full CRUD operations for blog posts (Create, Read, Update, Delete)
- RESTful API using Express and Mongoose
- MongoDB database integration
- React front-end built with Vite
- Context API for state management
- Form validation and error handling
- Responsive UI with Tailwind CSS
- Dynamic Navbar and Footer
- Category management
- Sample data seeding for initial posts

---

## Project Structure
```
mern-stack-integration-uncwambui/
├── client/                 # React front-end
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── pages/          # Pages (Home, PostList, PostView, PostForm, About)
│   │   ├── context/        # React Context for global state (PostContext)
│   │   └── App.jsx         # Main React App
│   ├── vite.config.js
│   └── package.json
│
├── server/                 # Express back-end
│   ├── config/db.js        # MongoDB connection setup
│   ├── models/             # Mongoose schemas (Post, Category)
│   ├── routes/             # API routes for posts & categories
│   ├── controllers/        # Logic for handling requests
│   ├── middleware/         # Error handling & validation
│   ├── server.js           # Entry point for backend server
│   └── package.json
│
├── .env.example            # Example environment variables
├── README.md               # Documentation file
└── SETUP.md                # Step-by-step setup guide
```

---

## ⚙️ Technologies Used
**Front-End:** React, Vite, Tailwind CSS, React Router, Framer Motion  
**Back-End:** Node.js, Express.js, Mongoose  
**Database:** MongoDB  
**Other Tools:** dotenv, nodemon, CORS

---

## 📡 API Endpoints
### Posts
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/posts` | Get all blog posts |
| GET | `/api/posts/:id` | Get a single post |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

### Categories
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/categories` | Get all categories |
| POST | `/api/categories` | Create a new category |

---

## Advanced Features (Optional)
- User authentication (JWT)
- Image upload (Cloudinary or Multer)
- Pagination and filtering
- Comments section

---

## Screenshots
_Add screenshots of your app showing Home, Blog List, and Post View._

---

## License
This project is part of an academic assignment.


##  Resources
- MongoDB Documentation
- Express.js Documentation
- React Documentation
- Node.js Documentation
- Mongoose Documentation
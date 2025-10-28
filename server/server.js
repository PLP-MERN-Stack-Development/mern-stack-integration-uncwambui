const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

app.use(cors({
  origin: 'http://localhost:5173'
}));


// Error handling middleware
app.use(errorHandler);


const Post = require('./models/Post');

const seedPostsIfEmpty = async () => {
  const count = await Post.countDocuments();
  if (count === 0) {
    await Post.insertMany([
      {
        title: "Morning Skincare Routine for Glowing Skin",
        content: "Start your day with a gentle cleanser, followed by a hydrating toner and vitamin C serum. Always apply sunscreen before leaving the house to protect your skin from UV damage.",
        author: "E w"
      },
      {
        title: "Top 5 Lipstick Shades for Every Occasion",
        content: "From nude pinks for daytime to bold reds for nights out, here are five must-have lipstick shades that suit all skin tones.",
        author: "J Krown"
      },
      {
        title: "Self-Care Sundays: Relax and Recharge",
        content: "Sundays are perfect for taking care of yourself. Try a bubble bath, light a candle, and spend a few minutes journaling about what you’re grateful for this week.",
        author: "E w"
      },
    ]);
    console.log("✅ Demo posts seeded!");
  }
};


const PORT = process.env.PORT || 5000;

// 🟢 Connect to DB first, then seed, then start server
connectDB().then(async () => {
  await seedPostsIfEmpty();
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
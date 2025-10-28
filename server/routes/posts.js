const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // import the Post model

// ✅ Seed demo posts (run once)
router.get('/seed', async (req, res) => {
  try {
    await Post.deleteMany();

    const posts = await Post.insertMany([
      {
        title: "Morning Skincare Routine for Glowing Skin",
        content: "Start your day with a gentle cleanser, followed by a hydrating toner and vitamin C serum. Always apply sunscreen before leaving the house to protect your skin from UV damage.",
        author: "Eunice Wambui"
      },
      {
        title: "Top 5 Lipstick Shades for Every Occasion",
        content: "From nude pinks for daytime to bold reds for nights out, here are five must-have lipstick shades that suit all skin tones.",
        author: "Eunice Wambui"
      },
      {
        title: "Self-Care Sundays: Relax and Recharge",
        content: "Sundays are perfect for taking care of yourself. Try a bubble bath, light a candle, and spend a few minutes journaling about what you’re grateful for this week.",
        author: "Eunice Wambui"
      },
      {
        title: "10-Minute Everyday Makeup Routine",
        content: "For busy mornings, focus on essentials — BB cream, mascara, and a touch of blush can make a big difference. Keep it light and fresh for a natural glow.",
        author: "Eunice Wambui"
      },
      {
        title: "Healthy Hair Habits You Need to Try",
        content: "Switch to sulfate-free shampoos, limit heat styling, and trim your ends regularly. Your hair will thank you with more shine and strength!",
        author: "Eunice Wambui"
      },
    ]);

    res.json({ message: "✅ Seed data added successfully!", posts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json({ data: posts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

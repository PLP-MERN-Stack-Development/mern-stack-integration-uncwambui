const Post = require('../models/Post');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
};

exports.seedPosts = async (req, res, next) => {
  try {
    await Post.deleteMany();
    const demoPosts = [
      { title: 'Morning Skincare Routine', content: 'Start your day right...' },
      { title: '5 Lipstick Shades You Need', content: 'Red, nude, pink...' },
      { title: 'Self-Care Sundays', content: 'Unplug and relax...' },
    ];
    const created = await Post.insertMany(demoPosts);
    res.json({ message: 'Seed data added', created });
  } catch (err) {
    next(err);
  }
};

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function PostForm() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await api.post("/posts", form);
      setMessage("✅ Post created successfully!");
      setForm({ title: "", content: "", author: "", category: "" });
      setTimeout(() => navigate("/posts"), 1500); // redirect to post list
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mt-10 rounded-2xl shadow">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Create New Blog Post</h1>
      {message && <p className="mb-4 text-center text-lg">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            required
            rows="6"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Select category</option>
            <option value="Skincare">Skincare</option>
            <option value="Makeup">Makeup</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Haircare">Haircare</option>
            <option value="Wellness">Wellness</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          {loading ? "Saving..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}

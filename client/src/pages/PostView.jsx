import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await api.get(`/posts/${id}`);
        setPost(data);
      } catch (err) {
        setError("Failed to load post. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading post...</p>;

  if (error)
    return (
      <div className="text-center mt-10 text-red-600">
        <p>{error}</p>
        <Link
          to="/posts"
          className="mt-4 inline-block text-pink-600 hover:underline"
        >
          ← Back to Posts
        </Link>
      </div>
    );

  if (!post)
    return (
      <div className="text-center mt-10 text-gray-600">
        <p>No post found.</p>
        <Link
          to="/posts"
          className="mt-4 inline-block text-pink-600 hover:underline"
        >
          ← Back to Posts
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

      <p className="text-sm text-gray-500 mb-6">
        By <span className="font-semibold">{post.author}</span> •{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl mb-6"
        />
      )}

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        {post.content}
      </div>

      {post.category && (
        <p className="mt-6 text-sm text-gray-500">
          Category:{" "}
          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </p>
      )}

      <div className="mt-10">
        <Link
          to="/posts"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-lg transition-all"
        >
          ← Back to Posts
        </Link>
      </div>
    </div>
  );
}

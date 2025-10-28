import { usePosts } from "../context/PostContext";
import { Link } from "react-router-dom";

export default function PostList() {
  const { posts, loading, error } = usePosts();

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error)
    return <p className="text-red-600 text-center mt-10">Error: {error}</p>;
  if (!posts || posts.length === 0)
    return <p className="text-center mt-10">No posts available yet.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-600">
        GlowLife Blog
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
       
            <div className="h-48 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center text-pink-500 text-lg font-semibold px-4 text-center">
              {p.title}
            </div>

            <div className="p-4">
              <Link
                to={`/posts/${p._id}`}
                className="block text-xl font-semibold text-gray-800 hover:text-pink-600 mb-2"
              >
                {p.title}
              </Link>
              <p className="text-gray-600 text-sm mt-2">
                {p.content.slice(0, 150)}...
              </p>
              <p className="text-xs text-gray-400 mt-1">By {p.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { usePosts } from "../context/PostContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { posts, loading, error } = usePosts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">GlowLife</h1>
        <p className="text-gray-600 text-lg">
          Your go-to destination for lifestyle, beauty, and self-care tips.
        </p>
      </div>

      {/* Featured Posts */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Posts</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 6).map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            
            <div className="h-40 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center text-pink-500 text-lg font-semibold px-4 text-center">
              {p.title}
           </div>

            <div className="p-4">
              <Link
                to={`/posts/${p._id}`}
                className="block text-lg font-semibold text-gray-800 hover:text-pink-600 mb-2"
              >
                {p.title}
              </Link>
              <p className="text-gray-600 text-sm">
                {p.content.slice(0, 80)}...
              </p>
              <p className="text-xs text-gray-400 mt-1">By {p.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

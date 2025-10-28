import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

// Create the Context
const PostContext = createContext();

// Provider component — wraps your app
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch posts from backend
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await api.get('/posts');
      setPosts(res.data.data || []); // fallback for empty data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch once when mounted
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading, error, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};

// ✅ Custom Hook to access the posts context
export const usePosts = () => {
  return useContext(PostContext);
};

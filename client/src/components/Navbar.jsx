import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-pink-300 via-rose-200 to-pink-300 shadow-lg backdrop-blur-md"
          : "bg-pink-100/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-700 hover:text-pink-800 transition-colors"
        >
          GlowLife
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-pink-700" : "text-gray-700 hover:text-pink-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-pink-700" : "text-gray-700 hover:text-pink-600"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/posts/new"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-pink-700" : "text-gray-700 hover:text-pink-600"
              }`
            }
          >
            Create
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-pink-700" : "text-gray-700 hover:text-pink-600"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-pink-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gradient-to-r from-pink-200 via-rose-100 to-pink-200 shadow-inner px-6 py-4 space-y-4"
          >
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-pink-700 font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/posts"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-pink-700 font-medium"
            >
              Blog
            </NavLink>
            <NavLink
              to="/posts/new"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-pink-700 font-medium"
            >
              Create
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-pink-700 font-medium"
            >
              About
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

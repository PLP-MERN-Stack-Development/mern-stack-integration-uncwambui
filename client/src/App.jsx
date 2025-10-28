import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ use BrowserRouter
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import PostView from "./pages/PostView";
import About from "./pages/About";
import PostForm from "./pages/PostForm";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow p-4 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;

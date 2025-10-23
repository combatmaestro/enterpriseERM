import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const EnterpriseBlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://cyber-vie-learning-platform-client-ten.vercel.app/blogs/");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const createSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-center mb-10">Our Blogs</h1>

        {loading && <div className="text-center text-gray-500">Loading...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        {!loading && !error && blogs.length === 0 && (
          <div className="text-center text-gray-500">No blogs available</div>
        )}

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p
                  className="text-gray-700 mb-4 flex-grow"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.content.length > 150
                        ? blog.content.substring(0, 150) + "..."
                        : blog.content,
                  }}
                />
                <Link
                   to={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")}`}
                  state={{ blog }}
                  className="bg-[#2F2E8B] hover:bg-[#262577] text-white px-4 py-2 rounded text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnterpriseBlogsList;

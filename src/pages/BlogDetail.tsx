import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();

  // If the blog was passed via Link state, we can use it directly
  const [blog, setBlog] = useState(location.state?.blog || null);
  const [loading, setLoading] = useState(!location.state?.blog);
  const [error, setError] = useState("");

  useEffect(() => {
    // If blog already passed via state, no need to fetch again
    if (location.state?.blog) return;

    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://cyber-vie-learning-platform-client-ten.vercel.app/blogs/");
        const data = await response.json();

        const foundBlog = data.data.find(
          (b) =>
            b.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "") === slug
        );

        if (!foundBlog) throw new Error("Blog not found");
        setBlog(foundBlog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, location.state]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading && <div className="text-center text-gray-500">Loading...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}

        {blog && (
          <article className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold mb-4 text-[#2F2E8B]">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <div
              className="prose max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;

import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Blog data passed via state
  const blog = location.state?.blog;

  // If blog not passed (direct URL access), handle it
  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center">
          <p className="text-gray-600">Unable to load blog details.</p>
          <button
            onClick={() => navigate("/blogs")}
            className="mt-4 bg-[#2F2E8B] hover:bg-[#262577] text-white px-4 py-2 rounded"
          >
            Back to Blogs
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">{blog.title}</h1>
        <div
          className="prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;

import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.blog || null);
  const [loading, setLoading] = useState(!location.state?.blog);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.blog) return;

    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://cyber-vie-learning-platform-client-ten.vercel.app/blogs/"
        );
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

  if (loading)
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  if (error)
    return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {blog && (
          <article className="bg-white rounded-xl shadow-md p-8 md:p-12">
            {/* Blog Header */}
            <header className="mb-10 border-b pb-6">
              <h1 className="text-4xl font-bold text-[#2F2E8B] leading-tight mb-3">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </header>

            {/* Blog Content (Rich HTML) */}
            <div
              className="prose prose-lg max-w-none prose-img:rounded-lg prose-headings:text-[#2F2E8B] prose-a:text-[#2F2E8B] hover:prose-a:underline prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;

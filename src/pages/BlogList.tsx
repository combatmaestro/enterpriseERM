// src/pages/BlogList.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const BlogList = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Insights <span className="gradient-text">Blog</span></h1>
            <p className="text-gray-400">Thought leadership, product updates, and best practices from the Enterprise.AI team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((p) => (
              <article key={p.slug} className="bg-saas-darkGray rounded-xl border border-gray-800 p-6 flex flex-col">
                <img src={p.cover} alt={p.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-white">{p.title}</h2>
                <p className="text-gray-400 mb-4 text-sm">{p.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm text-gray-400">{new Date(p.date).toLocaleDateString()}</span>
                  <Link to={`/blog/${p.slug}`} className="text-saas-orange font-semibold">Read</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;

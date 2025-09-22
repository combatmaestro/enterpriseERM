// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  // try local posts first; you can replace with react-query fetch to /api/posts/:slug
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-saas-black text-white">
        <Navbar />
        <main className="py-24 section-container text-center">
          <h2 className="text-2xl font-semibold mb-4">Post not found</h2>
          <p className="text-gray-400 mb-8">We couldn't find that article. Try the blog list below.</p>
          <Link to="/blog" className="bg-saas-orange px-4 py-2 rounded-md text-black font-semibold">Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="py-16">
        <div className="section-container max-w-3xl mx-auto">
          <img src={post.cover} alt={post.title} className="w-full h-60 object-cover rounded-xl mb-6 card-shadow" />
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-400 mb-6">{new Date(post.date).toLocaleDateString()}</p>

          <article className="prose prose-invert max-w-none text-gray-200">
            {/* If body is markdown you could parse it. For now we render plain HTML-ish content. */}
            <div dangerouslySetInnerHTML={{ __html: post.body.replace(/\n/g, "<br/>") }} />
          </article>

          <div className="mt-8">
            <Link to="/blog" className="text-saas-orange font-semibold">← Back to Blog</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

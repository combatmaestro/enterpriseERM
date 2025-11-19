import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

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

  // ---- SEO Values ----
  const pageDescription =
    blog?.content?.replace(/<[^>]+>/g, "").substring(0, 150) + "...";

  const imageUrl = blog?.thumbnail?.startsWith("http")
    ? blog.thumbnail
    : `https://cyber-vie-learning-platform-client-ten.vercel.app${blog?.thumbnail}`;

  const canonicalUrl = `https://enterpriserm.ai/blogs/${slug}`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {blog && (
        <Helmet>
          {/* Title */}
          <title>{blog.metaTitle || blog.title}</title>

          {/* Description */}
          <meta
            name="description"
            content={blog.metaDescription || pageDescription}
          />

          {/* Keywords */}
          {blog?.metaKeywords?.length > 0 && (
            <meta name="keywords" content={blog.metaKeywords.join(", ")} />
          )}

          {/* Canonical */}
          <link rel="canonical" href={canonicalUrl} />

          {/* Open Graph */}
          <meta property="og:title" content={blog.metaTitle || blog.title} />
          <meta
            property="og:description"
            content={blog.metaDescription || pageDescription}
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={imageUrl} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={blog.metaTitle || blog.title} />
          <meta
            name="twitter:description"
            content={blog.metaDescription || pageDescription}
          />
          <meta name="twitter:image" content={imageUrl} />

          {/* BlogPosting Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": canonicalUrl
                },
                headline: blog.title,
                description: blog.metaDescription || pageDescription,
                image: [imageUrl],
                author: {
                  "@type": "Organization",
                  name: "Enterpriserm.AI",
                  url: "https://enterpriserm.ai"
                },
                publisher: {
                  "@type": "Organization",
                  name: "Enterpriserm.AI",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://enterpriserm.ai/logo.png"
                  }
                },
                datePublished: blog?.createdAt,
                dateModified: blog?.updatedAt || blog?.createdAt,
                url: canonicalUrl
              })
            }}
          />

          {/* BreadcrumbList Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://enterpriserm.ai/"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blogs",
                    item: "https://enterpriserm.ai/blogs"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: blog.title,
                    item: canonicalUrl
                  }
                ]
              })
            }}
          />
        </Helmet>
      )}

      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {blog && (
          <article className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <header className="mb-10 border-b pb-6">
              <h1 className="text-4xl font-bold text-[#2F2E8B] leading-tight mb-3">
                {blog.title}
              </h1>

              <p className="text-sm text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
            </header>

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

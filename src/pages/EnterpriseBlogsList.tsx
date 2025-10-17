import React, { useEffect, useState } from "react";

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

  if (loading)
    return <div className="flex justify-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (blogs.length === 0)
    return <div className="text-center mt-10">No blogs available</div>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-200"
        >
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: blog.content.substring(0, 200) + "...",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default EnterpriseBlogsList;

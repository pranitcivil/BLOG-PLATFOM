import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogForm from "../components/BlogForm";

export default function Home({ user }) {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => setBlogs([...blogs, newBlog]);
  const updateBlog = (updatedBlog) =>
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  const deleteBlog = (id) => setBlogs(blogs.filter((blog) => blog.id !== id));

  return (
    <div>
      <BlogForm onAdd={addBlog} />
      <BlogList blogs={blogs} onUpdate={updateBlog} onDelete={deleteBlog} />
    </div>
  );
}

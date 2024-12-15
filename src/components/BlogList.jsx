export default function BlogList({ blogs, onDelete }) {
  const handleLike = (id) => {
    const blog = blogs.find((b) => b.id === id);
    blog.likes = (blog.likes || 0) + 1;
  };

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="border p-4 mb-4">
          <h2 className="text-xl">{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => handleLike(blog.id)} className="text-blue-500">
            Like ({blog.likes || 0})
          </button>
          <button
            onClick={() => onDelete(blog.id)}
            className="text-red-500 ml-4"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

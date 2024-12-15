import { useState } from "react";

export default function BlogForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onAdd({
      id: Date.now(),
      title,
      content,
      created_at: new Date().toISOString(),
    });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2"
      >
        Add Blog
      </button>
    </div>
  );
}

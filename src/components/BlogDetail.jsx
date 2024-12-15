import React, { useState } from "react";
import Comments from "./Comments";

export default function BlogDetail({ blog, onLike, onDelete }) {
  if (!blog) {
    return <p className="text-gray-500">Blog not found.</p>;
  }

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => onLike(blog.id)}
          className="text-blue-500 hover:text-blue-700"
        >
          Like ({blog.likes || 0})
        </button>
        <button
          onClick={() => onDelete(blog.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <Comments postId={blog.id} />
    </div>
  );
}

import { useState } from "react";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  const addComment = (content) => {
    setComments([
      ...comments,
      { id: Date.now(), content, postId, created_at: new Date().toISOString() },
    ]);
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.content}</p>
      ))}
      <input
        type="text"
        placeholder="Add a comment"
        onKeyDown={(e) => {
          if (e.key === "Enter") addComment(e.target.value);
        }}
        className="border p-2 w-full"
      />
    </div>
  );
}

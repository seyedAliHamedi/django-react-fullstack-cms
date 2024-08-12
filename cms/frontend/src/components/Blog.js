import React from "react";
import "./../../static/style/blog.css";

function Blog({ blog, onDelete }) {
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US");
  return (
    <div className="blog-container">
      <p className="blog-title">{blog.title}</p>
      <p className="blog-content">{blog.content}</p>
      <p className="blog-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(blog.id)}>
        Delete
      </button>
    </div>
  );
}

export default Blog;

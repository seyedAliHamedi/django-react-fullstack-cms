import React, { useState, useEffect } from "react";
import api from "../api";
import Blog from "./../components/Blog";
import "./../../static/style/explore.css";
import { useNavigate } from "react-router-dom";

function Explore() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllBlogs();
  }, []);

  const navigateToHome = () => {
    navigate("/frontend");
  };

  const getAllBlogs = () => {
    api
      .get("/api/blogs/all/")
      .then((res) => res.data)
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().startsWith(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="header">
        <h2>Explore</h2>
        <button onClick={navigateToHome} className="explore-button">
          Home
        </button>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <label htmlFor="category">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          <option value="">All Categories</option>
          <option value="TECH">Technology</option>
          <option value="LIFE">Lifestyle</option>
          <option value="FOOD">Food</option>
          <option value="TRVL">Travel</option>
          <option value="EDU">Education</option>
        </select>
      </div>

      {filteredBlogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default Explore;

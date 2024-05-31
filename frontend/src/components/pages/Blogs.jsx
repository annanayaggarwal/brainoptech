import React, { useState } from "react";
import BlogPage from "./BlogPage";
import Banner from "../layouts/Banner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blog per page
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto ">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;

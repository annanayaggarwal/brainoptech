const Blog = require("../models/blog");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const blog = require("../utils/blog.json");

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedBlog = async () => {
  try {
    await Blog.insertMany(blog);
    console.log("All Blog inserted");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedBlog();

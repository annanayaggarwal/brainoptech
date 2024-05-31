const express = require("express");
const router = express.Router();

const {
  newBlog,
  getBlog,
  getSingleBlog,
} = require("../controllers/blogController");

router.route("/blog/new").post(newBlog);
router.route("/blog").get(getBlog);
router.route("/blog/:id").get(getSingleBlog);

module.exports = router;

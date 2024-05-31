const Blog = require("../models/blog");

const ErrorHandler = require(`../utils/errorHandler`);
const catchAsyncErrors = require(`../middleware/catchAsyncErrors`);

exports.newBlog = catchAsyncErrors(async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json({
      sucess: true,
      blog,
    });
  } catch (error) {
    return next(new ErrorHandler("Blog not created", 404));
  }
});

exports.getBlog = catchAsyncErrors(async (req, res, next) => {
  try {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 6;
    let skip = (page - 1) * limit;

    let blog = await Blog.find();
    //  let blog = await Blog.find().skip(skip).limit(limit);

    res.status(200).json({
      sucess: true,
      blog,
    });
  } catch (error) {
    return next(new ErrorHandler("Blog not Found", 404));
  }
});

exports.getSingleBlog = catchAsyncErrors(async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({
      sucess: true,
      blog,
    });
  } catch (error) {
    return next(new ErrorHandler("Blog not Found", 404));
  }
});

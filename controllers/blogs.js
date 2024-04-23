const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const logger = require("../utils/logger");

blogsRouter.get("/", (request, response) => {
  //   logger.info("+++++++++++++++ get request.body ", request.body);
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.post("/", (request, response, next) => {
  //   logger.info("post request.body ", request.body);
  const body = request.body;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blog
    .save()
    .then((savedBlog) => {
      logger.info("savedBlog", savedBlog);
      response.json(savedBlog);
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;

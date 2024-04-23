const dummy = (blogs) => {
  // ...
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0 || !blogs) {
    return null; // Or return a default object or message
  }
  if (blogs.length === 1) {
    return blogs[0];
  }
  return blogs.reduce((maxBlog, currentBlog) => {
    return currentBlog.likes > (maxBlog.likes || 0) ? currentBlog : maxBlog;
  }, {});
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};

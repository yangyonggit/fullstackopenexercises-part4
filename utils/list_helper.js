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

const mostBlogs = (blogs) => {
  if (blogs.length === 0 || !blogs) {
    return null; // Or return a default object or message
  }
  if (blogs.length === 1) {
    return { author: blogs[0].author, blogs: 1 };
  }

  const authorMap = {};
  blogs.forEach((element) => {
    authorMap[element.author] = (authorMap[element.author] || 0) + 1;
  });

  let maxAuthor = { author: "", blogs: 0 };
  Object.keys(authorMap).forEach((key) => {
    if (authorMap[key] > maxAuthor.blogs) {
      maxAuthor = { author: key, blogs: authorMap[key] };
    }
  });
  return maxAuthor;
};

const mostLikes = (blogs) => {
  if (blogs.length === 0 || !blogs) {
    return null; // Or return a default object or message
  }
  if (blogs.length === 1) {
    return { author: blogs[0].author, likes: blogs[0].likes };
  }

  const authorMap = {};
  blogs.forEach((element) => {
    authorMap[element.author] =
      (authorMap[element.author] || 0) + element.likes;
  });

  let maxAuthor = { author: "", likes: 0 };

  Object.keys(authorMap).forEach((key) => {
    if (authorMap[key] > maxAuthor.likes) {
      maxAuthor = { author: key, likes: authorMap[key] };
    }
  });

  return maxAuthor;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};

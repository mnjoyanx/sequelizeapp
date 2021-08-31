const post = require("../models");
const Post = post.posts;

exports.getAll = async (req, res) => {
  const all = await Post.findAll({ include: { all: true } });
  console.log(all, "allllll");
  return res.status(200).json({ data: all });
};

exports.create = async (req, res) => {
  const post = await Post.create(req.body);
  return res.status(201).json({ data: post });
};

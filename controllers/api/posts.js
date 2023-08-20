const Post = require("../../models/post");
const User = require("../../models/user");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    const { userId, content } = req.body;
    const creator = await User.findOne({ clerkId: userId });
    const newPost = await Post.create({ user: creator, content });
    await newPost.populate("user");
    res.json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

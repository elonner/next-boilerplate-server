const Post = require('../../models/post');

module.exports = {
    index,
    create
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
        await Post.create({ userId, content });
        res.json({ userId, content });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}
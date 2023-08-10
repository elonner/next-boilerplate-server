const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: { type: String, required: true },
    content: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
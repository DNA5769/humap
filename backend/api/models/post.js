const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
    author: String,
    avatar: String,
    content: String
});

const postScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
    latitude: Number,
    longitude: Number,
    author: String,
    avatar: String,
    title: String,
    content: String,
    comments: [commentSchema],
    tag: String,
    isAnonymous: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Post', postScheme);
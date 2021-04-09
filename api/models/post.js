const mongoose = require('mongoose');

const postScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
    latitude: Number,
    longitude: Number,
    author: String,
    title: String,
    content: String,
    comments: [{
        user_ID: mongoose.Schema.Types.ObjectId,
        content: String
    }],
    tag: String,
    isAnonymous: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Post', postScheme);
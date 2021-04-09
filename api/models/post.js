const mongoose = require('mongoose');

const postScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
    latitude: mongoose.Schema.Types.Decimal128,
    longitude: mongoose.Schema.Types.Decimal128,
    title: String,
    content: String,
    comments: [{
        user_ID: mongoose.Schema.Types.ObjectId,
        content: String
    }],
    tag: String,
    isAnonymous: Boolean
});

module.exports = mongoose.model('Post', postScheme);
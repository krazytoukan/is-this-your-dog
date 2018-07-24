const
    mongoose = require('mongoose'),
    postSchema = new mongoose.Schema({
        title: { type: String},
        body: {type: String},
        _by: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    })
    Tweet = mongoose.model('Tweet', postSchema)

module.exports = Post;
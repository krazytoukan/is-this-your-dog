const
    mongoose = require('mongoose'),
    postSchema = new mongoose.Schema({
        title: { type: String},
        body: {type: String},
        imageUrl: {type: String},
        _by: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    })

    Post = mongoose.model('Post', postSchema)

module.exports = Post;
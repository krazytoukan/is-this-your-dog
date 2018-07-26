const
    mongoose = require('mongoose'),
    postSchema = new mongoose.Schema({
        title: { type: String},
        body: {type: String},
        image: {type: String},
        _by: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        featuredImageName: String
    })

postSchema.virtual('featuredImageUrl').get(function(){
    return `https://s3-us-west-1.amazonaws.com/is-this-your-dog/${this.featuredImageName}`
})
postSchema.set('toJSON', {getters: true, virtual: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;
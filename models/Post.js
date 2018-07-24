const
    mongoose = require('mongoose'),
    Paperclip = require('node-paperclip')
    postSchema = new mongoose.Schema({
        title: { type: String},
        body: {type: String},
        _by: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    })

    postSchema.plugin(Paperclip.plugins.mongoose, {
        post_image: {
            avatar: { 
              styles: [
                { original: true },
              ],
              prefix:      '{{plural}}/{{document.username}}',
              name_format: '{{style}}.{{extension}}'
            }
          }
    })

    Post = mongoose.model('Post', postSchema)

module.exports = Post;
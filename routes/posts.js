const
    express = require('express'),
    postRouter = new express.Router(),
    postsCtrl = require('../controllers/posts.js'),
    {verifyToken} = require('../serverAuth.js')
    paperclip = require('node-paperclip').middleware
    Post = require('../models/Post')

//Unprotected Routes
postRouter.get('/', postsCtrl.index)
postRouter.get('/:id', postsCtrl.show)

//Protect Routes
postRouter.use(verifyToken)

// Post route for uploading files with paperclip
postRouter.post('/', 
paperclip.parse(),
function(req, res, next) {
    req.body.post_image.user_id  = req.user._id;
    next();
  },

  function(req, res, next) {

    console.log(req.body);


    Post.findOne({username: req.user.username}, function(err, profile_image) {
      if (req.body.profile_image) {
        if (profile_image) {
          profile_image.remove(function(err) {
            next();
          });
        } else {
          next();
        }
      } else {
        res.redirect('/#profile/images');
      }
    });
  },

  function (req, res) {
    ProfileImage.create(req.body.profile_image, function(err, doc) {
      res.redirect('/#profile/images');
    });
})



postRouter.patch('/:id', postsCtrl.update)
// postRouter.delete('/:id', postsCtrl.destroy)

module.exports = postRouter
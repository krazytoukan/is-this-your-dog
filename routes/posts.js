const
    express = require('express'),
    postRouter = new express.Router(),
    postsCtrl = require('../controllers/posts.js'),
    {verifyToken} = require('../serverAuth.js')

//Unprotected Routes
postRouter.get('/', postsCtrl.index)
postRouter.get('/:id', postsCtrl.show)

//Protect Routes
postRouter.use(verifyToken)
postRouter.post('/', postsCtrl.create)
postRouter.patch('/:id', postsCtrl.update)
// postRouter.delete('/:id', postsCtrl.destroy)

module.exports = postRouter
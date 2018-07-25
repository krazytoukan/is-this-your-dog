const
  express = require('express'),
  postRouter = new express.Router(),
  postsCtrl = require('../controllers/posts.js'),
  {verifyToken} = require('../serverAuth.js'),
  multer = require('multer'),
  storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './temp')
    },
    filename: (req,file, cb) => {
      cb(null, new Date().toISOString + file.originalname)
    }
  })
  fileFilter = (req, file, callback) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/png'){
      callback(null, true)
    } else {
      callback(null, false)
    }
  },
  upload = multer({
    storage: storage, 
    limits: {
    fileSize: 1024 *1024 * 5},
    fileFilter: fileFilter
  }),
  Post = require('../models/Post')

//Unprotected Routes
postRouter.get('/', postsCtrl.index)
postRouter.get('/:id', postsCtrl.show)

//Protect Routes
postRouter.use(verifyToken)

// Post route for uploading files with paperclip
postRouter.post('/', upload.single('dogImage'), postsCtrl.create)
            

postRouter.patch('/:id', postsCtrl.update)
// postRouter.delete('/:id', postsCtrl.destroy)

module.exports = postRouter
const 
    Post = require('../models/Post'),
   formidable = require('formidable'),
   sharp = require('sharp'),
   fs= require('fs-extra'),
   {BUCKET_NAME, ACCESS_ID_KEY, SECRET_ACCESS_KEY } = process.env


module.exports = {

    index: (req, res) => {
        Post.find({}, (err, posts)=> {
            if(err) return res.json({message: "Fail", payload: err})
            res.json({message: "Success", payload: posts})
        })
    },

    show: (req, res) => {
        Post.findById(req.params.id, (err, post) => {
            if(err) return res.json({message: "Fail", payload: err})
            res.json({message: "Success", payload: post})
        })
    },

    create: (req, res) => {
        var s3 = require('s3');
        var client = s3.createClient({
          s3Options: {
            accessKeyId: ACCESS_ID_KEY,
            secretAccessKey: SECRET_ACCESS_KEY
          },
        });  
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          const tempUploadPath = `temp/${files.image.name}`
      
          fs.ensureDir(`temp`)
            .then(() => {
              sharp(files.image.path)
                .resize(600)
                .toFile(tempUploadPath)
                .then(info => {
                  var params = {
                    localFile: tempUploadPath,
                    s3Params: {
                      Bucket: BUCKET_NAME,
                      Key: files.image.name
                    },
                  };
                  var uploader = client.uploadFile(params);
                  uploader.on('error', function (err) {
                    console.error("unable to upload:", err.stack);
                  });
                  uploader.on('progress', function () {
                    console.log("progress", uploader.progressMd5Amount,
                      uploader.progressAmount, uploader.progressTotal);
                  });
                  uploader.on('end', function () {
                    console.log("done uploading");
                    fs.remove(tempUploadPath)
                    const tags = fields.tags.split('# ')
                    Post.create({ ...fields, _by: req.user, tags, featuredImageName: files.image.name }, (err, newPost) => {
                      if (err) {
                        res.json({ status: "FAIL", err })
                      } else {
                        res.json({ status: "SUCCESS", payload: newPost })
                      }
                    })
                  });
                  
                })
                // 1. using tempUploadPath, upload to amazon
                // 2. when Amazon responds ok, create a new post (Post.create)
                //    (your fields are under "fields", not req.body
                // you'll want to combine {...} fields, amazon's image url, and _by: req.user to create the post now.
                // 3. respond to client with JSON ok.
            })
        })},


    // Old Create Method which does not allow for photo posting
    // create: (req, res) => {
    //     Post.create({...req.body, _by: req.user}, (err, newPost) =>{
    //         if(err) return res.json({message: "Fail", payload:err})
    //         if(!req.user) return res.json({message: "Fail, invalid token"})
    //         res.json({message: "Success", payload: newPost})
    //     })
    // },

    update: (req, res) => {
        let id = req.params.id
        Post.findByIdAndUpdate(id, {...req.body}, (err, updatedPost) => {
            if(req.user._id !== updatedPost._by) return res.json({message: "Fail, invalid token"})
            Object.assign(req.post, req.body)
            req.post.save((err, post) => {
                if(err) return res.json({message: "ERROR", payload: null, code: err.code})
                res.json({ message: "SUCCESS", payload: post })
            })
        })
    },

    destroy: (req, res) => {
        let id = req.params.id
        Post.findById(id, (err, post) =>{
            if(err) return res.json({message: "ERROR", payload: null, code: err.code})
            if(req.user._id.equals(post._by)) {
                post.remove((err, repost) => {
                    if(err) return res.json({message: "ERROR", payload: null, code: err.code})
			        res.json({ message: "SUCCESS", payload: repost })
                })
            } else {
                return res.json({message: "Invalid Token", payload: null})
            }
        })
    }
}
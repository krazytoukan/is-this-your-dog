const 
    Post = require('../models/Post')

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
        Post.create({...req.body, _by: req.user}, (err, newPost) =>{
            if(err) return res.json({message: "Fail", payload:err})
            if(!req.user) return res.json({message: "Fail, invalid token"})
            res.json({message: "Success", payload: newPost})
        })
    },

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
            if(req.user._id === post._by) {
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
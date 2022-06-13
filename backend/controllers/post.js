const Post = require("../models/Post");
const User = require("../models/User");
exports.createPost = async (req,res) => {
    try {
        
        const newPostData = {
            caption:req.body.caption,
            image:{
                public_id:"req.body.public_id",
                url:"req.body.url",
            },

            owner:req.user._id,
        };

        const newPost = await Post.create(newPostData);

        const user = await User.findById(req.user._id);

        user.posts.push(newPost._id);   //newpost id pushed into posts array

        res.status(201).json({
            success:true,
            post: newPost,
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


exports.likeAndUnlikePost = async (req,res)=>{
    try {

        const post = await Post.findById(req.params.id);

       if(post.likes.includes(req.user._id)) {
            const index = post.likes.indexof(req.user._id);
            post.likes.splice(index,1);

            await post.save();

            return res.status(200).json({
                success:true,
                message:"Post Unliked",
            })
       }

       post.likes.push(req.user._id)
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        })
    }
}


const post = require("../models/Post");
exports.createPost = async (req,res) => {
    try {
        
        const newPostData = {
            caption:req.body.caption,
            image:{
                public_id:"req.body.public_id",
                url:"req.body.url"
            },
        }


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


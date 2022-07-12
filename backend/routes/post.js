const express = require("express");
const {createPost, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, commentOnPost}=require("../controllers/post")
const {isAuthenticated}=require("../middlewares/auth")

const router1 = express.Router();


router1.route("/post/:id").get(isAuthenticated,likeAndUnlikePost);

router1.route("/post/upload").post(isAuthenticated,createPost);

router1.route("/posts").get(isAuthenticated,getPostOfFollowing);

router1.route("/post/comment/:id").put(isAuthenticated,commentOnPost).put(isAuthenticated,updateCaption).delete(isAuthenticated,deletePost);





module.exports = router1;
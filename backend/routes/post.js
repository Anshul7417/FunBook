const express = require("express");
const {createPost, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComment}=require("../controllers/post")
const {isAuthenticated}=require("../middlewares/auth")

const router1 = express.Router();


router1.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated,deletePost).put(isAuthenticated,updateCaption);

router1.route("/post/upload").post(isAuthenticated,createPost);

router1.route("/posts").get(isAuthenticated,getPostOfFollowing);

router1.route("/post/comment/:id").put(isAuthenticated,commentOnPost).delete(isAuthenticated,deleteComment);






module.exports = router1;
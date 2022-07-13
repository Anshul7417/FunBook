const express = require("express");
const { register, login, followUser, logout, resetPassword, updateProfile, deleteMyProfile, getAllUsers, getUserProfile, myProfile, forgotPassword, getMyPosts, getUserPosts, updatePassword } = require("../controllers/user")
const { isAuthenticated } = require("../middlewares/auth");

const router2 = express.Router();

router2.route("/register").post(register);
router2.route("/login").post(login);
router2.route("/logout").get(logout);

router2.route("/follow/:id").get(isAuthenticated, followUser);

router2.route("/update/password").put(isAuthenticated,updatePassword)
router2.route("/update/profile").put(isAuthenticated, updateProfile);
router2.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
router2.route("/me").get(isAuthenticated, myProfile);

router2.route("/my/posts").get(isAuthenticated, getMyPosts);

router2.route("/userposts/:id").get(isAuthenticated, getUserPosts);

router2.route("/user/:id").get(isAuthenticated, getUserProfile);

router2.route("/users").get(isAuthenticated, getAllUsers);

router2.route("/forgot/password").post(forgotPassword);

router2.route("/password/reset/:token").put(resetPassword);





module.exports = router2;

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: String,

    image: {
        public_id: String,
        url: String,
    },

    owner: {      //id of the user that has posted
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"      //json pointer to a schema
        },
    ],

    comments: [    // it includes user id and comment
        {
            user: {
                type: mongoose.Schema.Types.ObjectId, // it is just a configuration object for mongoose
                ref: "User",
            },
    comment: 
    {
                type: String,
                required: true,
            }
        }
    ]



});

module.exports = mongoose.model("Post", postSchema);
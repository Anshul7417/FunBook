import React from 'react'
import "./Post.css"
import { Link } from "react-router-dom";
import { Avatar, Button, Typography, Dialog } from "@mui/material";
import{
    MoreVert,      //three horizontal dots
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
} from "@mui/icons-material";


const Post = ({ postId,
    caption,
    postImage,
    likes = [],
    comments = [],
    ownerImage,
    ownerName,
    ownerId,
    isDelete = false,
    isAccount = false,
}) => {
    return (
        <div className='post'>
            <div className="postHeader"></div>
            <img src={postImage} alt="Post" />
            <div className='postDetails'>
                <Avatar
                    src={ownerImage}
                    alt="User"
                    sx={{
                        height: "3vmax",
                        width: "3vmax",
                    }}
                />

                <Link to={`/user/${ownerId}`}>
                    <Typography fontWeight={700}>{ownerName}</Typography>
                </Link>

                <Typography
                    fontWeight={100}
                    color="rgba(0, 0, 0, 0.582)"
                    style={{ alignSelf: "center" }}
                >
                    {caption}
                </Typography>
            </div>
            <button style={{
                border:"none",
                backgroundColor:"white",
                cursor:"pointer",
                margin:"1vmax 2vmax",
            }}><Typography>5 Likes</Typography></button>

            <div className='postFooter'>
                <Button>
                    <FavoriteBorder/>
                </Button>
                <Button>
                    <FavoriteBorder/>
                </Button>
                <Button>
                    <FavoriteBorder/>
                </Button>
            </div>
        </div>
    )
}

export default Post;
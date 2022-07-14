import React from 'react'
import "./Home.css";
import User from "../User/User";
import Post from "../Post/Post"

const Home = () => {
  return (
    <div className="home">
        <div className="homeleft"></div>
        <Post postImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"} ownerName={"Anshul"}
            caption={"this is a sample post"}
        />
        <div className="homeright">
            <User
                userId={"user._id"}
                name={"anshul"}
                avatar={"https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-75-1024x1003.jpg"}
            />
        </div>
    </div>
  )
}

export default Home
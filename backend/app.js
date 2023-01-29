const express = require("express");
const app =express();
const cookieParser = require("cookie-parser");
const path=require('path');

if(process.env.NODE_ENV!=='production'){
    require("dotenv").config({path:"backend/config/config.env"});   // requiring config
}


// using middlewares
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb",extended: true}));
app.use(cookieParser());

//importing Routes

const post = require ("./routes/post");
const user = require("./routes/user");

//using Routes

app.use("/api/v1", post);     //api/v1/post/upload aese bnega link
app.use("/api/v1", user);

app.use(express.static(path.join(__dirname,'../frontend/build')));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));    //connecting build
});

module.exports=app;
const express = require("express");
const app =express();

require("dotenv").config({path:"backend\\config\\config.env"});

// using middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//importing Routes

const post = require ("./routes/post");

//using Routes

app.use("/api/v1", post)

module.exports=app;
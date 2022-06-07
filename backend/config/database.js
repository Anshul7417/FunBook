const mongoose =require("mongoose");

exports.connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected")).catch((err)=>console.log(err));
}
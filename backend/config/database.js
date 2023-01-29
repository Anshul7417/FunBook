const mongoose =require("mongoose");

mongoose.set('strictQuery', true);

exports.connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected")).catch((err)=>console.log(err));
}
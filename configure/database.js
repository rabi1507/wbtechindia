const mongoose =require("mongoose");
require("dotenv").config();

exports.database =()=>{
    mongoose.connect(process.env.mongoose_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    } )
    .then(()=>{console.log("Db connected successfully")})
    .catch((err)=>{
        console.log("db connection issues");
        process.exit(1);
    })
}

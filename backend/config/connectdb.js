const mongoose = require("mongoose")
require("dotenv").config()

exports.dbconnect=()=>{
    mongoose.connect(process.env.DB_CONNECT,{
        family:4
    }).then(()=>{
        console.log("connected sucessfully")
    })
    .catch(()=>console.log("not connected"))
}
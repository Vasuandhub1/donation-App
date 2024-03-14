const mongoose = require("mongoose")

exports.dbconnect=()=>{
    mongoose.connect("mongodb://localhost:27017/donation",{
        family:4
    }).then(()=>{
        console.log("connected sucessfully")
    })
    .catch(()=>console.log("not connected"))
}
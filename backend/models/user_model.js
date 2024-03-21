const mongoose=require("mongoose")

const User_module= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    raise:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"donation"
    }],
    donated:[ {type:mongoose.Schema.Types.ObjectId,
        ref:"donation"}],
    total:{
        type:Number,
        default:0
    }    

})

module.exports=mongoose.model("User",User_module)
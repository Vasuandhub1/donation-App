const mongoose =require("mongoose")

// now create a new model for donation
const donation= new mongoose.Schema({

   R_userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   amount:{
    type:Number,
    required:true
   },
   collected:{
    type:Number,
    required:true
   },
   D_userId:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   }],
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   }
}) 

module.exports=mongoose.model("donation",donation)
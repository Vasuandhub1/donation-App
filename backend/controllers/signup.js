const { response } = require("express")
const User=require("../models/user_model")
const bcrypt=require("bcrypt")

exports.signup=async(req,res)=>{
    // handle the error
    try{
         // now take the data from the body of the front end
    const {username,email,password}=req.body

    // now search for the user email is available or not 

    const check_mail=await User.findOne({email})
    
    if(check_mail){
       return res.status(404).json({
            sucess:true,
            message:"Email id already exist"
        })
    }
    else{
        // now first encrypt the password 
        await bcrypt.hash(password,10).then(async(enc_pass)=>{
            const create_user=await User.create({username,email,password:enc_pass})
            // now handel the response to the server
            return res.status(200).json({
                sucess:true,
                message:"Accont created Sucessful"
            })
        }).catch((err)=>{
            return res.status(400).json({
                status:false,
                message:"encryption err"
            })
        })
        
    }

    }catch(err){
        return res.status(400).json({
            sucess:false,
            message:err.message
        })
    } 
}
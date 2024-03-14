const User=require("../models/user_model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.login=async(req,res)=>{
    // handle the errors
    try{
        // now tak eth email ans password as teh input 
        const {email,password}=req.body

        // now check for email is available of not 
        const check_mail=await User.findOne({email})

        if(check_mail){
           const pass=await bcrypt.compare(password,check_mail.password)
           
            if(pass){
                const payload={
                    email,
                    username:check_mail.username
                }
                const token=jwt.sign(payload,"vasu",{expiresIn:"2h"})
                
                return res.cookie("jwt_token",token,{expiresIn:"2h"}).status(200).json({
                    sucess:true,
                    message:"Sucessfully Logined",
                    username:check_mail.username
                })
            }
            else{
                return res.status(400).json({
                    sucess:true,
                    message:"password not matched",
                    
                })
            }
    }
    else{
        return res.status(400).json({
            sucess:false,
            message:"err"
        })
    }
}catch(err){
    return res.status(404).json({
        sucess:false,
        message:err.message
    })
}
}

exports.details=async(req,res)=>{
    try{
        // teke the details from cookies
        const {jwt_token}=req.cookies;

        const detail=jwt.decode(jwt_token)

       return  res.status(200).json({
            sucess:true,
            message:"get",
            detail:detail.username
        })
    }
    catch(err){
        return res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}
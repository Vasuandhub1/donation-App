const jwt=require("jsonwebtoken")

exports.authes=(req,res,next)=>{
    // now handle the err
    try{
        // now take the token from the cookies
        const {jwt_token}=req.cookies;

        // now check if the token is available or not 
       const data=jwt.decode(jwt_token)
       if(data){
        next()
       }
    }catch(err){
        console.log(err.message)
     return res.status(400).json({
        sucess:false,
        message:err.message
     })   
    }
    
    
}
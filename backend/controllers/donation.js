const User=require("../models/user_model")
const Donation=require("../models/donation_model")
const jwt=require("jsonwebtoken")

//  now handle the creaet donation 

exports.create_Donation=async(req,res)=>{
    // now handle the error in the 
    try{
        // now get the data from the req body
        const {title,description,amount,collected}=req.body

        // now take the data from the req cookie

        const {jwt_token}=req.cookies

        // now decode the data from the tokens

        const data = jwt.decode(jwt_token)

        // now send the daat to the backend

        const donation=await Donation.create({R_userId:data.userId,title,description,amount,collected})

        //  now update the user with req donation
        await User.findByIdAndUpdate(data.userId,{$push:{raise:donation._id}},{new:true})

        return res.status(200).json({
            sucess:true,
            message:"sucess",
        })
        

    }catch(err){
        console.log(err.message)
        return res.status(402).json({
            sucess:false,
            message:err.message
           
        })
        
    }
}

//  now calling the api to delete the 

exports.remove_Donation=async(req,res)=>{
    // now handle the error 
    try{
        // taking the Rid to delete the donation request
        const {raiseId}=req.body

        // now take the data from the cookie
        const {jwt_token}=req.cookies

        // now decode the data
        const data=jwt.decode(jwt_token)

        // now delete the record
        await User.findByIdAndUpdate(data.userId,{$pull:{raise:raiseId}},{new:true})
        await Donation.findByIdAndDelete({raise:raiseId})

        return res.status(200).json({
            sucess:true,
            message:"sucess"
        })
        
    }catch(err){
        return res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}

exports.donate=async(req,res)=>{
    try{
        //  now take the inut from the user
        const{collected,raiseId}=req.body

        if(!collected){
            return res.status(400).json({
                sucess:false,
                message:"pls enter valid amount"
            })
        }

        // now take the data from cookies
        const {jwt_token}=req.cookies

        // now decode the data
        const data=jwt.decode(jwt_token)

        // now add the collectde amount to collectde
        const donationId=await Donation.findById(raiseId)
        // now edit the collectedvalue
        donationId.collected=donationId.collected+collected;
        // now update the donation
        await Donation.findByIdAndUpdate(raiseId,{collected:donationId.collected,D_userId:data.userId})
        //  now update the value in doners acount
        const user=await User.findById(data.userId)

        user.total=user.total+collected
        // now update the user id
        await User.findByIdAndUpdate(user._id,{total:user.total,donated:raiseId})

        // now send the res 
        return res.status(200).json({
            sucess:true,
            message:"sucessfully updated"
        })

    }catch(err){
        return res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}

exports.show_requests=async(req,res)=>{
    // handle the errors 
    try{
        // now fetch all the data from the database
        const request_data=await Donation.find({},{D_userId:0}).populate("R_userId","-password -donated -__v -email -_id")
        
        // now send the daat to the user 
        
        return res.status(200).json({
            sucess:true,
            message:"data fetch sucessfull",
            request_data
        })

    }catch(err){
        return res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}
const express=require("express")
const router= express.Router()

// now call the controller function for router
const {signup}=require("../controllers/signup")
const {login,details}=require("../controllers/signin")

// now create the router for the given 

router.post("/signup",signup)
router.post("/login",login)
router.get("/details",details)

module.exports=router
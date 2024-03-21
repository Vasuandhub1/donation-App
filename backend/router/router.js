const express=require("express")
const router= express.Router()

// now call the controller function for router
const {authes}=require("../middleware/auth")
const {signup}=require("../controllers/signup")
const {login,details,logout}=require("../controllers/signin")
const {create_Donation,remove_Donation,donate,show_requests}=require("../controllers/donation")

// now create the router for the given 
router.post("/signup",signup)
router.post("/login",login)
router.get("/details",authes,details)
router.post("/create_donation",authes,create_Donation)
router.delete("/remove_donation",authes,remove_Donation)
router.post("/add_donation",authes,donate)
router.get("/showrequest",authes,show_requests)
router.get("/showrequest",authes,show_requests)
router.get("/logout",authes,logout)

module.exports=router
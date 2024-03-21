const express = require("express")
const app=express()
const db=require("./config/connectdb")
const router=require("./router/router")
const cookie_parser=require("cookie-parser")
const corse=require("cors")
const auth=require("./middleware/auth")
require("dotenv").config()

// cnnecting to the data base
db.dbconnect()

// now use corse
app.use(corse({origin:true,
credentials:true}))

// now use the body parser
app.use(express.json())
// now user cookie parer
app.use(cookie_parser())
//now connecting the router
app.use("/api/v1",router)


app.get("/",(req,res)=>{
    res.send("hello server")
})
app.listen(process.env.PORT,()=>{
    console.log(`server is started at ${process.env.PORT}`)
})


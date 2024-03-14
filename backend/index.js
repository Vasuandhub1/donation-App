const express = require("express")
const app=express()
const db=require("./config/connectdb")
const router=require("./router/router")
const cookie_parser=require("cookie-parser")
const corse=require("cors")

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
app.listen(3000,()=>{
    console.log("server is running on 3000")
})


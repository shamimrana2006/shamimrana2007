const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("shamim rana it's work fine")
})

module.exports =app
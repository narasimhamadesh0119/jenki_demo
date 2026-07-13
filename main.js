const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello welcome to jenkins")

});

app.listen(4003,()=>{
    console.log("server is running in the port 4003");
})
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    // res.send("Hello welcome to jenkins")
    res.send("Hello World - deployed automatically using Jenkins Poll SCM build 2")

});

app.listen(4003,()=>{
    console.log("server is running in the port 4003");
})
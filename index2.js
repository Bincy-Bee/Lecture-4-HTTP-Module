const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        fs.readFile("index.html","utf-8", (err, data)=>{
            if (err){
                console.log(err)
                res.end("Error in reading html page");
            }
            else{
                res.end(data);
            }
        })
    }
    else if (req.url == "/signup"){
        fs.readFile("signup.html",(err, data)=>{
            if (err){
                console.log(err);
                res.end("Error inreading signup page")
            }
            else{
                res.end(data);
            }
        })
    }
    else if (req.url == "/signin"){
        fs.readFile("signin.html",(err, data)=>{
            if (err){
                console.log(err);
                res.end("Error inreading signin page")
            }
            else{
                res.end(data);
            }
        })
    }
    else if (req.url == "/about"){
        fs.readFile("about.html",(err, data)=>{
            if (err){
                console.log(err);
                res.end("Error inreading about page")
            }
            else{
                res.end(data);
            }
        })
    }
    else if (req.url == "/contact"){
        fs.readFile("contact.html",(err, data)=>{
            if (err){
                console.log(err);
                res.end("Error inreading contact page")
            }
            else{
                res.end(data);
            }
        })
    }
})

server.listen(8000, ()=>{
    console.log("Server is listening on port 8000")
})
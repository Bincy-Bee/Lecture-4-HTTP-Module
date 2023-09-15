const http = require("http");

const server = http.createServer((req, res)=>{
    if (req.url == "/"){
        res.end("Welccome to the Home Page")
    }
    else if (req.url == "/login"){
        res.end("Welcome to the login page")
    }
})
server.listen(8090,()=>{
    console.log("Server listening on port 8090")
})
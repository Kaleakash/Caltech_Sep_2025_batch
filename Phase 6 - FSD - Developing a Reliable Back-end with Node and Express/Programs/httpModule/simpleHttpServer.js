let http = require("http");
console.log("module loaded...")
// http://localhost:8080
let server = http.createServer((request,response)=>{
    console.log("Client send the request")
    response.end("Welcome to Http Module")
})

server.listen(8080,()=>console.log("Server running on port number 8080"))
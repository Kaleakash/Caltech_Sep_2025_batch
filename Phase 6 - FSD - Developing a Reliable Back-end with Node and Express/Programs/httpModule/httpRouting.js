let http = require("http");
let url = require("url");

let server = http.createServer((request,response)=>{
    let urlRef = url.parse(request.url,true)   
    response.writeHead(200, { "Content-Type": "text/html" });

    if(urlRef.pathname=="/aboutUs"){
        response.write("<h2>About Us Page</h2>")
        response.end("<p>About Us Page Description</p>")
    }else if(urlRef.pathname=="/contactUs"){
        response.end("<p>Welcome to Contact Us Page</p>")
    }else if(urlRef.pathname=="/login") {
        response.end("<p>Welcome to Login Page</p>")
    }else {    
        response.end("<h2>Index Page- First Page</h2>")
    }
})

server.listen(8080,()=>console.log("Server running on port number 8080"))
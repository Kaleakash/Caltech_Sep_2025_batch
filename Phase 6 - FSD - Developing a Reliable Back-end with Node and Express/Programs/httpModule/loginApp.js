let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer((request,response)=> {
    response.writeHead(200, { "Content-Type": "text/html" });
    let urlRef = url.parse(request.url,true);
    if(urlRef.pathname=="/login"){
        let loginData = fs.readFileSync("login.html");
        response.write(loginData.toString());
    }else if(urlRef.pathname=="/signUp"){
        let loginData = fs.readFileSync("signUp.html");
        response.write(loginData.toString());
    }else if(urlRef.pathname=="/checkLoginDetails" && request.method=="GET"){
        let loginData = urlRef.query
        // if(loginData.emailId=="admin@gmail.com" && loginData.password=="admin@123"){
        //     response.write("<h2>Successfully login</h2>")
        // }else {
        //     response.write("<h2>Failure try once again</h2>")
        // }

        loginsDataFromFile = JSON.parse(fs.readFileSync("logins.json").toString());
        let result = loginsDataFromFile.find(ll=>ll.emailId==loginData.emailId && ll.password==loginData.password)
        if(result != undefined){
            response.write("<h2>Successfully login done by "+loginData.emailId+"</h2>")
            response.write("<a href='/'>Logout</a>")
        }else {
            response.write("<h2>Failure try once again</h2>")
        }
    }else if (urlRef.pathname=="/signUpDetails" && request.method=="GET") {
        let loginData = urlRef.query
        loginsDataFromFile = JSON.parse(fs.readFileSync("logins.json").toString());
        let result = loginsDataFromFile.find(ll=>ll.emailId==loginData.emailId)
        // request.on("",(msg)=> {
        //     console.log(msg)
        // })
        if(result != undefined){
            response.write("<h2>Account didn't create EmailId already exists, "+loginData.emailId+"</h2>")
            response.write("<a href='signUp'>SignUp</a>")
        }else {
            loginsDataFromFile.push(loginData);
            fs.writeFileSync("logins.json",JSON.stringify(loginsDataFromFile));
            response.write("<h2>Account created successfully</h2>")
            response.write("<a href='login'>Login Page</a>")
        }
    }else if(urlRef.pathname=="/"){
        response.write("<h2>Welcome to Simple Http Module App!</h2>")
        response.write("<a href='login'>Login Page</a>")
    }else {
        response.write("<h2>Not Found Page</h2>")
    }
    
    response.end();
})


server.listen(8181,()=>console.log("Server running on port number 8181"))
let express = require("express"); // module load 
let app = express();    // created reference of express 

app.get("/",(request,response)=> {
    response.send("Welcome to Express JS Application")
})

app.get("/aboutUs",(request,response)=> {
    response.send("Welcome to About Us page")
})

app.get("/contactUs",(request,response)=> {
    response.send("Welcome to Contact Us page")
})

app.get("/login",(request,response)=> {
    //response.sendFile("login.html");
   // response.sendFile("D:\\Desktop\\FSD - Designing a Dynamic Front-end with React Sep 2025\\Phase 6 - FSD - Developing a Reliable Back-end with Node and Express\\Programs\\basic Express JS Module Project\\login.html");
    //response.send(__dirname);       // current directory path 
    response.sendFile(__dirname+"//login.html");
})

app.get("/chechLoginDetails",(request,response)=> {
    let emailId = request.query.emailId;
    let password = request.query.password
    if(emailId=="admin@gmail.com" && password=="123"){
        response.send("Successfully login")
    }else {
        response.send("Failure try once again")
    }
})


app.listen(9090,()=>console.log("Server up on port number 9090"))
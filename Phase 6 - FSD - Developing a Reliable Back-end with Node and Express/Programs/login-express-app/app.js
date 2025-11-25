let express = require("express")
let app = express();

// adding mdw to parse the body of post request
app.use(express.urlencoded({extended:true}));  // to parse application/x-www-form-urlencoded

// http://localhost:3000/

let loginDb= [
    {"username":"john@gmail.com","password":"john@123"},
    {"username":"raj@gmail.com","password":"raj@123"}
]

app.get("/",(request,response)=> {

    response.sendFile(__dirname + "/login.html");
})

app.get("/signUpPage",(request,response)=> {

    response.sendFile(__dirname + "/signup.html");
})

app.post("/signIn",(request,response)=> {
    //if method is get we can receive the value using request.query.fieldname
    let login = request.body;
    console.log(login);
    // if(login.username==="admin@gmail.com" && login.password==="admin123"){
    //     response.sendFile(__dirname + "/success.html");
    // }else {
    //     response.sendFile(__dirname + "/failure.html");
    // }
    // testing with db (in memory array or db)
    let userFound = loginDb.find( (user) => user.username === login.username && user.password === login.password );
    if(userFound){
        response.sendFile(__dirname + "/success.html");
    }else {
        response.sendFile(__dirname + "/failure.html");
    }
})


app.post("/signUp",(request,response)=> {
    let signUpData = request.body;
        let userFound = loginDb.find( (user) => user.username === signUpData.username);
    if(userFound){
        response.send("User already exists, please login");
    }else {
        loginDb.push(signUpData);
        response.send("SignUp done Successful");
    }
})




app.listen(3000, ()=>console.log("Server running on port 3000"));
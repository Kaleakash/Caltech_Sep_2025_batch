let express = require("express")
let app = express();

// adding mdw to parse the body of post request
app.use(express.urlencoded({extended:true}));  // to parse application/x-www-form-urlencoded

// http://localhost:3000/

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
    if(login.username==="admin@gmail.com" && login.password==="admin123"){
        response.sendFile(__dirname + "/success.html");
    }else {
        response.sendFile(__dirname + "/failure.html");
    }
    
})


app.post("/signUp",(request,response)=> {

    response.send("SigUp done Successful");
})




app.listen(3000, ()=>console.log("Server running on port 3000"));
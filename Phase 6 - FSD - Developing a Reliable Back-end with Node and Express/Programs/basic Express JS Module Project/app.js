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



app.listen(9090,()=>console.log("Server up on port number 9090"))
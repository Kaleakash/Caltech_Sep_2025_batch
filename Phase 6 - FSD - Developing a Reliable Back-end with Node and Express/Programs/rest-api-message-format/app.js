let express = require("express")
let app = express()
let user = {name:"John Doe", age:30, city:"New York"}
let users=[
    {name:"John Doe", age:30, city:"New York"},
    {name:"Jane Smith", age:25, city:"Los Angeles"},
    {name:"Mike Johnson", age:35, city:"Chicago"}
]
let message = "<abc>Welcome to the Express.js application with REST API</abc>"

app.get("/text",(request,response)=> {
    response.type("text/plain")
    response.send("Welcome to the Express.js application with REST API- Text Message")
})

app.get("/html",(request,response)=> {
    response.type("text/html")
    response.send("<h1>Welcome to the Express.js application with REST API- HTML Message</h1>")
})

app.get("/xml",(request,response)=> {
    response.type("text/xml")
    response.send("<message>Welcome to Express JS application with rest api - XML message</message>")
})
app.get("/json",(request,response)=> {
    response.type("text/json")
    response.send({"message":"Welcome to Express JS application with rest api - JSON message"})
})

app.get("/user",(request,response)=> {
    response.type("application/json")
    response.send(user)  // Sending user object as JSON
})


app.get("/users",(request,response)=> {
   response.json(users)  // Sending array of user objects as JSON   
})

// http://localhost:3000/userQuery?name=John&age=21
// query param 
app.get("/userQuery",(request,response)=> {
    let name = request.query.name
    let age = request.query.age
    response.send("Hello user "+name+" your age is "+age)
})

// http://localhost:3000/userPath/John/21
// path param 
app.get("/userPath/:name/:age",(request,response)=> {
    let name = request.params.name
    let age = request.params.age
    response.send("Hello user "+name+" your age is "+age)
})

app.listen(3000, ()=>console.log("Server running on http://localhost:3000"))
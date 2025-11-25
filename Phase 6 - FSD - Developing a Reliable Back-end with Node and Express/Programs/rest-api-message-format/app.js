let express = require("express")
let app = express()

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
app.listen(3000, ()=>console.log("Server running on http://localhost:3000"))
// load the module 
let express = require("express")
let mongodb = require("mongodb")

let URL="mongodb://localhost:27017"
// create the reference of express 

let app = express();
let myDb;
// middleware 
app.use(express.json())

mongodb.MongoClient.connect(URL).then(client=> {
    myDb = client.db("mydb1")
    console.log("Database connected")
}).catch(error=>console.log(error.message))

// http://localhost:3000/storeEmployee
// store Employee information 
app.post("/storeEmployee",async (request,response)=> {
    let emp = request.body;
    try{
    let result = await myDb.collection("Employee").insertOne(emp);
    response.json(result)
    }catch(error){
        response.json({"msg":error.message})
    }
})

// http://localhost:3000/findAllEmployee
// get all employee records 
app.get("/findAllEmployee",async (request,response)=> {
    try{
    let employees = await myDb.collection("Employee").find().toArray();
    response.json(employees)
    }catch(error){
        response.json({"msg":error.message})
    }
})


app.listen(3000,()=>console.log("Server running on port number 3000"))

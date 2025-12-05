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


// http://localhost:3000/updateSalary
// update Employee salary 
app.patch("/updateSalary/:id",async (request,response)=> {
    let id = new mongodb.ObjectId(request.params.id);
    let newSalary = request.body.salary;
    try{
    let result = await myDb.collection("Employee").updateOne({_id:id},{$set:{salary:newSalary}})
    if(result.matchedCount==1 && result.modifiedCount==1){
        response.json({"msg":"salary updated successfully"})
    }else if(result.modifiedCount==0 && result.matchedCount==1 ){
        response.json({"msg":"salary didn't update because old salary and new salary both are same"})
    }else {
        response.json({"msg":"Record not present with id as "+id})
    }
    
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

// http://localhost:3000/findEmployeeById
// find employee details using id property 
app.get("/findEmployeeById/:id",async (request,response)=> {
    try{
    let id = new mongodb.ObjectId(request.params.id);
    let employee = await myDb.collection("Employee").findOne({_id:id})
    if (employee==null){
        response.json({"msg":"Record not present with id as "+id});
    }else {
        response.json(employee)
    }
    }catch(error){
        response.json({"msg":error.message})
    }
})


// http://localhost:3000/deleteEmployee
// find employee details using id property 
app.delete("/deleteEmployee/:id",async (request,response)=> {
    try{
    let id = new mongodb.ObjectId(request.params.id);
    let result = await myDb.collection("Employee").deleteOne({_id:id})
    if(result.deletedCount>0){
        response.json({"msg":"Record deleted successfully with id as "+id})
    }else {
        response.json({"msg":"Record not present"})
    } 
    }catch(error){
        response.json({"msg":error.message})
    }
})

// http://localhost:3000/findEmployeeHighestSalary
// find employee details using id property 
app.get("/findEmployeeHighestSalary/:salary",async (request,response)=> {
    try{
    let salaryValue = eval(request.params.salary);
    let employees = await myDb.collection("Employee").find({salary:{$gt:salaryValue}}).toArray()
   // console.log(employees)
    if (employees.length==0){
        response.json({"msg":"Record not present with salary >"+salaryValue});
    }else {
        response.json(employees)
    }
    }catch(error){
        response.json({"msg":error.message})
    }
})

app.listen(3000,()=>console.log("Server running on port number 3000"))

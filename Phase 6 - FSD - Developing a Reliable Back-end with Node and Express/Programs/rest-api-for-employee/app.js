let express = require("express")
let app = express();

// adding middleware 
app.use(express.json());    //extract json data from request body

const employees = [
  {
    id: 101,
    name: "John Doe",
    salary: 65000,
    city: "New York",
    department: "Engineering",
    role: "Software Developer",
    experience: 3,
    email: "john.doe@example.com",
    isActive: true
  },
  {
    id: 102,
    name: "Emma Watson",
    salary: 72000,
    city: "San Francisco",
    department: "Engineering",
    role: "Senior Software Engineer",
    experience: 5,
    email: "emma.watson@example.com",
    isActive: true
  },
  {
    id: 103,
    name: "Michael Smith",
    salary: 54000,
    city: "Chicago",
    department: "Marketing",
    role: "Marketing Executive",
    experience: 2,
    email: "michael.smith@example.com",
    isActive: true
  },
  {
    id: 104,
    name: "Sophia Johnson",
    salary: 60000,
    city: "Austin",
    department: "Human Resources",
    role: "HR Manager",
    experience: 4,
    email: "sophia.johnson@example.com",
    isActive: false
  },
  {
    id: 105,
    name: "David Miller",
    salary: 80000,
    city: "Seattle",
    department: "Finance",
    role: "Financial Analyst",
    experience: 6,
    email: "david.miller@example.com",
    isActive: true
  }
];

// Get all Employee details in json format 
// http://localhost:3000/findAllEmployee
app.get("/findAllEmployee",(request,response)=> {
    response.json(employees)
})

// search particular employee details using id property 
// http://localhost:3000/findEmployeeById/1
// http://localhost:3000/findEmployeeById/101
app.get("/findEmployeeById/:id",(request,response)=> {
    let eid = request.params.id;
    let foundEmployee = employees.find(e=>e.id==eid);
    if(foundEmployee!=undefined){
        response.json(foundEmployee)
    }else {
        response.json({"msg":"Record not present with id as "+eid});
    }
})

// post employee details in employees array variable 
// http://localhost:3000/storeEmployee 
// method : post 
// data : {}
app.post("/storeEmployee",(request,response)=> {
    let emp = request.body;
    //console.log(emp);
    // employees.push(emp)
    // response.send("Employee record stored successfully")

    let foundEmployee = employees.find(e=>e.id==emp.id);
    if(foundEmployee==undefined){
        employees.push(emp)
        response.json({"msg":"Record stored successfully"});
    }else {
        response.json({"msg":"Employee id must be unique, "+emp.id+" already present"});
    }
});


// update employee salary, department, role, isActive  
// http://localhost:3000/updateSalary 
// method : patch  
// data : {"id":100,"salary": 66000}

app.patch("/updateSalary",(request,response)=> {
    let emp = request.body;

    let index = employees.findIndex(e=>e.id==emp.id);
    if(index<0){
        response.json({"msg":"Record not present with id as "+emp.id});
    }else {
        employees[index].salary=emp.salary;
        response.json({"msg":"Employee salary updated successfully"});
    }
});

// delete employee details using unique property ie id 
// http://localhost:3000/deleteEmployee/101
// method :delete 


app.delete("/deleteEmployee/:id",(request,response)=> {
    let id = request.params.id;

    let index = employees.findIndex(e=>e.id==id);
    if(index<0){
        response.json({"msg":"Record not present with id as "+id});
    }else {
        employees.splice(index,1);
        response.json({"msg":"Employee deleted successfully"});
    }
});
app.listen(3000,()=>console.log("Server running on port number 3000"));
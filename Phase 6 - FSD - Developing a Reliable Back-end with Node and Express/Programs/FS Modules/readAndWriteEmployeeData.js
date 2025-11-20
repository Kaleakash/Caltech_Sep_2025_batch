let fs = require("fs");
let emp1 = {id:102,fname:"Charlie",age:27};

let employees = JSON.parse(fs.readFileSync("employees.json").toString())
//console.log(employees.length)
if(employees.length==0){
    employees.push(emp1);
    fs.writeFileSync("employees.json",JSON.stringify(employees))
    console.log("Data Stored")
}else {
    let result = employees.find(e=>e.id==emp1.id);
    if(result==undefined){
        employees.push(emp1);
        fs.writeFileSync("employees.json",JSON.stringify(employees))
        console.log("Data Stored")
    } else {
        console.log("Id must be unique")
    } 
}
console.log("All Employee details are")
employees.forEach(emp=>console.log("id is "+emp.id+" name is "+emp.fname+" age is "+emp.age))
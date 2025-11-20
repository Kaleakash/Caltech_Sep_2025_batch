let fs = require("fs");
let emp = {id:100,fname:"John",age:21};
// JSON pre defined object 
// it help to convert object to string and string to object. 
let empString = JSON.stringify(emp);
try{
fs.writeFileSync("emp.json",empString)
console.log("employee data stored")
}catch(error){
    console.log(error)
}
console.log("Normal Statement1")
console.log("Normal Statement2")
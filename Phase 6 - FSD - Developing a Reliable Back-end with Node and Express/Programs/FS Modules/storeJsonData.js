let fs = require("fs");
let emp = {id:102,fname:"Veena",age:26};
// JSON pre defined object 
// it help to convert object to string and string to object. 
let empString = JSON.stringify(emp);
try{
fs.appendFileSync("emp.json",empString)
console.log("employee data stored")
}catch(error){
    console.log(error)
}
console.log("Normal Statement1")
console.log("Normal Statement2")
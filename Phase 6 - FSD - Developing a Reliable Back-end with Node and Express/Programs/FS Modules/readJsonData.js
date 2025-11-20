let fs = require("fs");
try{
let result = fs.readFileSync("emp.json");
//console.log(result);    // buffer format 
let empString = result.toString() // string format 
console.log(empString.id)
let empJson = JSON.parse(empString);
console.log("Id is "+empJson.id)
console.log("FName is "+empJson.fname)
console.log("Age is "+empJson.age)
}catch(error){
    console.log(error.message)
}
console.log("Normal Statement1")
console.log("Normal Statement2")
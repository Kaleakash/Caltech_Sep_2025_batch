let readLineSync = require("readline-sync")
let id = readLineSync.questionInt("Enter the id")
let name = readLineSync.question("Enter the name")
let salary = readLineSync.questionFloat("Enter the salary")
let emailId = readLineSync.questionEMail("Enter the emailId")
let password = readLineSync.questionNewPassword("Enter the password");
console.log("id is "+id);
console.log("name is "+name);
console.log("salary is "+salary);
console.log("emailId is "+emailId);
console.log("Password is "+password);
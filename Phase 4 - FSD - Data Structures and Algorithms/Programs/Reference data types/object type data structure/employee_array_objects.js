// Employee array object with property as id,name,salary with 5 employee objects
let employees = [
    { id: 1, name: "Alice", salary: 50000 },
    { id: 2, name: "Bob", salary: 60000 },
    { id: 3, name: "Charlie", salary: 55000 },
    { id: 4, name: "David", salary: 70000 },
    { id: 5, name: "Eve", salary: 65000 }
];
console.log("Number of Employee "+employees.length);
let emp6 = { id: 6, name: "Frank", salary: 72000 };
employees.push(emp6);
console.log("Number of Employee "+employees.length);
let emp7 = { id: 8, name: "Grace", salary: 68000 };
// Check if emp7 already exists in employees array based on id
// it will return the first matching object or undefined if not found
let result = employees.find(e=>e.id==emp7.id);
if(result==undefined){
    employees.push(emp7);
    console.log("Employee added");
}else {
    console.log("Employee with id "+result.id+" already exists");
}
// remove particular object using id property (eg: id=3)
// findIndex will return the index of the object or -1 if not found
let empRemoveId = 10;
console.log("Before removal, Number of Employee "+employees.length);
let index = employees.findIndex(e=>e.id==empRemoveId);
if(index!=-1){
    employees.splice(index,1);
    console.log("Employee with id "+empRemoveId+" removed");
}else {
    console.log("Employee with id "+empRemoveId+" not found");
}
console.log("After removal, Number of Employee "+employees.length);
// display all employee objects using forEach
employees.forEach(e=>{
    console.log(e);
});
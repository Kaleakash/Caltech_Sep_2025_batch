// Function style object creation with properties and methods with same value for all objects
// function Employee() {
// this.fname = "John";
// this.lname = "Doe";
// this.age = 30;          // property 

// this.displayEmployee = function() {   // method
//     console.log(this.fname + " " + this.lname + " " + this.age);
// }

// }
//Employee(); // normal function consider as function call
// var emp1 = new Employee(); // using new keyword consider as object creation
// var emp2 = new Employee();

// emp1.displayEmployee();
// emp2.displayEmployee();


// Function style object creation with properties and methods with different value for all objects
function Employee(fname, lname, age) {  // parameter with dynamic value
this.fname = fname;  // property
this.lname = lname      // property
this.age = age;          // property 

this.displayEmployee = function() {   // method
    console.log(this.fname + " " + this.lname + " " + this.age);
}

}

var emp1 = new Employee("John","Deo",32); // using new keyword consider as object creation
var emp2 = new Employee("Ravi","Kumar",28);

emp1.displayEmployee();
emp2.displayEmployee();
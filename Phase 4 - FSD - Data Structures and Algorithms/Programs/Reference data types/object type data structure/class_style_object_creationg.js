// class Employee {
//     id=100;
//     name="John";
//     age = 30;
//     salary = 50000;     // property without var, let or const as well as without this keyword

//     displayEmployee() { // function without function keyword as well as without this keyword

//         console.log(this.id);
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.salary);
//     }

// }

// let emp1 = new Employee();
// let emp2 = new Employee();

// emp1.displayEmployee();
// emp2.displayEmployee();

// Employee object creation using constructor
class Employee {
    
    constructor() { // constructor is a special method to initialize the object properties
        console.log("Constructor called and memory allocated");
    }
    
    displayEmployeeInfo() {
        console.log("Employee Info");
    }

}
let emp1 = new Employee(); // memory allocated
emp1.displayEmployeeInfo();
emp1.displayEmployeeInfo();

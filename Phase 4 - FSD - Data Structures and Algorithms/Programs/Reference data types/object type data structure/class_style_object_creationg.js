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
// class Employee {
    
//     constructor() { // constructor is a special method to initialize the object properties
//         console.log("Constructor called and memory allocated");
//     }
    
//     displayEmployeeInfo() {
//         console.log("Employee Info");
//     }

// }
// let emp1 = new Employee(); // memory allocated
// emp1.displayEmployeeInfo();
// emp1.displayEmployeeInfo();

// Creating Employee object with parameterized constructor
class Employee {
    constructor(id, name, age=21, salary=12000) { // parameterized constructor
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }   
    displayEmployeeInfo() {
        console.log("Employee Info");
        console.log(this.id, this.name, this.age, this.salary);   
    }   
}
let emp1 = new Employee(100, "John", 30, 50000);
let emp2 = new Employee(101, "Jane", 28, 60000);
let emp3 = new Employee(102, "Doe", 35);
let emp4 = new Employee(103, "Smith"); 
emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo();
emp3.displayEmployeeInfo(); 
emp4.displayEmployeeInfo();

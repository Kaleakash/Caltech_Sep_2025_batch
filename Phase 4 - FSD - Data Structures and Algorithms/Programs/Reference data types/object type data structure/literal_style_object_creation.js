// // object creation in literal style 
// let emp1 = {eid:100,ename:"John",salary:50000.50,skillSet:["Java","JavaScript","ReactJS"],
//             address:{city:"New York",state:"NY",country:"USA"}
// };
// console.log(emp1);          // string format. 
// console.log(typeof emp1);   
// console.log("Employee ID: "+emp1.eid);
// console.log("Employee Name: "+emp1.ename);
// console.log("Employee Salary: "+emp1.salary);
// console.log("Employee Skill Set: "+emp1.skillSet);  // Array format but string format.
// console.log("Employee Skill Set: "+emp1.skillSet[0]);  
// console.log("Employee Skill Set: "+emp1.skillSet[1]);  
// console.log("Employee Skill Set: "+emp1.skillSet[2]);
// console.log("Employee Address: "+emp1.address);     // string format of address object.
// console.log("Employee City: "+emp1.address.city);
// console.log("Employee State: "+emp1.address.state);
// console.log("Employee Country: "+emp1.address.country);

//literal style object creation with function.
let emp1 = {eid:100,ename:"John",salary:50000.50,skillSet:["Java","JavaScript","ReactJS"],
            address:{city:"New York",state:"NY",country:"USA"},
            showDetails:function(){
                console.log("Employee ID: "+this.eid);
                console.log("Employee Name: "+this.ename);
                console.log("Employee Salary: "+this.salary);
                console.log("Employee Skill Set: "+this.skillSet);
                console.log("Employee Address: "+this.address.city+","+this.address.state+","+this.address.country);
            }
};

emp1.showDetails();   // method invocation.


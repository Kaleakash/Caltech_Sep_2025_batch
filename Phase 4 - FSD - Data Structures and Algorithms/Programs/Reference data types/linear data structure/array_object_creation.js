let num1=[];        // literal style object creation 
let num2 = new Array(); // constructor style object creation
console.log(num1);
console.log(num2);
console.log(num1.length);
console.log(num2.length);
num1.push(10);  // add the element at the end of the array
num1.push(20);
num1.push(30);
num1.unshift(5); // add the element at the beginning of the array
    console.log(num1);  // it display all the elements of the array separated by comma
console.log(num1.join(" "))
console.log(num1.length);
console.log("0 position element from array "+num1[0]); // access the element at index 0
num1.pop(); // remove the last element from the array
num1.shift(); // remove the first element from the array
console.log(num1);
console.log(num1.length);

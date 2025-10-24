// array with 1 digit numbers
let num = [3,1,6,2,4,5,8,7];    // array with literal style 
console.log("Before Sorting:");
for(let n of num) {
    console.log(n);
}

num.sort();    // sorting the array

console.log("After Sorting:");  
for(let n of num) {
    console.log(n);
}
let num1=[10,3,25,7,56,2,89,1]; // array with literal style
console.log("Before Sorting:");
for(let n of num1) {
    console.log(n);
}
// it return +ve or -ve or zero 
num1.sort((n1,n2)=>n1-n2); // sorting the array in ascending order
console.log("After Sorting: Ascending Order");
for(let n of num1) {
    console.log(n);
}
num1.sort((n1,n2)=>n2-n1); // sorting the array in Descending order
console.log("After Sorting: Descending Order");
for(let n of num1) {
    console.log(n);
}
// array with string values 
let names = ["John", "Alice", "Bob", "Charlie", "Eve"];
console.log("Before Sorting:");
for(let name of names) {
    console.log(name);
}
let name1="John";
let name2="Alice";
console.log(name1.localeCompare(name1)); // it return +ve or -ve or zero
// return +ve, -ve or zero 
names.sort((name1,name2)=>name1.localeCompare(name2)); // sorting the array in ascending order
console.log("After Sorting: Ascending Order");
for(let name of names) {
    console.log(name);
}
names.sort((name1,name2)=>name2.localeCompare(name1)); // sorting the array in ascending order
console.log("After Sorting: Descending Order");
for(let name of names) {
    console.log(name);
}
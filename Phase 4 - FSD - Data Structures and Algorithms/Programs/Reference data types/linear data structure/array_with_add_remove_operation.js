let num1=[10,20,30,40,50,60,70,80,90,100]
console.log(num1)
num1.push(110)
num1.unshift(0)
console.log(num1)
//num1.splice(4,1);   // 1st parameter index position, 2nd parameter how many elements to be removed
//num1.splice(4,3);
//num1.splice(4,0,500);   // 1st parameter index position, 2nd parameter how many elements to be removed, 3rd parameter element to be added
num1.splice(4,0,500,600,700,800);
console.log(num1)
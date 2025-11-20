let readline = require("readline");
var r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
// r1.question("Enter the name",(fname)=> {
//     console.log("Your name is "+fname)
//     r1.close();
// })


r1.question("Enter the name ",(fname)=> {
    
   
    r1.question("Enter the Age ",(age)=> {
    console.log("Your name is "+fname)
    console.log("Your Age is "+age)

    

    r1.close();
    })

})


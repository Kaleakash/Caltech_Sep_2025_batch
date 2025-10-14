let id =100;
let fname = "John Doe";
let isActive = true;
let score = 99.5;
let bigNumber = 9007199254740991n;
let symbol = Symbol('unique');
let und;
let nll = null;
console.log(typeof id);          // number
console.log(typeof fname);
console.log(typeof isActive);    // boolean
console.log(typeof score);      // number
console.log(typeof bigNumber); // bigint
console.log(typeof symbol); // symbol
console.log(typeof und);        // undefined
console.log(typeof nll);        // object (this is a known quirk in JavaScript)
console.log(id, fname, isActive, score, bigNumber, symbol, und, nll);
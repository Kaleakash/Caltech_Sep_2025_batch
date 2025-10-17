class Stack {
    constructor() {
        this.items = [];        // Array to hold stack elements
        this.MAX_SIZE = 5; // Maximum size of the stack
    }
    // Push an element onto the stack
    push(element) {
        if (this.items.length >= this.MAX_SIZE) {
            console.error("Stack Overflow");
            return;
        }else {
        this.items.push(element);
        console.log(`${element} pushed to stack`);
        //console.log("Data Pushed element Successfully"+element);
        }
    }
    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            console.error("Stack Underflow");
            return null;
        }
        return this.items.pop();
    }
    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;     // Return true if stack is empty
    }
    // Peek at the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";                    // Return null if stack is empty
        }
        return this.items[this.items.length - 1]; // Return the top element
    }
}
let stack = new Stack();    // Create a new stack instance
console.log("Top most elements from stack "+stack.peek()); // Peek at the top element of the stack it return empty
console.log("Is stack empty? " + stack.isEmpty()); // Check if the stack is empty
stack.push(10);            // Push elements onto the stack  0 
stack.push(20);             // Push elements onto the stack  1
console.log("Top most elements from stack "+stack.peek()); // Peek at the top element of the stack it return empty
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);            // This will trigger "Stack Overflow"
console.log("Is stack empty? " + stack.isEmpty()); // Check if the stack is empty
console.log("Removed top most elements from stack "+stack.pop());  // Pop an element from the stack 50 is removed
console.log("Removed top most elements from stack "+stack.pop());   // Pop another element from the stack 40 is removed
console.log("Removed top most elements from stack "+stack.pop());   // Pop another element from the stack 30 is removed
console.log("Removed top most elements from stack "+stack.pop());   // Pop another element from the stack 20 is removed
console.log("Removed top most elements from stack "+stack.pop());   // Pop another element from the stack 10 is removed
console.log("Removed top most elements from stack "+stack.pop());  // This will trigger "Stack Underflow"
console.log("Is stack empty? " + stack.isEmpty()); // Check if the stack is empty
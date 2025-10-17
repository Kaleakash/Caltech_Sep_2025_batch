class Queue {
    constructor() {
        this.items = [];
    }
    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
        console.log(`${element} added to the queue`);
    }
    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();  // Remove the first element of the array
    }
    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Return the front element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];  // Return the first element of the array
    }
}
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log("get front element from queue "+queue.peek()); // Output: 10    it return the front element but does't  from queue 
console.log("Remove front element from queue "+queue.dequeue()); // Output: 10  it removes the front element from queue
console.log("Empty or not "+queue.isEmpty()); // Output: false
console.log("Remove front element from queue "+queue.dequeue()); // Output: 20
console.log("Empty or not "+queue.isEmpty()); // Output: true
// Example usage:
queue.enqueue(30);
console.log("Get front element from queue "+queue.peek()); // Output: 30    
console.log("Remove front elements from queue "+queue.dequeue()); // Output: 30
console.log("Remove front element from queue "+queue.dequeue()); // Output: Underflow
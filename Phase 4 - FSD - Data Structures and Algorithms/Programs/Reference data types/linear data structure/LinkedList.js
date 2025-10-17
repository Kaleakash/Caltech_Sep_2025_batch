class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;           // Initialize the head of the list to null
    }
    // Add a new node with the given data to the end of the list
    append(data) {
        const newNode = new Node(data); // Create a new node
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;    // Start from the head of the list
        while (current.nextNode !== null) {
            current = current.nextNode;
        }   
        current.nextNode = newNode;
    }
    // print all elements in the linked list
    printList() {
        let current = this.head;    // Start from the head of the list
        while (current !== null) {
            console.log(current.data); // Print the data of the current node
            current = current.nextNode; // Move to the next node
        }
    }
}
let list = new LinkedList();    // Create a new linked list instance
list.append("John");
list.append("Lex");
list.append("Jane");
list.append("Doe");
list.printList();              // Print all elements in the linked list
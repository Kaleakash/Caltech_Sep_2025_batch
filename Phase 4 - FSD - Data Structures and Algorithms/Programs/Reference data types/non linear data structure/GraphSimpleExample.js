class Graph {
    constructor() {
        this.adjacencyList = {}; // Initialize an empty adjacency list
    }
    // Method to add a vertex to the graph ie node 
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []; // Add the vertex with an empty array and vertex name added in object {}
            console.log(`Vertex ${vertex} added.`);
        }else {
            console.log(`Vertex ${vertex} already exists.`);
        }
    }
    // method to add an edge between two vertices
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
                this.adjacencyList[v1].push(v2);    // for directed graph ie unidirectional edge
                this.adjacencyList[v2].push(v1); // For undirected graph
            console.log(`Edge added between ${v1} and ${v2}.`);
        } else {
            console.log(`One or both vertices not found: ${v1}, ${v2}`);
        }
    }
    // Method to display the graph
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
        }
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
    g.addEdge("A", "B");
    //g.addEdge("A", "C");
    //g.addEdge("B", "C");
    //g.addEdge("B", "A");
    //g.addEdge("C", "D");
//g.addEdge("E", "D");
//g.addEdge("B", "F");
g.display();
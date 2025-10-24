class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a city (vertex)
    addCity(city) {
        if (!this.adjacencyList[city]) {
            this.adjacencyList[city] = [];
            console.log(`City ${city} added to the graph.`);
        }else {
            console.log(`City ${city} already exists in the graph.`);
        }
    }

    // Add a bidirectional flight (edge) with price
    addFlight(city1, city2, price) {
        if(!this.adjacencyList[city1] || !this.adjacencyList[city2]) {
            console.log('Any of the city not exist. Please add them first.');
            return;
        }else {
        this.adjacencyList[city1].push({ destination: city2, price });
        this.adjacencyList[city2].push({ destination: city1, price }); // Bidirectional
        }
        
    }

    // List all flights from a city
    listFlights(city) {
        if (!this.adjacencyList[city]) {
            console.log('City not found');
            return;
        }
        this.adjacencyList[city].forEach(flight => {
            console.log(`${city} <-> ${flight.destination} : $${flight.price}`);
        });
    }

    // Print the entire graph
    printGraph() {
        for (let city in this.adjacencyList) {
            const flightsInformation = this.adjacencyList[city].map(f => `${f.destination} ($${f.price})`).join(', ');
            console.log(`${city}: ${flightsInformation}`);
        }
    }
}

// Example usage:
const flightGraph = new Graph();
flightGraph.addCity('New York');
flightGraph.addCity('New York');
flightGraph.addCity('London');
flightGraph.addCity('Paris');
flightGraph.addCity('Berlin');

flightGraph.addFlight('New York', 'London', 500);
flightGraph.addFlight('New York', 'Paris', 450);
flightGraph.addFlight('London', 'Paris', 120);
flightGraph.addFlight('London', 'Berlin', 200);
flightGraph.addFlight('Paris', 'Berlin', 180);
flightGraph.addFlight('Paris1', 'Berlin', 180);

console.log('Flights from London:');
flightGraph.listFlights('London');

console.log('\nAll Flight Connections:');
flightGraph.printGraph();

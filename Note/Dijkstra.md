# Dijkstra's algorithm
- what is the fastest way to get from point A to point B?
- very useful
    - GPS
    - Network routing - finds open shortest path for data
    - Biology - used to model the spread of viruses among humans
    - Airline tickets - finding cheapest route to your destination
    - Biology - used to model the spread of viruses among humans

````javascript
class weightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2: weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}
````

# Graph

### Nodes + connections 
- a graph data strucrue consiss of a finite (and possibly matuable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph 

- social media connections 
- map - roads 
- recommendations e.g. "people also watched", "frequently bought with"

### Terminology 
Vertex - a node
vertices
Edge - connection between nodes
Weighted/unweighted - values assigned to distances(edge) between vertices
direxted/undirected - directions assigned to distanced between vertices 

#### Adjacency Matrix 

### Adjacency List
- user an array or list to store the endges to figure out neighboors/connections 
- "is there an enge between 1 and 5?"
- more data in the real-world tends to lend itself to sparser and/or larger graphs

### Adjacency List vs. Adjacency Matrix 
| Adjacency List | Adjacency Matrix|
|----------------+-----------------|
| - can take up less space (in sparse graphs) | - takes up more space (in sparse graphs) |
| - faster to iterate over all edges | - slower to iterate over all edges|
| -  can be slower to look up specific edge | - faster to look up specific edge O(1) |

Graph Class
````JavaScript 
// NOT DIRCTED 

class Graph {
    constructor () {
        this.adjacencyList = {}
    }
    addVertex (name) {
        if(!this.adjacencyList) this.adjacencyList[vertex] = [];
    }
    addEdge (v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(name) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
}

````
Adding a Vertex (addVertex())
    - accepts a name of a vertex
    - it should add a key to the adjacency list with the name of the vertex and set its value to be an ampty array 

Adding an Edge (addEdge(vertex1, vertex2))
    - accept two vertices
    - should find in the adjacency list the key of vertex1 and push vertex2 to the array 
    - should find in the adjacency list the key of vertex2 and push vertex1 to the array 

Removing an Edge (removeEdge(v1, v2))
    - should accept two vertices, v1 and v2
    - should reassign the key of vertex1 to be an array that does not contain vertex2
    - should reassign the key of vertex2 to be an array that does not contain vertex1

Removing Vertax
    - should accpet a vertex to remove
    - should loop as long as there are any other vertices in the adjacency list for that vertex
    - inside of the loop, call our removeEdge() with the vertex we are removing and any values in the adjacency list for that vertex
    - delete the key in the adjacency list for ghat vertex 
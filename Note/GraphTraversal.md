# Greaph Traversal 
- Peer to peer networking
- Web crawlers
- Finding "closest" matches/recommendations
- shortest path problems
    - GPS navigation
    - solving mazes
    - AL (shortest path to win the game)
## Depth First 
- use stack! 
DFS(vertex) {
    if vertex is empty
        return
    add vertex to results list
    mark vertex as visited 
    for each neighbor in vertex's neighhors:
    if neighbor is not visited:
    recursively call DFS on neighbor 
}

```` javascript 
// the function should accept a starting node
// create a list to store the end result, to be returned at the very end
// create an object to store visited certices
// create a helper function which accepts a vertex
    // the helper function should return early if the vertexc is empty
    // the helper function should place the vertex it accepts into the visited object and push that vertec into the result array
    // loop over all of the values in the adjacencyList for that vertex
    //if any of those values have not been visited, recursively invoke the helper function with that vertex
    // invoke the helper function with the starting vertex

    class Graph {
        constructor() {
            thiis.adjacencyList = {}
        }
        addVertex(vertex) {
            if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        }
        addEdge(v1, v2) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v2);
        }
        removeEdge(vertex1, vertex2) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( 
                v => v !== vertex2
            )
            this.adjacencyList[vertex2]
        }

        removeVertex(vertex) {
            while(this.adjacencyLiist[vertec].length) {
                const adjacentVertex = this.adjacencyList[vertec].pop();
                this.removeEdge(vertex, adjacecntVertex)
            }
            delete this.adjacencyList[vertex]
        }
        //use callstack to track where we visited 
        depthFirstRecursive(start) {
            const result = [];
            const visited = {};
            // the meaning of 'this' changed
            const adjacencyList = this.adjacencyList;

            (function dfs(vertex){
                if(!vertex) return null;
                visited[vertex] = true;
                result.push(vertex);
                adjacencyList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                        return dfs(neighbor)
                    }
                });
            })(start);
        
            return result;
        }
    }

    // the function should accept a starting node
    depthFirstIterative(start) {
    // create a stack to help use keep track of vertices
        const stack = [start]
    // create a liist to store the end result, to be returned at the very end
        const result = [];
    // create an object to store visited vertices
        const visited = {};
    // add the starting vertex to the stack, and mark it visited
        visited[start] = truel
    // while the stack has something in it:
        while (stack.length) {
        // pop the next vertex from the stack
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
            // if that vertex hasn't been visited yet:
               if(!visited[neighbor]){
                // Mark it as visited
                   visited[neighbor] = true;
                // add it to the result list
                   stack.push(neighbor)
               } 
            });
            // push all of its neighbots into the stack 
        }
    // return the result array 
        return resultl
    }
````

## Breath First 
- use queue! 

````javascript
// accept a starting vertex
breathFirst (start) {
    // create a queue(or an array)and place the starting vertex in it 
    const queue = [start];
    // create an array to store the nodes visited
    const result = [];
    // create an object to store nodes visited
    const visited = {};
    // mark the starting vertex as visited
    visited[star] = true;
    let currentVertex
    // loop as long as there is anything in the queue
    while(queue.length) {
        // remove the first vertec from the queue and push it into the array that stores nodes visited
        currentVertex = queue.shift();
        result.push(currentVertex);
        // loop over each vertec in the adjacency list for the vertec you are visiting
        this.adjacencyList[currentVetex].forEach(neighbor => {
            // if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vetec
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
        // once you have finished looping, return the array of visited nodes
        return result;
    }
}
````
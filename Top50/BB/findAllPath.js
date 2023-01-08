/**
 797. All Paths From Source to Target

 Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

 The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Approach 1: Backtracking
Overview

Intuition

Specifically, for this problem, we could assume ourselves as an agent in a game, we can explore the graph one step at a time.

At any given node, we try out each neighbor node recursively until we reach the target or there is no more node to hop on. By trying out, we mark the choice before moving on, and later on we reverse the choice (i.e. backtrack) and start another exploration.

To better demonstrate the above idea, we illustrate how an agent would explore the graph with the backtracking strategy, in the following image where we mark the order that each edge is visited.

DFS order

Algorithm
The above idea might remind one of the Depth-First Search (DFS) traversal algorithm. Indeed, often the backtracking algorithm assumes the form of DFS, but with the additional step of backtracking.

And for the DFS traversal, we often adopt the recursion as its main form of implementation. With recursion, we could implement a backtracking algorithm in a rather intuitive and concise way. We break it down into the following steps:

Essentially, we want to implement a recursive function called backtrack(currNode, path) which continues the exploration, given the current node and the path traversed so far.

Within the recursive function, we first define its base case, i.e. the moment we should terminate the recursion. Obviously, we should stop the exploration when we encounter our target node. So the condition of the base case is currNode == target.

As the body of our recursive function, we should enumerate through all the neighbor nodes of the current node.

For each iteration, we first mark the choice by appending the neighbor node to the path. Then we recursively invoke our backtrack() function to explore deeper. At the end of the iteration, we should reverse the choice by popping out the neighbor node from the path, so that we could start all over for the next neighbor node.

Once we define our backtrack() function, it suffices to add the initial node (i.e. node with index 0) to the path, to kick off our backtracking exploration.

time = O(2^N * N)
As we calculate shortly before, there could be at most 2^(N-1) - 1 possible paths in the graph.

For each path, there could be at most N-2 intermediate nodes, i.e. it takes O(n) time to build a path.
Space = O(N)
https://www.youtube.com/watch?v=CYnvDzMprdc
 */

var allPathsSourceTarget = function(graph) {
    //depth first search 
    let result = [];
    backtracking([0], 0, graph, result);
    return result;
};

function backtracking(current, node, graph, result) {
    //base case 
    if (node == graph.length - 1) {
        result.push(current.slice(0));
        return;
    }

    for(let i = 0; i < graph[node].length; i++) {
        current.push(graph[node][i]);
        backtracking(current, graph[node][i], graph, result);
        current.pop();
    }
}
    // Input: graph = [[1,2],[3],[3],[]]
    // Output: [[0,1,3],[0,2,3]]
    // Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
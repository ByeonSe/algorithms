# Tree Traversal 
1. Breath first search 
2. Depth first search 
    1. In order
    2. Pre order
    3. Post order

## Breath first search 
- visit every nodes in the same level before going to the child level 

steps - iterative 
1. create a queue (first come, first serve) and a variable to store the values of nodes visited 
2. place the root node in the queue
3. loop as long as there iis anything in the queue
    1. dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    2. if there is a left property on the node dequeued - add it to the queue
    3. if there is a right property on the node dequeued - add it to the queue
4. return the variable that stores the values 

````JavaScript 
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

//      10
//   5     13
// 2  7  11  16

// [10, 5, 13, 2, 7, 11, 16]

````
    DFS PreOrder - visit the node first, traverse the left and right 

//      10
//   5     13
// 2  7  11  16

// [10,5,2,7,13,11,16]

steps - recursively 
1. create a variable to store the values of nodes visited
2. store the root of the BST in a variable called current 
3. write a helper function which accepts a node
    1. push the value of the node to the variable that stores the values
    2. if the node has a left property, call the helper function with the left peoperty on the node
    3. if the node has a right property, call the helper funxtion with the right property on the node. 
4. invoke the helper function with the current variable 
5. return the array of values

````JavaScript 

    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse (node) {
            data.push(node.value)
            //this order matters 
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data; 
    }


````
DFS - PostOrder 
      Post - explore all children then visit the node 
//      10
//   5     13
// 2  7  11  16

// [2,7,5 11,16,13,10]


steps - recursively 
everything is the same as the DFS-PreOrder except the order of the helper function 

1. create a variable to store the values of nodes visited
2. store the root of the BST in a variable called current 
3.  ** write a helper function which accepts a node **
    1. if the node has a left property, call the helper function with the left peoperty on the node
    2. if the node has a right property, call the helper funxtion with the right property on the node. 
    3. push the value of the node to the variable that stores the values
4. invoke the helper function with the current variable 
5. return the array of values

````JavaScript 

    PreOrder (node) {
        let data = [];
        let current = this.root;
        function traverse (node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(current)
        return data
    }

````

DFS - InOrder 

//      10
//   5     13
// 2  7  11  16

// [2,5,7,10,11,13,16]

steps - recursively 
everything is the same as the DFS-PreOrder except the order of the helper function 

1. create a variable to store the values of nodes visited
2. store the root of the BST in a variable called current 
3.  ** write a helper function which accepts a node **
    1. if the node has a left property, call the helper function with the left peoperty on the node
    2. push the value of the node to the variable that stores the values
    3. if the node has a right property, call the helper funxtion with the right property on the node. 
4. invoke the helper function with the current variable 
5. return the array of values

````JavaScript 
    InOrder () {
        let data = [];
        let current = this.root
        function traverse (node) {
            // node.left && traverse(node.left)
            if (node.left) traverse(node.left)
            data.push(node.value)
            // node.right && traverse(node.right)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data 
    }
````

Tree 
    - trees are non-linear data structures that contain a root and child nodes
Binary Tree
    - binary tree can have calues of any type, but at most two children for each parent 
Binary Search Tree (sorted)
    - a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater 
    - we can search through Trees using BFS and DFS 
Time complexity - visiting node 1 time O(n)
BFS?
- lots of nodes to keep track of for the wide tree
- better with deep tree

DFS?
- fewer nodes to keep track of for the wide tree
- takes up less space to use if it is deep

    In order 
        - lowest to highest 
    Pre Order 
        - dublicate a tree
        - you can reconstruct from the tree
    Post Order
        - 
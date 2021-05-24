# Tree 
- data structure that consists of nodes in a parent/child relationship 

Lists - linear
Trees - nonlinear 

- A node can points to their child 
- all of the arrows should point down 

- Root - the top node in a tree
- Child - a node directly connected to another node when moving away from the Root
- Parent - the converse notion of a child
- Siblings a group of nodes with the same parent
- Leaf - a node with no children 
- Edge - the connection between one node and another (arrow)

Example 

- HTML DOM : it lends itself to a tree like structure 
- Networking Routing
- Abstracts syntax tree
- Artificial intelligence 
- Folders in operating systems
- computer file systems 

# Binary Search Tree
- every parent node has at most two children
- every node to the left of a parent node is always less than the parent
- every node to the right of a parent node is always greater than the parent 

````Javascript 
Class Node {
    constructor (Value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree () {
    constructor () {
        this.root = null;
    }
    insert (value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left.right = new Node(7);

//      10
//   5     13
// 2  7  11  16

````
Inserting a node 

steps 
1. create a new node
2. starting at the root 
    - check if there is a root, if not - the root neow becomes that new node!
    - if there is a root, check if the value of the new node is greater than or less than the value of the root
    - if it is greater 
        - check to see if there is a node to the right 
        - if there is, move to that node and repreat these steps
        - if there is not, add that node as the right property 
    - if it is less 
        - check to see if there is a node to the left
        - if there is, move to that node and repeat these steps
        - if there is not, add that node as the left property 
````javascript 
    insert (value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } 
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right 
            }
        }
    }
````


````javascript 
    find (value) {
        iif (this.root === null) return false;
        let current = this.root,
        // if we found the item yet
        found = false;
        //while we haven't found the node and there is something to loop over
        while (current && !found) {
            if (claue < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return  current;
    }
````

BST(sorted) BIG O - not guaranteed (there is a BST that looks like a linked list. -> O(n))
- insertion O(log n)
- searching - O(log n)
N -> number of nodes 
As the number of nodes doubles, only increase the number of steps to insert/find by 1
2x number of nodes : 1 extra step
4x                 : 2 extra step
8x                 : 3 extra step 

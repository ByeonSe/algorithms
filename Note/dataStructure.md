# Data Structure 

## what is a linked list?
- a data structure that contains a ehad, tail and length property

### Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

## Singly Linked List
- each node is connected only one directionaly to the next node

### Comparison with Arrays 
- List
    - do not have indexes
    - connected via nodes with a next pointer
    - random access is not allowed (traverse from the beigining)
- Arrays
    - indexed in order
    - insertion and deletion can be expensive
    - can quickly be accessed at a specific index (you have to reindex elements)
skeleton

```JavaScript
class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    //adding a node to the end of the Linked List
    push (val) {
        //create a new node
        let newNode = new Node (val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        //return the whole list 
        return this;
    },

    //pop
    // removing a node from the end of the linked list
    pop () {
        if (!this.head) return undefined 

        //loop thorugh the list until you reach the tail 
        let current = this.head
        let newTail = current; 
        while (current.next) {
                newTail = current;
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null 
            this.length--;
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            return current;
        },
    }
}
```
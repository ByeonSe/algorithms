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

    // removing a new node from the beigining of the linked list 
    
    shift () {
        // if there are no nodes, return undefined
        //or if this.length === 0
        if (!this.head) return undefined;
        // store the current head property in a variable
        let currentHead = this.head;
        // set the head peoperty to be the current head's next property 
        let this.head = currentHead.next;
        // decrement length by 1
        this.length--;
        // return the value of the node removed 
        return currentHead;
    }

    // adding a new node to the beginning of the linked list
    // this function should accept a value
    unshift(value) {
        // create a new node using the value passed to the function
        let newNode = new Node(value)
        // if there is no head peoperty on the list, set the head and tail to be the newly created node
        if (!head) {
            this.head = newNode
            this.tail = this.head
        } else {
            // otherwise set the newly created node's next property to be the current head property on the list 
            newNode.next = this.head
            // set the head property on the list to be that newly created node
            this.head = newnode
        }
        //increment the length of the list by 2
        this.length += 2
        //return the linked list 
        return this
    }

    // retriving a node by it's posiition inthe linked list
    // traverse the node nth timnes 
        // accept an index
    get (idx) {
        // if the index is less than zero or greater than or equal to the length of the list, return null
        if (idx < 0 || idx >= this.length) return null;
        // loop through the list until you reach the index and return the node at that specific index 
        let counter = 0
        let currentNode = this.head
        while(counter !== index) {
            current = current.next;
            counter++
        }
        return current 
    }

    // changing the value of a node based on it's position in the linked list 
    // accpets an index and value 
    // use get() to find the specific node
    set (idx, val) {
        // if the node is not found, return false
        let foundNode = this.get(val)
        if (!foundNode) = 
            foundNode.val = val;
            return true;
        // if the node is found, se the value of that node to the value passed to the function and return true 
        return false
    }

    //adding a node to the linked list at a specific position
    insert (idx, val) {
        //if the index is less than zero or greater than the length, return false 
        if (idx < 0 || idx > this.length) return false
        // if the index is the same as the length, push a snew node to the end of the list 
        // doubley negate: !! converts the value to the boolean value 
        // one! coerce the value to the boolean value and return the opposit so use !! to true boolean value 
        if (idx === this.length) return !!this.push(val)
        // if the index is 0, unshift a new node to the start of the list 
        if (idx === 0) return !!this.unshift(val)
        // otherwise, using the get methods, access the node at the index -1
        let prevNode = this.get(idx -1)
        // set the next property on that node to be the new node
        let newNode = new Node(val)
        // set the next property on the new node to be the previos next 
        let temp = prevNode.next;
        prevNode.next = newNode
        newNode.next = temp
        //increment the length
        this.length++
        // return true 
        return true 
    }
    // remove a node from the linked list at a specific position 
    remove(idx) {
        //if the index is less than zero or greater than the length, return undefined
        if (idx < 0 || idx >= this.length) return undefined
        //if the index is the same as the length-1, pop
        if (idx === this.length -1) return this.pop()
        //if the index is 0, shift
        if (idx === 0) return this.shift()
        // otherwise, using the get method, access the node at the index -1
        let prevNode = this.get(idx-1)
        let removed = prevNode.next
        // set the next property on that node to be the next of the next node
        let nextNode = removed.next
        prevNode.next = nextNode
        // decrement the length
        this.length--
        // return the value of the node removed 
        return removed;
    }

    //reversing the linked list 
    // ******* traverse and reverse popular interview question *******
    reverse() {

    }



}
```
### Big O of Singly Linked List 
- Insertion O(1)
    - unlike arrays where changing the index of the following elements are required 
- Removal O(1) || O(N)
    - O(1) : removing it from the beigining (using temp)
    - O(N) : removing it from the last. Needs to find the node before the removing node. So it requires iteration. 
- Searching O(N)
    - n is the length of the list. Starts from the beigining. Check every single node
    - as the n grows, so does the amount of opertaions to search
- Access O(N)
    - Starts from the beigining. Check every single node
    - as the n grows, so does the amount of opertaions to access

## Singly Linked List vs Array

* Singly linked list are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
* arrays contain a built in index whereas linked list do not 
* the idea of a list data structure that consists of nodes is the foundation for other data structures liike Stacks and Queues 

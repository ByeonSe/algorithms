# Stacks and Queues

- abstract data structures 

## STACK
 - LIFO
 - Last In First Out
 - the last element added to the stack will be the first element removed from the stack
 - stacks of plates 
 - recursion call stacks 
 - managing function invocations
 - undo/redo 
 - routing(the history object)

````javascript

const stack = []
//shift & unshift = require reindexing 
//push & pop - does not require reindexing 
stack.push('one')
stack.push('two')
stack.push('three')
stack.pop()

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        // create a new node with the value
        var newNode = new Node(val);
        //if there are no nodes in the stack, set the fist and last property to be the newly created node
        this(!this.fiirst) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // if there is at least one node, create a variable that stores the current first property on the stack 
            let temp = this.first;
            //reset the first property to be the newly created node
            this.first = newNode;
            //set the next 
            this.first.next = temp;
        }
        //increment the size of the stack by 1
        return ++this.size;
    }

    pop() {
        // if thre are no nodes in the stack, return null
        if (!this.first) return null;
        // create a temporary variable to store the first property 
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 
        // if there is more than one node, set the first property to be the next property on the current first 
        this.first = this.first.next;
        //decrement the size by 1
        this.size--;
        //return the value of the node removed 
        return temp.value;
    }
    //rather than push and pop, adding/removing to the end of the array is not a constant time to set the second to the last item to be the last item since we have to iterate the entire list. So we are adding and removing from the beigining from the list. 

}


````

### BIG O 
- Pushing and poping is constant time 
- ** Insertion O(1) 
- ** Removal O(1)
- Searching O(N)
- Access O(N)

    */

 ## Queues 
 - FIFO
 - First In First Out
 - background tasks
 - uploading resources 
 - printing/task processing 
 - could implement with an array/class
 - Enqueue Dequeue

````javascript 
// array 
// add to the beginning or end
// unshift + pop
// push + shift 

//singly linked list 
//expensive to remove from the end since it has to iterate through the list 
// so add at the end (tail) and remove from the head

class Node {
    constructor(val) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size;
    }
    enqueue(val) {
        // create a new node
        let newnode = new Node(val);
        // if there are no nodes in the queue, se this node to be the first and last property of the queue
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
        // otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node (add to the end)

        this.last.next = newNode;
        this.last = newNode;
        }
        return ++this.size
    }
    //add at the end and remove it fron the beigining 
    dequeue() {
        //if there is no first property, just return null
        if(!this.first) return null;
        // store the first property in a variable 
        let temp = this.first;
        // see if the first is the same as the last (check if there is only 1 node)
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next
        //decrease the size by 1 
        this.size--;
        // return the value of the node dequeued 

        return temp.value;
    }
}

````
### Big 0 for Queues 
- Insertion O(1)
- Removal O(1)
- Searching O(N)
- Access O(N)

 
# Doubly Linked List
- almost identical to singly linked liist, except every node has another pointer, to the previous node!
- more momory === more flexibility 

````Javascript 
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }

    class DoublyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        // adding a node to the end of the doubly linked list 
        push (val) {
            // create a new node with the value passed to the function 
            let newNode = new Node(val);
            // if the head property is null set the head and taiil to be the newly created node
            // if (this.head === null)
            if (this.length === 0) {
                this.head = newNode;
                this.tail = newNode;
            } else{
            // if not, set the nect property on the tail to be that node 
                this.tail.next = newNode;
            //set the previious property on the newly created node to be the tail
                newNode.prev = this.tail;
            // set the tail to be the newly created node
                this.tail = newNode;
            }
            // increment the length
            this.length++
            // return the doubly linked list 
            return this;
        }
        // removing a node from the end of the Doubly Linked List 
        pop () {
            // if there is no head, return undefined
            if(!this.head) return undefined
            //store the current tail in a variable to return later 
            let poppedTail = this.tail
            // if the length is 1, set the head and tail to be null
            if (this.length === 0) {
                this.head === null;
                this.tail === null;
            } else {
                //update the tail to be the prvious node
                this.tail = poppedTail.prev
                // set the newTail's next to null 
                 this.tail.next = null;
            }
            this.length--;
            return poppedTail;
        }

        //removing a node from the beginning of the list
        shift() {
            //if length is 0 return undefined
            if (this.length ===0) return undefined;
            // store teh current head property in va variable
            let oldHead = this.head
            // if the length is one 
            if (this.length ===1) {
                // set the head to be null
                this.head = null;
                // set the tail to be null
                this.tail = null;
            } else {
            // update the head to be the next of the old head
            this.head = oldHead.next
            // set the head's prev property to null
            this.head.prev = null;
            // set the old head's next to null
            oldHead.next = null;
            }
            // decrement the length
            this.length--;
            // return old head 
            return oldHead;
        }

        unshift(val){
            // create a new node with the value passed to the function 
            let newNode = new Node(val)
            // if the length is 0
            if (this.length === 0) {
                // set the head of to be the new node
                this.head = newNode;
                // set the tail to be the new node
                this.tail = newNode;
            } else {
            // otherwise 
                // set the prev property on the head of the list to be the new node
                this.head.prev = newNode
                // set the next property on the new node to be the head property
                newNode.next = this.head
                // update the head to be the new node
                this.head = newNode
            }
            // increment the length
            this.length++
            // return the list 
            return this
        }

        // accessing a node in doublely linked list by its position
        get(index){
            // if the index is less than 0 or greatr or equal to the length, return null
            if (index >= this.length || index < 0) return null
            let count, current;
            // if the index is less than or equal to half the length of the list
            if(index<= this.length/2) {
                count = 0;
                current = this.head;
                // loop through the list staring from the head and loop towards the middle
                while(count != index) {
                     current = current.next;
                     count++;
                }

            } else {
                // if the index is greater than half the length of the list 
                count = this.length -1;
                current = this.tail;
                    // loop through the list starting from the tail and loop towards the middle
                while (count !== index) {
                    current = current.prev;
                    count--;
                }
            }
                // return the node once it is found 
                return current;
        }

        // replacing the value of a node to the in a Doubly Linked List
        set (idx, val) {
            //create a variable which is the result of the GET method at the index passed to the function
            let foundNode = this.get(idx)
                // if the get method returns a valid node, set the value of that node to be the value passed to the function
                if (foundNod != null) {
                    foundNode.val = val;
                    //return true
                    return true
                }
            // otherwise return false 
            return false
        }

        //adding a node in a doubly linked list by a certain position 
        // return true or false 
        insert (idx, val) {
            // if the index is less than zero or great than equal to the length return false
            if (idx < 0 || idx >= this.length) return false
            // if the index is 0, unshift
            if (idx === 0) return !!this.unshift(val);
            // if the index is the same as the length, push
            if (index === this.length) return !!this.push(val);
            //otherwise, use the get method to get the index -1
            let foundNode = this.get(idx-1)
            // set the next and prev properties on the correct nodes to link everything together 
            let newNode = new Node(val);
            let beforeNode = foundNode.next;
            let afterNode = beforeNode.next;
            //connecting beforeNode and newNode
            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            // connecting afterNode and newNode
            newNode.next = afterNode;
            afterNode.next = newNode;
            
            // increment the length 
            this.length++
            // return true 
            return true
        }
        // removing a node 
        remove (idx) {
            // if the index is less than zero or greater than or euqal to the length return undefined
            if (idx < 0 || idx > this.length) return undefined 
            // if the index is 0, shift (remove from the very beigining)
            if (idx === 0) return !!this.unshift(val);
            // if the index is the same as the length-1, pop (remove from the very end)
            if (idx === this.length-1) return !!this.pop()
            // use the get method to retrieve the item to be removed 
            let removed = this.get(idx)
            // update the next and prev properties to remove the found node from the list
            let beforeNode = removed.prev
            let afterNode = removed.next

            beforeNode.next = afterNode
            afterNode.prev = beforeNode
            // set next and prev to null on the found node
            removed.next = null;
            removed.prev = null
            // decrement the length
            this.length--
            // return the removed node 
            return removed
        }

    }
````
Big O 

insertion - O(1)

removal - O(1)
//do not have to iterate the entire list 

searching - O(N)
// depending on the index.
// technically searching is O(N/2), but that's still O(N)

access - O(N)

Recap
    - doubly linked lists are almost identical to singly linked lists except there is an addtional pointer to previous nodes
    - better than singly linked lisgts for finding nodes and can be done in half the time!
    - however, they do take up more memory considering the extra pointer 


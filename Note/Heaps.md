# Heaps 
- is a tree structure 

## Binary Heap 
- parent nodes are always larger than child nodes. In a Min Binary Heap, parents nodes are always smaller than child nodes. 

### Max Binary Heap

        41  -> largest number
        / \
      39   33
      /\   /
    18 27 12

- each parent has at most two child nodes
- the value of each parent node is alwasy greater than its child nodes
- in a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- a binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first 
- NO IMPLIED ORDERING BETWEEN SIBLINGS 

### Min Binary Heap 

         1  -> smallest number
        / \
      39   33
      /\   /
    18 27 12

- no relationship between siblings other than the fact that their parent is smaller 

### why Binary Heaps are important?
- Binary Heaps are used to implement priority queues, which are very commonly used data structures 
- they are also used quite a bit, whith graph traversal algorithms 

### Binary Heap vs Binary search tree 
- two children needs to be smaller/bigger
- left child is added then right child

### Representing a heap
For any index of an array n
The left child is stored at 2n+1
The right child is at 2n+2

For any child node at index n
its parent is at index (n-1)/2 (**Floored**)

### Insert
- add the value (at the end the array)
- bubble up by swaping until it finds the right place

````javascript

class Heap () {
    constructor() {
        this.value = [];
    }

    insert(element) {
    //push the value into the values property on the heap 
    this.values.push(element);
    this.bubbleUp();
    }
    //bubble up:
    bubbleUp() {
        // create a variable called index which is the length of the values property -1
        let index = this.values.length -1;
        const element = this.values[idx];
        while (index===0) {// create a variable called parentIndex which is the floor of (index-1)/2
            let parentIdx = Math.floor((idx -1)/2);
            // keep looping as long as the values element at the parentIndex is less than the values element at the child index
            // swap the value of the values element at the parentIndex which the value of the element property at the child index
            let parent = this.values[parentIdx];
            // set the inde to the parentIndex, and start over! 
            if (element <= parent) break;
            
            this.values[parentIdx] = element;
            this.values[idx] = parent;
        }
    }
    
    // remove the root
        // replace with the most recently added 
        //adjst(sink down)
        // the procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down)

        //swap the first value in the values property with the last one
    extractingMax() {
        let max = this.values[0];
        // pop from the values property, so you can return the value at the end
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max 
    }
        // have the new root "sink down" to the correct spot
    sinkDown() {
            // your parent index statrts at 0 (the root)
            let idx = 0;
            let length = this.values.length;
            let element = this.values[0];

            while (true) {
                // find the index of the left child: 2* index + 21(make sure its not out of bounds) 
                let leftChildIdx = 2 * idx +1
                // find the index of the right child: 2* index + 2 (make sure its not out of bounds) 
                let rightChildIdx = 2 * idx + 1

                let leftChild, rightChild
                let swap = null
                // if the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child 
                if (leftChildIdx < length>) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild > element) {
                        swap = leftChild
                    }
                }

                if (rightChildIdx < length>) {
                    rightChild = this.values[rightChildIdx];
                    if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                        swap = rightChildIdx;
                    }
                }
                // the child index you swapped to now becomes the new parent index.

                //keep looping and swapping until neither child is larger than the element. 
                if(swap === null) break;
                this.values[idx] = this.values[idx];
                this.values[swap] = element;
                idx = swap;
            }
    }
    
}
````

### Priority Queue 
- a data strucrue where each element has a priority. 
- elements with higher priorities are served before elements with lower priorities 
- like emergency room in the hospital 
- is seperate from heap. 
- could implement priority queue as an array or list 
- lowest number indicates the higest priority
- always remove from top (insertion/remove log n)
- priority queue class and node class

````Javascript 
// write a Min Binary Heap - lower number means higher priority 
// each Node has a val and a priority. Use the priority to build the heap

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PrioprityQueue {
    constructor () {
        this.values = [];
    }
    // Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
    enquque(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length -1;
        let element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx -1)/2);
            let parent = this.values[parentIdx]
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    // Dequeue method removes root element, returns it, and rearranges heap using priority 
    dequeue () {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.value[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx <length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null) && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)
            } {
                swap = rightChildIidx;
            }

        }
    }
}
````

### BIG O 
- insertion O(log n) 
    - compare one time per row (per level of the heap)
    - (worst case) for 16 elements, 4 comparisons 
    - 2 ^n = 16
    - 2(binary) ^4 (4 layers)= 16 (nodes) 
    - every time we double the number of nodes, every new full complete layer, we are only increasing the time that it takes by one
- removal O(log n)
- search O(n)
    - heaps can never look like this unlike binary search tree since we always fill out the left side first.
    3
     \
      17
        \
         19 
          \ 
           20
    - each level always has to be filled out before moving on to the next level
    - worst case is still o(n)
    - there is no guranteed or implied order for siblings 
    - as n grows, in general, the amount of time it takes to search also grows just at the same rate as n
    - Not optimized for search but insertion and removal are

### Recap 
- binary heap is a type of heap, which is a type of tree
- binary heaps are very useful data structure for sorting, and implementing other data structures liike priority queues
- binary heaps are either MaxBinaryHeaps or MinBinaryHeaps are with parents either being smaller or larger than their chiildren 
- with a little bit of math, can represent heaps using arrays. So no pointer, left, right, next necessary 


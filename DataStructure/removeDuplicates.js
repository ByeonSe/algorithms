/*
 Write a function that takes in head of singly linked list whose nodes are in sorted order w/respect to their values. 
 It returns a version of the linked list that doesn't contain any nodes with duplicate values.  
 The returned linked list should still have its nodes sorted with respect to their values.

 2-2-2-3-3-3-4-4-5-6-7  ==> 2-3-4-5-6-7

//return the modified version of the list. do not return the new list 

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

*/


function removeDuplicatesFromLinkedList(headOfList) {
    //assign the head of the linked list into a variable called currentNode
  let currentNode = headOfList
  // if currentNode and the nextNode have the same value, then move on to the next node on the list to find the node value that is not the same as the currentNode. 
  // repeat this process unless the current node is null (or it rached the end of the linked list) 
  while (currentNode !== null) {
    //assign the next node in the linked list to nextNode
      let nextNode = currentNode.next

    // while two nodes' values are the same, move on to the next avaialble node on the list  
    while (nextNode!== null && currentNode.value !== nextNode.value) { 
        //get the next value of nextNode and compare it with the current node's value
        nextNode = nextNode.next
    }
    // if those two nodes' values are different then connect them  
    currentNode.next = nextNode;
    //reassign the currentNode to the nextNode, so this process can be reapeated with the nextNode
    currentNode = nextNode;
  }
  // return the modified linked list
  return headOfList
  
}

/*
n is the length of the linked list 
time complexity O(n) and space complexity O(1) where n is length of list (number of nodes)

*/

function removeDuplicatesFromLinkedList(headOfList) {
    // grab 1st node in list
    let currentNode = headOfList;
    // as long as you haven't reached end of list...
    while(currentNode !== null) {
      // grab the node that comes after current node
      let nextNode = currentNode.next;
      // as long as the node that comes after current node isn't null and it has a value equal to current node's value (is a duplicate)...
      while (nextNode !== null && nextNode.value === currentNode.value) {
        // remove the node w/duplicate value by reassigning it to the next node that comes after it
        nextNode = nextNode.next;
      }
      // if find node value not equal to current node value...
      // keep the node that comes after current node the same
      currentNode.next = nextNode;
      // move current node to be the next node
      currentNode = nextNode;
    }	
    // return the modified list
    return headOfList;
  }

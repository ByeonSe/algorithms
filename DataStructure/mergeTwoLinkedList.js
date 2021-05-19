/*
Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. 
The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list in sorted order.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.
- creates a new linkedlist 
- compares the head of the two list and push the smaller head to the new list 
- shift the head from the old list  

headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 -> 11 // the head node with value 1
mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 // the new head node with value 1

class LinkedList {
constructor(value){
	this.value = value;
	this.next = null;
}

this algorithm can be implemented either iteratively or recursively 
make sure the final Linked List does not have any holes or misdirected pointers 

m : the length of head1
n : the length of head2
Time: O(m+n)
Space: O(1)

*/
//recursion Time: O(n+m), space: O(n+m) 
//n = length of head1, m = length of head2

function mergeTwoLists1 (head1, head2) {
    //if one of these two head nodes is null, then return the other one that is not null 
    if (head1 === null || head2 === null) {
        return head1 === null? head1: head2
    }
    //pick the list that we will add all the nodes 
    // which value of the two head is bigger? p1 would be set to to the list that has bigger value 
    //if the value of head2 is bigger then p1 is head2. 
    // if the value of head1 is bigger then p1 is head1
    let p1 = head1.val <= head2.val ? head1 : head2
    let p2 = p1 === head1? head2 : head1
    // p1, the list that has bigger head value, would be set to head 
    const head = p1 

    //make recursive call 
    head.next = mergeTwoLists1(p1.next, p2)
    return head
}

//iterative solution
// m : the length of head1
// n : the length of head2
// Time: O(m+n)
// Space: O(1) - not storing any values that increase as the lengths of the lists increases 

function mergeTwoLists2 (head1, head2) {
    //if one of these two head nodes is null, then return the other one that is not null 
    if (head1 === null || head2 === null) {
        return head1 === null? head1: head2
    }
    //pick the list that we will add all the nodes 
    // which value of the two head is smaller? p1 would be set to to the list that has smaller value 
    //if the value of head1 is smaller then p1 is head1. 
    // if the value of head1 is bigger then p1 is head2
    let p1 = head1.val <= head2.val ? head1 : head2
    let p2 = p1 === head1? head2 : head1
    // p1, the list that has smaller head value, would be set to head 
    const head = p1
  
    //until either of the list reaches the end...
    while (p1.value === null && p2.value === null) {
        //Since we already compare the head values in the earlier codes, we caompare head1.next and head2.value
        //if the next value of the head is smaller than the p2 value, then move the pointer from the p1.next to the node after 
        if (p1.next.value <= p2.value) {
            p1 = p1.next
        } else {
            //in other case, insert the p2.value 
            // 1. save the p1.next value, so that we don't loose it 
            let temp = p1.next
            // 2. set p1's next node to p2
            p1.next = p2
            //3. set p2's next value to temp 
            p2 = temp 
        }
    }
    //when one of the nodes value reached the end, combine the rest 
    // if p1 reached the end of the lsit, then just combine p2
    // if p2 reached the end of the list, then it's already in the merged linked list 
    if (p2.value === null) p1.next = p2

    return head
}
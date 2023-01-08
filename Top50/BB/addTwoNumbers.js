/**
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Algorithm

Implement reverseList function.

Reverse both input lists: l1 = reverseList(l1), l2 = reverseList(l2).

Initialize the result list: head = None.

Initialize the carry: carry = 0.

Loop through lists l1 and l2 until you reach both ends.

Set x1 = l1.val if l1 is not finished yet, and x1 = 0 otherwise.

Set x2 = l2.val if l2 is not finished yet, and x2 = 0 otherwise.

Compute the current value: val = (carry + x1 + x2) % 10, and the current carry: carry = (carry + x1 + x2) / 10.

Update the result by adding the current value to front.

Move to the next elements in the lists.

If the carry is not equal to zero, append it to frond of the result list.

Return the result list: return head.


Time complexity: O(N1+N2) where N1+N2 is a number of ele in both lists
Space complexity: O(1) space complexity without taking the output list into account, 
and O(max(N1,N2)) to store the output list.
​
  is a number of elements in both lists.
 */

 var addTwoNumbers = function(l1, l2) {
    
    let first = reverseLinedList(l1);
    let second = reverseLinedList(l2);
    let head = null;
    let carry = 0;
    
    while (first!==null || second!==null) {
        //get the current values of each node
        let val1 = first !== null? first.val : 0;
        let val2 = second !== null? second.val : 0;
        
        //get current sum and carry 
        let val = (val1 + val2 + carry)%10;
        carry = Math.floor((val1 + val2 + carry)/10);
        
        // update the result: add to the front so we don't have to reverse it 
        let curr = new ListNode(val);
        curr.next = head;
        head = curr;
        
        // move to the next element 
        first = first !== null? first.next : null;
        second = second !== null? second.next :  null;
    }
    
    //handle edge case 
    if (carry !==0) {
        let currentNode = new ListNode(carry);
        // newNode -> head ->2->3->4->5
        currentNode.next = head;  
        head = currentNode; 
        }
    return head;
};

const reverseLinedList = (head) => {
    let prevNode = null;
    let currentNode = head;
    while (currentNode!==null) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode
    }
    return prevNode;
}
/**
 * 
You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:

https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/discuss/729487/Javascript-DFS
O(n) time and space 

Key thought:

The new list is in preorder
Don't forget:

Set child = null
Set preHead.next.prev = null
 */

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/* REACTO
    // iterate the head and find the child head 
    // save the head of the child head 
    // iterate through it again and find the tail 
    // connect the curr with the head of the children 
    // connect the curr.next with the tail of the child head 

*/

var flatten = function(head) {
    
    
    if (!head) return null;
    
    let stack = [head]; // have something in the stack
    let preHead = new Node(); // create a fake head to start 
    let cur;
    let prev = preHead;
    
    while (stack.length) {
        console.log(stack)
        // preorder root-left-right 
        let node = stack.pop();
        cur = node;
        // make connection between prev and curr
        prev.next = cur;
        cur.prev = prev;
        if (node.next) {
            stack.push(node.next);
        }
        if (node.child) {
            stack.push(node.child);
        }
        cur.child = null;
        prev = cur;
    }
    
    preHead.next.prev = null;    
    return preHead.next;
};

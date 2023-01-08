/*
1209. Remove All Adjacent Duplicates in String II

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"


Time complexity: \mathcal{O}(n)O(n), where nn is a string length. We process each character in the string once.

Space complexity: \mathcal{O}(n)O(n) for the stack.
*/

// Stack solution 
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/discuss/510092/JavaScript-stack
var removeDuplicates = function(s, k) {
    // recursive or iterative approach 
    // Keep track of the characters that we have encountered and its count
    const stack = [];
    
    for (let char of s) {
        if (stack.length && stack[stack.length-1][0] === char) {
            // if the stack is not empty and the last ele === current char 
            // then increment the last element's count in the stack
            stack[stack.length-1][1] += 1; 
            //if the stack's last ele === k 
            if(stack[stack.length-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1])
        }
    }
    
    let res = '';
    for(let [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
}

/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"

We need to be really careful with that "removal" step though, as it can be done in O(n)*O*(*n*), but there are many ways of accidentally making it O(n^2)*O*(*n*2). Making these mistakes (and not fixing them) in an interview won't look good. Here's some operations that are O(n)*O*(*n*) that people sometimes assume are O(1)*O*(1).

- Adding or removing (or even changing) just one character *anywhere* in a **string** is *O*(*n*), because strings are **immutable**. The entire string is rebuilt for every change.
    
    O(n)
    
- Adding or removing *not from the end* of a list, vector, or array is *O*(*n*) because the other items are moved up to make a gap or down to fill in the gap.
    
    O(n)
    
- Checking if an item is in a list, because this requires a **linear search**. Even if you use binary search, it'll still be *O*(log*n*), which is not ideal for this problem.
    
    O(log n)
    

A safe strategy is to iterate over the string and insert each character we want to keep into a **list** (Python) or **StringBuilder** (Java). Then once we have all the characters, it is a single O(n)*O*(*n*) step to convert them into a string.

Recall that checking if an item is in a **set** is O(1)*O*(1). If all the indexes we need to remove are in a set, then we can iterate through each index in the string, check if the current index is in the set, and if it is not, then add the character at that index to the string builder.

**Complexity Analysis**

- Time complexity : O(n), where n*n* is the length of the input string.
    
    There are 3 loops we need to analyze. We also need to check carefully for any library functions that are not constant time.
    
    The first loop iterates over the string, and for each character, either does nothing, pushes to a stack or adds to a set. Pushing to a stack and adding to a set are both O(1)*O*(1). Because we are processing each character with an O(1)*O*(1) operation, this overall loop is O(n).
    
    The second loop (hidden in library function calls for the Python code) pops each item from the stack and adds it to the set. Again, popping items from a stack is O(1)*O*(1), and there are at most n*n* characters on the stack, and so it too is O(n).
    
    The third loop iterates over the string again, and puts characters into a StringBuilder/ list. Checking if an item is in a set and appending to the end of a String Builder or list is O(1)*O*(1). Again, this is O(n) overall.
    
    The `StringBuilder.toString()` method is O(n), and so is the `"".join(...)`. So again, this operation is O(n).
    
    So this gives us O(4n), and we drop the 44 because it is a constant.
    
- Space complexity : O(n), where n*n* is the length of the input string.
    
    We are using a **stack**, **set**, and **string builder**, each of which could have up to n characters in them, and so require up to O(n) space.
    

When checking your own implementation, watch out for any O(n) library calls *inside loops*, as these would make your solution O(n^2).
*/
var minRemoveToMakeValid = function(s) {
    const stack = [];
    // we need the idx of the string 
    const str = s.split("");
    
    for (let i=0; i<s.length; i++) {
        if(str[i] === "(") stack.push(i); 
        else if (str[i]===")") {
            // we need to pop the closest opening "("
            // what if the stack is empty? that means it is invalid access ")"
            if (stack.length ===0) {
                // if out stack is empty then we will replace ) as '' 
                // this is O(1) since we know the idx
                str[i] = "";
            } else {
                stack.pop()
            }
        }
    }
    
    // if we have extra ( bracket we will remove it by making it as ''
    for (let i = 0; i < stack.length; i++) {
        const idxOfAccessOpening = stack[i];
        str[idxOfAccessOpening] = "";
  }
    return str.join("")
};
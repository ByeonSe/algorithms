/*
Problem solving tips

Understanding the problem

1. can I restate the problem in my own words?
2. what are the inputs that go into the problem?
3. what are teh outputs that should come from the solutions to the problem?
- int? +3, -2
- float? 0.12
- string?
4. can the output be determined from the inputs? in other words, do i have enough information to solve the problem?
5. how should I label the important pieces of data that are a part of the problem?

*****Questions to ask about the array*****
1. is it sorted?
2. contains negative values? 
3. repeating numbers? || does it have unique values? 
4. nested? 
5. what types of values does the array consist of? 

*****Questions to ask to understand the problem better? ***** 
write down simple example with input and output 

1. what if the artument has empty value?
2. invalid inputs?
3. what counts and what does not count? e.g.) space, underscore,

*/

/*
Recursion 
1. JSON.parse and JSON.stringfy 
2. documents.getElementById and DOM traversal algoriths
3. object traversal
4. sometimes a cleaner alternative to iteration

JavaScript uses the call stack to manage function invocations
Base case is a situation where the recursion ends 

Functions are pushed on the call stack and popped off when they are done
when we write recursive functions, we keep pushing new functions onto the call stack 

The call stack
1. it's a stack data structure (first come last serve)
2. any time a function is invoked it is placed (pushed) on the top of the call stack
3. when JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)

*****Questions to ask about the recursion?*****
1. can you spot the base case?
2. do you notice the different input?
3. what would happen if we did not return? 

where things go wrong... 
1. without the base case, the fuction will be in infinate loop => stack overflow! 
2. forgetting to return or returning the wrong thing => stack overflow! maxium call stack size exceeded

Design pattern: Helper 
1. outer function (not recursive and calls the recursive helper function) + helper function that calls itself recursively 
why?
When saving a value as a sum or in an array/obj using recursion, every time we call the function recursively, those values will be reset to 0 or empty. 
Instead of putting those values as a global variable floating around, use outer funxtion and helper function

Pure recursion tips
1. for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
2. remember that stringds are immutable so you will need to use methods like slice, substr, or substring to make copies of string.
 */
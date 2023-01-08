/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Time complexity : O(M⋅N).

We're solving M * N subproblems. Solving each subproblem is an O(1) operation.

Space complexity : O(M⋅N).

We'e allocating a 2D array of size M \cdot NM⋅N to save the answers to subproblems.
*/

var longestCommonSubsequence = function(text1, text2) {
    // Make a grid of 0's with text2.length() + 1 columns 
    // and text1.length() + 1 rows.

    let grid = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(0))
    
    // Iterate up each column, starting from the last one.
    for (let col = text2.length -1; col >=0; col--) {
        for (let row= text1.length-1; row >=0; row--) {
            // If the corresponding characters for this cell are the same...
            if (text1[row] === text2[col]) {
                grid[row][col] =  1 + grid[row + 1][col + 1];
            } else {
                grid[row][col] = Math.max(grid[row + 1][col], grid[row][col + 1]);
            }
        }
    }
    return grid[0][0]
};
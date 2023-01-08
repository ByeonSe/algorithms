/* 
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Algorithm
https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2793/

There is a certain code pattern for all the algorithms of backtracking. For example, one can find one template in our Explore card of Recursion II.

The skeleton of the algorithm is a loop that iterates through each cell in the grid. For each cell, we invoke the backtracking function (i.e. backtrack()) to check if we would obtain a solution, starting from this very cell.

For the backtracking function backtrack(row, col, suffix), as a DFS algorithm, it is often implemented as a recursive function. The function can be broke down into the following four steps:

Step 1). At the beginning, first we check if we reach the bottom case of the recursion, where the word to be matched is empty, i.e. we have already found the match for each prefix of the word.

Step 2). We then check if the current state is invalid, either the position of the cell is out of the boundary of the board or the letter in the current cell does not match with the first letter of the word.

Step 3). If the current step is valid, we then start the exploration of backtracking with the strategy of DFS. First, we mark the current cell as visited, e.g. any non-alphabetic letter will do. Then we iterate through the four possible directions, namely up, right, down and left. The order of the directions can be altered, to one's preference.

Step 4). At the end of the exploration, we revert the cell back to its original state. Finally we return the result of the exploration.

Complexity Analysis

Time Complexity:O(N*3^L) where N is the number of cells in the board and L is the length of the word to be matched.

For the backtracking function, initially we could have at most 4 directions to explore, but further the choices are reduced into 3 (since we won't go back to where we come from). 
As a result, the execution trace after the first step could be visualized as a 3-ary tree, each of the branches represent a potential exploration in the corresponding direction. 
Therefore, in the worst case, the total number of invocation would be the number of nodes in a full 3-nary tree, which is about 3^L.

We iterate through the board for backtracking, 
i.e. there could be NN times invocation for the backtracking function in the worst case.

As a result, overall the time complexity of the algorithm would be O(N*3^L).


Space Complexity: O(L) where LL is the length of the word to be matched.

The main consumption of the memory lies in the recursion call of the backtracking function. The maximum length of the call stack would be the length of the word. 
Therefore, the space complexity of the algorithm is O(L).
*/

var exist = function(board, word) {
    //O(n)
   for (let row=0; row<board.length; row++) {
       for (let col= 0; col<board[0].length; col++) {
           if (backtrack(board, word, row, col)) return true;
       }
   }
    return false;
};

function isOutOfBound (board, row, col) {
    return row < 0 || row >= board.length || col < 0 || col >= board[0].length;
}

function backtrack(board, word, row, col) {
    // if we went through all the possible word and now '' then return true
    if(!word.length) return true; 
     // if out of bound, then return false;
     // if it does not match with the word that we are looking for then return false;
    if(isOutOfBound(board, row, col) || board[row][col] !== word[0] ) return false;
   
    // save the curent char so we can reset it later 
    const curChar = board[row][col];
    // The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
    const newWord = word.substr(1);
    // e.g., "ABCCED"->"BCCED"->"CCED"->"CED"->"ED"-> "D"-> ""

    // mark as visited
    board[row][col] = '#';
    
    // Check if up, down, left, right neighbors are fruitful
    // O(3^L-L is the length of the word to be matched) 
    // we have to go 3 direction until n becomes an empty string
    const result = backtrack(board, newWord, row + 1, col) ||
        backtrack(board, newWord, row - 1, col) ||
        backtrack(board, newWord, row, col + 1) ||
        backtrack(board, newWord, row, col - 1);
    board[row][col] = curChar // reset

    return result
}
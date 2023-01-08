//matrix
https://github.com/csmart1986/algorithms/blob/main/Search/sortedMatrix.js
/*
given a 2d array aka matrix and a target interger
[
    [1, 2, 3, 4, 20],
    [10,11,13,15,30],
    [31,32,44,66,70],
], 2
return [1, 3] 

each row and colum sorted 
they don't necesarily have the same hight and width 
return [row index, column index]
otherwise return [-1, -1]
// APPROACH: 
// put the pointers to the upper right corner 
// move each pointer one at a time 
// can the target number be in the same row? yes => then move the column ppinter to the left, No => then move the row pointer to below 
// can the target number be in the same column? Yes => then move the row pointer to the down, No => then column pointer to the left 
// stopping condition: while row pointer > array.length -1 && column pointer < 0
 */

function sortedMatrix(array, targetNum)
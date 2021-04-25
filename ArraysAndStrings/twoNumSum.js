/*
write a function that takes in a non-empty array of distict intergers and an interger representing a target sum. If any two numbers in the inut array sum up to the target sum,the function should return them in an array, in any order. 
If two numbers sum up to the target sum, the function should return an empty array

Questions to ask:
1. is it sorted? 
2. include negative numbers?

*/

//solution 1 : useing nested for loops
function twoNumSum(array, targetSum) {
    // this array contains two numbers that make targetSum or return an empty array 
    let result = []
    for (let i=0; i<array.length; i++) {
        //grab a number
      let num = array[i]
      for (let j=i+1; j<array.length; j++) {
          // grab another number to sum
        let match = array[j]
        if(num + match === targetSum) {
          result.push(num)
          result.push(match)
        }
      }
    }
    return result
  }
  twoNumSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)

/* 
Time complexity O(n^2)
N is the length of the array. Nestef for loops creates time complexity of O(n^2)

space complexity O(1)
Even if N grows, the space comlexity stay constant. The result array only contains 2 numbers or stays as an empty array
*/

// solution 2 : use object to find (targetSum - num) Time O(n) | space O(n)
// solution 3 : use pointers Time O(nlog(n)) | Space O(1)
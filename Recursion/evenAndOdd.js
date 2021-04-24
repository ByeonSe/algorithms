/* Write a function that takes an array of integers and returns a nested array (length 2) where 1st array is all even values and 2nd array is all odd values.

*/

// base case return the nested array when the original array is empty 
// push each element to odd or even array and remove it from the origianl array 
// calling the function, pass in the modified array that does not include the first number

function evenAndOdd (array) {
    //base case: when the array is empty, return an empty nested array.
    if (array.length === 0) {
      return [ [], [] ];
    } else {
        // call recursion and pass the copy of an array that has one less element assuming that the first element has been pushed to even or add array. 
      let resultArr = evenAndOdd(array.slice(1))
      // assign the first element to a variable 
      let element = array[0]
      //if the element is even number then push it to the even array
      if (element % 2 === 0) resultArr[0].push(element)
      // if the element is odd number then push it to the odd array
      if (element % 2 === 1) resultArr[1].push(element)

      return resultArr
    }
  }
  
  /* 
  time O(n)? space O(n)? 
  N is the length of the argument array.
  time complexity would be O(n) because we are calling the recursion nth times
  space compexity would also be O(n) since the length of the result array depends on N
  */
// given array of integers and a number, write fx that finds maximum sum of a subarray w/length of the number passed to fx
// must consist of CONSECUTIVE elements from original array
// sorted array? no
// can #s be negative? yes
// what if empty array or # of values in array is < length?  return null
// is array nested?  no
function maxSubarraySum(array, num){
  //return null if the length of the subarray (window size) is bigger than the length of the main array or the array is empty 
if (array.length < num) return null

let maxSum = 0 
  // create a for loop to create the sum of the subarray
  for (let i=0; i< num; i++) {
      maxSum += array[i]
  }
  // compare the sums and replace the max sum if the sum of the new subArray is bigger 
  let currentTotal = maxSum
  for (let i=num; i<array.length; i++) {
    //instead of adding the numbers all over again and again, add the next value in array and subtract the value in the beigining of the subarray -> 'moving' the window forward
      currentTotal += array[i] - array[i-num];
      //reset maxSum to be the greater value between the two 
      maxSum = Math.max(maxSum, currentTotal)
     console.log(maxSum)
  }
  return maxSum
}
// maxSubarraySum([100,200,300,400],2) //700
// maxSubArray([2,3], 3) //null
// maxSubArray([1,4,2,10,23,3,1,0,20], 3) // 39
// maxSubArray([100,200,300,400], 2) // 700
// maxSubArray([3,-2,7,-4,1,-1,4,-2,1], 2) // 5

/*
n is the length of the array. 
time complexity O(n) because of the loop - the number of the time it loops grows as the size of the n grows 
space complexity is O(1) - the space does not grow depending on the length of the array. It's constant 
*/
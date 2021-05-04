// given array of integers and a number, write fx that finds maximum sum of a subarray w/length of the number passed to fx
// must consist of CONSECUTIVE elements from original array
// sorted array? no
// can #s be negative? yes
// what if empty array or # of values in array is < length?  return null
// is array nested?  no
function maxSubarraySum(arr, windowSize) {
    // arr is empty or doesnt contain minumum required # of values to fill window
    if (arr.length < windowSize) return null;
    let total = 0;
    let tempTotal = 0;
    // loop over the first amount of values equal to windowSize, and get their total sum
    for (let i = 0; i < windowSize; i ++) {
      total += arr[i];
    };
    // assign total of those first values equal to tempTotal
    tempTotal = total;
    // 'move' the window forward to get the new temp total by adding the next value in array and subtracting the previous value in array to tempTotal
      // windowSize stays constant (must always contain a certain # of values)
    for (let i = windowSize; i < arr.length; i++) {
      tempTotal += arr[i] - arr[i-windowSize];
      // reset total to be the total or tempTotal, whichever greater
      total = Math.max(total, tempTotal);
    }
    return total;
}
// maxSubArray([2,3], 3) //null
// maxSubArray([1,4,2,10,23,3,1,0,20], 3) // 39
// maxSubArray([100,200,300,400], 2) // 700
// maxSubArray([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
// time complexity O(n) b/c although 2 loops, only go over entire array once, and space O(1)
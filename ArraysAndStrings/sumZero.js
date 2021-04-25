//write a function called sumZero which accepts a sorted array of intergers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zoro or undefined if a pair does not exist 

//important to note that the array is sorted. 

function sumZero(arr) {
    // two pointers, one on the very left and one on the very right 
    let left = 0;
    let right = arr.length -1 
    //while two pointers are not meeting, compare the sum of each values that the pointers are pointing. 
    while (left <right) {
      let sum = arr[left] + arr[right]
      if (sum === 0) {
        return [arr[left], arr[right]]
      } else if (sum > 0) {
        //if sum is bigger than 0, then decrease the sum by moving the right pointer to the left
        right--;
      }  else {
       // if sum is smaller than 0, then increase the sum by moving the right pointer to the left
        left ++
      }
    }
    // it two pointers met, that means we exhasted all posibilities. 
    return undefined
  }

  
/*
Implement a function called counttUniqueValues, which acepts a sorted array, and count the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 
 */

//two pointer starts from the beigining
function countUniqueValues(array){
    if (array.length === 0) return 0
  // create two pointers to go through the array, both start from the beigining 
  let pointer1 = 0;
  let pointer2 = 1;
 
while(pointer2 < array.length) {
    //if the two elements that pointers are pointing the same, then move the pointer2 to the right
    //if the values do not match(when values are unique), then move both pointer1 and pointer 2 to the next 
    //if the values are different, then move the pointer to the next value, so we can keep the unique value and change the next value to the unique value that the second value is pointing at.
    //by replacing the unique numbers, we could prevent a bug when there are same numbers in a distanced 
    if (array[pointer1] !== array[pointer2]) {
      pointer1++ 
      array[pointer1] = array[pointer2]
    }
    // in any cases move the second pointer. 
    pointer2++
}
return pointer1 + 1
}
//                   i
let array = [1, 3, 3, 5, 6, 6, 6, 7] //5
//                         j
countUniqueValues(array)

// soulution 2
function countUniqueValues (arr) {
  if(arr.length === 0) return 0
  let i =0;
  for (let j=1; j<arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++
      //replace the value that i is pointing to, so that we can save the unique values 
      arr[i] = arr[j]
    }
  }
  return i+1
}


/*

You are given numbers, a 3 × n matrix which contains only digits from 1 to 9. 
Consider a sliding window of size 3 × 3, which is sliding from left to right through the matrix numbers. 
The sliding window has n - 2 positions when sliding through the initial matrix.

Your task is to find whether or not each sliding window position contains all the numbers from 1 to 9 (inclusive). 
Return an array of length n - 2, where the ith element is true if the ith state of the sliding window contains all the numbers from 1 to 9, and false otherwise.

Example

numbers = [[1, 2, 3, 2, 5, 7],
           [4, 5, 6, 1, 7, 6],
           [7, 8, 9, 4, 8, 3]]

the output should be isSubmatrixFull(numbers) = [true, false, true, false].
Let's consider all sliding window states:

    The 1st state contains all digits from 1 to 9.
    The 2nd state doesn't contain digit 7.
    The 3rd state contains all digits from 1 to 9.
    The 4th state doesn't contain digit 9.
    Summary, there are four states of the sliding window, and the resulted array is [true, false, true, false].

    Return an array of booleans as described above

*/  
// Key takeaways:
// 1. need three loops, one for moving the findow, one for moving rows, and one for moving columns
// 2. remember splice(start, deleteCount, item1)
// 3. row loop uses the number of elements in numbers array 
// 4. column loop uses the length of the array 
function isSubmatrixFull(numbers) {
    // let check = [1,2,3,4,5,6,7,8,9] // check.indexOf() // splice(idx, 0)
    // remove the check and remove it from the array when finding 
    // row =y // first array, second array, ... 
    let result = [];
    let n =numbers[0].length;
    
    
    // window
    for (let w=0; w<n-2; w++) { 
        // thiis will be reset it each loop
      let check = [1,2,3,4,5,6,7,8,9]
      // moving from one row to the next
      for (let y=0; y<numbers.length; y++) {
        // column = y
        // first element in the array 
        for (let x=w; x<w+3; x++) {
            let  num = numbers[y][x]
            let idx = check.indexOf(num)
            if (idx !== -1) {
                check.splice(idx, 1)
            } 
        }
        
      }
        if (check.length === 0) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
  return result
}

let matrix = [[1, 2, 3, 2, 5, 7],
             [4, 5, 6, 1, 7, 6],
             [7, 8, 9, 4, 8, 3]]

isSubmatrixFull(matrix)

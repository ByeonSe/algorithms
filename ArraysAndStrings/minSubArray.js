/*
write a function that accepts two parameters, an array of positive intergers and 
it returns the minimal length of a *contiguous* subarray of which the sum is greater than or equal to the interger passed to the function
if there isn't the one, return 0

a *contiguous* subarray is an indicator that we could possibly use the sliding window approach.
the array is not sorted. 


*/

function minSubArrayLen (arr, sum) {
    //create pointers 
    let total = 0;
    let minLength = Infinity;
    let start = 0;
    let end = 0;
    
    while (start < arr.length) {
        // if the current window does not add up to the given sum,
        if (total < sum && end < arr.length) {
            //then move the pointer to the right and add all the nums between the start pointer and the end pointer 
            total += arr[end];
            // 1,4,16,22, =43
            end++;
        }
        // if the current window adds up to at least the sum given, 
         // 43 > 39
        else if (total >= sum) {
            // update the minimum sum to end-start 
            minLength = Math.min(minLength, end-start);
            //reduce a window size after subtracting that value 
            total -= arr[start];
            start++
        } else {
            // current total less than required total but we reached the end, then break
            break
        }
    }
    return minLength === Infinity ? 0: minLength;
}

minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) //3
// O(n) time and O(1) space
/*

write a function that takes a sorted array and a value and returns index of value that exists in the array. Otherwise, it would return -1
each value of the array is unique 
*/

function BinarySearch (array, value) {
// [-1, 3, 5, 6, 8, 10, 12, 20, 25], 3

// pick a middle value of the array, Use Math.floor since array idx starts from the 0th
// Math.floor() rounds down vs. Math.ceil() rounds up
let middleIdx = Math.floor(array.length/2)
// then compare them with the input value, if value is bigger then call 

    if (array[middleIdx] === value) {
    return middleIdx
    } else if ( array[middleIdx] > value) {
        //input value is 3 and the middle value is 8 
        for (let i= 0; i<middleIdx; i++) {
            if (array[i] === value) return i 
        }
    } else if (array[middleIdx] < value) {
        //input value is 20 and the middle value is 8
            for (let i=middleIdx; i<array.length; i++) {
                if (array[i] === value) return i
            }
        }
    return -1 
}

//optimal solution using divide and conquer pattern 
function BinarySearch (array, value) {
    //create min and max idx to pick a middle idx 
    //to increment the middle idx, increment the min idx 
    let min = 0;
    // to decrement the middle idx, decrement the max idx
    let max = array.length -1;

    //loop until min shares the same values as max or bigger than max
    while (min <= max) {
        //pick a middle ids of the array, Use Math.floor since array idx starts from the 0th
        // this way, new number will be 
        let middle = Math.floor((min + max) /2);
        //get the value in the middle 
        let currentElement = array[middle];
        // if the input value is greater than the middle value of the array, then increase the min index to get the middle point that is bigger value
        if (currentElement < value) {
            min = middle + 1
            // if the input value is less than the middle value, then decrease the decrease the max index to get the middle point that has smaller value
        } else if (currentElement > value) {
            max = middle -1
        } else {
            // if currentElement === value, then return the index of the middle value 
            return middle
        }
    }
    return -1
}


/*
N is the length of the array
time O(log(n))
space O(1)
*/
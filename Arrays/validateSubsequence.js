/*
Given two non-empty arrays of intergers, 
write a function that determines whether the second array is a subsequence of the first one.

important thing to note:

1. both sequence and main array are NOT sorted

*/

function isValidSubsequence(array, sequence) {
    //create a pointer in the subsequence array
    let sequenceIdx = 0;
    // iterate throught the main array  
    for (let value of array) {
        //if the pointer reached the end of the subsequence array then break the loop 
        if (sequenceIdx === sequence.length) break;
        //move the pointer to right when an elements in the sequence has the same value of the main array
        if (sequence[sequenceIdx] === value) sequenceIdx++
    }
    //after break out of the loop, return true if the main array has all elements in the subsequence array in the same order
    // if not, return false
    return sequenceIdx === sequence.length
}

/*
N is the length of the main array 
Time complexity is o(n) since the lopp grows as n grows

Space complexcity is O(1)

*/
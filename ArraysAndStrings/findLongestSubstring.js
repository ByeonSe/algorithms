/*
write a function that accepts a string and 
returns the length of the longest substring with all distict characters 

findLongestSubstring('bbbb') //1
                      1
findLongestSubstring('rithmschool') //7
                      1234567  
                      0123456

findLongestSubstring('abaxyz') // 5                   
// 'baxyz' 5, when it finds the second index, 'a', it starts counting from 'b'
 */


function findLongestSubstring(str) {
    // create a dictionary to keep track of the characters appreared in the string and save it's index as it's value pair.
    let seen = {}   
    //
    let start = 0;
    //assign variables to note the longest length
    let length = 0

    for (let i=0; i<str.length; i++) {
        let char = str[i]
        // if the character has already been seen, 
        if (seen[char]) {
            //then reset the starting point of the substring 
            start = Math.max(start, seen[char])
                // 'abaxyz' => start = 1 (1st index)
        }
        //the length is NOT index. So add 1 to count the current char
        let currentLength = i - start + 1
        //save the current length of the substring 
        length = Math.max(length, currentLength)
        // add 1, so when we reset the start, it does not start from where the duplicate is, rather it starts from the next index
        seen[char] = i + 1
        // 'abaxyz' => start = 1 (1st index instead of the 0th, actual index of 'a')

    }
    return length 
}

/*
N is the length of the string 
Time complexity O(n) - as n grows, the number of the time we are looping grows
spaceComplexity O(n) - as n grows, the size of the dictionary grows
*/


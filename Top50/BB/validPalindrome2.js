/*
**Algorithm**

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.


Create a helper function checkPalindrome that takes a string s, and two pointers i and j. This function returns a boolean indicating if s.substring(i, j) is a palindrome. Implementation details for this function can be found in the first section of this article.

Initialize two pointers, i = 0 and j = s.length() - 1.

While i < j, check if the characters at indices i and j match. If they don't, that means we must spend our deletion on one of these characters. Try both options using checkPalindrome. In other words, return true if either checkPalindrome(s, i, j -1) or checkPalindrome(s, i + 1, j) is true.

If we exit the while loop, that means the original string is a palindrome. Since we didn't need to use the deletion, we should return true.


**Complexity Analysis**

Given NN as the length of s,

Time complexity: O(N)O(N).

The main while loop we use can iterate up to N / 2 times, since each iteration represents a pair of characters. On any given iteration, we may find a mismatch and call checkPalindrome twice. checkPalindrome can also iterate up to N / 2 times, in the worst case where the first and last character of s do not match.

Because we are only allowed up to one deletion, the algorithm only considers one mismatch. This means that checkPalindrome will never be called more than twice.

As such, we have a time complexity of O(N)O(N).

Space complexity: O(1)O(1).

The only extra space used is by the two pointers i and j, which can be considered constant relative to the input size.
*/

var validPalindrome = function(s) {
    let i = 0;
    let j = s.length-1;
    // The main while loop we use can iterate up to N / 2 times, since each iteration represents a pair of characters. 
    while (i<j) {
        if (s[i] !== s[j]) {
            //we are returning once we get inside of this conditional
            // which means that we are giving them only one chance
            return checkPalindrome(s, i+1, j) || checkPalindrome(s, i, j-1)
        }
        i++;
        j--;
    }
    return true;
};

//O(n)
const checkPalindrome = (s, i, j) => {
    while(i<j) {
        if (s[i] !==s[j]) return false;
        i++
        j--;
    }
    
    return true;
}
/*
given two string, write a function to determine if the second string is an anagram of the first. An anagram is a word, phase, or name formed by researching the letters of another, such cinema, formed from iceman 
*/

//create dictionaries and look up if the dictionaries have the matching letter 
function validAnagram(string1, string2){
  //if the lengths of both arrays do not match, then they must have different words. Return false
    if (string1.length !== string2.length) return false 
    
    let dictionary1 = {};
    let dictionary2 = {};
    //iterate through the first string. If the dictionary obj has the letter as a key then increment the value.
    //if not, then adds it as a key and make the value 1
    for(let letter of string1) {
        dictionary1[letter] = (dictionary1[letter] || 0) + 1
    }
    // repeat for the second string
    for (let letter of string2) {
        dictionary2[letter] = (dictionary2[letter] || 0) + 1
    }
    // compare the key value pairs in the dictionary. Return false if the key value pairs of two dictionaries do not match
    for (let letter of string1) {
        if (dictionary1[letter] !== dictionary2[letter]) return false
    }
    return true
    
  }

//solution 2

//1. create one lookup obj. 
//2. loop through the second and remove the letters. 
//3. If it returns 0, falsy, then it would return false. 
function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find the letter or the letter is zero then it's not anagram
      if (!lookup[letter]) {
        return false;
      } else {
        //decrement the value of the pair in the lookup
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')

/*
Rake a string of lower case letters and return the index of string's first none repreating char  

// 'abcec' => 0

//for loop to create a dictionary where I could look up the char and how many times it's repreated 

seen = {
  a : 1,
  b : 1,
  c : 2,
  e : 1
}

// for loop to go through the dictionary to find the first none repreating char, which would have the value of 1
 */

function firstNoneRepeatingChar (str) {

    let seen = {}
  //for loop to create a dictionary where I could look up the char and how many times it's repreated 
    for (let i=0; i<str.length; i++) {
      let char = str[i]
      //if the dictionary does not have the char, then add 
      // if it already has then add +1 
      if (seen[char]) seen[char]++ 
      else seen[char] = 1
    }
  // for loop to go through the dictionary to find the first none repreating char, which would have the value of 1
  
    for (let i= 0; i<str.length; i++) {
      let char = str[i]
      console.log("hi")
      if (seen[char] === 1) return i 
    }
  
    return -1 
  }
  //'faadabcbbebdf'
  firstNoneRepeatingChar('aaaaa')
  
  /*
  n is the length of the string 

  Time complexity - O(2n) => O(n) because having two loops is n * 2. Each loop grows as n grows (O(n)), and there is only two loops. If it is nested loops, then the loop goes over n times * n number of times => (n^2)
  
  Space complecity - O(1) the dictionary could only have 26 key value pairs even if n grows 
  
  */
  
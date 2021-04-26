//PROMT: write a function which accepts a cariable number of arguments, and checks if there are any duplicates among the arguments passed in. 
//This solution is using multiple pointer and it only works with the number 
function anyDuplicates(...args) {
    //Approach: use two pointers next to each other 
    //sort the array 
    args.sort((a,b) => a - b);
   //(a,b) => a > b) also works!
    let first = 0;
    let next = 1;
    //loop until the next idx is equal to the length of the array 
    while(next < args.length){
      if(args[first] === args[next]){
          return true
      }
      first++
      next++
    }
    return false
  }
/*
  N is the length of the argument 
  Time O(n)
  Space O(1)
*/

  // This solution is using the frequency counter, and it works both for number and string.
  function anyDuplicates() {
    //create a lookup obj
    let lookup = {}
    //iterate through the arguments
    for(let el in arguments){
      //add each elements to the lookup obj as a key and set its value to 1. If the elements already exist, then increment the value
      lookup[arguments[el]] = (lookup[arguments[el]] || 0) + 1
    }
    //after adding all the elements to the lookup obj, iterate through it to see if the value of the key(element) is more than 1. 
    for(let key in lookup){
      if(lookup[key] > 1) return true
    }
    return false;
  }
  
  // areThereDuplicates ('e', 'a', 'f', 'b', 'd', 'a')
  // areThereDuplicates(1,4,5,7,2,8,9,20,22,33,65,15, 15)

  /*
  n is the length of the argument 
  Time O(n)
  Space O(n)
  */
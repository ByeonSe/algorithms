/**
 write a function that take an array of strings and capitalize the first letter of each string in the array.  Return an array of strings with only first letter capitalized.

 only alph 
 ['i', 'am', 'hungry'] => ['I', 'AM', 'Hungry']
 */

 
//Not optimized version 

function capitalizedFirst(arr) {
    //take first letter from each element and capitalize 
    //base first: if there is zero [] then return 
      let result = []
      if (arr.length === 0) return;
    
    // only one element in the array ['hungry'] then capitalize the first letter and return the array 
      if (arr.length === 1) {
        let lettersArray = arr[0].split('') 
       // [[ 'c', 'a', 'r' ]]
        lettersArray[0] = lettersArray[0].toUpperCase()
        //[ 'Car' ]
        // if I use the spread operator, then it would make each letter spreaded  e.g. [ 'c', 'a', 'r']
        return [lettersArray.join('')]
      }
      // string.toUpperCase()
      // let letters = array[0].split('')
      // ['h', 'u', 'n' ...]
      // 
      //  ['Hungry']
    // push the capitalized letter to the new array 
      //push - if assign a code with 'push', it gives the length of the new array 
      let test = capitalizedFirst([arr[0]])[0]
      console.log("test=>", test)
      result.push(test)
      console.log("result=>", [...result])
      return result.concat(capitalizedFirst(arr.slice(1)))
      
    }
    
    /*difference between push and concat? 
    
    The push() adds elements to the end of an array and returns the new length of the array. 
    
    The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
    
    - when using recursion, it resets 
    */
    
    
    //optimized version 
    function capitalizedFirst2(arr) {
    //take first letter from each element and capitalize 
    //base first: if there is zero [] then return.
    // every recursive call, this would be reset to []
      let result = []
      if (arr.length === 0) return [] // or you can return result since it resets to [];
      //if the array has at least one element, grap the first element and capitalize it. Then, push it to the result. 
      //**concat** does not work. it will reset to [] in every recursive call 
      result.push(arr[0][0].toUpperCase() + arr[0].slice(1))
      //**push** does not work. it wil return the index of the last element ex) 2
      return result.concat(capitalizedFirst2(arr.slice(1)))
    }
    
    capitalizedFirst2(['car', 'taco', 'banana'])
    
    /*
    n - length of the input array
    Time O(n) - This function is being called recursively n times before reaching the base case so its O(n) - linear.
    Space O(n) - as n grows, the result array grows 
    
    */
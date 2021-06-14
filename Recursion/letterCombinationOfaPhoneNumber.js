/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
example: 
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

*/

//'2' => ['a', 'b', 'c']
function letterCombinations (digits) {

    const telKeyMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r"],
        8: ["s", "t", "u"],
        9: ["v", "w", "x"],   
    }

    //create a helper function to receive previous combination and digits 
    function match (digits, previousLetters){

        let newLetterCombs = []
    
        //base case: return [] if no digits were privided
          if (!digits.length) {
            return [];
          }
    
          for (let previousLetter of previousLetters) {
          // previousLetter => '' it returns ['a', 'b', 'c'];
          // previousLetter => a it returns ['ad', 'ae', 'af'];
          // previousLetter=> ad it returns [ 'adg', 'adh', 'adi', 'aeg', 'aeh', 'aei' ]
            for (let letter of telKeyMap[digits[0]]) {
            
                newLetterCombs.push(
                    //concat two letters to one 
                    //previousLetter=> a
                    // letter => d
                    //concat ad
                    previousLetter.concat(letter)
                )
    
              }
          
        }
    
        return digits.length>1? match(digits.slice(1), newLetterCombs): newLetterCombs
      }
      // invoke the match function here and pass an array of empty string to start the first for loop. so previousLetter => '' it returns ['a', 'b', 'c']
        return match(digits, ['']);
        
}
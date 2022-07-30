
function superReducedString(s) {
    // Write your code here
 let output = s.split("");
  console.log(output)
 for(let i = 0; i < output.length; i++){
     console.log("i?", i)
   if(output[i] === output[i+1]){
     output.splice(i, 2);
     i = -1;
     console.log("??????????", i)
    }
  }
 return output.length === 0 ? "Empty String" : output.join("");
   // check => move => check => move
}
console.log(superReducedString('baabcbcbcccc'))
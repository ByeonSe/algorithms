// write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binay Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any left node.
// input root 
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  /*
            20
            / \
        10      30
        /\      /
      3    6   15
  
  */
  //depth first search 
  function branchSums(root) {
      
      //saving the sums in an array 
      let sums = []
      //helper function 	
      helper(root, 0, sums)
      
      // return the array
      return sums;
      
  }
  
  function helper (node, sum, sumArray) {
      //The edge case: if only one side of the node is null, then just return, so that on line 38-39, they won't be calling on null value
      if (!node) return;
      //calculate the sum here but first assign it to a value
      let runningSum = sum + node.value
      
      // BASE CASE: if there are no left AND right values, then push the running sum to the array
      if (!node.left && !node.right) {
          sumArray.push(runningSum)
          return
      }
      //pass the each side ex) 1+ 2+ 4+ (8) vs 1 + 2 + 4+ (9) 
      // runningSum is saving the the added values upto its point  
      helper(node.left, runningSum, sumArray)
      helper(node.right, runningSum, sumArray)
  }
  
  //O(n)
/*Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190

*/
           
function findGrantsCap(grantsArray, newBudget) {
    // remember that they already applied. 
    // so the questions is not asking to finnd the maximum number each could apply at the same time
    // question is simply asking to find a cap that could only applied to minimum number of grantee to meet this new budget constrains (i.o., find the max number that could recive grant )
    
    // sort the array and cut the gretest number 
    
    grantsArray.sort((a,b) => b-a);
    grantsArray.push(0);
    
    let surplus = (grantsArray.reduce((sum, ele) => sum+= ele, 0)) - newBudget;
    
    if (surplus <=0) return grantsArray[0];
    for (let i=0; i<grantsArray.length; i++) {
      //grantsArray[0]-grantsArray[1] => this prevents us to subtract multiple times
      //grantsArray = [1000, 120, 100, 50, 2] 
      // surplus = surplus - 1*(1000-120)
      // this tells us if lowering grants to by differences between eles could change
      console.log(surplus, "i=>", i, grantsArray[i], "-", grantsArray[i+1], "=>", (grantsArray[i] - grantsArray[i+1]));
      surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1])
      
      if (surplus <= 0)  {
        console.log("==========================")
        console.log("final surplus", surplus, "grantsArray[i+1]", grantsArray[i+1], "(-surplus/(i+1))", -surplus, (i+1))
        // current surplus is after we subtracted (i+1) * (grantsArray[i] - grantsArray[i+1])
        // we can keep grantsArray[i+1] 
        // also surplus / the rest of the elements 
        
       return grantsArray[i+1] + (-surplus/(i+1))}
    }
    
  }
  
  console.log(findGrantsCap([2, 100, 50, 120, 1000], 190))
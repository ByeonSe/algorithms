/*
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

 

Example 1:

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
*/

var twoCitySchedCost = function(costs) {
    // i want to sort each nested array from smallest to largest based on values of A 
/*
To optimize the total costs, let's sort the persons by price_A - price_B and then send the first n persons to the city A, and the others to the city B, because this way the company costs are minimal.

1. Sort the persons in the ascending order by price_A - price_B parameter, which indicates the company additional costs.

2. To minimise the costs, send n persons with the smallest price_A - price_B to the city A, and the others to the city B.

*/
    // sort by a gain which company has by sending a person to city a and not to city b
    costs.sort((a, b) => ((a[0] - a[1]) - (b[0] - b[1])));
    // if b costs much more than a than it will come out to be the smallest
    // e.g., 30 - 200 is -170
    let total = 0;
    let n = costs.length/2
    for (let i=0; i<n; i++) {
        /*
        [ [ 30, 200 ], [ 10, 20 ], [ 30, 20 ], [ 400, 50 ] ]
             ^           ^                ^           ^
             |___________|________________|            |
                         |_____________________________|
        */
        total += costs[i][0] + costs[i+n][1];
    }
    
    return total
};


/**
 * https://leetcode.com/problems/invalid-transactions/discuss/444356/Javascript-Solution
 * 
 * A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.

 

Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.

 */

var invalidTransactions = function(transactions) {
    /*
     [[name, time, amount, city]]
     
     0. Map to keep track of whether transaction is valid or not 
     1. transactions.split(',')
     note: this format has to be changed back to string for the return value
     so maybe store its index
     
     2. iterate through the stransactions array to find any amounts over 1000
        then store its index to a hashmap/list 
     3. we could also devide it by the same name and a different city 
     hashtable 
     {
        'alice' : [[0, "city", time], [1, "beijing", 'time']]
     }
     name -> city -> time 
     if they are invalid then add their indx to the list 
     
     // iterate through list and get the invalid transactions and return 
     
     
    */
    const names = [];
    const cities = [];
    const amount = [];
    const time = [];
    
    const map = new Map();
    //o(n)
    for(let i = 0; i < transactions.length; i++){
        map.set(i, false);
    }
    
    // split o(n)
    transactions.forEach((ts) => {
        let t = ts.split(',');
        names.push(t[0]);
        time.push(Number(t[1]));
        amount.push(Number(t[2]));
        cities.push(t[3]);
    })
    
    // iterate through the stransactions array to find any amounts over 1000
    // then store its index to a hashmap/list 
    // O(n^2)
    for(let i=0; i<transactions.length; i++) {
        if (amount[i] > 1000) map.set(i, true);
        
        for (let j=i+1; j <transactions.length; j++) {
            // they are the same name but different city and less than 60 min
            if (names[i] === names[j] && cities[i] !== cities[j] && Math.abs(time[i]-time[j])<= 60) {
                map.set(i, true);
                map.set(j, true);
            }
        }
    }
    
    console.log(map)
    
    let result = [];
    // map.foreach
    map.forEach((value, index) => {
        if(value) {
           result.push(transactions[index]);
        }
    })
    return result
};
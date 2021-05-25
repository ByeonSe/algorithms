You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return ** the fewest number of coins ** that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

$6 [1,2,4] // 2+4 = 6, therefore the answer is 2
Minimun Number of KINDS of coins for changes

min number of coins 0 1 1 2 1 2 2
                    - - - - - - -
$                   0 1 2 3 4 5 6

If denom <= currentAmount nums[amount] = min(nums[amount])


````python
# n is the target amount d is the number of denom
# O(nd) time || O(n)
def minNumberOfCoinsForChange (n, denoms) {
    # initialize number of coins 
    # fill it with the maximum to simplify our fomular so we can initialize our base -> infinity 
    numOfCoins = [float("inf") for amount in range(n+1)]
    numOfCoins[0] = 0

    for denom in denoms:
        for amount in range(len(numOfCoins)):
            if denom <= amount:
                numOfCoins[amount] = min(numOfCoins[amount], 1+numOfCoins[amount - denom]) 
    return numOfCoins[n] if numOfCoins[n] != float("inf") else -1 
}

````

````JavaScript 
//memoization 
function minNumberOfCoinsForChange (n, denoms) {
    // Array [Infinity, Infinity, Infinity, Infinity]
    // initiate the number of coins array which length is n + 1
    const numOfCoins = new Array(n+1).fill(Infinity);
    numOfCoins[0] = 0;
    //iterate through each elements in the denoms array 
    for (const denom of denoms) {
        for (let amount=0; amount < numOfCoins.length; amount++) {
            // if element in denoms array iis smaller or equal to the amount? can you use $2 to make $10? Yes
            // if its bigger, then you can't really change it. can you use $5 bills to make 3 dollars? No. 
            if (denom<=amount) {
                //then pick the minimun number 
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount-denom])
            }
        }
    }
    return numOfCoins[n] !== Infinity? numOfCoins[n] : -1;
}
````

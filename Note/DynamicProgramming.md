# Dynamic Programming
- a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just onece, and storing their solutions. 

## Overlapping subproblems 
- a problem is said to have overlapping subproblem if it can be broken down into subproblems which are reused several times 
e.g. Fibonacci sequence 
"every number after the first two is the sum of the two preceding ones"
- 1-1-2-3-5-8-13

         fib(5)
        /      \
    fib(4)     *fib(3)
    /    \      /    \
*fib(3) fib(2) fib(2) fib(1)
  /   \
fib(2) fib(1)

fib(n) = fib(n-1) + fib (n-1)
fib(2) = 1
fib(1) = 1

** recursive solution ** 

````JavaScript
// O(2^n)
function fib(n) {
    if (n <= 2)return 1;
    return fib (n-1) + fib (n-2); 
}

// using past knowledge to make solving a future problem easier 

````

- merge sort (divide and conquer)-> No overlapping subproblems! 

## Optimal Substructure 
- a problem is siad to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

# Memoization 
- storing the results of expensive funxtion calls and returning the cashed result when the same inputs occur again 
- looking up a value based on an index is a constant time 

- Time complexity => O(N)
- as N grows, the time grows in proportion with N 

````JavaScript

//          0,        1, 2, 3, 4, 5, 6, 7
// memo = [undefined, 1, 1, 2, 3, 5, 8 ...]

// complexity
function fib(n, memo = [undefined, 1, 1]) {
    // if the value has already stored in the memo then return it from the memo 
    if (memo[n] !== undefined) return memo[n]
    //if (n<=2) return 1;
    let res = fib(n-1, memo) + fib(n-2, memo);
    //store the value in the memo 
    memo[n] = res;
    //then return the res
    return res; 
}

````

# Tabulation (bottom up)
- sorting the result of a previos result in a "table" (usually an array)
- usually done using iteration 
- better space complexity can be achieved using tabulation 

Time O(n) - single loop. as n grows, the number of literation gorws linearly 
````JavaScript 
function fib(n) {
    if(n<=2) return 1;
    let fibNums = [0,1,1];
    //notice that the loop starts from 3 (fibNumbs[3]) since fibNums has fib[1] and fib[2] saved already
    for (let i=3; i<=n; i++) {
        fibNumbs[i] = fibNumbs[i-1] + fibNums[i-2];
        //fibNumbs[3] = fibNumbs[2] + fibNums[1];
    }
    return fibNums[n]
}

````




/**
 * Design a Leaderboard class, which has 3 functions:

addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
top(K): Return the score sum of the top K players.
reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
Initially, the leaderboard is empty.

 

Example 1:

Input: 
["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
Output: 
[null,null,null,null,null,null,73,null,null,null,141]

Explanation: 
Leaderboard leaderboard = new Leaderboard ();
leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1);           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3);           // returns 141 = 51 + 51 + 39;

Complexity Analysis
1. Approach using hashmap

Time Complexity:

O(1)O(1) for addScore.
O(1)O(1) for reset.
O(N \text{log}N)O(NlogN) for top where NN represents the total number of players since we sort all of the player scores and then take the top K from the sorted list.
Space Complexity:

O(N) used by the scores dictionary and also by the new list formed using the dictionary values in the top function.

2. Approach Using heap

Time Complexity:

O(1)O(1) for addScore.
O(1)O(1) for reset.
O(K) + O(N \text{log}K)O(K)+O(NlogK) = O(N \text{log}K)O(NlogK). It takes O(K)O(K) to construct the initial heap and then for the rest of the N-KN−K elements, we perform the extractMin and add operations on the heap each of which take (\text{log}K)(logK) time.
Space Complexity:

O(N + K)O(N+K) where O(N)O(N) is used by the scores dictionary and O(K)O(K) is used by the heap.

*/
class Heap {
    constructor(comparator = (a, b) => a - b) {
      this.array = []
      this.comparator = (i1, i2) => {
        const value = comparator(this.array[i1], this.array[i2])
        if (Number.isNaN(value)) {
          throw new Error(
            `Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`
          )
        }
        return value
      }
    }
  
    /**
     * Insert element
     * @runtime O(log n)
     * @param {any} value
     */
    add(value) {
      this.array.push(value)
      this.bubbleUp()
    }
  
    /**
     * Retrieves, but does not remove, the head of this heap
     * @runtime O(1)
     */
    peek() {
      return this.array[0]
    }
  
    /**
     * Retrieves and removes the head of this heap, or returns null if this heap is empty.
     * @runtime O(log n)
     */
    remove(index = 0) {
      if (!this.size) return null
      this.swap(index, this.size - 1) // swap with last
      const value = this.array.pop() // remove element
      this.bubbleDown(index)
      return value
    }
  
    /**
     * Returns the number of elements in this collection.
     * @runtime O(1)
     */
    get size() {
      return this.array.length
    }
  
  
    /**
     * Move new element upwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    bubbleUp() {
      let index = this.size - 1
      const parent = (i) => Math.ceil(i / 2 - 1)
      while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
        this.swap(parent(index), index)
        index = parent(index)
      }
    }
  
    /**
     * After removal, moves element downwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    bubbleDown(index = 0) {
      let curr = index
      const left = (i) => 2 * i + 1
      const right = (i) => 2 * i + 2
      const getTopChild = (i) =>
        right(i) < this.size && this.comparator(left(i), right(i)) > 0
          ? right(i)
          : left(i)
  
      while (
        left(curr) < this.size &&
        this.comparator(curr, getTopChild(curr)) > 0
      ) {
        const next = getTopChild(curr)
        this.swap(curr, next)
        curr = next
      }
    }
  
    /**
     * Swap elements on the heap
     * @runtime O(1)
     * @param {number} i1 index 1
     * @param {number} i2 index 2
     */
    swap(i1, i2) {
      ;[this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]]
    }
  }
  
  class Leaderboard {
      constructor() {
          this.hash = new Map()
      }
      addScore(playerId, score) {
          this.hash.set(playerId,( this.hash.get(playerId) ?? 0) + score)
      }
      reset(playerId) {
          this.hash.delete(playerId)
      }
      top(k) {
          const minHeap = new Heap()
          for(const score of this.hash.values()) {
              if(minHeap.size < k) {
                  minHeap.add(score)
              } else if(minHeap.peek() < score) {
                  minHeap.remove()
                  minHeap.add(score)
              }
          }
          return minHeap.array.reduce((sum, curr) => sum + curr)
      }
  }
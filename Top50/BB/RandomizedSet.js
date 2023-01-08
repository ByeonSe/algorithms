/*

Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

 

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

Complexity Analysis

Time complexity. GetRandom is always \mathcal{O}(1)O(1). Insert and Delete both have \mathcal{O}(1)O(1) average time complexity, and \mathcal{O}(N)O(N) in the worst-case scenario when the operation exceeds the capacity of currently allocated array/hashmap and invokes space reallocation.

Space complexity: \mathcal{O}(N)O(N), to store N elements.
*/

var RandomizedSet = function() {
    this.map = {};
    this.values = [];
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] !== undefined) return false;
    this.map[val] = this.values.length;
    this.values.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] === undefined) return false;
    const idx = this.map[val];
    delete this.map[val];
    const last = this.values.pop();
    if (this.values.length === idx) return true;
    this.map[last] = idx;
    this.values[idx] = last;
    return true
};

RandomizedSet.prototype.getRandom = function() {
    if (this.values.length === 0) return null;
    return this.values[Math.floor(Math.random() * this.values.length)];
};
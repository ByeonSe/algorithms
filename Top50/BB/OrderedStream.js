/*
There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.

Input
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
Output
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

Explanation
// Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].
OrderedStream os = new OrderedStream(5);
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
// Concatentating all the chunks returned:
// [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
// The resulting order is the same as the order above.

*/

/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    /*
    the first input is 5
    nothing is poingting to 1 so we will have to return [], 
    second input at [3] but we are still pointing to 1
    thus we are retuning [];
    finally our third inpurt points to the [1] thus we return the value ['aaaaa']
    now we an move the pointer to 2
    
    pointer = 2 
    fourth is at 2 thus 'bbbbb' will be added to the return value 
    if there is somthing in the pointer move to the next pointer 
    pointer = 3
    there is somthing in the pointer which is ['ccccc']
    then move to the next one pointer = 4
    there is NOThing in the pointer which means that we would return both [bbbbb, ccccc]
    
    1. create hashtable, pointer, result array
    2. add the value to the hashtable
    3. while the hashtable has values add the value to the rsult arr

        then move the pointer 

    4. then return the result 
    
    */
        
        this.hashTable = new Array(n+1);
        this.pt = 1;
    };
    
    /** 
     * @param {number} idKey 
     * @param {string} value
     * @return {string[]}
     */
    OrderedStream.prototype.insert = function(idKey, value) {
        let result = [];
        this.hashTable[idKey] = value;
        
        while (this.hashTable[this.pt]) {
            result.push(this.hashTable[this.pt]);
            this.pt++
        }
    
        
        return result;
    
    };
    
    /** 
     * Your OrderedStream object will be instantiated and called as such:
     * var obj = new OrderedStream(n)
     * var param_1 = obj.insert(idKey,value)
     */
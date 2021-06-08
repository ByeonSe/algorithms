# Hash Tables 
- nearly every programming language has some sort of hash table data structure
- because of their speed, hash tables are very commonly used
- convert keys into valid array indices

## Good hash
- is fast (constant time)
- does not cluster outputs at specifiiic iindices, but distributes uniformly
- deterministic (dame input yields same output)

````javascript
function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }

    return total;
}
````

### prime numbers?

The prime numver in the hash is helpful in spreading out the keys more uniformly
it's also helpful if the array that you are putting values into has a priime length becuase it's significantly less coalision. 

### Dealing with coallisions 

Wiith separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index
- Separate Chaining 
    - wiith separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
- Linear Probing  
    - with linear probing, when we find a collision, we search through the array to find the next empty slot. 
    - unlike with separate chaining, thisi allows us to store a single key-value at each index

### set
- accepts a key and a value
- hashes the key
- stores the key-value pair in the hash table array via seperate chaining 

### get
- accepts a key
- hashes the key

### keys
- loops through the hash table array and returns an array of keys in the table

### values 
- loops through the hash table array and returns an array of values in the table 

````Javascript

class HashTable {
    constructor (size=53) {
        this.keyMap = new Array(size)
    }

    _hash (key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }

    return total;
    }

    set (key, value) {
    let index = this._hash(key);
    //if there is nothing
    if(!this.keyMap[index]) {
        this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value]);

    return index; 
    }

    get (key) {
        //hash the key to get index 
         let index = this._hash(key);
         if (this.keyMap[index]) {
             for (let i=0; i< this.keyMap[index].length; i++) {
                 if(this.keyMap[index][i][0] === key) {
                     //return the corresponding value (not the key)
                     return this.keyMap[index][i][1]
                 }
             }
         }
         return undefined;
    }
    keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
        //ensures that we are not getting duplicate
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
    }
    values (){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        //ensures that we are not getting duplicate
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

````
### BIG O (not including cryptographic hash)
- Insert: O(1)
- Delet: O(1)
- Access: O(1)

- how evenly distributes influences Big O 

### Recap 
- Hash tables are collections of key-value pairs
- hash tables can find values quickly given a key
- hash tables can add new key-values quickly
- hash tables store data in a large array, and work by hashing the keys
- a good hash should be fast, distrubute keys uniformly, and be deterministic (get exactly same output with the same input)
- separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index 
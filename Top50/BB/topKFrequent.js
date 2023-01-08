/*
 */


var topKFrequent = function(words, k) {
    // Build map of frequencies
  const map = words.reduce((acc, word) => {
    //logical or operation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
    let frequency = acc.get(word) || 1;
    acc.set(word, frequency++)
    return acc;
  }, new Map());
  console.log(map)
  // Sort by counter first from higher to lower. If counter is the same,
  // then sort by alphabetical order

  // note: [...map] becomes [ [ 'i', 1 ], [ 'love', 1 ], [ 'leetcode', 1 ], [ 'coding', 1 ] ]
  // like we could use Object.entries()https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  const ret = [...map].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  // Return array of k most frequent words
  // ret = [ [ 'coding', 1 ], [ 'i', 1 ], [ 'leetcode', 1 ], [ 'love', 1 ] ]
  return ret.slice(0, k).map(item => item[0]);
};


// other solution

var topKFrequent = function(words, k) {
    const mappings = {}
    for (let i = 0; i < words.length; i++) {
        mappings[words[i]] = mappings[words[i]] + 1 || 1
    }
    const sorted = Object.keys(mappings).sort((a, b) => { 
        if (mappings[b] === mappings[a]) { 
            return a > b ? 1 : -1 
        }
        return mappings[b] - mappings[a]
    })
    return sorted.slice(0, k)
};
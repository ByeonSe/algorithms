function numberOfItems(arr, item, num=0) {
    // Write the code that goes here
    //let num = 0; 
    // loop through the array and check every single array to find the num of occurances
    return cal(arr, item, num)
  }
  
  function cal(arr, item, num) {
    for (let i=0; i<arr.length ; i++) {
      let currentEl = arr[i];
      if (Array.isArray(currentEl)) {

        //call this cal function recursively if the element is array
        return cal(currentEl, item, num) 
      } else {
       if (currentEl == item) num += 1
      }
    }
    //return the number
    return num
  }
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
  ];
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));
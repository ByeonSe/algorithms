/*
*Linear Search 
- best case O(1)
- worst case O(n)

- JavaScript has linear search! O(n)
    - indexOf
    - includes
    - find
    - findIndex

- Binary Search 
    - Divide and conquer (it has to be sorted)
    - IT (array or value) HAS TO BE SORTED! 
    How to?
        - create a left pointer at the start of the array, and a right pointer at the end of the array
        - while the left pointer comes before the right pointer:
            - create a pointer in the middle 
            - if you find the value you wnat, return the index
            - if the value is too small, move the left pointer up
            - if the value is too large, move the right pointer down

        - if you never find the value, return -1 

- JavaScript sort()

https://www.toptal.com/developers/sorting-algorithms 

*** Quadratic or elementry sorting argorittms 

- Bubble sort 
    - a sorting algo where the largest value bubble up to the top 
    - could use the helper function to swap 
        function swap1 (arr, idx1, idx2) {
            let temp = arr[idx1]
            arr[idx1] = arr[idx2];
            arr[idx2] = temp 
        }

        function swap2 (arr, idx1, idx2) {
            ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx2]])
        }

    - Bubble sort O(n^2)
        - nested loop making n number of comparason 
        - good if the data is nearly sorted 

- Selction sort
    - similar to bubble sort, but instead of first placing large values into soorted position, 
    it places small values into sorted position 
    - store the first element as the smallest value you've seen sofar.
    - compare this item to the next item in the array until you find a smaller number
    - if a smaller num is found, designate that smaller number to be the new "minimun" and 
    continue until the end of the array.
    - if the "minimum" is not the value (index) you initially began with, swap the two values
    - Repeat this with the next element until the array is sorted 
    - ** to avoid infinate loop, shrink the array as we find the min and sort

    function selectionSort (arr) {
        const swap2 = (arr, idx1, idx2) => {
            ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx2]])
        }

        for (let i=0; i<arr.length; i++) {
            let lowest = i;
            for (let j=i+1; j<arr.length; j++) {
                if (arr[lowest] > arr[j]) {
                    lowest = j;
                }
            }
            if (i !== lowest) swap (arr, i, lowest)
        }

        return arr
    }

    - selection sort O(n^2)
     - as the length of the array grows, the number of the comparison grows roughly at the rate of n times n

- Insersion Sort 

    - builds up the sort by gradually creating a larget left half which is always sorted 
    - taking an item one at a time and inserting it in the correct spot

    How?
        - start by picking the second element in the array
        - now compare the second element with the one before it and swapt if necessary 
        - continue to the next element and if it is in the incorrect order, iterate through the sorted portion
         (i.e. the left side) to place the element in the correct place
        - repeat until the array is sorted
        - because we keep one side of it sorted and we insert things in the appropriate place, 
          it works well in a situation where data is coming in live or streaming. And you need to insert it at a moment's notice
    - time complexity O(n^2)

COMPARISON

if the data that's nearly sorted bubble sort, insertion sort performs really well
selection sort however does not work well 

Bubble sort, selection sort, and insertion sort are all roughly equivalent 
time complexity O(n^2)
Space O(1)

Insertion sort is good when you have a data coming in and need to resort things over and over, and main tain running sort, keep things upto date
all have average time complecities that are quadratic

they could perform better in smaller data set 


*** Intermediate sorting algorithms ***
* quick 
* merge
* radix

- Merge sort O(n log n) - split up and merge 
    - it's a combination of merging and sorting 
    - exploits the fact that arrays of 0 or 1 element are always sorted
    - works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

    - O(n+m)times and O(n+m) space and should not modify the parameters passed to it ??????
        - should visit each array one times 

    Pseudocode
    - create an empty array, take a loop at the smallest values in each input array
    - while there are still values we haven't looked at ...
        - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results
        and move on to the nect value in the fist array
        - if the value in the first array is larget than the value in the second array, push the value in the second array into our results and move on to the nect value in the second array
        - once we exhaust one array, push in all remaining values from the other array 

    // merge part 
        function mergeSort  (arr1, arr2) {
            let results = []
            let i = 0;
            let j = 0

            //until one of the array is done 

            whiel (i<arr1.length && j<arr2.length) {
                if(arr2[j] > arr1[i]) {
                    results.push(arr1[i])
                    i++
                } else {
                    results.push(arr2pj)
                    j++
                }
            }

            // if there are leftovers, just push them to the results array

            while (i<arr1<length) {
                result.push(arr1[i])
                j++
            } 
            while (j <arr2.length) {
                results.push(arr2[j])
                j++
            }
            return results
        }
    - breaking up part pseudocode
        - break up the array into halves until you have arrays that are empty or have one element
        - once you have smalleser sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
        - once the array has been merged back together, return the merged(and sored!) array
         
        // function break (arr) {

            if (array.length <= 1) return arr;

            //SPLIT 
            let mid = Math.floor(arr.length/2)
            let left = break(arr.slice(0, mid));
            let right = break(arr.slice(mid));
             
            return merge(left, right)
        }


        - Time O(n log n) 
            - split up until we get single array and merge 
            - n grows, we split log n times 
            - the number of times you split up grows at the rate of n 
            - O (logn) decompositions: number of decomposition. As n grows, the number of times we split grows at the rate of log n
            - O(n) comparisons per decomposition : we have n comparisons need to be made in total 
        - space (n)


- Quck sort 
    - like merge sort, ecploits the fact that arrays of 0 or 1 element are always sorted
    - works by selecting one element(called the "pivot") and finding the index where the pivot should end up in the sorted array
    - once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

    Pivot helper
        - in order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
        - givenan array, this helper function should designate an element as the pivot 
        - it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
        - the order of elements on either side of the pivot doesn't matter!
        - the helper should do this in place, that is, is should not create a new array
        - when complete, the helper should return the index of the pivot 
    Picking a pivot
        - the runtime of quick sort depends in part on how one selects the pivot 
        - ideally, the pivot should be shosen so that it's roughly the median value in the data set you are sorting 
    Pivot pseudocode
        - it will help to accept three arguments: an array, a start indec, and an end index (these can default to o and the array length minus 1, respectively)
        - grab the pivot from the start of the array
        - store the current pivot index in a variable (this will keep track of where the pivot should end uo)
        - loop through the array from the start until the end
            - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot indec

        - swap the staring element (i.e. the pivot) with the pivot index
        - return the pivot index

        function pivot (arr, start=0, end = arr.length -1) {
            const swap = (arr, idx1, idx2) => {
                [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
            }
            // assuming the pivot is always the first element 
            let pivot = arr[start]
            let swapIdx = start;

            for (let i = start +1; i<= end; i++) {
                if (pivot > arr[i]) {
                    swapIdx++
                    swap(arr, swapIdx, i);
                }
            }

            //swap the starting element with the pivot index
      
            swap (arr, start, swapIdx);
            return swapIdx
        }

 */
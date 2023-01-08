/**
 Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.


Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

 */

var findKthLargest = function(nums, k) {
    let kth = nums.length -k;
    return quickSelect(nums, kth, 0, nums.length-1)
};

function quickSelect (nums, kth, l, r) {
    //devide
    let pivot = nums[r];
    let pointer = l;
    
    for (let i=pointer; i<r; i++) {
        //all the elements less than or equal to pivot will be side on the left
        if (nums[i] <= pivot) { 
            swap(nums, i, pointer)
            //shift the pointer
            pointer+=1;
        }
    }
    //pivot will placed in its correct position 
    swap(nums, pointer, r);
    
    //conquer
    // if the last idx of the pointer > kth then we need to search the left side of the pointer
    // we want to search where kth is 
    if (pointer>kth) {
        //kth is smaller so search the left side of the pointer 
        return quickSelect(nums, kth, l, pointer-1);
    } else if (pointer<kth) {
        // if the last idx of the pointer < kth then search the right side
        return quickSelect(nums, kth, pointer+1, r);
    }
    return nums[pointer]  
}

function swap (arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
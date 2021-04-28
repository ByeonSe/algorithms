/*
write a function that takes in a non-empty array of intergers that are sorted in ascending order and returns a new array of the same length with the squares of the origial intergers also sorted in ascending order

e.g. input array = [-5, -4, 1, 2,3 ]
result = [1, 4, 9, 16, 25] 
APPROACH: 
The key is to notice the possible presence of negative numbers
create two pointers, one for smallest and another one for the largest 
square the input array and place them from the right to left in the return array

*/
function sortedSquaredArray(array) {
 
// index of the smallest number in the sorted array would be 0th 
 let smallest = 0;
// index of the largest number in the sorted array would be the last 
 let largest = array.length-1; 
	
 let squaredArray = []
 
 //inserting the numbers from the left(larger Number) to the right (smaller number)
 // we are only doing this nth times 
	for (let idx= array.length -1; idx >=0; idx--) {
		//get the absolute values of the smallest numbers and the largest number
		let absSmall = Math.abs(array[smallest])
		let absLarge = Math.abs(array[largest])
		
		// compare the two numbers. If the number that left poiter is pointing is bigger then fill out the array. 
		if (absSmall > absLarge) {
			squaredArray[idx] = (absSmall * absSmall);
			//move the smallest pointer to the right 
			smallest++;
		} else {
			squaredArray[idx] = (absLarge * absLarge);
			//move the largest pointer to the left 
			largest--;
		}
	}
	
	return squaredArray;
}


/*
n is the length of the input array.
Time complexity O(n)
Space complexity O(n)
*/
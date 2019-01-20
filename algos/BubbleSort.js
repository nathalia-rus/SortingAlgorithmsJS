/* BUBBLE

PROS/CONS 

Sorting takes a long time. Inefficient even on small inputs when compared 
to insertion sort.
It’s best case run time is O(n), or linear, which occurs if the input 
array is already sorted. On average, bubble sort’s run time is still quadratic (On^2).

LOGIC 

Every pair of ADJACENT values is compared. The two values swap positions if the 
first value is greater than the second.
That way, during each pass through the array, the largest value “bubbles up” to 
the top, and after each pass the elements furthest to the right are in the 
sorted order.
There is however a final pass through the array to ensure that no other swaps 
are necessary, before finally returning the array.

STEP-BY-STEP CODE V1

1. Obviously, we loop / iterate through the entire array, and a nested loop will have 
j compared to j+1, the adjancent value. It will run as long as necessary,
as it's a nested loop: as long as i haven't reached the totality of the 
rounds (arr.length-1 time). 
2. Whenever a swap is needed, the bigger value which is before will be saved, as its 
index will be replaced with the smaller value, and copied onto its next at its place. 
Check ES6 syntax trick to make it faster though.
3. At the very end, when the i has reached arr.length-1, return the sorted array. 

( SEE STEP-BY-STEP CODE V2 - shorter + CODE V2 - SHORTER AFTERWARDS )

CODE V1
*/

let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
};


/* V2 - shorter 

STEP-BY-STEP CODE V2 SHORTER 

The problem with V1 is that it's not very efficient: if the array is sorted,
it still goes through it more than once. Let's check a condition with a DO... WHILE,
so it will check at least once whether all is well sorted. If it is, just once. 
Indeed, let's keep track of a variable “swapped”, initially set to false.
During each iteration, if values are swapped, then the “swapped” variable is 
set to true.

CODE V2 - SHORTER
*/

let bubbleSort2 = (arr) => {
  let swapped;
  do {
    swapped = false; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}








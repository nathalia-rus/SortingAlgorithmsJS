/*
2. SELECTION SORT 

a. PROS / CONS

--> Easy to implement
Uses fewer operations, so where data movement is costly, it is more economical. 
The Selection Sort best and worst case scenarios both follow the time complexity 
format O(n^2) as the sorting operation involves two nested loops. 
The size of the array again affects the performance.

b. LOGIC

In the Selection Sort algorithm, the array is sorted into two sections: a sorted selection 
and an unsorted selection. The operation involves identifying the minimum element in an 
unsorted array and placing it into a sorted one. This process is done repeatedly until 
the array is completely sorted.

c. CODE STEP BY STEP

1. Think of what you'll need: an index where the current minimum is (let minIndex), a temporary 
variable to save the value to be swapped (let temp). Optional: save some typing by let len now.
2. Obviously LOOP through the entire array with i, where at the start, minIndex will be i. 
3. Nested LOOP: use the iteration of j, comparing the i value with the value of the element which 
comes after ( j = i+1). 
4. IF the value which comes after is smaller than the value at the current minimum Index, therefore,
the minimum Index is actually j. 
5. The iteration will go on: it will check whether the one after is smaller than the current min index, 
and at the end of the iteration of j until index i, we'll have the smallest value found through this round.
6. Once the loop has reached the end (important: it got the minimum value from all of the rest), 
the swap occurs: the value at arr[i] is saved through the var TEMP, is replaced by the value at the 
miniumum index arr[minIndex], and the value at the (ex) mininmum index is now replaced by the temp stored. 
It's a simple swap. Just remember that the index isn't the value,it's the cursor. Can be less confusing to see 
index as cursor. If the first loop hasn't been finished yet, it will run again and the nested loop too, 
with i and j indexes advanced, and the very right part being sorted. 
7. Once the whole array is sorted -all the loops have been run- , return the array. 

d. CODE
*/

function selectionSort (array) {
  let minIndex, temp; 
  for (let i = 0; i < array.length; i++) {
    minIndex = i // before that, supposedly sorted 
    for (let j = i+1; j < array.length; j++) {
      if ( arr[j] < arr[i]) {
        minIndex = j;
      }
    }
    temp = arr[i]; 
    arr[i] = arr[minIndex]; 
    arr[minIndex] = temp;
  }
  return array
}

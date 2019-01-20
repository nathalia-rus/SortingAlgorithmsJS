
/* INSERTION SORT

PROS/CONS 

This one shouldn't be used for large lists: it runs in O(n²), or quadratic, time in the worst case. 
Because of insertion sort’s low hidden constant value, however, it usually outperforms more advanced algorithms 
such as quick sort or merge sort on smaller lists.
Its best case run time is O(n), or linear, if the input array is already sorted.

LOGIC

Insertion sort is  adaptive: it works well with arrays that are already partially or fully sorted: it reduces its 
run time to O(nk), where each element in the list is no more than k elements away from it’s sorted position.
In an insertion sort, the first element in the array is considered as sorted, even if it is an unsorted array. 
In an insertion sort, each element in the array is checked with the previous elements, resulting in a growing 
sorted output list. With each iteration, the sorting algorithm removes one element at a time and finds the 
appropriate location within the sorted array and inserts it there. The iteration continues until the whole list is sorted.

STEP BY STEP CODE

1. Obviously you'll LOOP through the entire array, starting from the second element (1). Have a NESTED LOOP where j will iterates from the first element, 0, to index i and COMPARE arr[j] with arr[i]. 
2. IF arr[i] which comes after is SMALLER < than arr[j] which is before, it's unsorted: 
3. you copy in a TEMP variable the value to be inserted somewhere else by popping it through SPLICE wih ARGS of index i, and 1 -the number of element to be popped. 
4. you changed the array by removing the smaller value to be inserted somewhere else: that somewhere else is at where the index of j reached then: suding SPLICE again, with the ARGS of index j (where to be inserted), 0 (you don't remove anything), and temp[Ø] -the value we had copied.
5. i increments, j loop starts again comparing from 0 up until i, and so on. 
6. return the sorted array! 
*/

function insertionSort (array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr.splice(i, 1);
        arr.splice(j, 0, temp[0]);
      }
    }
  }
  return array;
}



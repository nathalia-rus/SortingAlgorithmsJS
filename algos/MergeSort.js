/* MERGE 

PROS/CONS 

Worst case , best case, average case time complexity is : o(n log(n)) 
which makes it very efficient . 
Marginally slower than quick sort in practise.

LOGIC 

==> divide and conquer type algorithm.
 It divides input array in two halves, calls itself for the two 
 halves and then merges the two sorted halves.
TWO FUNCTIONS are needed: the merge() func, used for merging two halves.
And the MergeSort() func, which recursively calls itself to divide the array 
until size becomes one. 


STEP-BY-STEP CODE

Mergesort: (input)
-If length < 2 return
-Mergesort first half 
-Mergesort second half
-return Merge (first half, second half)
Merge:
-Iterate through both arrays and fill new array with smaller value each time 
-Return new array

CODE
*/
